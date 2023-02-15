import React, { useState, useEffect } from "react";
import { getProducts } from "./Item";
import Products from "./Products";
import SearchFilter from "./SearchFilter";
import Loading from "./Loading";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchvalue, setSearchvalue] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (newvalue) => {
    setSearchvalue(newvalue);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchvalue.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <SearchFilter onSearch={handleSearch} value={searchvalue} />
      {filteredProducts.length
        ? filteredProducts.map((product) => (
            <Products key={product.id} product={product} />
          ))
        : "No producs found"}
    </div>
  );
}

export default ProductList;
