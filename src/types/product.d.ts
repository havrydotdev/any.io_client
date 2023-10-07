type Product = {
  title: string;
  description: string;
  discount: Discount;
  image: Image;
  price: number;
  category: Category;
} & BaseEntity;
