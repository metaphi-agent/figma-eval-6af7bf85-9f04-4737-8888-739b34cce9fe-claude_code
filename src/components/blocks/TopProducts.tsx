import clsx from 'clsx';

interface Product {
  rank: string;
  name: string;
  popularity: number;
  sales: string;
  color: string;
}

const products: Product[] = [
  { rank: '01', name: 'Home Decor Range', popularity: 45, sales: '45%', color: 'bg-chart-blue' },
  { rank: '02', name: "Disney Princess Pink Bag 18'", popularity: 29, sales: '29%', color: 'bg-chart-teal' },
  { rank: '03', name: 'Bathroom Essentials', popularity: 18, sales: '18%', color: 'bg-violet' },
  { rank: '04', name: 'Apple Smartwatches', popularity: 25, sales: '25%', color: 'bg-chart-blue' },
];

export function TopProducts() {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card">
      <h2 className="text-xl font-semibold text-primary-dark mb-6">Top Products</h2>

      {/* Table Header */}
      <div className="grid grid-cols-[40px_1fr_180px_80px] gap-4 text-sm text-gray-700 pb-4 border-b border-gray-100">
        <span>#</span>
        <span>Name</span>
        <span>Popularity</span>
        <span className="text-right">Sales</span>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-100">
        {products.map((product) => (
          <div
            key={product.rank}
            className="grid grid-cols-[40px_1fr_180px_80px] gap-4 items-center py-4"
          >
            <span className="text-sm text-gray-700">{product.rank}</span>
            <span className="text-sm font-medium text-gray-900">{product.name}</span>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={clsx('h-full rounded-full', product.color)}
                style={{ width: `${product.popularity}%` }}
              ></div>
            </div>
            <span className={clsx(
              'text-xs font-medium px-3 py-1 rounded-full text-right',
              product.color === 'bg-chart-blue' && 'bg-blue-100 text-chart-blue',
              product.color === 'bg-chart-teal' && 'bg-green-light text-chart-teal',
              product.color === 'bg-violet' && 'bg-violet-light text-violet'
            )}>
              {product.sales}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
