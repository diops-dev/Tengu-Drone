// ui.jsx — atoms used across the Tengu Drone site kit.
// All styling goes through CSS variables defined in colors_and_type.css.

const T = {
  ink: "#3C3489",
  ink900: "#1F1A52",
  ink800: "#2A256B",
  ink100: "#D6D2EC",
  lacquer: "#9B2226",
  bamboo: "#C4A882",
  bamboo200: "#E2D4B7",
  washi: "#FFFFFF",
  washi100: "#F4F4F7",
  sumi: "#2D2D2D",
  mist: "#7B7591",
  rule: "rgba(45,45,45,.16)",
  ruleD: "rgba(245,245,240,.18)",
};

function Eyebrow({ children, num, onDark, color }) {
  const c = color || (onDark ? T.bamboo : T.lacquer);
  return (
    <div style={{
      font: '400 11px/1 var(--ff-body)',
      letterSpacing: '0.42em', textTransform: 'uppercase',
      color: c, display: 'inline-flex', alignItems: 'center', gap: 12,
    }}>
      <span style={{ width: 28, height: 1, background: c, opacity: 0.6 }} />
      {num && <span style={{ fontFamily: 'var(--ff-jp-serif)', fontSize: 11, letterSpacing: 0 }}>{num}</span>}
      <span>{children}</span>
    </div>
  );
}

function Hanko({ size = 38, char = "天" }) {
  return (
    <div style={{
      width: size, height: size, background: T.lacquer, color: T.washi,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--ff-jp-serif)', fontWeight: 700, fontSize: size * 0.56, lineHeight: 1,
    }}>{char}</div>
  );
}

function Wordmark({ size = 18, onDark, stack, accent }) {
  const accentColor = accent || (onDark ? T.bamboo : T.lacquer);
  const color = onDark ? T.washi : T.ink;
  return (
    <span style={{
      fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: size, color,
      display: 'inline-flex', flexDirection: stack ? 'column' : 'row',
      alignItems: stack ? 'center' : 'baseline',
      gap: stack ? 4 : '0.4em', whiteSpace: 'nowrap', lineHeight: stack ? 0.95 : 1,
    }}>
      <span style={{ letterSpacing: stack ? '0.24em' : '0.06em' }}>TENGU</span>
      <span style={{
        fontFamily: 'var(--ff-body)', fontWeight: 400,
        fontSize: size * (stack ? 0.32 : 0.42),
        letterSpacing: '0.46em', textTransform: 'uppercase',
        color: accentColor, marginTop: stack ? 6 : 0,
      }}>DRONE</span>
    </span>
  );
}

function Logo({ size = 32, invert }) {
  return <img src={invert ? "logo-invert.svg" : "logo.svg"} width={size} height={size} alt="Tengu Drone"/>;
}

function Tagline({ onDark }) {
  return (
    <span style={{
      fontFamily: 'var(--ff-body)', fontStyle: 'italic',
      fontSize: 11, letterSpacing: '0.46em',
      textTransform: 'uppercase', color: onDark ? T.bamboo : T.lacquer,
    }}>Precision&nbsp;is&nbsp;a&nbsp;ritual</span>
  );
}

function Button({ kind = "primary", children, onClick, small, ...rest }) {
  const base = {
    fontFamily: 'var(--ff-body)', fontSize: small ? 10 : 11, fontWeight: 700,
    letterSpacing: '0.32em', textTransform: 'uppercase',
    padding: small ? '9px 18px' : '13px 24px',
    border: 'none', borderRadius: 0, cursor: 'pointer', lineHeight: 1,
    transition: 'all 150ms cubic-bezier(.2,.7,.3,1)',
  };
  const variants = {
    primary: { background: T.ink, color: T.washi },
    ghost:   { background: 'transparent', color: T.ink, border: `1px solid ${T.ink}` },
    ghostDark: { background: 'transparent', color: T.washi, border: `1px solid ${T.bamboo}` },
    seal:    { background: T.lacquer, color: T.washi },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary:   { background: T.ink900 },
    ghost:     { background: T.ink, color: T.washi },
    ghostDark: { background: T.bamboo, color: T.sumi },
    seal:      { background: "#6F1518" },
  };
  return (
    <button {...rest} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[kind], ...(hover ? hoverStyles[kind] : {}) }}>
      {children}
    </button>
  );
}

function CornerFrame({ children, color = T.bamboo, size = 18, inset = 10, ...rest }) {
  const corner = (pos) => ({
    position: 'absolute', width: size, height: size,
    borderColor: color, borderStyle: 'solid',
    ...pos,
  });
  return (
    <div {...rest} style={{ position: 'relative', ...rest.style }}>
      <div style={corner({ top: inset, left: inset, borderWidth: '1px 0 0 1px' })}/>
      <div style={corner({ top: inset, right: inset, borderWidth: '1px 1px 0 0' })}/>
      <div style={corner({ bottom: inset, left: inset, borderWidth: '0 0 1px 1px' })}/>
      <div style={corner({ bottom: inset, right: inset, borderWidth: '0 1px 1px 0' })}/>
      {children}
    </div>
  );
}

// Technical 80×80 grid overlay used on ink backgrounds
function TechGrid({ size = 80, onDark = true, opacity = 0.04 }) {
  const color = onDark ? `rgba(245,245,240,${opacity})` : `rgba(45,45,45,${opacity * 1.4})`;
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
    }}/>
  );
}

function BambooGlow({ opacity = 0.16 }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: `radial-gradient(ellipse 60% 50% at 78% 28%, rgba(196,168,130,${opacity}), transparent 60%)`,
    }}/>
  );
}

// Sumi-e mountain band for landscape applications
function MountainBand({ height = 220 }) {
  return (
    <svg viewBox="0 0 1200 300" preserveAspectRatio="none"
      style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height, pointerEvents: 'none' }}>
      <path d="M 0 200 L 180 80 L 320 160 L 540 40 L 700 130 L 920 60 L 1080 110 L 1200 80 L 1200 300 L 0 300 Z"
            fill="#2A256B" opacity="0.55"/>
      <path d="M 0 240 L 140 180 L 280 210 L 480 160 L 620 200 L 820 150 L 1000 190 L 1200 170 L 1200 300 L 0 300 Z"
            fill="#1F1A52" opacity="0.7"/>
    </svg>
  );
}

Object.assign(window, { T, Eyebrow, Hanko, Wordmark, Logo, Tagline, Button, CornerFrame, TechGrid, BambooGlow, MountainBand });
