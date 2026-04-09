import { useState } from 'react';
import StudentDashboard from './components/StudentDashboard';
import MarketDashboard from './components/MarketDashboard';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import LandingDashboard from './components/LandingDashboard';
import { Database, UserCheck, BarChart2, Globe, LogOut, FileText, BrainCircuit, BookOpen, Map } from 'lucide-react';
import './index.css';

function App() {
  const [authMode, setAuthMode] = useState('landing');
  const [activeTab, setActiveTab] = useState('student');

  return (
    <div className="app-container hover:animate-fade-in" style={{ animation: 'fadeIn 0.5s ease-out', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', alignItems: 'center' }}>
        <div className="logo" onClick={() => setAuthMode(authMode === 'authenticated' ? 'authenticated' : 'landing')} style={{ cursor: 'pointer' }}>
          <Database size={28} className="text-accent-primary" />
          JobTech
        </div>

        {authMode === 'authenticated' && (
          <div className="nav-links">
            <div 
              className={`nav-item ${activeTab === 'student' ? 'active' : ''}`}
              onClick={() => setActiveTab('student')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <UserCheck size={18} /> Student Connect
            </div>
            <div 
              className={`nav-item ${activeTab === 'market' ? 'active' : ''}`}
              onClick={() => setActiveTab('market')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Globe size={18} /> Market Pulse
            </div>
            <div 
              className={`nav-item ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => setActiveTab('admin')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <BarChart2 size={18} /> Institutional GAP
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {authMode === 'authenticated' ? (
            <>
              <button className="btn" style={{ background: 'var(--glass-border)', color: 'var(--text-primary)', padding: '0.5rem 1rem' }}>
                Hackathon MVP
              </button>
              <button 
                onClick={() => setAuthMode('landing')}
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease'
                }}
                title="Log out"
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--danger)'; e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <LogOut size={20} />
              </button>
            </>
          ) : (
            <>
              <button 
                className="btn sign-in-btn" 
                onClick={() => setAuthMode('login')}
                style={{ background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--text-primary)', padding: '0.5rem 1rem' }}
              >
                Sign In
              </button>
              <button 
                className="btn sign-up-btn" 
                onClick={() => setAuthMode('signup')}
                style={{ background: 'var(--accent-primary)', color: 'white', padding: '0.5rem 1rem' }}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      <main className="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {authMode === 'landing' && <LandingDashboard onNavigate={setAuthMode} />}
        {authMode === 'login' && <Login onLogin={() => setAuthMode('authenticated')} />}
        {authMode === 'signup' && <Signup onSignup={() => setAuthMode('login')} />}
        
        {authMode === 'authenticated' && activeTab === 'student' && <StudentDashboard />}
        {authMode === 'authenticated' && activeTab === 'market' && <MarketDashboard />}
        {authMode === 'authenticated' && activeTab === 'admin' && <AdminDashboard />}
      </main>
    </div>
  );
}

export default App;
