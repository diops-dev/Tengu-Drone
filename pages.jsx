// Pages.jsx — ServiceDetail (per family), Tarifs, Contact.

function PageHeader({ eyebrow, num, ja, title, italic, lead }) {
  return (
    <header style={{
      background: T.ink, color: T.washi, padding: '140px 56px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <TechGrid size={80}/>
      <BambooGlow/>
      <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{
          font: '400 11px/1 var(--ff-body)', letterSpacing: '0.5em', textTransform: 'uppercase',
          color: T.bamboo, marginBottom: 32, display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <span style={{ width: 28, height: 1, background: T.bamboo, opacity: 0.6 }}/>
          {num && <span style={{ fontFamily: 'var(--ff-jp-serif)', fontSize: 14, letterSpacing: '0.08em' }}>{num}</span>}
          <span>{eyebrow}</span>
        </div>
        <h1 style={{
          fontFamily: 'var(--ff-display)', fontSize: 72, lineHeight: 1.0, letterSpacing: '0.02em',
          fontWeight: 700, color: T.washi, margin: 0, maxWidth: 900,
        }}>
          {title} {ja && <span style={{ fontFamily: 'var(--ff-jp-serif)', color: T.lacquer, fontSize: '0.5em', marginLeft: 18, letterSpacing: '0.04em' }}>{ja}</span>}
          {italic && <><br/><span style={{ fontStyle: 'italic', color: T.bamboo }}>{italic}</span></>}
        </h1>
        {lead && <p style={{ fontFamily: 'var(--ff-display)', fontSize: 19, fontStyle: 'italic', color: "#E2D4B7", marginTop: 24, maxWidth: 620, lineHeight: 1.5 }}>{lead}</p>}
      </div>
      <div style={{ position: 'absolute', top: 32, right: 56, zIndex: 3 }}><Hanko size={44}/></div>
    </header>
  );
}

function ServicesPage({ onNav }) {
  return (
    <main style={{ background: T.washi }} data-screen-label="Services & Tarifs">
      <PageHeader
        eyebrow="Services & tarifs · MMXXVI"
        num="値"
        title="Vidéo, vidéo par drone,"
        italic="photographie."
        lead="Trois familles de prestations, quatorze formules. Prix indicatifs HT, devis gratuit sous 24 h, valable 30 jours à compter de son émission."
      />
      <section style={{ padding: '96px 56px', maxWidth: 1320, margin: '0 auto' }}>
        <PriceTable/>
      </section>

      <section style={{ background: T.sumi, color: T.washi, padding: '88px 56px', position: 'relative', overflow: 'hidden' }}>
        <TechGrid size={80} opacity={0.05}/>
        <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56 }}>
          <div>
            <Eyebrow num="含" onDark>Inclus</Eyebrow>
            <div style={{ fontSize: 12, color: '#E2D4B7', marginTop: 8, letterSpacing: 0.4 }}>Ce que comprend chaque prestation.</div>
          </div>
          <IncludedGrid onDark/>
        </div>
      </section>

      <section style={{ padding: '96px 56px', maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56 }}>
          <Eyebrow num="条">Conditions</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: `1px solid ${T.rule}` }}>
            {CONDITIONS.map((c, i) => (
              <div key={c.label} style={{
                padding: '28px 30px',
                borderLeft: i % 2 ? `1px solid ${T.rule}` : 'none',
                borderTop: i > 1 ? `1px solid ${T.rule}` : 'none',
              }}>
                <div style={{ fontSize: 10, letterSpacing: '0.42em', textTransform: 'uppercase', color: T.lacquer }}>{c.label}</div>
                <p style={{ fontSize: 13, color: T.sumi, marginTop: 10, lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontSize: 11, color: T.mist, marginTop: 28, lineHeight: 1.8, maxWidth: 900, marginLeft: 276 }}>
          Tarifs indicatifs HT au 01/09/2026, susceptibles d'évolution · Document non contractuel, seul le devis signé fait foi.
        </div>
      </section>

      <section style={{ padding: '0 56px 96px', maxWidth: 1320, margin: '0 auto' }}>
        <ContactBlock/>
      </section>
      <Footer onNav={onNav}/>
    </main>
  );
}

function ContactPage({ onNav }) {
  return (
    <main style={{ background: T.washi }} data-screen-label="Contact">
      <PageHeader
        eyebrow="Prenons contact"
        num="天"
        title="Parlons de"
        italic="votre mission."
        lead="Devis personnalisé, gratuit sous 24 h. Acompte de 30 % à la commande, créneau confirmé après acompte."
      />
      <section style={{ padding: '80px 56px', maxWidth: 1320, margin: '0 auto' }}>
        <ContactBlock/>
      </section>
      <section style={{ padding: '0 56px 96px', maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${T.rule}` }}>
          <div style={{ padding: 36 }}>
            <Eyebrow num="壱">Téléphone</Eyebrow>
            <div style={{ fontFamily: 'var(--ff-display)', fontSize: 26, fontWeight: 700, color: T.ink, marginTop: 14, letterSpacing: '0.04em' }}>+33 7 49 10 61 91</div>
            <div style={{ fontSize: 13, color: T.mist, marginTop: 8, lineHeight: 1.7 }}>Du lundi au samedi</div>
          </div>
          <div style={{ padding: 36, borderLeft: `1px solid ${T.rule}` }}>
            <Eyebrow num="弐">Email</Eyebrow>
            <div style={{ fontFamily: 'var(--ff-display)', fontSize: 26, fontWeight: 700, color: T.ink, marginTop: 14, letterSpacing: '0.04em' }}>vol@tengudrone.com</div>
            <div style={{ fontSize: 13, color: T.mist, marginTop: 8, lineHeight: 1.7 }}>Réponse sous 24 h</div>
          </div>
          <div style={{ padding: 36, borderLeft: `1px solid ${T.rule}` }}>
            <Eyebrow num="参">Web · zone</Eyebrow>
            <div style={{ fontFamily: 'var(--ff-display)', fontSize: 26, fontWeight: 700, color: T.ink, marginTop: 14, letterSpacing: '0.04em' }}>www.tengudrone.com</div>
            <div style={{ fontSize: 13, color: T.mist, marginTop: 8, lineHeight: 1.7 }}>France entière · déplacement au réel</div>
          </div>
        </div>
      </section>
      <Footer onNav={onNav}/>
    </main>
  );
}

Object.assign(window, { PageHeader, ServicesPage, ContactPage });
