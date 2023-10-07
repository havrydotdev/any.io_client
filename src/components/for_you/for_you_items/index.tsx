import axios from "axios";
import "./for_you_items.css";
import { useQuery } from "react-query";
import ItemCard from "../../item_card";

const fetchProducts = async (): Promise<Product[]> => {
  const { data: res } = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/products`
  );

  return res.data.products as Product[];
};

const ForYouItems = () => {
  const { isLoading, data } = useQuery("for_you_products", fetchProducts);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className='for_you_items_container'>
        <div className='for_you_items_title_container'>
          <h2 className='for_you_items_title'>hot deals for you</h2>
        </div>

        <ul className='for_you_items'>
          {data!.map((product: Product) => (
            <li key={product.id}>
              <ItemCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ForYouItems;
