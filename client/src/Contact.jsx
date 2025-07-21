import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';

export default function Contact() {
  // Navigation hook from React Router to redirect user
  const navigate = useNavigate()

  // State to manage contact form data
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    // Log the captured form data (for now)
    console.log('Contact form submitted:', data)

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
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          
          <label>First Name</label>
          <input type="text" {...register("firstName", { required: true })} style={{ flex: 1, padding: '0.5rem' }} />
          {errors.firstName && <p>First Name is required</p>}

          <label>Last Name</label>
          <input type="text" {...register("lastName", { required: true })} style={{ flex: 1, padding: '0.5rem' }} />
          {errors.lastName && <p>Last Name is required</p>}

        </div>

        <label>Contact Number</label>
        <input type="text" {...register("contactNumber", { required: true })} style={{ padding: '0.5rem' }} />
        {errors.contactNumber && <p>Contact Number is required</p>}

        <label>Email</label>
        <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} style={{ padding: '0.5rem' }} />
        {errors.email && <p>Email is required and must be valid</p>}
        
        <label>Message</label>
        <textarea {...register("message", { required: true })} rows="5" style={{ padding: '0.5rem' }} />
        {errors.message && <p>Message is required</p>}

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