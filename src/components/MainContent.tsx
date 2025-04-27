import { Tally3 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";
import axios from "axios";
import ProductCard from "./ProductCard";

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();

  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    if (keyword) {
      url += `&q=${keyword}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [currentPage, keyword]);

  const getFilteredProducts = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (filter) {
      case "cheap":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "expensive":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "popular":
        return filteredProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  };

  const filteredProducts = getFilteredProducts();

  const totalProducts = 100;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationNumbers = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - currentPage));

    }

    if (currentPage + 2 > totalPages) {
      startPage = Math.max(1, startPage - (2 - totalPages - currentPage));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  return (
    <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
      <div className="mb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative my-5">
            <button className="border px-4 py-2 rounded-full flex items-center">
              <Tally3 className="mr-2" />
              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toLowerCase() + filter.slice(1)}
            </button>

            {dropdownOpen && (
              <div className="absolute bg-white border border-purple-300 rounded mt-2 w-full sm:w-40">
                <button
                  onClick={() => setFilter("cheap")}
                  className="block px-4 py-2 w-full text-left bg-purple-900 hover:bg-purple-600 hover:text-purple-100"
                >
                  Cheap
                </button>
                <button
                  onClick={() => setFilter("expensive")}
                  className="block px-4 py-2 w-full text-left bg-purple-900 hover:bg-purple-600 hover:text-purple-100"
                >
                  Expensive
                </button>
                <button
                  onClick={() => setFilter("popular")}
                  className="block px-4 py-2 w-full text-left bg-purple-900 hover:bg-purple-600 hover:text-purple-100"
                >
                  Popular
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
              rating={product.rating}
              description={product.description}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 mx-2 rounded-full hover:cursor-pointer hover:bg-purple-900/20"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex flex-wrap justify-center">
            {getPaginationNumbers().map(page => (
                <button 
                    key={page} 
                    onClick={() => handlePageChange(page)} 
                    className={
                        `px-4 py-2 mx-1 rounded-full  ${page === currentPage 
                            ? 'bg-purple-600 text-white' 
                            : 'text-purple-200 hover:cursor-pointer hover:bg-purple-900/20'
                        }`
                    }
                >
                    {page}
                </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 mx-2 rounded-full hover:cursor-pointer hover:bg-purple-900/20"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
