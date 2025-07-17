import supabase from '../lib/supabaseClient';

export default function Login() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Login with Google</h2>
      <p>You must log in using your @captivaco.com email</p>
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Continue with Google
      </button>
    </div>
  );
}
