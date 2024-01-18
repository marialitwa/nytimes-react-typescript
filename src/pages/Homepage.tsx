// import React from 'react'

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { app } from "../firebase"

 
export default function Homepage() {
  // const context = useContext(AuthContext)
  // console.log(context)
  // Destructering code in comments above
  const { user, login } = useContext(AuthContext)
  console.log(user, login)

  console.log("app", app);

  return (
    <div>
        <h1>This is the Homepage</h1>
        <h2>The New York Times Top Stories</h2>
    </div>
  )
}


