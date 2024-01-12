import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import MyCart from '../../components/mycart/MyCart';


function Cart() {
    // const items = useSelector(state=>state.items);
    // console.log(items);
    return (
        <div>
            <Header />
            <MyCart />
            <Footer />
        </div>
    )
}

export default Cart

