// price-table.jsx — the 2026 grille tarifaire: one block per family, one row per prestation.

function PriceRow({ item, last }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid', gridTemplateColumns: '1fr 140px', gap: 24, alignItems: 'baseline',
        padding: '20px 24px', borderBottom: last ? 'none' : `1px solid ${T.rule}`,
        background: hover ? T.washi100 : 'transparent',
        transition: 'background 150ms cubic-bezier(.2,.7,.3,1)',
      }}>
      <div>
        <div style={{ fontFamily: 'var(--ff-display)', fontSize: 19, fontWeight: 700, color: T.ink, letterSpacing: '0.02em' }}>{item.name}</div>
        <div style={{ fontSize: 12.5, color: T.mist, marginTop: 5, lineHeight: 1.6 }}>{item.desc}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase', color: T.mist }}>Dâs</div>
        <div style={{ fontFamily: 'var(--ff-display)', fontSize: 26, fontWeight: 700, color: T.lacquer, lineHeight: 1.1, marginTop: 4, whiteSpace: 'nowrap' }}>{item.price}</div>
      </div>
    </div>
  );
}

function PriceTable({ families = FAMILIES }) {
  return (
    <div style={{ display: 'grid', gap: 64 }}>
      {families.map((f) => (
        <section key={f.slug} id={f.slug}>
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56, alignItems: 'start' }}>
            <div>
              <Eyebrow num={f.num}>{f.kicker}</Eyebrow>
              <div style={{ fontFamily: 'var(--ff-jp-serif)', fontSize: 26, color: T.ink, marginTop: 14 }}>{f.ja}</div>
              <p style={{ fontSize: 12.5, color: T.mist, marginTop: 10, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 30, fontWeight: 700, color: T.ink, letterSpacing: '0.03em', marginBottom: 20 }}>{f.name}</h3>
              <div style={{ border: `1px solid ${T.rule}`, background: T.washi }}>
                {f.items.map((it, i) => <PriceRow key={it.name} item={it} last={i === f.items.length - 1}/>)}
              </div>
            </div>
          </div>
        </section>
      ))}
      <div style={{
        display: 'flex', justifyContent: 'space-between', paddingTop: 20, borderTop: `1px solid ${T.rule}`,
        fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: T.mist,
      }}>
        <span>Prix indicatifs HT · Devis gratuit sous 24 h</span>
        <span>Tarifs au 01/09/2026</span>
      </div>
    </div>
  );
}

function IncludedGrid({ onDark }) {
  const fg = onDark ? '#E2D4B7' : T.mist;
  const rule = onDark ? T.ruleD : T.rule;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 48, borderTop: `1px solid ${rule}` }}>
      {INCLUDED.map((t, i) => (
        <div key={t} style={{
          display: 'flex', gap: 14, alignItems: 'baseline',
          padding: '18px 0', borderBottom: i < INCLUDED.length - 2 ? `1px solid ${rule}` : 'none',
        }}>
          <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: onDark ? T.bamboo : T.lacquer }}>{String(i + 1).padStart(2, '0')}</span>
          <span style={{ fontSize: 14, color: onDark ? T.washi : T.sumi, lineHeight: 1.6 }}>{t}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { PriceTable, PriceRow, IncludedGrid });
