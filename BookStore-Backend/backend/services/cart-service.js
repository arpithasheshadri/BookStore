import Cart from "../models/cart.js";


export const addToCart = async (params = {}) => {
    const cart = new Cart(params);
    return await cart.save();
  };

  export const getCartItems = async (id) => {
    var query = { email: id };
    const cart = Cart.find(query);
    return await cart;
  };

  export const updateCartQty = async (bookId,params,qty) => {
    const cart = await Cart.findOneAndUpdate(
        { '_id': bookId, 'email': params },
        { $set: { 'quantityToBuy': qty.quantityToBuy } },
        { new: true } // to return the modified document
      );
    return cart;
  };

  export const removeCartItem = async (id) => {
    return await Cart.findByIdAndDelete(id).exec();
  };
  
  