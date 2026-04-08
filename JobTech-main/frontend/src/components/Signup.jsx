import { useState } from 'react';
import { Database, User, Lock, ArrowRight } from 'lucide-react';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    // Ancaq alfanumerik simvollara, yəni ancaq hərf və rəqəmlərə icazə verilsin
    if (/[^a-zA-Z0-9]/.test(value)) {
      setError('Password can only contain letters and numbers.');
    } else {
      setError('');
      setPassword(value);
    }
  };

  const handleUsernameChange = (e) => {
    // Prevent default bad chars? We can just set it. The prompt specifically asked alphanumeric for password.
    setUsername(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }
    
    if (/[^a-zA-Z0-9]/.test(password)) {
      setError('Password must be alphanumeric.');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || 'Signup failed');
      }

      // Success
      setLoading(false);
      onSignup();
      
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="login-container" style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1,
          background: 'radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 40%), radial-gradient(circle at bottom left, rgba(139,92,246,0.15), transparent 40%)'
      }}></div>
      
      <div className="glass-card animate-fade-in" style={{
        maxWidth: '420px',
        width: '100%',
        padding: '3rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative glowing orbs */}
        <div style={{
          position: 'absolute', top: '-50px', left: '-50px', width: '150px', height: '150px', 
          background: 'var(--accent-primary)', filter: 'blur(60px)', opacity: '0.4', borderRadius: '50%',
          pointerEvents: 'none'
        }}></div>
        <div style={{
          position: 'absolute', bottom: '-50px', right: '-50px', width: '150px', height: '150px', 
          background: 'var(--accent-secondary)', filter: 'blur(60px)', opacity: '0.4', borderRadius: '50%',
          pointerEvents: 'none'
        }}></div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', position: 'relative' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
            padding: '1rem',
            borderRadius: '1rem',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--shadow-neon)'
          }}>
            <Database size={42} style={{ color: 'var(--accent-primary)' }} />
          </div>
        </div>
        
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', borderBottom: 'none', color: 'var(--text-primary)' }}>
          Create an <span style={{ color: 'var(--accent-secondary)' }}>Account</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          Sign up to explore the connected market.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ position: 'relative', textAlign: 'left' }}>
            <User size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input 
              type="text" 
              className="input-field" 
              placeholder="Username" 
              value={username}
              onChange={handleUsernameChange}
              style={{ paddingLeft: '3rem', background: 'rgba(18, 25, 39, 0.6)' }}
              required 
            />
          </div>
          <div style={{ position: 'relative', textAlign: 'left' }}>
            <Lock size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input 
              type="password" 
              className="input-field" 
              placeholder="Password" 
              value={password}
              onChange={handlePasswordChange}
              style={{ paddingLeft: '3rem', background: 'rgba(18, 25, 39, 0.6)' }}
              required 
            />
          </div>

          {error && (
            <div style={{ color: 'var(--danger)', fontSize: '0.9rem', textAlign: 'left' }}>
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="btn" 
            style={{ 
              width: '100%', 
              justifyContent: 'center', 
              marginTop: '1rem',
              padding: '0.875rem',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}
            disabled={loading}
          >
            {loading ? (
              <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⟳</span>
            ) : (
              <>
                Sign up <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Signup;
