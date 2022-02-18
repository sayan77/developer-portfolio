import { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  //eslint-disable-next-line
  const [cards, setCards] = useState(projects);

  return (
    <>
      <section className="project">
        <h1> Projects </h1>
        <div className="cards">
          {cards.map(({ id, title, desc, demo, image }) => (
            <article key={id}>
              <img src={image} alt={title} />
              <h4> {title} </h4>
              <p> {desc}</p>
              <ul>
                <li>
                  <a href={demo} target="_blank" rel="noopenner noreferrer">
                    {" "}
                    <FaVideo /> Demo{"  "}
                  </a>
                </li>
              </ul>
            </article>
          ))}
          ;
        </div>
      </section>
    </>
  );
};

export default Projects;
