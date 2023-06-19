import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  USER_LIST,
  SET_USER_DATA,
} from './constants';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}
export function getUserList(item) {
  return {
    type: USER_LIST,
    data: item,
  };
}
