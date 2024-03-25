import "./contact.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <h2>Contact Me</h2>
        <div className="contact-details">
          <ul>
            <li>
              <h4>
                <span>
                  <EmailOutlinedIcon color="white" />
                </span>
                shawnrodrigo34@gmail.com
              </h4>
            </li>
            <li>
              <h4>
                <span>
                  <PhoneIphoneOutlinedIcon color="white" />
                </span>
                +94 77 521 2686
              </h4>
            </li>
            <li>
              <h4>
                <span>
                  <LinkedInIcon color="white" />
                </span>
                <a href="https://www.linkedin.com/in/shawnrodrigo">
                  @shawnrodrigo
                </a>
              </h4>
            </li>
            <li>
              <h4>
                <span>
                  <GitHubIcon color="white" />
                </span>
                <a href="https://github.com/shawnrrodrigo">
                  @shawnrrodrigo
                </a>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
