import { Link } from "react-router-dom";
import "./Footer.css";

const columns = [
  {
    title: "About",
    links: [
      "Our Story",
      "Mission & Vision",
      "Meet the Team",
      "Careers",
      "FAQs",
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Us", to: "/contact" },
      "Location & Hours",
      "Support",
      "Partnership Inquiries",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="ff-footer">
      <div className="ff-container">
        <div className="ff-footer__grid">
          {/* Left Side */}
          <div className="ff-footer__left">
            {columns.map((col) => (
              <div className="ff-footer__col" key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l, i) =>
                    typeof l === "string" ? (
                      <li key={i}>
                        <a href="#!">{l}</a>
                      </li>
                    ) : (
                      <li key={i}>
                        <Link to={l.to}>{l.label}</Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
          {/* Right Side */}
          <div className="ff-footer__col ff-footer__newsletter">
            {" "}
            <h3>Sign up for our newsletter</h3>{" "}
            <form
              className="ff-newsletter"
              onSubmit={(e) => e.preventDefault()}
            >
              {" "}
              <input type="email" placeholder="Email Address" required />{" "}
              <button type="submit">SUBSCRIBE</button>{" "}
            </form>{" "}
            <div className="ff-social">
              {" "}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                {" "}
                <i className="fa-brands fa-instagram"></i>{" "}
              </a>{" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                {" "}
                <i className="fa-brands fa-x-twitter"></i>{" "}
              </a>{" "}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                {" "}
                <i className="fa-brands fa-youtube"></i>{" "}
              </a>{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                {" "}
                <i className="fa-brands fa-linkedin-in"></i>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
