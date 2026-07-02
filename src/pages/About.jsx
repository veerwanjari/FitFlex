import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader.jsx";
import { handleGlowMove } from "../utils/glowHover.js";
import "./About.css";

const values = [
  {
    title: "Community",
    text: "Fostering a sense of belonging and support.",
    icon: "fa-people-group",
  },
  {
    title: "Inclusivity",
    text: "Embracing diversity in fitness for all body types and abilities.",
    icon: "fa-heart",
  },
  {
    title: "Innovation",
    text: "Offering cutting-edge workouts and technology.",
    icon: "fa-bolt",
  },
  {
    title: "Personalization",
    text: "Tailoring fitness plans to individual needs.",
    icon: "fa-user-check",
  },
];

const trainers = [
  { name: "David Chen", role: "Certified Yoga Instructor", img: "/trainer-1.jpg" },
  { name: "Emily Turner", role: "Nutrition and Wellness Coach", img: "/trainer-2.jpg" },
  { name: "Mark Johnson", role: "High-Intensity Interval Training Expert", img: "/trainer-3.jpg" },
];

const brands = ["Nike", "Adidas", "Under Armour", "Puma", "Reebok"];
const tripledBrands = [...brands, ...brands, ...brands];

export default function About() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="is-about">
        <PageHeader
          title={
            <>
              <span className="stroke">ABOUT</span> FITFLEX
            </>
          }
          breadcrumb={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        />
      </section>
      {/* Intro */}
      <section className="ff-section">
        <div className="ff-container">
          <div className="ff-about-intro">
            <div className="ff-about-intro__images" aria-hidden="true">
              <div
                className="ff-about-intro__img ff-about-intro__img--1 ff-glow-hover"
                onMouseMove={handleGlowMove}
              ></div>
              <div
                className="ff-about-intro__img ff-about-intro__img--2 ff-glow-hover"
                onMouseMove={handleGlowMove}
              ></div>
            </div>
            <div className="ff-about-intro__copy">
              <h2>
                <span className="stroke">EMPOWERING</span> YOUR FITNESS JOURNEY
              </h2>
              <p>
                Welcome to FitFlex, where we believe that a healthier, happier
                you begins with personalized fitness and a supportive community.
                Our state-of-the-art studio is not just a gym; it's a space for
                transformation, where individuals of all fitness levels come
                together to achieve their goals. With a commitment to innovation
                and inclusivity, FitFlex is more than a workout — it's a
                lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="ff-section">
        <div className="ff-container">
          <h2 className="ff-section__title text-center">
            <span className="stroke">OUR</span> CORE VALUES
          </h2>
          <p className="ff-section__lead text-center">Guide everything we do</p>
          <div className="ff-values">
            {values.map((v) => (
              <div
                className="ff-value-card ff-glow-hover"
                key={v.title}
                onMouseMove={handleGlowMove}
              >
                <div className="ff-value-card__icon">
                  <i className={`fa-solid ${v.icon}`}></i>
                </div>

                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gym image */}
      <section className="ff-section ff-section--tight">
        <div className="ff-container">
          <div className="ff-gym-image">
            <div className="ff-video__caption">
              <h2>
                <span className="stroke">EXPERIENCE</span> FITFLEX
              </h2>
              <p>Where Your Fitness Journey Thrives</p>
            </div>
          </div>
        </div>
      </section>
      {/* Trainers */}
      <section className="ff-section">
        <div className="ff-container">
          <div className="ff-section__head">
            <div>
              <h2>
                <span className="stroke">MEET</span> THE EXPERTS
              </h2>
              <p className="ff-section__head-sub">
                Each member of our team brings unique expertise to ensure a
                well-rounded and holistic fitness experience.
              </p>
            </div>
            <Link to="/contact" className="ff-btn">
              SEE MORE
            </Link>
          </div>
          <div className="ff-trainers">
            {trainers.map((t) => (
              <div
                className="ff-trainer-card ff-glow-hover"
                key={t.name}
                onMouseMove={handleGlowMove}
              >
                <div className="ff-trainer-card__thumb">
                  <img src={t.img} alt={t.name} />
                </div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <div className="slider">
        <ul className="brands">
          {tripledBrands.map((b, i) => (
            <li key={`${b}-${i}`} className="brand-logo">
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <section className="ff-cta-is-about">
        <div className="ff-container">
          <div className="ff-cta__content">
            <h2>
              READY TO EMBARK ON YOUR{" "}
              <span className="stroke">FITNESS JOURNEY</span> WITH FITFLEX?
            </h2>
            <Link to="/contact" className="ff-btn">
              JOIN NOW
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
