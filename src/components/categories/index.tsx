import axios from "axios";
import "./categories.css";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchCategories = async (): Promise<Category[]> => {
  const { data: res } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/categories`
  );

  return res.data.categories as Category[];
};

const Categories = () => {
  const { isLoading, data } = useQuery("categories", fetchCategories);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      {data!.map((category: Category) => (
        <Link
          key={category.id}
          to={`/products?category=${category.id}`}
          className='category'
        >
          {category.title}
        </Link>
      ))}
    </section>
  );
};

export default Categories;
