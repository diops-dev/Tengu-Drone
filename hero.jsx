// Hero.jsx — cover block for the Tengu Drone home page.

function Hero({ onNav }) {
  return (
    <header style={{
      background: T.ink, color: T.washi, position: 'relative', overflow: 'hidden',
      padding: '160px 56px 56px',
    }}>
      <TechGrid size={80}/>
      <BambooGlow/>

      <div style={{
        maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 2,
        display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'end',
      }}>
        <div>
          <div style={{
            font: '400 11px/1 var(--ff-body)', letterSpacing: '0.5em', textTransform: 'uppercase',
            color: T.bamboo, marginBottom: 36, display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span style={{ width: 28, height: 1, background: T.bamboo, opacity: 0.6 }}/>
            Vidéo · Vidéo par drone · Photographie <span style={{ fontFamily: 'var(--ff-jp-serif)', fontSize: 14, letterSpacing: '0.08em' }}>映像</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--ff-display)', fontSize: 96, lineHeight: 0.95, letterSpacing: '0.01em',
            fontWeight: 700, color: T.washi, margin: 0,
          }}>
            La précision<br/>
            <span style={{ fontStyle: 'italic', color: T.bamboo }}>est un rituel.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--ff-display)', fontSize: 21, fontStyle: 'italic',
            color: "#E2D4B7", marginTop: 28, maxWidth: 540, lineHeight: 1.5,
          }}>
            Des opérations aériennes sur mesure pour les professionnels qui refusent l'approximation. De l'image à la donnée, chaque prestation est conduite avec la même rigueur opérationnelle.
          </p>
          <div style={{ marginTop: 40, display: 'flex', gap: 14 }}>
            <Button kind="seal" onClick={() => onNav("/contact")}>Demander un devis</Button>
            <Button kind="ghostDark" onClick={() => onNav("/services")}>Services & tarifs</Button>
          </div>
        </div>

        <CornerFrame color={T.bamboo} size={22} inset={16}
          style={{
            background: 'rgba(31,26,82,.32)',
            border: '1px solid rgba(196,168,130,.45)',
            aspectRatio: '1 / 1',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
          <img src="logo-invert.svg" style={{ width: '62%', height: 'auto' }} alt="Ha-Uchiwa"/>
        </CornerFrame>
      </div>

      <div style={{
        maxWidth: 1320, margin: '120px auto 0', paddingTop: 28,
        borderTop: '1px solid rgba(245,245,240,.22)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        fontSize: 10.5, letterSpacing: '0.32em', textTransform: 'uppercase',
        color: T.bamboo, position: 'relative', zIndex: 2,
      }}>
        <span>Édition 2026 · MMXXVI</span>
        <div style={{ display: 'flex', gap: 28, color: '#E2D4B7' }}>
          <a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Image aérienne</a>
          <a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Mariage</a>
          <a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Événementiel</a>
          <a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Studio &amp; indoor</a>
        </div>
        <span>Certifié DGAC · France entière</span>
      </div>

      <div style={{ position: 'absolute', top: 32, right: 56, zIndex: 3 }}>
        <Hanko size={48}/>
      </div>
    </header>
  );
}

window.Hero = Hero;
