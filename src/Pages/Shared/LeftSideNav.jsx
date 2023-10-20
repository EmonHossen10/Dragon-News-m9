import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-3" >
      <h2 className="text-2xl">All Categories : {categories.length} </h2>

      <div >
        {categories.map((category) => (
          <Link 
          to={`/category/${category.id}`}
            className="block mb-3 ml-3 font-semibold text-xl"
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
