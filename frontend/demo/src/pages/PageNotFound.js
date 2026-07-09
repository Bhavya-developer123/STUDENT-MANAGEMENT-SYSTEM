import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <span style={styles.statusCode}>404</span>
        <h1 style={styles.heading}>Page Not Found</h1>
        <p style={styles.text}>
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        <Link to="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

// Simple, clean inline styling
const styles = {
  container: { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', padding: '0 20px', fontFamily: 'system-ui, sans-serif' },
  content: { maxWidth: '400px' },
  statusCode: { fontSize: '6rem', fontWeight: '800', color: '#4f46e5', lineHeight: '1' },
  heading: { fontSize: '2rem', fontWeight: '700', color: '#111827', marginTop: '10px' },
  text: { color: '#6b7280', marginTop: '15px', marginBottom: '25px', lineHeight: '1.5' },
  button: { display: 'inline-block', backgroundColor: '#4f46e5', color: '#fff', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontWeight: '500', transition: 'background 0.2s' }
};