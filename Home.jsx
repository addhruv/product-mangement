import React from 'react'

function Home({ allProducts = [] }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to My Product Showcase
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Hi, I'm Dhruv. Check out my collection of amazing products!
          </p>
        </div>

        {/* Products Grid */}
        {allProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-600">No products available yet</h2>
            <p className="mt-2 text-gray-500">Head over to the Dashboard to add some products!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product, index) => (
              <div key={index} className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Product Image */}
                <div className="w-full h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={product.picture} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                    }}
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                  <div className="h-px w-1/4 bg-indigo-500 mb-4"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mt-6">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home