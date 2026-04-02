import { useNavigate } from "react-router-dom";
import { subjects} from "../../../data/mockData";
import useAuth from "../../../hooks/useAuth";

function Subjects(){
    const navigate = useNavigate()
    const {user ,logout} = useAuth()
    return (
        <div className="min-h-screen bg-gray-950">

            {/*Navbar */}
            <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                <h1 className="text-white font-bold text-xl">
                <span className="text-gray-400 text-sm">100x</span> Learn 
                </h1>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">Hiee, {user?.name}</span>
                    <button onClick={logout}
                        className="text-gray-400 hover:text-white text-sm transition-colors">Logout</button>
                </div>
                
            </div>
        

        {/*Content */}
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h2 className="text-2xl font bold text-white mb-2">Choose a Subject</h2>
            <p className="text-gray-400 mb-8">Select a subject to view assignments and notes</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subjects.map((subject)=> (
                    <div
                       key={subject.id}
                       onClick={()=> navigate('/subject/${subject.id}')}
                       className="bg-gray-900 border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-purple-500 transition-all">

                        <h3 className="text-white text-xl font-bold mb-2">{subject.name}</h3>
                        <p className="text-gray-400 text-sm ">Click to view assignment and notes </p>
                    </div>    
                ))}
            </div>
        </div>
        </div>
        
    )
}

export default Subjects