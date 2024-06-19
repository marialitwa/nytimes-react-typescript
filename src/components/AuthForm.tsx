import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

type Props = {
  submitTitle: string;
  submit: (email: string, password: string) => void;
};

export default function AuthForm({ submitTitle, submit }: Props) {
  const { loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!email || !password) return alert("All fields must be included");
        submit(email, password);
      }}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button type="submit">{loading ? "Loading ..." : submitTitle}</button>
    </form>
  );
}
