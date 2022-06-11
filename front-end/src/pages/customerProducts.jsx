import React, { useContext } from 'react';
import { Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Context from '../shared/contexts/Context';
import NavBar from '../shared/components/navBar';
import CardDrinks from '../shared/components/cardDrinks';
// import { getProducts } from '../shared/services/api';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

export default function CustomerProducts() {
  // const [products, setProducts] = useState([]);
  const { disableCartButton, products, getTotalAmount } = useContext(Context);
  const navigate = useNavigate();

  // function getTotalAmount() {
  //   let total = 0;
  //   if (userCart) {
  //     userCart.forEach((product) => {
  //       const totalProduct = product.count * product.price;
  //       total += totalProduct;
  //     });
  //   }
  //   setTotalAmount(total.toFixed(2).replace('.', ','));
  //   return totalAmount;
  // }

  function handleClick() {
    navigate('../customer/checkout', { replace: true });
  }
  // useEffect(() => {
  //   async function fetchAPI() {
  //     const response = await getProducts();
  //     setProducts(response);
  //   }
  //   fetchAPI();
  // }, []);
  return (
    <>
      <NavBar />
      {products.map((product, index) => (
        <CardDrinks product={ product } key={ index } />
      ))}
      <Fab
        variant="extended"
        // sx={ { pr: 0.1, pb: 0.1, position: 'fixed' } }
        style={ style }
        data-testid="customer_products__button-cart"
        onClick={ () => handleClick() }
        disabled={ disableCartButton }
      >
        <ShoppingCartIcon />
        <span>
          Ver carrinho R$:
        </span>
        <span data-testid="customer_products__checkout-bottom-value">
          {getTotalAmount()}
        </span>
      </Fab>
    </>
  );
}
