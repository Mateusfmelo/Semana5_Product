import React, { useReducer } from 'react';
import './Product.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}

function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0)
    return total.toLocaleString(undefined, currencyOptions)
    
}

const products = [
    {
      emoji: '🍫',
      id: 'chocolate',
      price: 10
    },
    {
      emoji: '🍔',
      id: 'hamburguer',
      price: 5,
    },
    {
      emoji: '🍞',
      id: 'pão',
      price: 3
    }
  ];

  function cartReducer(state, action) {
      switch(action.type){
          case 'adiciona':
          return [...state, action.product]
          case 'remove':
          const produto = state.findIndex(item => item.id === action.product.id)
          if( produto< 0){
                    return state
                }
          const update = [...state]
          update.splice(produto, 1)
            return update
            default:
                return state
      }
  }

  export default function Product() {
    const [cart, setCart] = useReducer(cartReducer, []);
  
    function add(product) {
      setCart({product, type: 'adiciona'});
    }

    function remove(product) {
        setCart({product, type: 'remove'})
    }
  
    return(
      <div className="wrapper">
      <div>
      Carrinho de compras: {cart.length} Total de itens.
      </div>
      <div>Total: {getTotal(cart)}</div>
      <div>
      {products.map(product => (
      <div key={product.id}>
      <div className="product">
      <span role="img" aria-label={product.id}>{product.emoji}</span>
      </div>
      <button onClick={() => add(product)} >Adicionar</button>
      <button onClick={() => remove(product)} >Remover</button>
      </div>
      ))}
      </div>
      </div>
    )
  }
