import { FaTwitter, FaGithub } from "react-icons/fa";

const Homepage = () => {
  return (
    <>
      <section className="homepage">
        <div className="overlay">
          <h1> Sayan Mitra </h1>
          <p> Front-end Web Developer </p>

          <ul>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Homepage;
