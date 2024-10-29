import React, { useState, useEffect } from 'react';

function AboutUs() {
  const [aboutMessage, setAboutMessage] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the "About Us" message and team members from the backend
  useEffect(() => {
    // Fetch the About Us message
    fetch('http://localhost:4000/api/about')  // Backend URL for about message
      .then((response) => response.json())
      .then((data) => {
        setAboutMessage(data.message);
      })
      .catch((error) => {
        console.error('Error fetching the About Us message:', error);
      });

    // Fetch team members from the updated endpoint
    fetch('http://localhost:4000/api/about/team')  // Updated Backend URL for team members
      .then((response) => response.json())
      .then((data) => {
        setTeamMembers(data);
        setLoading(false); // Set loading to false after fetching team members
      })
      .catch((error) => {
        console.error('Error fetching team members:', error);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      {loading ? <p>Loading...</p> : <p>{aboutMessage}</p>}

      <h2>Meet the Team</h2>
      {loading ? (
        <p>Loading team members...</p>
      ) : (
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index}>
              <h3>{member.name}</h3>
              <p><strong>Role:</strong> {member.role}</p>
              <p>{member.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AboutUs;
