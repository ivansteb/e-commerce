import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
        <div className="bg-purple-900/10 rounded-lg p-4 m-2 w-64 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/product/1" className="block text-center mb-4">
                <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover rounded-lg mb-2" />
                <h2 className="text-lg font-semibold text-purple-200">Product Name</h2>
                <p className="text-gray-400">$19.99</p>
            </Link>
            <button 
                className="bg-purple-800 text-purple-300 py-2 px-4 rounded hover:bg-purple-900 hover:text-purple-200 hover:cursor-pointer transition duration-300 w-full"
            >
                Add to cart
            </button>
        </div>
    </>
  )
}

export default ProductCard