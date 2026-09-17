// A distinctive placeholder (not a generic gray box) so the catalog still
// looks intentional before the client uploads real product photography.
// Swap it for a real photo any time by adding `image: "/images/products/x.jpg"`
// to that product in lib/data.js — ProductCard will use it automatically.

const PALETTES = {
  sante: ["#E7EEDD", "#6B8F52"],
  peau: ["#F4DCE2", "#A3164F"],
  cheveux: ["#F1E3C6", "#B98A3D"],
  sahraoui: ["#F4DCE2", "#3F5A31"],
  balea: ["#E7EEDD", "#7A0F3B"],
};

export default function ProductImagePlaceholder({ category, label }) {
  const [bg, accent] = PALETTES[category] ?? PALETTES.sante;
  const initial = (label || "A").trim().charAt(0);

  return (
    <svg viewBox="0 0 300 300" className="h-full w-full" role="img" aria-label={label}>
      <rect width="300" height="300" fill={bg} />
      <circle cx="150" cy="128" r="58" fill="none" stroke={accent} strokeWidth="2" opacity="0.5" />
      <path
        d="M150 70c10 20 10 40 0 54-10-14-10-34 0-54Zm0 54c20-7 40-3 53 10-16 10-37 7-53-10Zm0 0c-20-7-40-3-53 10 16 10 37 7 53-10Z"
        fill={accent}
        opacity="0.85"
      />
      <text
        x="150"
        y="150"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Markazi Text, serif"
        fontSize="42"
        fontWeight="700"
        fill={accent}
      >
        {initial}
      </text>
      <path
        d="M40 250 C 90 220, 210 220, 260 250"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  );
}
