// ContactBlock.jsx — demande de devis.

function ContactBlock({ onSubmit }) {
  const [mission, setMission] = React.useState("Photo / vidéo aérienne");
  const [format, setFormat] = React.useState("Les deux");
  const [submitted, setSubmitted] = React.useState(false);
  const fieldLabel = {
    font: '700 9.5px/1 var(--ff-body)', letterSpacing: '0.32em',
    textTransform: 'uppercase', color: T.sumi, marginBottom: 8,
  };
  const fieldBase = {
    fontFamily: 'var(--ff-body)', fontSize: 13, color: T.sumi,
    background: T.washi, border: `1px solid ${T.rule}`, borderRadius: 2,
    padding: '11px 14px', outline: 'none', width: '100%', boxSizing: 'border-box',
  };

  if (submitted) {
    return (
      <div style={{ background: T.ink, color: T.washi, padding: 56, position: 'relative', overflow: 'hidden' }}>
        <TechGrid size={80}/>
        <div style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
          <Hanko size={56}/>
          <div style={{ fontFamily: 'var(--ff-display)', fontStyle: 'italic', fontSize: 32, color: T.bamboo, marginTop: 24 }}>
            Demande reçue.
          </div>
          <p style={{ color: '#E2D4B7', marginTop: 14, maxWidth: 440, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'var(--ff-display)', fontSize: 16, fontStyle: 'italic' }}>
            Devis personnalisé sous 24 h, avec plan de vol et fenêtres de tournage.
          </p>
          <div style={{ marginTop: 28 }}>
            <Button kind="ghostDark" small onClick={() => setSubmitted(false)}>Envoyer une autre demande</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: T.washi100, padding: 48, position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48 }}>
        <div>
          <Eyebrow num="天">Prenons contact</Eyebrow>
          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 28, fontWeight: 700, color: T.ink, marginTop: 16, letterSpacing: '0.04em' }}>
            Parlons de<br/>
            <span style={{ fontStyle: 'italic', color: T.lacquer }}>votre mission.</span>
          </h3>
          <p style={{ fontSize: 13, color: T.mist, marginTop: 14, lineHeight: 1.7 }}>
            Devis personnalisé, gratuit sous 24 h.
          </p>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 12, color: T.sumi, marginTop: 20, lineHeight: 1.9 }}>
            +33 7 49 10 61 91<br/>
            vol@tengudrone.com<br/>
            France entière
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); onSubmit && onSubmit(); }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            <div style={fieldLabel}>Nom</div>
            <input type="text" defaultValue="" placeholder="Nom et société" style={fieldBase}/>
          </div>
          <div>
            <div style={fieldLabel}>Email</div>
            <input type="email" defaultValue="" placeholder="contact@societe.fr" style={fieldBase}/>
          </div>
          <div>
            <div style={fieldLabel}>Type de prestation</div>
            <select value={mission} onChange={(e) => setMission(e.target.value)} style={fieldBase}>
              <option>Photo / vidéo aérienne</option>
              <option>Pack immobilier</option>
              <option>Corporate / inauguration</option>
              <option>Clip FPV promotionnel</option>
              <option>Mariage</option>
              <option>Événementiel</option>
              <option>Studio &amp; indoor</option>
              <option>Contenus réseaux</option>
            </select>
          </div>
          <div>
            <div style={fieldLabel}>Livrable</div>
            <div style={{ display: 'inline-flex', border: `1px solid ${T.rule}`, background: T.washi, borderRadius: 2 }}>
              {["Photo", "Vidéo", "Les deux"].map((s) => (
                <button key={s} type="button" onClick={() => setFormat(s)}
                  style={{
                    font: '700 9.5px/1 var(--ff-body)', letterSpacing: '0.32em', textTransform: 'uppercase',
                    padding: '11px 16px', border: 'none',
                    background: format === s ? T.ink : 'transparent',
                    color: format === s ? T.washi : T.mist, cursor: 'pointer',
                  }}>{s}</button>
              ))}
            </div>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={fieldLabel}>Votre mission</div>
            <textarea defaultValue="" placeholder="Lieu, date souhaitée, durée, livrables attendus."
              style={{ ...fieldBase, minHeight: 96, resize: 'vertical', fontFamily: 'var(--ff-body)' }}/>
          </div>
          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <Tagline/>
            <Button kind="primary">Demander un devis</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

window.ContactBlock = ContactBlock;
