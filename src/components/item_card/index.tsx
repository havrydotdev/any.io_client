import "./item_card.css";

type ItemCardProps = {
  product: Product;
};

const ItemCard = ({ product }: ItemCardProps) => {
  return (
    <div className='item_container'>
      <img src={product.image.url} width={235} height={235} />
      <h3 className='item_title'>{product.title}</h3>
      <div className="item_price_container">
        <p className='item_price'>${product.price}</p>
        {product.discount && <p className='item_discount'>{product.discount.value}</p>}
      </div>
    </div>
  );
};

export default ItemCard;
