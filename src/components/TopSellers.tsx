import { useEffect, useState } from "react";
import { Author, mockAuthors } from "../public/mock/mockAuthors";

const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        // Función para obtener 5 autores aleatorios del mock
        const getRandomAuthors = (allAuthors: Author[], count: number) => {
          const shuffled = [...allAuthors];

          // Algoritmo de Fisher-Yates para mezclar el array
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }

          // Devolvemos los primeros 'count' autores
          return shuffled.slice(0, count);
        };

        setTimeout(() => {
          const randomAuthors = getRandomAuthors(mockAuthors, 5);
          setAuthors(randomAuthors);
        }, 200);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  const handleFollow = (index: number) => {
    setAuthors((prevAuthor) => 
        prevAuthor.map((author, i) => 
            i === index ? { ...author, isFollowing: !author.isFollowing } : author)
    );
  };

  return (
    <div className="bg-purple-900/10 p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
      <h2 className="text-xl font-bold mb-5">Top sellers</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <article className="flex justify-center items-center my-2">
              <img
                src={author.image}
                alt={author.name}
                className="h-8 w-8 justify-center rounded-full mr-3"
              />
              {/* Nombre del autor y botón si lo estoy siguiendo o no */}
              <div className="ml-2 flex flex-col gap-2">
                <p className="text-sm">{author.name}</p>
              </div>
            </article>
            <button
              onClick={() => handleFollow(index)}
              className={`text-xs w-[100px] bg-purple-800 text-purple-100 py-1 px-3 rounded ${
                author.isFollowing
                  ? "bg-slate-800 text-purple-300 hover:bg-slate-300 hover:text-purple-900"
                  : "bg-purple-200 text-white-900 hover:bg-purple-900 hover:text-purple-200"
              }`}
            >
              {author.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
