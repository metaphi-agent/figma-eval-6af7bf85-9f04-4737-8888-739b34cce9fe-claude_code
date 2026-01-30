export default function SalesMapping() {
  return (
    <div className="rounded-[20px] bg-white p-8 border border-grey-100" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h2 className="mb-6 text-xl font-semibold text-primary-dark">Sales Mapping by Country</h2>

      <div className="relative">
        {/* Simplified world map illustration */}
        <svg viewBox="0 0 380 229" className="w-full" style={{ height: '229px' }}>
          {/* Background map shapes */}
          <g opacity="0.2" fill="#E7E9ED">
            {/* North America */}
            <path d="M40,60 Q50,40 80,45 L100,50 L110,70 L100,90 L80,95 Q50,90 40,80 Z" />
            {/* South America */}
            <path d="M90,120 L100,115 L115,130 Q120,150 110,170 L95,165 Q85,145 90,120 Z" />
            {/* Europe */}
            <path d="M160,40 L180,38 L190,50 L185,65 L170,68 L160,55 Z" />
            {/* Africa */}
            <path d="M155,75 L175,72 L190,85 Q195,110 185,130 L170,135 Q160,115 155,95 Z" />
            {/* Asia */}
            <path d="M220,45 L260,40 L290,55 L295,75 L285,90 L260,95 L240,85 L225,70 Z" />
            {/* Australia */}
            <path d="M270,140 L290,138 L300,150 L295,165 L280,168 L270,155 Z" />
          </g>

          {/* Colored regions representing sales data */}
          {/* Yellow - South America */}
          <ellipse cx="110" cy="145" rx="25" ry="30" fill="#FFC922" opacity="0.7" />

          {/* Red - North America */}
          <ellipse cx="75" cy="75" rx="30" ry="25" fill="#F64E60" opacity="0.7" />

          {/* Purple - Europe */}
          <ellipse cx="175" cy="55" rx="22" ry="20" fill="#8C52FF" opacity="0.7" />

          {/* Blue - Asia */}
          <ellipse cx="265" cy="70" rx="35" ry="28" fill="#4E65FF" opacity="0.7" />

          {/* Green - Australia */}
          <ellipse cx="285" cy="155" rx="20" ry="18" fill="#2DCE89" opacity="0.7" />
        </svg>
      </div>

      <div className="mt-6 text-center text-xs text-grey-700">
        <p>Sales distribution across major regions</p>
      </div>
    </div>
  );
}
