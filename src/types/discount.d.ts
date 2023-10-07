type Discount = {
  value: number;
  new_price: number;
  expires_at: Date;
} & BaseEntity;
