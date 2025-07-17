// Force rebuild

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '40vh' }}>
      <h1>Welcome to Captiva Booking!</h1>
      <p>This is the real website.</p>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/signup">
          <button style={{ marginRight: '1rem', padding: '0.5rem 1rem' }}>
            Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button style={{ padding: '0.5rem 1rem' }}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
