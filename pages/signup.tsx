import { useState } from 'react';
import supabase from '../lib/supabaseClient';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert('Check your email to confirm signup!');
  }

  return (
    <form onSubmit={handleSignup} style={{ padding: '2rem' }}>
      <h2>Sign Up</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button type="submit">Sign Up</button>
    </form>
  );
}
