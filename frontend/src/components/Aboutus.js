import React, { useState, useEffect } from 'react';
import '../AboutUs.css'; // Import CSS file for styling

function AboutUs() {
  const [aboutMessage, setAboutMessage] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch "About Us" message, team members, and testimonials from the backend
    Promise.all([
      fetch('http://localhost:4000/api/about').then((res) => res.json()),
      fetch('http://localhost:4000/api/about/team').then((res) => res.json()),
      fetch('http://localhost:4000/api/about/testimonials').then((res) => res.json()),
    ])
    .then(([aboutData, teamData, testimonialData]) => {
      setAboutMessage(aboutData.message);
      setTeamMembers(teamData);
      setTestimonials(testimonialData);
      setLoading(false);
    })
    .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="about-page">
      <h1>About Us</h1>
      {loading ? <p>Loading...</p> : <p className="about-message">{aboutMessage}</p>}

      <h2>Meet the Team</h2>
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> {member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>

      <h2>What Our Users Say</h2>
      <div className="testimonial-section">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="testimonial">
            <p>"{testimonial.message}"</p>
            <cite>— {testimonial.user}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
