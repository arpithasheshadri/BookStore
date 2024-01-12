import Wishlist from "../models/wishlist.js";


export const addToWishlist = async (params = {}) => {
    const wishlist = new Wishlist(params);
    return await wishlist.save();
  };

  export const getWishlistItems = async (id) => {
    var query = { email: id };
    const wishlist = Wishlist.find(query);
    return await wishlist;
  };

  export const removeWishlistItem = async (id) => {
    return await Wishlist.findByIdAndDelete(id).exec();
  };
  