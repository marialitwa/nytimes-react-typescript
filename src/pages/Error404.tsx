// import React from 'react'
// import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Error404() {

  const navigate = useNavigate();

  return (
    <>
        <h1>Error Page 404</h1>
        {/* <Link to={"/"}>Go to Homepage</Link> */}
        {/* useNavigate() Hook as option for Link to Homepage as example above */}
        <button onClick={() => navigate("/", { replace: true })}>Go to Homepage</button>
    </>
  )
}

