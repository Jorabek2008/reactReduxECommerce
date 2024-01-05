export const initialState = {
  buyProduct: [],
  cart: localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUTPROD":
      const findProd = state.cart.find((c) => c.id === action.payload.id);
      if(!findProd){
        const product = [...state.cart, { ...action.payload }];
        localStorage.setItem("cart", JSON.stringify(product));
        return {
          ...state,
          cart: product
        };
      }else if(findProd){
        const product = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, count: item.count + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(product));
        return {
          ...state,
          cart: product,
        };
      }
    case "INCREASE_PRODUCT_ITEM":
      const incprod = state.cart.map((item) =>(
        item.id == action.payload ? { ...item, count: item.count + 1 } : item
        )
      );
      localStorage.setItem("cart", JSON.stringify(incprod));
      return {
        ...state,
        cart: incprod
      };
    case "DECREMENT_PRODUCT_ITEM":
      const decprod = state.cart.map((item) =>(
        item.id == action.payload ? { ...item, count: item.count -= 1 } : item
        )
      );
      localStorage.setItem("cart", JSON.stringify(decprod));
      return {
        ...state,
        cart: decprod
      };
    case "REMOVE_PRODUCT_ITEM":
        const deleteItem = state.cart.filter(item => item.id !== action.payload)
        localStorage.setItem("cart", JSON.stringify(deleteItem));
        return {
            ...state,
            cart: deleteItem
        }
      case "LOADING":
        return {
          ...state,
          loading: action.payload,
        };
    default:
      return state;
  }
};
