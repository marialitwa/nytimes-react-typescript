// import React from 'react'

import { useState } from "react";

type Props = {
    submitTitle: string,
    submit: (email: string) => void
}

function AuthForm( { submitTitle, submit }: Props) {

    const [email, setEmail] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      
      if (!email) return alert("Email must be included")
      submit(email);
    }}>
        <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            />
        <button type="submit">{submitTitle}</button>    


    </form>
  )
}

export default AuthForm