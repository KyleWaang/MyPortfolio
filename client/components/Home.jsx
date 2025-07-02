import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to My Website!</h1>
      <p>Empowering people through technology, creativity, and code.</p>
      <button onClick={() => navigate('/about')}>Learn More About Me</button>
      <button onClick={() => navigate('/service')}>Service</button>
      <button onClick={() => navigate('/project')}>Project</button>
      <button onClick={() => navigate('/contact')}>Contact Me</button>
    </div>
  )
}