import React, { useState, useEffect, useCallback } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const amountById = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const response = await api.get('/products');
        const data = response.data.map(product => ({
          ...product,
          formattedPrice: formatPrice(product.price),
        }));
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    loadProducts();
  }, []);

  const handleAddProduct = useCallback(
    productId => {
      dispatch(CartActions.addToCartRequest(productId));
    },
    [dispatch]
  );

  return (
    <ProductList>
      {loading && 'Loading'}
      {error !== '' && error}
      {products.map(product => (
        <li key={String(product.id)}>
          <img src={product.image} alt="Tênis" />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amountById[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

export default Home;
