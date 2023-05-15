import Wrapper from "./cartModalItem.styles"

const CartModalItem = ({imageUrl, name, quantity, price}) => {
  return (
    <Wrapper>
      <img src={imageUrl} alt={name} />
      <div>
        <h5>{name}</h5>
        <h5>${price} x {quantity} </h5>
      </div>  
    </Wrapper>
  )
}

export default CartModalItem