import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import {users} from "../../data/mockdata"
import type {User} from '../../types/index'

function Register(){
    const navigate = useNavigate()
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [error,setError] =useState('')

    const handleRegister = () =>{
        if(!name || !email || !password){
            setError('Please fill in all fields')
            return
        }
        if(password.length<6){
            setError('Password must be at least 6 characters')
            return 
        }

        const existingUser = users.find((u) =>u.email===email)
        if(existingUser){
            setError('Email already exists')
            return
        }

        const newUser :User ={
            id: String(users.length +1),
            name,
            email,
            password,
            role:"student"
        }

        users.push(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
        navigate('/subjects')
    }
    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
                <p className="text-gray-400 mb-8">Join 100X learn </p>
                {error && (
                    <div className="br-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg p-3 mb-6">{error}</div>
                )}

                <div className="mb-4">
                    <label className="text-gray-400 text-sm mb-1 block">Name</label>
                    <input
                       type ="text"
                       value = {name}
                       onChange={(e) => setName(e.target.value)}
                       placeholder="Your full name"
                       className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"/>
                </div>

                <div className="mb-4">
                    <label className="text-gray-400 text-sm mb-1 block">Email</label>
                    <input
                       type="email"
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                       placeholder="you100x@gmail.com"
                       className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"/>
                </div>

                <div className="mb-6">
                    <label className="text-gray-400 text-sm mb-1 block">Password</label>
                    <input
                       type="password"
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                       placeholder="********"
                       className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"/>
                </div>

                <button
                   onClick={handleRegister}
                   className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg py-3 transition-colors">
                    Create Account
                </button>

                <p className="text-gray-500 text-sm text-center mt-6">
                    Already have an Account?{' '}
                    <Link to="/login" className="text-purple-400 hover:text-purple-300">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Register

