import { PropsWithChildren, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom";


export default function ProtectedRoute({ children }: PropsWithChildren) {
  
    const { user } = useContext(AuthContext);

    // if (!user) 
    // return (
    //     <div>Restriced access - please log in</div>
    // )

    if (!user) return (   
        <Navigate to={"/auth"} />
    )
    
    return (children)
}

