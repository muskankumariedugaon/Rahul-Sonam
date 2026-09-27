import Ornament from './Ornament'
export default function SectionHeading({eyebrow, children}){
 return <div className="section-heading"><div className="eyebrow">{eyebrow}</div><h2>{children}</h2><Ornament/></div>
}
