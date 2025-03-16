import React from 'react'

function Dashboard({ allProducts, setAllProducts }) {
    function handeSubmit(e) {
        console.log("Form Submitted")
        e.preventDefault()
        
        let Obj = {
            name: e.target[0].value,
            picture: e.target[1].value,
            description: e.target[2].value
        }
        setAllProducts([...allProducts, Obj]);
    }
    
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Welcome to your Dashboard
            </h1>
            
            <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Product</h2>
                
                <form onSubmit={handeSubmit} className="space-y-4">
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter name of product..." 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter picture URL of product..." 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter description of product..." 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Dashboard