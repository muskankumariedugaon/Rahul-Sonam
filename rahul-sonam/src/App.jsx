import { useEffect, useState } from 'react'
import { ChevronDown, Heart, Sparkles } from 'lucide-react'
import Petals from './components/Petals'
import SectionHeading from './components/SectionHeading'

const weddingDate = new Date('2026-11-24T15:00:00')

const groom = {
  name: 'राहुल सिंह',
  father: 'श्री सचिन्द्र सिंह',
  mother: 'श्रीमती प्रमिला देवी',
  address: [
    'ग्राम + पोस्ट — इनई',
    'थाना — रिविलगंज',
    'जिला — छपरा (सारण), बिहार',
  ],
}

const bride = {
  name: 'सोनम सिंह',
  father: 'श्री विवेक नाथ सिंह',
  mother: 'श्रीमती संगीता देवी',
  address: [
    'ग्राम + पोस्ट — गंगाजल बड़ा बगीचा (सोनपुर)',
    'थाना — सोनपुर',
    'जिला — छपरा (सारण), बिहार',
  ],
}

const events = [
  {
    icon: '🪔',
    title: 'शुभ तिलक',
    date: '21 नवम्बर 2026',
    day: 'शनिवार',
  },
  {
    icon: '🌸',
    title: 'मेहंदी',
    date: '22 नवम्बर 2026',
    day: 'रविवार',
  },
  {
    icon: '🌼',
    title: 'हल्दी मटकोर',
    date: '23 नवम्बर 2026',
    day: 'सोमवार',
  },
  {
    icon: '💍',
    title: 'शुभ विवाह',
    date: '24 नवम्बर 2026',
    day: 'मंगलवार',
  },
]

function Countdown() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)

    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, weddingDate - now)

  const items = [
    ['दिन', Math.floor(diff / 86400000)],
    ['घंटे', Math.floor(diff / 3600000) % 24],
    ['मिनट', Math.floor(diff / 60000) % 60],
    ['सेकंड', Math.floor(diff / 1000) % 60],
  ]

  return (
    <section className="section countdown-section">
      <Petals />

      <div className="luxury-frame" />

      <div className="section-inner">
        <div className="eyebrow">
          <Sparkles size={13} />
          शुभ विवाह में शेष समय
          <Sparkles size={13} />
        </div>

        <h2 className="script title-small">
          राहुल संग सोनम
        </h2>

        <div className="gold-rule">
          <span>◆</span>
        </div>

        <div className="countdown-grid">
          {items.map(([label, value]) => (
            <div className="count-card" key={label}>
              <strong>{String(value).padStart(2, '0')}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('locked', showIntro)

    return () => {
      document.body.classList.remove('locked')
    }
  }, [showIntro])

  const open = () => {
    setShowIntro(false)

    setTimeout(() => {
      document
        .getElementById('invite')
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <main className="site">

      {/* ================= INTRO ================= */}

      {showIntro && (
        <div className="intro-screen">
          <div className="intro-border">

            <div className="corner c1" />
            <div className="corner c2" />
            <div className="corner c3" />
            <div className="corner c4" />

            <div className="intro-top">
              ॥ श्री गणेशाय नमः ॥
            </div>

            <div className="intro-kicker">
              शुभ विवाह निमंत्रण
            </div>


            {/* <img
              // src="/images/couple-frame.png"
              alt="राहुल और सोनम"
              className="intro-couple"
            /> */}


            <div className="intro-names script">
              राहुल <i>संग</i> सोनम
            </div>

            <div className="intro-date">
              24 नवम्बर 2026 · मंगलवार
            </div>

            <div className="intro-divider">
              <span>✦</span>
            </div>

            <button
              className="open-btn"
              onClick={open}
              type="button"
            >
              <span>आमंत्रण खोलें</span>
              <b>✦</b>
            </button>

            <div className="touch">
              सप्रेम एवं सादर आमंत्रण
            </div>

          </div>
        </div>
      )}

      <Petals />

      {/* ================= HERO ================= */}

      <section id="invite" className="hero section">

        <div className="hero-rings" />
        <div className="hero-glow" />

        <div className="section-inner hero-content">

          <img
            className="ganesh"
            src="/images/ganesh.png"
            alt="श्री गणेश"
          />

          <div className="ganesh-mantra">
            ॥ श्री गणेशाय नमः ॥
          </div>

          <div className="hero-ornament">
            <span />
            <b>✦</b>
            <span />
          </div>
         


          <div
            className="tagline"
            style={{
              fontWeight: '300',
              color: '#000',
            }}
          >
            दो दिलों का मिलन · जीवनभर का साथ
          </div>

          <h1 className="script hero-name">
            राहुल
          </h1>

          <div className="amp">
            संग
          </div>

          <h1 className="script hero-name second">
            सोनम
          </h1>

          <div className="date-line">
            <b>24 · नवम्बर · 2026</b>
            <br />
            <span style={{ fontWeight: '500', color: '#000' }}>
              मंगलवार · गंगाजल बड़ा बगीचा · सोनपुर
            </span>
          </div>

          <div
  className="scroll-cue"
  style={{
    fontWeight: '500',
    color: '#000',
  }}
>
  नीचे देखें
  <ChevronDown size={19} />
</div>

        </div>
      </section>

      {/* ================= INVITATION ================= */}

      <section className="section invite-section">

        <Petals />

        <div className="section-inner narrow">

          
<SectionHeading eyebrow={<span style={{ fontWeight: 600, color: '#000' }}>ईश्वर के आशीर्वाद से</span>}>
  सादर आमंत्रण
</SectionHeading>

          <p className="lead">
            ईश्वर की असीम कृपा एवं आप सभी के स्नेह के साथ,
            <br />
            हम आपको राहुल एवं सोनम के शुभ विवाह में सादर आमंत्रित करते हैं।
          </p>

          {/* <PersonCard
            title={groom.name}
            label="वर पक्ष"
          > */}



          <PersonCard
  title={<span style={{ fontWeight: 500 }}>{groom.name}</span>}
  label={<span style={{ fontWeight: 500 }}>वर पक्ष</span>}
>
            सुपुत्र — <b>{groom.father}</b> एवं{' '}
            <b>{groom.mother}</b>
            <br />

            {groom.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </PersonCard>

          <div className="with-script script">
            <Heart size={17} fill="currentColor" />
            एवं
            <Heart size={17} fill="currentColor" />
          </div>

           <PersonCard
  title={<span style={{ fontWeight: 500 }}>{bride.name}</span>}
  label={<span style={{ fontWeight: 500 }}>वधू पक्ष</span>}
>
            सुपुत्री — <b>{bride.father}</b> एवं{' '}
            <b>{bride.mother}</b>
            <br />

            {bride.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </PersonCard>

        </div>
      </section>

      {/* ================= WEDDING RITUALS ================= */}

      <section className="section mangalik">

        <Petals />

        <div className="section-inner narrow">
<SectionHeading eyebrow={<span style={{ fontWeight: 700 }}>शुभ अवसरों का क्रम</span>}>
  विवाह की रस्में
</SectionHeading>

          <div className="timeline">

            {events.map((event, index) => (
              <EventCard
                key={event.title}
                index={['01', '02', '03', '04'][index]}
                {...event}
              />
            ))}

          </div>

        </div>
      </section>

      {/* ================= COUNTDOWN ================= */}

      <Countdown />

      {/* ================= VENUE ================= */}

      <section className="section venue">

        <Petals />

        <div className="section-inner narrow">

          <SectionHeading eyebrow="पता एवं आवश्यक जानकारी">
            स्थान विवरण
          </SectionHeading>

          <EventCard
            dark
            icon="⌂"
            title="वर पक्ष का पता"
            title2="राहुल सिंह"
          >
            {groom.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </EventCard>

          <EventCard
            dark
            icon="❀"
            title="वधू पक्ष का पता"
            title2="सोनम सिंह"
          >
            {bride.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </EventCard>

          <div className="barat-card">
<div className="eyebrow" style={{ fontWeight: 700 }}>
  ♕ बारात   प्रस्थान ♕
</div>

            <div className="barat-time">
              दोपहर 3 बजे
            </div>

            <p>
              निजी वाहन से
            </p>

            <h3>
              गंगाजल बड़ा बगीचा (सोनपुर)
            </h3>

            <p>
              के लिए प्रस्थान करें।
            </p>

          </div>

        </div>
      </section>

      {/* ================= HOST ================= */}

      <section className="section host">

        <Petals />

        <div className="section-inner narrow">

          <div className="host-seal">
            ✦
          </div>

<div className="eyebrow" style={{ fontWeight: 600, color: '#000' }}>
  सादर निवेदन
</div>

          <div className="host-quote">
            “आप आएँगे तो इस शुभ अवसर की शोभा बढ़ेगी,
            <br />
            आपका स्नेह और आशीर्वाद ही हमारा सबसे बड़ा उपहार होगा।”
          </div>

         <div className="eyebrow" style={{ fontWeight: 600, color: '#000' }}>
  वर-वधू के परिवार की ओर से
</div>
          <h2 className="script host-name">
            सादर आमंत्रण
          </h2>

          <p className="host-sub">

            श्री सचिन्द्र सिंह एवं श्रीमती प्रमिला देवी

          </p>

          <div className="host-line" />

          <p>
            आप सभी सपरिवार पधारकर नवविवाहित दंपति को
            <br />
            अपना स्नेह एवं आशीर्वाद प्रदान करें।
          </p>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <Petals />

        <div className="footer-frame" />

        <div className="script footer-name">
          राहुल संग सोनम
        </div>

        <div className="footer-date">
          24 नवम्बर 2026 · गंगाजल बड़ा बगीचा · सोनपुर
        </div>

        <div className="footer-mantra">
          ॥ शुभ विवाह ॥
        </div>

      </footer>

    </main>
  )
}


/* =========================================================
   PERSON CARD
========================================================= */

function PersonCard({ title, label, children }) {
  return (
    <div className="person-card">

      <div className="card-label">
        {label}
      </div>

      <h3 className="script">
        {title}
      </h3>

      <div className="mini-rule">
        ✦
      </div>

      <p>
        {children}
      </p>

    </div>
  )
}


/* =========================================================
   EVENT CARD
========================================================= */

function EventCard({
  icon,
  title,
  title2,
  date,
  day,
  children,
  dark,
  index,
}) {

  return (
    <div
      className={`
        event-card
        ${dark ? 'dark' : ''}
        ${!dark ? 'ritual-hover-card' : ''}
      `}
    >

      {/* Hover shine */}
      {!dark && (
        <div className="ritual-shine" />
      )}

      {/* Number */}
      {index && (
        <div className="event-index">
          {index}
        </div>
      )}

      {/* Icon */}
      <div className="event-icon">
        {icon}
      </div>

      {/* Title */}
      <div className="event-label">
        {title}
      </div>

      {/* Second title */}
      {title2 && (
        <h3 className="script">
          {title2}
        </h3>
      )}

      {/* Date */}
      {date && (
        <>
          <h3 className="event-date">
            {date}
          </h3>

          <div className="event-day">
            {day}
          </div>
        </>
      )}

      <div className="event-divider" />

      <p>
        {children}
      </p>

    </div>
  )
}

export default App