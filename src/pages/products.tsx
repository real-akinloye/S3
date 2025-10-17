
export default function Products() {
  const products = [
    { name: 'Hybrid Inverter', image: '/IVGM50KHP3G02.71-1.png' },
    { name: 'Lithium Battery', image: '/IVGM50KHP3G02.72-1.png' },
    { name: 'Solar Panel', image: '/residential-solar-panel-installation-on-house-roof.jpg' },
    { name: 'Charge Controller', image: '/inverter-system.jpg' },
  ];
  return (
    <div className="min-h-screen w-full bg-accent flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-clash text-primary mb-10 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.name} className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg p-6 flex flex-col items-center animate-zoom-up">
            <img src={product.image} alt={product.name} className="h-32 w-auto mb-4 rounded-xl shadow-md" />
            <div className="text-white font-bold text-xl font-satoshi mb-2 text-center">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
