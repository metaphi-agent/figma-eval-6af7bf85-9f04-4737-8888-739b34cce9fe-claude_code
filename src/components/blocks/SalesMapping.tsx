export function SalesMapping() {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card h-full">
      <h2 className="text-xl font-semibold text-primary-dark mb-6">Sales Mapping by Country</h2>

      {/* World Map */}
      <div className="flex items-center justify-center h-[220px]">
        <img
          src="./assets/icons/world-map.svg"
          alt="World Map"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
