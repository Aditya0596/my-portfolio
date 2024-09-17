import React from 'react';

const About = () => {
  return (
    <section id="about" className="container my-5">
      <hr />
      <h2 className="mb-4">About Me</h2>

      {/* Education Section */}
      <div className="mt-4">
        <h3>Education</h3>
        <ul className="list-unstyled">
          <li>
            <strong>10th Grade</strong>: The New Green Field Public Academy, Indore, Madhya Pradesh -
            <span className="text-muted"> Percentage: 73%</span>
          </li>
          <li className="mt-2">
            <strong>12th Grade</strong>: Badrinarayan Barwale Mahavidyalaya, Jalna, Maharashtra -
            <span className="text-muted"> Percentage: 78.46%</span>
          </li>
          <li className="mt-2">
            <strong>Bachelor of Computer Applications (BCA)</strong>: Badrinarayan Barwale College, Jalna, Maharashtra -
            <span className="text-muted"> Percentage: 69.13%</span>
          </li>
          <li className="mt-2">
            <strong>Master of Computer Applications (MCA)</strong>: Pursuing from Zeal Institute of Business Administration, Computer Application and Research, Narhe, Pune
          </li>
        </ul>
      </div>
      <hr />

      {/* Technologies Section */}
      <div className="mt-5">
        <h3>Technologies I Know</h3>
        <ul className="list-unstyled">
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js (v18)</li>
          <li><strong>Styling:</strong> Bootstrap (v5), Tailwind CSS (v3)</li>
          <li><strong>Backend:</strong> Express.js (v4)</li>
          <li><strong>State Management:</strong> React Hooks (useState, useEffect), Context API, Redux</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Deployment Server:</strong> GitHub Pages</li>
          <li><strong>Tools:</strong> VS Code,Chrome DevTools</li>
          <li><strong>Agile Practices:</strong> Agile methodology, Scrum, Jira for project management</li>
        </ul>
      </div>
      <hr />

      {/* Hobbies Section */}
      <div className="mt-5">
        <h3>Hobbies</h3>
        <p>
          I love playing badminton and won the 1st prize in the <strong>Ranangan 2024</strong> at Institute Level.
        </p>
        <img
          src="/badminton-prize.jpg"
          alt="Badminton Prize"
          className="img-fluid rounded mt-3"
          style={{ maxWidth: '100%' }}
        />
      </div>
      <hr />
    </section>
  );
};

export default About;
