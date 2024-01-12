import Order from "../models/order.js";


export const addDetailsToOrder = async (params = {}) => {
    const order = new Order(params);
    return await order.save();
  };

  export const addOrderDetails = async (id,details) => {
    const order = Order.findByIdAndUpdate(id,{ $set: { 'books': details.orders } },
    { new: true } );
    return await order;
  };