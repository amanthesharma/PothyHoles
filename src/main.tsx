import { useState } from 'react'
import { AlertTriangle, ArrowRight, ChevronDown, CircleCheck, MapPin, Menu, Search, ShieldCheck, Sparkles, X } from 'lucide-react'
import './styles.css'

const metrics = [
  { value: '2,04,826', label: 'Potholes reported', icon: AlertTriangle, tone: 'sun' },
  { value: '1,42,090', label: 'Community verified', icon: ShieldCheck, tone: 'blue' },
  { value: '68,214', label: 'Repairs confirmed', icon: CircleCheck, tone: 'green' },
]

const areas = [
  { name: 'Pune', state: 'Maharashtra', reports: 1642, change: '+18%', color: '#f4b418' },
  { name: 'Bengaluru', state: 'Karnataka', reports: 1388, change: '+12%', color: '#e16f48' },
  { name: 'Delhi', state: 'Delhi', reports: 1196, change: '+9%', color: '#5d82e9' },
  { name: 'Mumbai', state: 'Maharashtra', reports: 984, change: '+7%', color: '#41a07a' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [district, setDistrict] = useState('All districts')
  const [submitted, setSubmitted] = useState(false)

  const scrollToReport = () => document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' })
  const filteredAreas = areas.filter((area) => area.name.toLowerCase().includes(query.toLowerCase()) || area.state.toLowerCase().includes(query.toLowerCase()))

  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="PothyHoles home"><span className="brand-mark">P</span><span>Pothy<span>Holes</span></span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#map">Explore map</a><a href="#impact">Our impact</a><a href="#how-it-works">How it works</a>
          <button className="nav-cta" onClick={scrollToReport}>Report a pothole <ArrowRight size={16} /></button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> Built by citizens, for safer streets</p>
          <h1>Small holes.<br /><em>Big change.</em></h1>
          <p className="hero-text">PothyHoles helps people report dangerous potholes, see local road issues, and track the repairs that matter.</p>
          <div className="hero-actions"><button className="primary" onClick={scrollToReport}>Report a pothole <ArrowRight size={18} /></button><a className="text-link" href="#map">See your area <MapPin size={17} /></a></div>
          <div className="trust"><span className="avatars"><i>R</i><i>S</i><i>A</i></span><span>Joined by <strong>200,000+ citizens</strong><br />across India</span></div>
        </div>
        <div className="hero-art" aria-label="Illustration of a road with a pothole">
          <div className="sun"></div><div className="cloud cloud-one"></div><div className="cloud cloud-two"></div>
          <div className="skyline"><span></span><span></span><span></span><span></span><span></span></div>
          <div className="road"><div className="road-lines"></div><div className="pothole"><span></span></div></div>
          <div className="report-pin"><MapPin fill="currentColor" size={25} /><small>Reported</small></div>
        </div>
      </section>

      <section className="metric-strip" id="impact">{metrics.map(({ value, label, icon: Icon, tone }) => <article key={label}><span className={`metric-icon ${tone}`}><Icon size={21} /></span><div><strong>{value}</strong><p>{label}</p></div></article>)}</section>

      <section className="map-section" id="map">
        <div className="section-heading"><div><p className="eyebrow">LIVE COMMUNITY DATA</p><h2>What’s happening<br />on your roads?</h2></div><p>Explore reports near you. Every pin is a step toward a safer journey.</p></div>
        <div className="map-card">
          <div className="map-controls"><label><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search city or state" /></label><button onClick={() => setDistrict(district === 'All districts' ? 'Pune district' : 'All districts')}>{district} <ChevronDown size={16} /></button></div>
          <div className="india-map"><div className="map-outline">INDIA</div><span className="map-pin p1">1,642</span><span className="map-pin p2">1,388</span><span className="map-pin p3">1,196</span><span className="map-pin p4">984</span><div className="map-legend"><i></i> Open reports</div></div>
          <div className="area-list"><div className="area-list-head"><span>Most reported areas</span><a href="#report">View all</a></div>{filteredAreas.map((area) => <div className="area-row" key={area.name}><span className="area-dot" style={{ background: area.color }}></span><div><strong>{area.name}</strong><small>{area.state}</small></div><b>{area.reports.toLocaleString()}</b><em>{area.change}</em></div>)}</div>
        </div>
      </section>

      <section className="steps" id="how-it-works"><p className="eyebrow">SIMPLE BY DESIGN</p><h2>Make your street safer<br />in three small steps.</h2><div className="step-grid"><article><span>01</span><MapPin /><h3>Pin the spot</h3><p>Use your location or drop a pin where you saw the pothole.</p></article><article><span>02</span><AlertTriangle /><h3>Show the problem</h3><p>Add a photo and tell us how dangerous it is—only when safe.</p></article><article><span>03</span><CircleCheck /><h3>Track the change</h3><p>Follow updates and help confirm when a repair is complete.</p></article></div></section>

      <section className="report-section" id="report"><div><p className="eyebrow">YOUR TURN</p><h2>See a pothole?<br /><em>Put it on the map.</em></h2><p>It takes less than a minute. Your report helps make the problem visible.</p></div><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><label>Where is it?<input required placeholder="Landmark, road, or area" /></label><label>How dangerous is it?<select defaultValue=""><option value="" disabled>Select severity</option><option>Small but noticeable</option><option>Dangerous for two-wheelers</option><option>Critical / accident risk</option></select></label><button className="primary" type="submit">{submitted ? 'Report submitted — thank you!' : 'Start a report'} <ArrowRight size={18} /></button>{submitted && <p className="success"><CircleCheck size={17} /> We’ll help get this on the map.</p>}</form></section>

      <footer><a className="brand" href="#top"><span className="brand-mark">P</span><span>Pothy<span>Holes</span></span></a><p>Report it. Track it. Fix it.</p><span>Made for safer Indian streets.</span></footer>
    </main>
  )
}

export default App
