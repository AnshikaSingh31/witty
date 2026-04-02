import { useParams,useNavigate } from "react-router-dom";
import {assignments, notes, subjects} from '../../../data/mockData'
import useAuth from "../../../hooks/useAuth";

function SubjectDetail(){
    const {id} = useParams()
    const navigate = useNavigate()
    const {user, logout} =useAuth()

    const subject = subjects.find((s)=>s.id===id)
    const subjectAssignments = assignments.filter((a)=> a.subjectId=== id)
    const subjectNotes = notes.filter((n)=>n.subjectId ===id)

    const getDeadlineStatus = (deadline: string) =>{
        const now = new Date()
        const due = new Date(deadline)
        const diff = due.getTime() - now.getTime()
        const hours = diff/(1000*60*60)

        if(hours <0) return {label:'Overdue', color:'bg-red-500/10 text-red-400 border-red-500/20'}
        if(hours <24) return {label: 'Due soon', color:'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}
        return{label:'Upcoming', color:'bg-green-500/10 text-green-400 border-green-500/20'}
    }

    return(
        <div className="min-h-screen bg-gray-950">

            {/*navbar */}
            <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                <h1 className="text-white font-bold text-xl">
                    <span className="text-purple-400">100x</span>Learn
                </h1>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">Hiee, {user?.name}</span>
                    <button onClick={logout}
                        className="text-gray-400 hover:text-white text-sm transition-colors">
                            Logout
                        </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-10">

                {/*header */}
                <div className="flex-items-center justify-between mb-8">
                    <div>
                        <button onClick={()=> navigate('/subjects')}
                            className="text-gray-400 hover:text-white text-sm mb-2 block transition-colors">
                                back to subjects
                            </button>
                            <h2 className="text-2xl font-bold text-white">{subject?.name}</h2>
                    </div>
                    <button 
                       onClick={()=> navigate('/chat/${id}')}
                       className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                        24/7 AI Support
                       </button>
                </div>

                {/*Assignments*/}
                <h3 className="text-white font-bold text-lg mb-4">Assignments</h3>
                <div className="flex flex-col gap-4 mb-10">
                    {subjectAssignments.map((assignment)=>{
                        const status = getDeadlineStatus(assignment.deadline)
                        return (
                            <div
                               key={assignment.id}
                               className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="text-white font-bold">{assignment.title}</h4>
                                    <span className={`text-xs border px-2 py-1 rounded-full ${status.color}`}>
                                        {status.label}
                                    </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{assignment.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-xs">
                                    Due: {assignment.deadline}.{assignment.marks} marks
                                </span>
                                <a
                                   href={assignment.notionlink}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                                 >

                                 Open in notion 
                                 </a>
                            </div> 
                        </div>
                                
                        )
                    })}
                </div>

                {/*notes */}
                <h3 className="text-white font-bold text-lg mb-4">Notes</h3>
                <div className="flex flex-col gap-4">
                    {subjectNotes.map((note) =>(
                        <div
                           key={note.id}
                           className="bg-gray-900 border-gray-800 rounded-2xl p- flex items-center justify-between">
                            <h4 className="text-white font-medium">{note.title}</h4>

                            <a
                               href={note.notionLink}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                            >
                                Open in notion
                            </a>
                        </div>    
                    ))}
                </div>

            </div>
        </div>
    )
}

export default SubjectDetail