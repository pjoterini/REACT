import { useEffect, useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const { signup, error, isLoading } = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <h3>Sign up</h3>
      <label htmlFor="">Email:</label>
      <input
        className="bg-blue-900 rounded-full outline-none border-solid border-2 border-cyan-200 py-1 px-4 focus:border-sky-500"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="">Password:</label>
      <input
        className="bg-blue-900 rounded-full outline-none border-solid border-2 border-cyan-200 py-1 px-4 focus:border-sky-500"
        type="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoading}>Sign up</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Signup;
