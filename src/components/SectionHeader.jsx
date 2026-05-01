function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-copy">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionHeader
