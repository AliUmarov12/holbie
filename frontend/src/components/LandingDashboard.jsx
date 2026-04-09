import { useEffect } from 'react';
import { FileText, BrainCircuit, BookOpen, Map, ArrowRight } from 'lucide-react';

const LandingDashboard = ({ onNavigate }) => {

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ paddingBottom: '6rem', width: '100%' }}>
      {/* Hero Section */}
      <section style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '2rem', position: 'relative' }}>
          <div style={{
            background: 'radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 40%), radial-gradient(circle at bottom left, rgba(139,92,246,0.15), transparent 40%)',
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1
          }}></div>
          <h1 className="reveal" style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Welcome to JobTech</h1>
          <p className="reveal" style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '4rem', transitionDelay: '0.2s' }}>
             The premier Digital Skills to Jobs Intelligence Platform connecting students with market demands. Scroll down to discover our features.
          </p>
          <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <div style={{ width: '30px', height: '50px', border: '2px solid var(--text-secondary)', borderRadius: '15px', position: 'relative', margin: '0 auto', opacity: 0.7 }}>
                 <div style={{ width: '4px', height: '10px', background: 'var(--accent-primary)', borderRadius: '2px', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', animation: 'scrollDown 2s infinite' }}></div>
              </div>
          </div>
      </section>

      {/* Constraints for sections */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15vh', alignItems: 'center', padding: '0 2rem' }}>
      
        {/* Feature 1 */}
        <section className="reveal" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '4rem' }}>
           <div className="glass-card" style={{ flex: 1, padding: '3rem', borderRadius: '1.5rem' }}>
             <div style={{ background: 'rgba(59,130,246,0.2)', padding: '1rem', borderRadius: '1rem', width: 'fit-content', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
               <FileText size={40} />
             </div>
             <h2 style={{ fontSize: '2rem', borderBottom: 'none' }}>AI Resume Parsing</h2>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>
               Automatically parses student resumes (PDF) to extract skills and instantly calculates market fit.
             </p>
           </div>
           <div style={{ flex: 1, display: 'none' }} className="placeholder"></div>
        </section>

        {/* Feature 2 */}
        <section className="reveal" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'row-reverse' }}>
           <div className="glass-card" style={{ flex: 1, padding: '3rem', borderRadius: '1.5rem' }}>
             <div style={{ background: 'rgba(139,92,246,0.2)', padding: '1rem', borderRadius: '1rem', width: 'fit-content', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>
               <BrainCircuit size={40} />
             </div>
             <h2 style={{ fontSize: '2rem', borderBottom: 'none' }}>AI Skill Gap Analysis</h2>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>
               Analyzes current capabilities and precisely identifies the exact skill gaps and learning requirements for the chosen role.
             </p>
           </div>
           <div style={{ flex: 1, display: 'none' }} className="placeholder"></div>
        </section>

        {/* Feature 3 */}
        <section className="reveal" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '4rem' }}>
           <div className="glass-card" style={{ flex: 1, padding: '3rem', borderRadius: '1.5rem' }}>
             <div style={{ background: 'rgba(16,185,129,0.2)', padding: '1rem', borderRadius: '1rem', width: 'fit-content', color: '#10b981', marginBottom: '1.5rem' }}>
               <BookOpen size={40} />
             </div>
             <h2 style={{ fontSize: '2rem', borderBottom: 'none' }}>Course Connect</h2>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>
               Automatically matches students with the most relevant courses to effectively develop their missing specific skills.
             </p>
           </div>
           <div style={{ flex: 1, display: 'none' }} className="placeholder"></div>
        </section>

        {/* Feature 4 */}
        <section className="reveal" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'row-reverse' }}>
           <div className="glass-card" style={{ flex: 1, padding: '3rem', borderRadius: '1.5rem' }}>
             <div style={{ background: 'rgba(245,158,11,0.2)', padding: '1rem', borderRadius: '1rem', width: 'fit-content', color: '#f59e0b', marginBottom: '1.5rem' }}>
               <Map size={40} />
             </div>
             <h2 style={{ fontSize: '2rem', borderBottom: 'none' }}>Recommended Path</h2>
             <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>
               Provides a step-by-step visual learning roadmap to master the desired field and acquire all necessary skills.
             </p>
           </div>
           <div style={{ flex: 1, display: 'none' }} className="placeholder"></div>
        </section>

        {/* Call to Action */}
        <section className="reveal" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>
            <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(30, 41, 59, 0.4)', borderRadius: '2rem', width: '100%' }}>
               <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: 'none' }}>Ready to bridge the gap?</h2>
               <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                 <button className="btn" onClick={() => onNavigate('signup')} style={{ padding: '1rem 2.5rem', fontSize: '1.2rem' }}>Get Started <ArrowRight size={20}/></button>
                 <button className="btn" onClick={() => onNavigate('login')} style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', background: 'transparent', border: '1px solid var(--glass-border)' }}>Sign In</button>
               </div>
            </div>
        </section>

      </div>

      <style>{`
        @keyframes scrollDown {
            0% { transform: translate(-50%, 0); opacity: 1; }
            100% { transform: translate(-50%, 20px); opacity: 0; }
        }
        @media (min-width: 768px) {
            .placeholder { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default LandingDashboard;
