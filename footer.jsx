// Footer.jsx — sumi ground with bamboo type, colophon, contact, sections.

function Footer({ onNav }) {
  return (
    <footer style={{ background: T.sumi, color: T.bamboo, padding: '72px 56px 56px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 56 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <Logo invert size={42}/>
            <Wordmark size={20} onDark/>
          </div>
          <div style={{ fontFamily: 'var(--ff-display)', fontStyle: 'italic', fontSize: 15, color: T.bamboo, marginTop: 4, lineHeight: 1.7, maxWidth: 380 }}>
            Vidéo, vidéo par drone et photographie partout en France. Immobilier, corporate, mariage, événementiel, studio et indoor.
          </div>
          <div style={{ marginTop: 22 }}><Tagline onDark/></div>
        </div>
        <div>
          <h4 style={{ color: T.washi, marginBottom: 16, fontSize: 11, letterSpacing: '0.32em', fontFamily: 'var(--ff-body)', fontWeight: 700, textTransform: 'uppercase' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 12, lineHeight: 2, color: 'rgba(245,245,240,.65)' }}>
            {FAMILIES.map((fam) => (
              <li key={fam.slug}><a onClick={(e) => { e.preventDefault(); onNav("/services"); }} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{fam.kicker}</a></li>
            ))}
            <li><a onClick={(e) => { e.preventDefault(); onNav("/services"); }} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Services & tarifs 2026</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: T.washi, marginBottom: 16, fontSize: 11, letterSpacing: '0.32em', fontFamily: 'var(--ff-body)', fontWeight: 700, textTransform: 'uppercase' }}>Studio</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 12, lineHeight: 2, color: 'rgba(245,245,240,.65)' }}>
            <li>Opérateurs certifiés DGAC</li>
            <li>Catégorie Specific</li>
            <li>Assurance RC professionnelle</li>
            <li>Livrables J+3 à J+7</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: T.washi, marginBottom: 16, fontSize: 11, letterSpacing: '0.32em', fontFamily: 'var(--ff-body)', fontWeight: 700, textTransform: 'uppercase' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 12, lineHeight: 2, color: 'rgba(245,245,240,.65)' }}>
            <li>+33 7 49 10 61 91</li>
            <li>video@tengudrone.fr</li>
            <li>www.tengudrone.fr</li>
            <li>France entière</li>
          </ul>
        </div>
      </div>
      <div style={{
        maxWidth: 1320, margin: '56px auto 0', paddingTop: 24,
        borderTop: '1px solid rgba(245,245,240,.18)',
        display: 'flex', flexWrap: 'wrap', gap: '14px 40px', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase',
      }}>
        <span>© MMXXVI · Tengu Drone</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav("/legal/mentions"); }} style={{ color: 'inherit', textDecoration: 'none' }}>Mentions légales</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav("/legal/confidentialite"); }} style={{ color: 'inherit', textDecoration: 'none' }}>Confidentialité</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav("/legal/cgv"); }} style={{ color: 'inherit', textDecoration: 'none' }}>CGV</a>
        </div>
        <span>Site réalisé par Shorai Consulting</span>
        <span>Tarifs indicatifs HT · Document non contractuel</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
