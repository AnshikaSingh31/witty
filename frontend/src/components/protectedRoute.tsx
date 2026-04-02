import { Navigate } from "react-router-dom";
import type{ Role } from "../types";

interface Props{
    children: React.ReactNode
    allowedRole: Role
}

function ProtectedRoute({ children ,allowedRole }:Props){
    const stored = localStorage.getItem('user')

    if(!stored){
        return <Navigate to ="/login" />
    }

    return<>{children}</>
}

export default ProtectedRoute