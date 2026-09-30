// data.jsx — service families and prestations, from the 2026 price list.

const FAMILIES = [
  {
    slug: "image",
    num: "壱",
    ja: "映像",
    kicker: "Image aérienne",
    name: "Photographie & Vidéo aérienne",
    desc: "Immobilier, cinéma, corporate, promotion. Capteurs 4K/8K, stabilisation 3 axes, colorimétrie professionnelle.",
    items: [
      { name: "Photo aérienne, demi-journée", desc: "Reportage photo, jusqu'à 3 h sur site, sélection retouchée.", price: "450 €" },
      { name: "Journée photo / vidéo complète", desc: "Captation aérienne + sol sur la journée, montage livré.", price: "1 250 €" },
      { name: "Pack immobilier, aérien + sol 8K", desc: "Bien résidentiel ou luxe, photos + vidéo de présentation.", price: "350 €" },
      { name: "Corporate / inauguration outdoor", desc: "Film d'entreprise, événement, tournage extérieur.", price: "600 €" },
      { name: "Clip FPV promotionnel", desc: "Vidéo dynamique immersive, montage rythmé.", price: "550 €" },
      { name: "Film promotionnel 8K ultra", desc: "Marque, collectivité, campagne, production haut de gamme.", price: "1 490 €" },
    ],
  },
  {
    slug: "evenementiel",
    num: "弐",
    ja: "祭り",
    kicker: "Mariage & Événementiel",
    name: "Mariage & Événementiel",
    desc: "Mariages, concerts, compétitions, événements corporate.",
    items: [
      { name: "Mariage FPV, drone seul", desc: "Couverture aérienne seule, film souvenir monté.", price: "750 €" },
      { name: "Mariage FPV + sol 8K", desc: "Aérien + plans sol cinéma 8K, montage complet.", price: "950 €" },
      { name: "Événementiel, captation 4 h", desc: "Salon, séminaire, inauguration, événement public.", price: "990 €" },
      { name: "Making-of / événement indoor", desc: "Coulisses, événement B2B, salon en intérieur.", price: "400 €" },
    ],
  },
  {
    slug: "studio",
    num: "参",
    ja: "室内",
    kicker: "Studio & Indoor",
    name: "Studio & Indoor, image 8K",
    desc: "Tournage par tous temps et en intérieur : la continuité de production, hiver comme été.",
    items: [
      { name: "Interview / portrait dirigeant", desc: "Captation studio ou sur site, lumière soignée.", price: "350 €" },
      { name: "Vidéo produit / e-commerce", desc: "Mise en valeur produit, plans détail 8K.", price: "290 € / produit" },
      { name: "Drone indoor : halls, concerts, sport", desc: "Vol en intérieur, gymnases, salles, industrie.", price: "490 €" },
      { name: "Pack contenus réseaux, 5 vidéos", desc: "Formats courts prêts à publier, fidélisation.", price: "390 €" },
    ],
  },
];

const INCLUDED = [
  "Brief préalable et plan de vol personnalisé",
  "Livrables sous J+3 à J+7 selon la complexité",
  "Opérateur certifié DGAC + drone adapté à la mission",
  "Rapport d'intervention + fichiers bruts sur demande",
  "Assurance RC mission incluse, aucune surprise",
  "Support technique pendant 7 jours après livraison",
];

const CONDITIONS = [
  { label: "Tarifs", text: "Prix indicatifs HT, hors options. Chaque devis est personnalisé selon la complexité, la zone et les livrables." },
  { label: "Zone d'intervention", text: "France entière. Frais de déplacement facturés au réel selon la mission." },
  { label: "Devis & validité", text: "Devis gratuit sous 24 h. Proposition valable 30 jours à compter de son émission." },
  { label: "Réservation", text: "Acompte de 30 % à la commande, solde à la livraison. Créneau confirmé après acompte." },
  { label: "Météo", text: "Report sans frais en cas de conditions de vol non conformes (vent, pluie, zone réglementée)." },
  { label: "Cadre légal", text: "Opérations en catégorie Specific, conformes aux règlements UE 2019/945 et 2019/947. Assurance RC pro (UE 785/2004)." },
];

function minPrice(f) {
  const nums = f.items.map((i) => parseInt(i.price.replace(/[^0-9]/g, ''), 10));
  const min = Math.min.apply(null, nums);
  return f.items.find((i) => parseInt(i.price.replace(/[^0-9]/g, ''), 10) === min).price;
}

Object.assign(window, { FAMILIES, INCLUDED, CONDITIONS, minPrice });
