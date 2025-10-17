// This page is now for services, but should only be used for /services route if needed.
// If you want to remove the /projects route, update App.tsx accordingly.
export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg text-gray-700 mb-10 max-w-xl text-center">Discover our range of solar energy services for homes, businesses, and industries.</p>
      {/* Example service cards, replace with real data as needed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src="/service-images/Service-1.png" alt="Service 1" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">Residential Solar Solutions</h2>
          <p className="text-gray-600 text-center">Custom rooftop solar systems for homes, providing reliable, affordable, and clean energy.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src="/service-images/Service-2.png" alt="Service 2" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">Commercial Solar Services</h2>
          <p className="text-gray-600 text-center">Large-scale solar arrays for businesses, supporting sustainable operations and cost savings.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src="/service-images/Service-3.png" alt="Service 3" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">Industrial Solar Farms</h2>
          <p className="text-gray-600 text-center">High-capacity solar farms powering industrial operations with clean, renewable energy.</p>
        </div>
      </div>
    </div>
  );
}
