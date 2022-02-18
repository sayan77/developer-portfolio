import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <>
      <section className="contacts">
        <h1> Contact Me </h1>
        <ul>
          <li>
            <a href="tel:09880973401">
              <FaPhone /> +91 9880973401{" "}
            </a>
          </li>
          <li>
            <a href="mailto:sayyaniter@gmail.com">
              {" "}
              <FaEnvelope /> sayaniter@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Contacts;
