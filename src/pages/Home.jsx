import { Link } from "react-router-dom";
import Counter from "../components/Counter.jsx";
import { handleGlowMove } from "../utils/glowHover.js";
import "./Home.css";

const stats = [
  {
    to: 850,
    suffix: "+",
    label: "Happy Members",
    sub: "Our community is growing fast!",
  },
  {
    to: 30,
    suffix: "+",
    label: "Weekly Classes",
    sub: "Pick from various workouts",
  },
  {
    to: 10,
    suffix: "",
    label: "Certified Trainers",
    sub: "Guidance at every step.",
  },
  {
    to: 99,
    suffix: "%",
    label: "Customer Satisfaction",
    sub: "We ensure your progress satisfaction",
  },
];

const programs = [
  {
    icon: "fa-person-running",
    title: "Strength Training",
    text: "Build muscle, increase stamina.",
  },
  {
    icon: "fa-heart-pulse",
    title: "Cardio Blast",
    text: "Maximize heart health and weight loss.",
  },
  {
    icon: "fa-spa",
    title: "Yoga & Flexibility",
    text: "Achieve mental clarity and flexibility.",
  },
  {
    icon: "fa-apple-whole",
    title: "Nutrition Counseling",
    text: "Eat right to complement your workout.",
  },
];

const testimonials = [
  {
    name: "Joanne",
    quote:
      "FitFlex completely transformed my fitness journey. The trainers genuinely care about your progress, and every workout leaves me feeling stronger and more confident.",
  },
  {
    name: "Caleb",
    quote:
      "The welcoming atmosphere and personalized training plans made it easy to stay consistent. Joining FitFlex was one of the best decisions I have made.",
  },
];

const plans = [
  {
    name: "Basic Plan",
    price: 39,
    note: "3 days/week",
    features: [
      "Access to all cardio classes",
      "Monthly body assessment",
      "Nutritional guidance",
    ],
  },
  {
    name: "Premium Plan",
    price: 59,
    note: "5 days/week",
    features: [
      "All Basic Plan features",
      "Strength training sessions",
      "Nutritional guidance",
    ],
    featured: true,
  },
  {
    name: "Elite Plan",
    price: 89,
    note: "7 days/week",
    features: [
      "All Premium Plan features",
      "Personal training session a month",
      "Priority booking for all classes",
    ],
  },
];

const features = [
  {
    title: "Personalized Training",
    text: "We create personalized workout plans designed specifically for your needs and goals, ensuring every step of your journey is customized for success.",
  },
  {
    title: "Flexible Schedules",
    text: "Enjoy the flexibility of our fitness programs, offering early morning to late night classes, so you can choose the time that suits you best.",
  },
  {
    title: "Latest Equipment",
    text: "Stay ahead in your fitness journey with cutting-edge technology that enhances your workouts and tracks your progress in real time.",
  },
  {
    title: "Expert Nutritionists",
    text: "Our program goes beyond exercise — tailored meal plans are designed to fuel and support your specific fitness goals.",
  },
];

export default function Home() {
  return (
    <>
      <section className="ff-hero">
        <div className="ff-container">
          <div className="ff-hero__heading">
            <h1>
              <span className="stroke">ACHIEVE</span> MORE THAN JUST FITNESS
            </h1>
            <p>
              Combine strength, flexibility, and endurance in a community that
              values well-rounded health and supportive growth.
            </p>
            <div className="ff-hero__btns">
              <Link to="/contact" className="ff-btn">
                START NOW
              </Link>
              <Link to="/contact" className="ff-btn ff-btn--ghost">
                JOIN FREE TRIAL
              </Link>
            </div>
          </div>

          <div className="ff-stats">
            {stats.map((s) => (
              <div className="ff-stats__item" key={s.label}>
                <div className="ff-stats__num">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <p className="ff-stats__label">{s.label}</p>
                <p className="ff-stats__sub">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ff-section">
        <div className="ff-container">
          <h2 className="ff-section__title text-center">
            <span className="stroke">CHOOSE</span> OUR PATH TO FITNESS
          </h2>
          <div className="ff-programs">
            {programs.map((p) => (
              <div
                className="ff-program-card ff-glow-hover"
                key={p.title}
                onMouseMove={handleGlowMove}
              >
                <div className="ff-program-card__icon">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>

                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ff-section">
        <div className="ff-container">
          <div className="ff-section__head">
            <h2>
              TRANSFORMATIONS SPEAK LOUDER{" "}
              <span className="stroke">THAN WORDS</span>
            </h2>
            <Link to="/about" className="ff-btn">
              VIEW MORE
            </Link>
          </div>
          <div className="ff-testimonials">
            {testimonials.map((t) => (
              <div
                className="ff-testimonial-card ff-glow-hover"
                key={t.name}
                onMouseMove={handleGlowMove}
              >
                <div className="ff-testimonial-card__avatar">{t.name[0]}</div>
                <div>
                  <p className="ff-testimonial-card__quote">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="ff-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i className="fa-solid fa-star" key={i}></i>
                    ))}
                  </div>
                  <h3>{t.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ff-section ff-pricing-section">
        <div className="ff-pricing">
          {plans.map((p) => (
            <div
              className={`ff-price-card ff-glow-hover ${p.featured ? "is-featured" : ""}`}
              key={p.name}
              onMouseMove={handleGlowMove}
            >
              <h3>{p.name}</h3>
              <p className="ff-price-card__price">
                ${p.price}
                <small>/month</small>
              </p>
              <p className="ff-price-card__note">{p.note}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <i className="fa-solid fa-circle-check"></i>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="ff-btn">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="ff-section-dumbell">
        <div className="home">
          <div className="ff-container">
            <h2 className="ff-section__title">
              <span className="stroke">WHY FITFLEX</span> IS YOUR IDEAL FITNESS
              PARTNER
            </h2>
            <div className="ff-features">
              <ul className="ff-features__list">
                {features.map((f) => (
                  <li key={f.title}>
                    <span className="ff-features__icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </li>
                ))}
              </ul>
              <div className="ff-features__art" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ff-cta">
        <div className="ff-container">
          <div className="ff-cta__content">
            <h2>
              READY TO START YOUR JOURNEY WITH{" "}
              <span className="stroke">FITFLEX?</span>
            </h2>
            <p>Reserve Your Spot Today!</p>
            <Link to="/contact" className="ff-btn">
              JOIN NOW
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
