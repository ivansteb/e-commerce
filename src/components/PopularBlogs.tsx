import { useEffect, useState } from "react"
import { PopularBlogs, mockPopularBlogs } from "../public/mock/mockPopularBlogs"
import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
    const [blogs, setBlogs] = useState<PopularBlogs[]>([])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Función para obtener 5 blogs aleatorios del mock
                const getRandomBlogs = (allBlogs: PopularBlogs[], count: number) => {
                    const shuffled = [...allBlogs]

                    // Algoritmo de Fisher-Yates para mezclar el array
                    for (let i = shuffled.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                    }

                    // Devolvemos los primeros 'count' blogs
                    return shuffled.slice(0, count)
                };

                setTimeout(() => {
                    const randomBlogs = getRandomBlogs(mockPopularBlogs, 5);
                    setBlogs(randomBlogs);
                }, 200)
            } catch (error) {
                console.error("Error fetching blogs:", error)
            }
        };

        fetchBlogs();
    }, []);



  return (
    <div className="bg-purple-900/10 p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
        <h2 className="text-xl font-bold mb-5">Popular blogs</h2>
        <ul>
            {blogs.map((blog, index) => (
                <li key={index} className="mb-4">
                    <div className="flex justify-between items-center">
                        <span className="font-bold mb-2">{blog.title}</span>
                    </div>
                    <p className="text-purple-200/50 text-sm">Publish by {blog.author}</p>
                    <div className="flex items-center mt-2">
                        <MessageCircle size={16} />
                        <span className="text-sm text-purple-200/50 mr-5 ml-1">{blog.likes}</span>
                        <ThumbsUp size={16} />
                        <span className="text-sm text-purple-200/50 mr-5 ml-1">{blog.comments}</span>
                    </div>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default PopularBlogs