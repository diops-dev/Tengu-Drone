// legal.jsx — mentions légales, politique de confidentialité, CGV.

const LEGAL = {
  mentions: {
    slug: "mentions",
    num: "壱",
    eyebrow: "Informations légales",
    title: "Mentions",
    italic: "légales.",
    lead: "Éditeur, hébergement, propriété intellectuelle et médiation.",
    sections: [
      { label: "Éditeur du site", text: "Tengu Drone Émotion – Micro-entreprise. Siège social : Île-de-France. SIREN 507 812 576 · SIRET 507 812 576 000 68. Responsable de la publication : Frédéric." },
      { label: "Contact", text: "Email : vol@tengudrone.com. Site : www.tengudrone.com." },
      { label: "Activité réglementée", text: "Opérateur de drones certifié DGAC, exploitation en catégorie Specific conformément aux règlements UE 2019/945 et 2019/947. Assurance responsabilité civile professionnelle (règl. UE 785/2004)." },
      { label: "Hébergement", text: "Site hébergé par Hostinger." },
      { label: "Propriété intellectuelle", text: "L'ensemble des contenus du site (textes, photographies, vidéos, marques et logo) est la propriété de Tengu Drone Émotion. Toute reproduction ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite." },
      { label: "Réalisation", text: "Conception et réalisation du site : ", link: { label: "Shorai Consulting", url: "https://shorai-group.com" } },
      { label: "Médiation", text: "En cas de litige avec un client consommateur, recours possible au médiateur de la consommation, dans un délai d'un an à compter de la réclamation écrite." },
    ],
  },
  confidentialite: {
    slug: "confidentialite",
    num: "弐",
    eyebrow: "Données personnelles",
    title: "Politique de",
    italic: "confidentialité.",
    lead: "Ce que nous collectons, pourquoi, combien de temps, et comment exercer vos droits.",
    sections: [
      { label: "Responsable de traitement", text: "Tengu Drone Émotion, Île-de-France. Contact : vol@tengudrone.com." },
      { label: "Données collectées", text: "Via le formulaire de devis : nom, société, email, téléphone, description de la mission. Via la navigation : données techniques strictement nécessaires au fonctionnement du site." },
      { label: "Finalités et base légale", text: "Répondre aux demandes de devis et gérer la relation client (exécution du contrat ou intérêt légitime). Aucune donnée n'est utilisée à des fins publicitaires sans consentement." },
      { label: "Durées de conservation", text: "Demandes de devis sans suite : 12 mois. Dossiers clients et documents comptables : 10 ans, conformément aux obligations légales. Images et rushes : conservés selon l'autorisation de diffusion accordée." },
      { label: "Destinataires", text: "Les données ne sont ni vendues ni cédées. Elles peuvent être transmises aux prestataires techniques nécessaires (hébergement, messagerie, comptabilité), agissant sur instruction et dans l'Union européenne." },
      { label: "Prises de vue aériennes", text: "Les captations sont réalisées dans le respect du droit à l'image et de la vie privée. Les personnes identifiables sur des images destinées à diffusion font l'objet d'une autorisation, ou d'un floutage à défaut." },
      { label: "Vos droits", text: "Accès, rectification, effacement, limitation, opposition et portabilité : écrire à vol@tengudrone.com. Réponse sous un mois. Réclamation possible auprès de la CNIL (www.cnil.fr)." },
      { label: "Cookies", text: "Le site n'utilise que des cookies techniques nécessaires à son fonctionnement. Aucun traceur publicitaire ou de mesure d'audience n'est déposé sans consentement préalable." },
    ],
  },
  cgv: {
    slug: "cgv",
    num: "参",
    eyebrow: "Conditions de vente",
    title: "Conditions générales",
    italic: "de vente.",
    lead: "Devis, réservation, réalisation, livrables et droits d'utilisation des images.",
    sections: [
      { label: "Objet", text: "Les présentes conditions régissent les prestations de captation photo et vidéo, aériennes et au sol, réalisées par Tengu Drone Émotion. Toute commande implique leur acceptation sans réserve." },
      { label: "Devis et prix", text: "Prix indicatifs HT, hors options. Chaque devis est personnalisé selon la complexité, la zone et les livrables. Le devis est gratuit, émis sous 24 h et valable 30 jours à compter de son émission. Seul le devis signé fait foi." },
      { label: "Réservation et paiement", text: "Acompte de 30 % à la commande, solde à la livraison. Le créneau est confirmé après réception de l'acompte. Paiement par virement sous 30 jours ; pénalités de retard au taux légal et indemnité forfaitaire de 40 € en cas de retard." },
      { label: "Zone d'intervention", text: "France entière. Frais de déplacement facturés au réel selon la mission." },
      { label: "Conditions de vol et report", text: "Report sans frais en cas de conditions de vol non conformes : vent, pluie, visibilité, zone réglementée ou refus d'autorisation. Une nouvelle date est proposée dans les meilleurs délais." },
      { label: "Annulation", text: "Annulation par le client plus de 7 jours avant la date : acompte remboursé. Moins de 7 jours : acompte conservé au titre des frais d'organisation. En cas d'annulation par le prestataire hors cas météo, l'acompte est intégralement remboursé." },
      { label: "Réalisation et livrables", text: "Brief préalable et plan de vol personnalisé. Livrables sous J+3 à J+7 selon la complexité. Rapport d'intervention et fichiers bruts sur demande. Support technique pendant 7 jours après livraison." },
      { label: "Retouches et validation", text: "Une série de retouches ou d'ajustements de montage est incluse. Toute demande supplémentaire fait l'objet d'un devis complémentaire. À défaut de retour sous 15 jours, les livrables sont réputés acceptés." },
      { label: "Droits d'utilisation", text: "Les fichiers livrés sont cédés pour l'usage défini au devis. Toute exploitation étendue — publicité, revente, cession à un tiers — fait l'objet d'un avenant. Le prestataire conserve la propriété intellectuelle des œuvres et le droit de les utiliser à des fins de démonstration, sauf clause de confidentialité." },
      { label: "Responsabilité et assurance", text: "Opérations conduites en catégorie Specific, conformément aux règlements UE 2019/945 et 2019/947. Assurance responsabilité civile professionnelle (règl. UE 785/2004). La responsabilité du prestataire est limitée au montant de la prestation." },
      { label: "Droit applicable", text: "Droit français. En cas de litige, les parties recherchent une solution amiable avant toute action ; à défaut, compétence des tribunaux du ressort du siège social." },
    ],
  },
};

function LegalPage({ route, onNav }) {
  const key = route.split("/")[2];
  const doc = LEGAL[key] || LEGAL.mentions;
  return (
    <main style={{ background: T.washi }} data-screen-label={"Légal · " + doc.title}>
      <PageHeader eyebrow={doc.eyebrow} num={doc.num} title={doc.title} italic={doc.italic} lead={doc.lead}/>
      <section style={{ padding: '80px 56px 96px', maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 32 }}>
            <Eyebrow num="四">Documents</Eyebrow>
            <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', display: 'grid', gap: 10 }}>
              {Object.values(LEGAL).map((d) => (
                <li key={d.slug}>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNav("/legal/" + d.slug); }}
                    style={{
                      fontSize: 12, letterSpacing: '0.06em', textDecoration: 'none',
                      color: d.slug === doc.slug ? T.ink : T.mist,
                      fontWeight: d.slug === doc.slug ? 700 : 400,
                    }}>{d.title.replace(/\.$/, '')} {d.italic.replace(/\.$/, '')}</a>
                </li>
              ))}
            </ul>
            <div style={{ fontSize: 11, color: T.mist, marginTop: 24, lineHeight: 1.7 }}>
              Mise à jour : 01/09/2026
            </div>
          </div>
          <div style={{ border: `1px solid ${T.rule}` }}>
            {doc.sections.map((s, i) => (
              <div key={s.label} style={{ padding: '28px 32px', borderTop: i ? `1px solid ${T.rule}` : 'none' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.42em', textTransform: 'uppercase', color: T.lacquer }}>{s.label}</div>
                <p style={{ fontSize: 14, color: T.sumi, marginTop: 10, lineHeight: 1.75, maxWidth: 820 }}>
                  {s.text}
                  {s.link && (
                    <a href={s.link.url} target="_blank" rel="noopener noreferrer"
                      style={{ color: T.lacquer, textDecoration: 'none', fontWeight: 600, borderBottom: `1px solid ${T.lacquer}` }}>
                      {s.link.label}
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer onNav={onNav}/>
    </main>
  );
}

Object.assign(window, { LEGAL, LegalPage });
