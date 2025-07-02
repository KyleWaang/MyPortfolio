export default function Service() {
  const services = [
    {
      title: 'Web Development',
      image: '/service-web.png',
      description:
        'I create responsive and performant websites using modern tools like React, Vite, and CSS. From landing pages to full-stack web apps.'
    },
    {
      title: 'Mobile App Development',
      image: '/service-mobile.png',
      description:
        'I develop cross-platform mobile applications using React Native. Ideal for startups and projects that need rapid mobile solutions.'
    },
    {
      title: 'General Programming',
      image: '/service-general.png',
      description:
        'Need automation, data scraping, or debugging help? I provide general-purpose coding solutions in Python, JavaScript, and more.'
    }
  ]

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>My Services</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}