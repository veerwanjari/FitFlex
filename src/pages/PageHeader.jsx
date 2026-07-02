import { Link } from 'react-router-dom'
import './PageHeader.css'

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="ff-page-header">
      <div className="ff-container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {breadcrumb && (
          <ol className="ff-breadcrumb">
            {breadcrumb.map((b, i) => (
              <li key={i}>
                {b.to ? <Link to={b.to}>{b.label}</Link> : <span>{b.label}</span>}
                {i < breadcrumb.length - 1 && <span className="ff-breadcrumb__sep">/</span>}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}
