import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get<ProductProps>(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    }
  }, [id]);

  if (!product) {
    return (
      <p className="text-purple-200/20 text-center mt-5">
        Loading product details...
      </p>
    );
  }

  return (
    <div className="p-5 w-[60%]">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 bg-purple-800 text-purple-200 rounded"
      >
        Back
      </button>

      <img
        src={product.images[0]}
        alt={product.title}
        className="w-[50%] h-auto mb-5 rounded-md"
      />
      <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
      <p className="mb-4 text-purple-200/60 w-[70%]">{product.description}</p>
      <div className="flex">
        <p>Price: <span className="font-bold">${product.price}</span></p>
        <p className="ml-10">Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductPage;
