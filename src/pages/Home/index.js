import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: false,
      error: '',
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      this.setState({
        products: data,
        loading: false,
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: err.message,
      });
    }
  }

  handleAddProduct = productId => {
    const { addToCartRequest } = this.props;

    addToCartRequest(productId);
  };

  render() {
    const { products, loading, error } = this.state;
    const { amountById } = this.props;

    return (
      <ProductList>
        {loading && 'Loading'}
        {error !== '' && error}
        {products.map(product => (
          <li key={String(product.id)}>
            <img src={product.image} alt="Tênis" />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
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
}

const mapStateToProps = state => ({
  amountById: state.cart.reduce((amountById, product) => {
    amountById[product.id] = product.amount;
    return amountById;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
