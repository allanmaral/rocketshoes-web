import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import tenisImage from '../../assets/images/sample_tenis.jpg';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={tenisImage} alt="Tênis" />
        <strong>Tênis Nike Shox Nz Eu Masculino - Preto</strong>
        <span>R$ 409,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={tenisImage} alt="Tênis" />
        <strong>Tênis Nike Shox Nz Eu Masculino - Preto</strong>
        <span>R$ 409,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={tenisImage} alt="Tênis" />
        <strong>Tênis Nike Shox Nz Eu Masculino - Preto</strong>
        <span>R$ 409,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={tenisImage} alt="Tênis" />
        <strong>Tênis Nike Shox Nz Eu Masculino - Preto</strong>
        <span>R$ 409,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={tenisImage} alt="Tênis" />
        <strong>Tênis Nike Shox Nz Eu Masculino - Preto</strong>
        <span>R$ 409,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src={tenisImage} alt="Tênis" />
        <strong>Tênis Nike Shox Nz Eu Masculino - Preto</strong>
        <span>R$ 409,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
