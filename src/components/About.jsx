import './About.css'
import nafeesaImg from '../assets/PROFILE.png'
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-image-block reveal">
          <img
            src={nafeesaImg}
            alt="Nafeesa"
            className="about-img-placeholder"
          />
          <div className="about-deco" />
        </div>
        <div className="about-text reveal">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Passionate about<br /><em>building the web</em>
          </h2>
          <div className="section-line" />
          <p>
            I'm Nafeesa, a dedicated MERN Stack Developer and AI Automation enthusiast with a strong
            foundation in building full-stack web applications and intelligent, automated workflows.
            I love turning ideas into clean, functional, and beautiful digital products — from
            database design to responsive user interfaces to smart automation.
          </p>
          <p>
            With hands-on experience across MongoDB, Express.js, React, and Node.js, along with AI
            automation tools like n8n, I enjoy solving real-world problems through technology. I
            believe great software is not just about code — it's about creating experiences that
            think, adapt, and matter.
          </p>
          <div className="about-details">
            <div className="about-detail">
              <span className="about-detail-label">Name</span>
              <span className="about-detail-val">Nafeesa</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Role</span>
              <span className="about-detail-val">MERN Stack Developer & AI Automation</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">University</span>
              <span className="about-detail-val">UMT</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Email</span>
              <span className="about-detail-val">nafeesa22111@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
