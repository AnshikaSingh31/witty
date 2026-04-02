import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import {users} from "../data/mockData"
function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin =() => {
        const user = users.find(
            (users) => users.email === email && users.password=== password
        )

        if (!user){
            setError('Invalid email & password')
            return
        }

        localStorage.setItem('user', JSON.stringify(user))

        if(user.role === 'admin'){
            navigate('/admin')        
        }
        else{
            navigate('/subjects')
        }
    }

    return(
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Welcome back 
                </h1>
                <p className="text-gray-400 mb-8">Login to 100x Learn</p>
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg p-3 mb-6">
                        {error}
                    </div>
                )}

                <div className="mb-4">
                    <label className="text-gray-400 text-sm mb-1 block">Email</label>
                    <input 
                       type="email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                       placeholder="you@100xlearn.com"
                       className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"/>  
                </div>

                <div className="mb-6">
                    <label className="text-gray-400 text-sm mb-1 block">Password</label>
                    <input
                       type="password"
                       value={password}
                       onChange={(e) =>setPassword(e.target.value)}
                       placeholder="********"
                       className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500"/>
                </div>

                <button
                    onClick={handleLogin}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg py-3 transition-colors">
                        Login
                </button>

                <p className="text-gray-500 text-sm text-center mt-6">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-purple-400 hover:text-purple-300">Register</Link>
                </p>

            </div>
        </div>
    )
}

export default Login