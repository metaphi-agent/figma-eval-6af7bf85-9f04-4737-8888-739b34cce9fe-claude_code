export default function TopProducts() {
  const products = [
    { id: 1, name: 'Home Decor Range', popularity: 45, sales: '45%' },
    { id: 2, name: 'Disney Princess Pink Bag 18', popularity: 29, sales: '29%' },
    { id: 3, name: 'Bathroom Essentials', popularity: 18, sales: '18%' },
    { id: 4, name: 'Apple Smartwatches', popularity: 25, sales: '25%' },
  ];

  const colors = ['#4E65FF', '#2DCE89', '#8C52FF', '#FFC922'];

  return (
    <div className="rounded-[20px] bg-white p-8 border border-grey-100" style={{ boxShadow: 'var(--shadow-card)' }}>
      <h2 className="mb-6 text-xl font-semibold text-primary-dark">Top Products</h2>

      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4 pb-4 border-b border-grey-100">
          <div className="w-12 text-center text-xs font-medium text-grey-700">#</div>
          <div className="flex-1 text-xs font-medium text-grey-700">Name</div>
          <div className="w-48 text-xs font-medium text-grey-700">Popularity</div>
          <div className="w-24 text-right text-xs font-medium text-grey-700">Sales</div>
        </div>

        {/* Products */}
        {products.map((product, index) => (
          <div key={product.id}>
            <div className="flex items-center gap-4 py-4">
              <div className="w-12 text-center text-base font-medium text-grey-900">
                {String(product.id).padStart(2, '0')}
              </div>
              <div className="flex-1 text-base font-normal text-grey-900">{product.name}</div>
              <div className="w-48">
                <div className="h-2 w-full rounded-full bg-grey-300 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${product.popularity}%`,
                      backgroundColor: colors[index],
                    }}
                  ></div>
                </div>
              </div>
              <div className="w-24 text-right">
                <span
                  className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: `${colors[index]}20`,
                    color: colors[index],
                  }}
                >
                  {product.sales}
                </span>
              </div>
            </div>
            {index < products.length - 1 && <div className="border-t border-grey-100"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
