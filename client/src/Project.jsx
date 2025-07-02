export default function Project() {
  const projects = [
    {
      title: 'Car Rental System (Web & Mobile)',
      image: '/project1.png',
      description:
        'I developed a web application that allows users to browse and reserve rental cars. I handled frontend development in React for web and React Native for mobile app. The app improved customer workflow and is actively used by our client.'
    },
    {
      title: 'Garbage Truck Tracker (Mobile App)',
      image: '/project2.png',
      description:
        'In this team project, I built a React Native app that tracks garbage truck locations in real time using GPS. My role included setting up real-time location syncing and UI/UX development.'
    },
    {
      title: 'Online Board Game (In Progress)',
      image: '/project3.png',
      description:
        "Currently designing and developing a multiplayer online board game using Vite, TypeScript, and Supabase."
    }
  ]

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>My Projects</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}