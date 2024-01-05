import { toast } from "react-toastify";

export const addToCart = (item) => (dispatch) => {
  toast.success("Mahsulot muvaffaqiyatli qo'shildi");
  dispatch({ type: "BUTPROD", payload: item });
}
export const removeProductItem = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_PRODUCT_ITEM", payload: id });
};

export const incrementProductItem = (id) => (dispatch) => {
  dispatch({ type: "INCREASE_PRODUCT_ITEM", payload: id });
};
export const decrementProductItem = (id) => (dispatch) => {
  dispatch({ type: "DECREMENT_PRODUCT_ITEM", payload: id });
};

export const loadingTrue = (load) => (dispatch) => {
  dispatch({ type: "LOADING", payload: load });
}