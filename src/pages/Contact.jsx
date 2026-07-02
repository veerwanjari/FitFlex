import { useState } from "react";
import PageHeader from "./PageHeader.jsx";
import "./Contact.css";

const WEB3FORMS_ACCESS_KEY = "cd98b256-0db3-478c-ab28-1ec94f80447c";

const contactInfo = [
  {
    icon: "fa-regular fa-envelope",
    label: "EMAIL",
    value: "hello@fitflex.com",
    href: "mailto:hello@fitflex.com",
  },
  {
    icon: "fa-solid fa-phone-volume",
    label: "PHONE",
    value: "+123 456 7890",
    href: "tel:+1234567890",
  },
  {
    icon: "fa-solid fa-location-dot",
    label: "ADDRESS",
    value: "Fitflex Tower, Nagpur, Maharashtra",
  },
];

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Sending..." });

    const form = e.target;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus({
          state: "success",
          message: "Thanks — your message has been sent!",
        });
        form.reset();
      } else {
        setStatus({
          state: "error",
          message: json.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <>
      <PageHeader
        title={
          <>
            MEET OUR <span className="stroke">FITNESS EXPERTS</span> HERE
          </>
        }
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      />

      <section className="ff-section">
        <div className="ff-container">
          <div className="ff-contact">
            <div className="ff-contact__col">
              <h2 className="ff-contact__heading">
                GET IN <span className="stroke">TOUCH</span>
              </h2>
              <ul className="ff-contact-info">
                {contactInfo.map((c) => (
                  <li key={c.label}>
                    <span className="ff-contact-info__icon">
                      <i className={c.icon}></i>
                    </span>
                    <div>
                      <p className="ff-contact-info__label">{c.label}</p>
                      <p className="ff-contact-info__value">
                        {c.href ? <a href={c.href}>{c.value}</a> : c.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ff-contact__col ff-contact__col--form">
              <h2 className="ff-contact__heading">
                SEND US A <span className="stroke">MESSAGE</span>
              </h2>
              <form className="ff-contact__form" onSubmit={handleSubmit}>
                <div className="ff-field-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="ff-btn ff-btn--full"
                  disabled={status.state === "loading"}
                >
                  {status.state === "loading" ? "Sending…" : "Send Message"}
                </button>
                {status.message && (
                  <p
                    className={`ff-contact__status ${status.state === "error" ? "is-error" : ""}`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="ff-map">
        <iframe
          title="YCCE Nagpur location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.1332924376517!2d78.9754162!3d21.1072551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd49547d51786db%3A0xe67bf8568600da44!2sYeshwantrao%20Chavan%20College%20of%20Engineering%20(YCCE)!5e0!3m2!1sen!2sin!4v1719750000000!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
