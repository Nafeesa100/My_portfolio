import certSB from '../assets/sb.jpeg'
import certSQL from '../assets/sql.jpeg'
import certWeb from '../assets/web.jpeg'
import img1 from '../assets/image.png'
import medal from '../assets/img2.png'
import internshipCert from '../assets/internship-cert.png'
import './Achievements.css'

const experience = [
  {
    icon: '💼',
    title: 'AI Automation Intern',
    sub: 'DaFi Labs · EmpRadar.ai · EmraSkills  |  Jul 22 – Aug 27, 2026',
    desc: 'Successfully completed the AI Automation Internship Program 2026 with dedication, professionalism, and commitment. Gained practical exposure to AI automation and hands-on experience with n8n workflows, AI agents, LLM integration, APIs, webhooks, conversation memory, Gmail and Google Sheets automation, Next.js integration, and Vercel deployment.',
  },
]

const certificates = [
  {
    icon: '📜',
    title: 'AI Automation Internship Certificate',
    sub: 'DaFi Labs · EmpRadar.ai · EmraSkills · 2026',
    cert: internshipCert,
  },
  {
    icon: '🥇',
    title: 'Gold Medal — Best Performance',
    sub: 'MERN Stack Training',
    cert: medal,
  },
  {
    icon: '📜',
    title: 'Certificate — MERN Stack Training',
    sub: 'Completed comprehensive full-stack development training',
    cert: img1,
  },
  {
    icon: '🥈',
    title: '2nd Place — Database Decathlon',
    sub: 'Talent Quest Fest 1.0 · UMT · May 2024',
    cert: certSQL,
  },
  {
    icon: '🌟',
    title: 'Volunteer — Student Body',
    sub: 'Talent Quest Fest 2.0 · UMT · Nov 2024',
    cert: certSB,
  },
  {
    icon: '🏆',
    title: 'Participant — Web Warriors',
    sub: 'Talent Quest Fest 2.0 · UMT · Nov 2024',
    cert: certWeb,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="reveal">
        <p className="section-label">Accomplishments</p>
        <h2 className="section-title">My <em>Achievements</em></h2>
        <div className="section-line" />
      </div>

      <div className="ach-subheading reveal">
        <h3>Experience</h3>
      </div>
      <div className="achievements-grid">
        {experience.map((a) => (
          <div className="ach-card ach-card--grid reveal" key={a.title}>
            <div className="ach-top">
              <div className="ach-icon">{a.icon}</div>
              <div>
                <div className="ach-title">{a.title}</div>
                <div className="ach-sub">{a.sub}</div>
              </div>
            </div>
            {a.desc && <p className="ach-desc">{a.desc}</p>}
          </div>
        ))}
      </div>

      <div className="ach-subheading reveal">
        <h3>Certificates</h3>
      </div>
      <div className="achievements-grid">
        {certificates.map((a) => (
          <div className="ach-card ach-card--grid reveal" key={a.title}>
            <div className="ach-top">
              <div className="ach-icon">{a.icon}</div>
              <div>
                <div className="ach-title">{a.title}</div>
                <div className="ach-sub">{a.sub}</div>
              </div>
            </div>
            {a.cert && (
              <div className="ach-cert-wrapper">
                <img src={a.cert} alt={a.title} className="ach-cert-img" />
                <div className="ach-cert-overlay">
                  <a href={a.cert} target="_blank" rel="noreferrer" className="ach-cert-btn">
                    View Certificate →
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}