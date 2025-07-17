import { useState } from 'react';
import supabase from '../lib/supabaseClient';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else alert('Logged in!');
  }

  return (
    <form onSubmit={handleLogin} style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button type="submit">Login</button>
    </form>
  );
}
