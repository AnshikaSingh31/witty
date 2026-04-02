import { useEffect,useState } from "react";
import type{User} from "../types"

function useAuth(){
    const [user,setUser] = useState< User|null>(null)

    useEffect(()=>{
        const stored = localStorage.getItem('user')
        if(stored){
            setUser(JSON.parse(stored))
        }
    },[])

    const logout = () =>{
        localStorage.removeItem('user')
        setUser(null)
        window.location.href ='/login'
    }

    return {user,logout}
}

export default useAuth