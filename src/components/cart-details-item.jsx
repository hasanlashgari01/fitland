const CartDetailsTtem = ({ title, price }) => {
  return (
    <div className="flex justify-between">
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};
export default CartDetailsTtem;
