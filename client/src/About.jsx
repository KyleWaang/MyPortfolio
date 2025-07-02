export default function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>About Me</h1>

      <img
        src="/me.jpg"
        alt="Headshot of Wei Kai"
        style={{ width: '200px', borderRadius: '20px', margin: '1rem 0' }}
      />

      <h2>Wei Kai Wang</h2>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        I am a passionate software engineering student currently studying at Centennial College.
        With experience in web and mobile app development, I enjoy building clean, efficient, and
        user-friendly digital experiences. I'm currently expanding my skills in React, TypeScript,
        and backend API development.
      </p>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007BFF',
          color: '#fff',
          borderRadius: '5px',
          textDecoration: 'none'
        }}
      >
        View My Resume (PDF)
      </a>
    </div>
  )
}