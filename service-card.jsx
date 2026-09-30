// ServiceCard.jsx — bamboo-corner-framed service tile with entry price.

function ServiceCard({ num, name, ja, desc, from, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <CornerFrame color={T.bamboo} size={14} inset={8}
      style={{
        background: T.washi100,
        boxShadow: hover ? `0 0 0 1px ${T.ink}` : `0 0 0 1px transparent`,
        transition: 'box-shadow 150ms cubic-bezier(.2,.7,.3,1)',
        cursor: 'pointer',
        padding: '32px 28px 28px',
        minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}/>
      <div style={{ position: 'relative', pointerEvents: 'none' }}>
        <div style={{ fontFamily: 'var(--ff-jp-serif)', fontSize: 22, color: T.lacquer, marginBottom: 18 }}>{num}</div>
        <div style={{
          fontFamily: 'var(--ff-display)', fontSize: 22, fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase', color: T.ink, lineHeight: 1.1,
        }}>
          {name} <span style={{ fontFamily: 'var(--ff-jp-serif)', fontSize: 14, fontWeight: 500, color: T.lacquer, textTransform: 'none', letterSpacing: '0.04em', marginLeft: 6 }}>{ja}</span>
        </div>
        <p style={{ fontSize: 13, color: T.mist, marginTop: 10, lineHeight: 1.6 }}>{desc}</p>
      </div>
      <div style={{ position: 'relative', pointerEvents: 'none' }}>
        {from && (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, paddingTop: 16, borderTop: `1px solid ${T.rule}` }}>
            <span style={{ fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase', color: T.mist }}>Dès</span>
            <span style={{ fontFamily: 'var(--ff-display)', fontSize: 22, fontWeight: 700, color: T.lacquer }}>{from}</span>
          </div>
        )}
        <div style={{ fontSize: 10, letterSpacing: '0.42em', textTransform: 'uppercase', color: T.ink, marginTop: 14 }}>
          En savoir plus <span style={{ color: T.lacquer, marginLeft: 6 }}>›</span>
        </div>
      </div>
    </CornerFrame>
  );
}

window.ServiceCard = ServiceCard;
