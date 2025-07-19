// components/Portfolio.js
import React from "react";


/*
// githubのリンクは../data/projects.jsonから取得することを想定しています。
*/


function Portfolio({ projects }) {
  return (
    <section>
      <h2>主な制作物</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}


export default Portfolio;
