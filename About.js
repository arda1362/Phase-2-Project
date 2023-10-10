import React from 'react';

function About() {
  return (
    <div>
      <h1>About Calculator App</h1>
      <p>
        Calculator App is a simple yet powerful tool for performing basic mathematical calculations.
        It allows users to perform addition, subtraction, multiplication, division, and more.
      </p>
      <h2>Team</h2>
      <ul>
        <li>John Doe - Frontend Developer</li>
        <li>Jane Smith - Backend Developer</li>
      </ul>
      <h2>Technologies Used</h2>
      <p>
        Calculator App is built using React for the frontend and JSON Server for the backend.
      </p>
      <h2>Contact Us</h2>
      <p>
        You can reach out to us with your questions or feedback on our
        {' '}
        <a href="https://github.com/yourusername/calculator-app" target="_blank" rel="noopener noreferrer">
          GitHub repository
        </a>
        .
      </p>
    </div>
  );
}

export default About;

