// Nav.jsx — top nav for the Tengu Drone site.

function Nav({ route, onNav, variant = "solid" }) {
  const isTrans = variant === "transparent";
  const links = [
    { id: "/", label: "Accueil" },
    { id: "/services", label: "Services & tarifs" },
    { id: "/contact", label: "Contact" },
  ];
  return (
    <nav style={{
      position: isTrans ? 'absolute' : 'relative',
      top: 0, left: 0, right: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '22px 56px',
      background: isTrans ? 'transparent' : T.ink,
      borderBottom: isTrans ? '1px solid rgba(245,245,240,.18)' : 'none',
    }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNav("/"); }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <Logo invert size={30}/>
        <Wordmark size={16} onDark/>
      </a>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {links.map((l) => {
          const active = (l.id === "/" && route === "/") ||
                         (l.id !== "/" && route.startsWith("/" + l.id.split("/")[1]));
          return (
            <a key={l.id} href="#"
              onClick={(e) => { e.preventDefault(); onNav(l.id); }}
              style={{
                fontFamily: 'var(--ff-body)', fontSize: 10.5, letterSpacing: '0.32em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: active ? T.washi : T.bamboo,
                paddingBottom: 4,
                borderBottom: active ? `1px solid ${T.washi}` : '1px solid transparent',
                transition: 'all 150ms cubic-bezier(.2,.7,.3,1)',
              }}
              onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = T.washi; }}
              onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = T.bamboo; }}>
              {l.label}
            </a>
          );
        })}
        {!isTrans && <Button kind="ghostDark" small onClick={() => onNav("/contact")}>Demander un devis</Button>}
      </div>
    </nav>
  );
}

window.Nav = Nav;
