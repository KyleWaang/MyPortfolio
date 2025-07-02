import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  // Navigation hook from React Router to redirect user
  const navigate = useNavigate()

  // State to track form input fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  })

  // Update form state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault() // Prevent page reload

    // Log the captured form data (for now)
    console.log('Contact form submitted:', contactForm)

    // Redirect to the Home Page after submission
    navigate('/')
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Contact Me</h1>

      {/* Contact Info Panel */}
      <div style={{ backgroundColor: '#f0f0f0', color: 'black', padding: '1rem', borderWidth: 1, borderColor: 'black', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3>Get in Touch</h3>
        <p><strong>Email:</strong> wae123eaw@gmail.com</p>
        <p><strong>Phone:</strong> (+1) 416-984-6859</p>
        <p><strong>Location:</strong> Toronto, ON, Canada</p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: '0.5rem' }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ flex: 1, padding: '0.5rem' }}
          />
        </div>

        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          style={{ padding: '0.5rem' }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '0.5rem' }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          style={{ padding: '0.5rem' }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  )
}