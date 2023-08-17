import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Toaster } from "react-hot-toast";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-600">
      <div className="flex justify-center py-3">
        <a className="m-2" href="https://github.com/Jooker302">
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            style={{ color: "#ffffff", width: "40px", height: "40px" }}
          />
        </a>

        <a className="m-2" href="https://www.linkedin.com/in/i-m-omeree/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            style={{ color: "#ffffff", width: "40px", height: "40px" }}
          />
        </a>

        <a className="m-2" href="https://discord.com/users/thejooker302">
          <FontAwesomeIcon
            icon={faDiscord}
            size="lg"
            style={{ color: "#ffffff", width: "40px", height: "40px" }}
          />
        </a>

        <a
          className="m-2"
          href="https://instagram.com/i.omer_ee?igshid=ZDc4ODBmNjlmNQ=="
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            style={{ color: "#ffffff", width: "40px", height: "40px" }}
          />
        </a>
      </div>

      <div className="flex justify-center items-center pt-0 py-3">
        <p>Design 💝 By Me 😁</p>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
export default Footer;
