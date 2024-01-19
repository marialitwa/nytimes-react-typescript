import { PropsWithChildren, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom";


export default function ProtectedRoute({ children }: PropsWithChildren) {
  
    const { user, loading } = useContext(AuthContext);

    // if (!user) 
    // return (
    //     <div>Restriced access - please log in</div>
    // )

    if (!user && !loading) return (   
        <Navigate to={"/auth"} />
    )

    if (!user && loading) return (
        <div><h1>Loading...</h1></div>
    )
    
    return (children)
}

