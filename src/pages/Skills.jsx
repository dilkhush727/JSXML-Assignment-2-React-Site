import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('https://assignment1-1eq7.onrender.com/admin/skills/api')
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the skills:", error);
      });
  }, []);

  const categories = ['Front-End', 'Back-End', 'Tools'];

  return (
    <section className="container mt-5">
      <h1 className="text-center mb-4">Skills</h1>
      {categories.map(category => (
        <div key={category} className="mb-4">
          <h3>{category}</h3>
          <ul className="list-group">
            {skills.filter(skill => skill.category === category).map(skill => (
              <li key={skill._id} className="list-group-item">
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
