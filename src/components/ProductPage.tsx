import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
        return <div>Loading...</div>;
    }

  return (
    <div>

    </div>
  )
}

export default ProductPage