# FitFlex — React

FitFlex is a modern gym website built with React and Vite, featuring a clean, responsive, and user-friendly design. The project includes three pages: Home, About, and Contact, connected using React Router. The Home page is fully built with reusable React components, while the About and Contact pages follow the same design system for a consistent user experience. This project provides a solid foundation for a professional fitness or gym website.


## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   Header, Footer, ScrollTop, Counter (stat animation)
  pages/        One file per route
  App.jsx       Router setup
  index.css     Design system (dark theme, lime accent, Bebas Neue display font)
```

## Notes

- Routing uses `react-router-dom` (`/`, `/about`, `/classes`, `/class-details`,
  `/blog`, `/blog-details`, `/timetable`, `/contact`).
- The original site used jQuery plugins (Slick carousel, Odometer, WOW.js).
  These were replaced with native React equivalents: a CSS grid for the
  programs section and an `IntersectionObserver`-based `Counter` component
  for the animated stats — no jQuery dependency needed.
- Icons use Font Awesome (loaded via CDN in `index.html`); fonts use Google
  Fonts (Bebas Neue + Inter).
- No images were included in the original markup snippet, so program cards,
  testimonials, and the features section use icon-based placeholders instead
  of photos — swap in real images via `src/assets` if you have them.
