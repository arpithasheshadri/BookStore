import React from 'react'
import './MyWishlist.scss'
import {useDispatch,useSelector} from 'react-redux'
import {getCartItems,getWishlistItems } from '../../store/actions/cartActions'
import bookimage from '../../assets/Image 12@2x.png'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import UserService from '../../services/UserService';
import bookgif from '../../assets/loader.gif'

const userService = new UserService();

function MyWishlist() {
    const wishlistItems = useSelector(state=>state.wishlist);
    const dispatch = useDispatch();
    const [loading,setLoading] = React.useState(false);
    async function getCart()  {
        dispatch(getCartItems('dashboard'));
     }
     async function getWishlist()  {
        dispatch(getWishlistItems());
        setTimeout(()=>{
            setLoading(false)},2000
        );
     }
     const handleMove = (book) => {
        handleRemoveWishlist(book);
        let config = {
            headers: {
                   'x-access-token' : localStorage.getItem("token"),
                   'email' : localStorage.getItem("userName")
            }
        };
        console.log(book);
        userService.addToCart(`/cart/addToCartItem/${book.book._id}`,{},config)
        .then((res)=>{
            console.log("Books added to cart");
            getWishlist();
            getCart();
        })
        .catch((err)=>{
            console.log(err);
        });
     }
     const handleRemoveWishlist = (book) => {
        let config = {
            headers: {
                'x-access-token' : localStorage.getItem("token"),
                'email' : localStorage.getItem("userName")
            }
        };
        console.log(book);
        userService.removeWishlistItem(`/wishlist/removeWishlistItem/${book._id}`,config)
        .then((res)=>{
            console.log("Book removed from wishlist");
            getWishlist();
        })
        .catch((err)=>{
            console.log(err);
        });
     }
    React.useEffect(()=>{
        setLoading(true);
        getCart();
        getWishlist();
    },[])

    return (
        <div>
            {loading && <div className="preloaders"><img src={bookgif}/></div>}
            <div className="wishlist-container">
                <div className="wishlist-heading">
                    <p className="first-section-heading">My Wishlist ({wishlistItems.wishlist.length})</p>
                </div>
                <div className="first-section-books">
                {wishlistItems.wishlist.length !== 0 ? wishlistItems.wishlist.map((books)=>(
                            <div className="books-box">
                                <div  className="wishlist-books" style={{display: 'flex',justifyContent:'space-between'}}>
                                    <div className="books">
                                        <div>
                                            <img className="bookimage" src={books.book.bookImage} />
                                        </div>
                                        <div className="book-description">
                                            <p className="book-title">{books.book.bookName}</p>
                                            <p className="book-author">{books.book.author}</p>
                                            <p className="book-price">$ {books.book.price}</p>
                                        </div>
                                    </div>
                                    <div className="wishlist-buttons">
                                        <div>
                                            <Button onClick={()=>handleMove(books)} sx={{color: 'black',}}>Move To Cart</Button>
                                        </div>
                                        <div className="remove-wishlist">
                                            <DeleteForeverOutlinedIcon onClick={()=>handleRemoveWishlist(books)} sx={{cursor: 'pointer'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <h3>Nothing to show</h3>
                        }   
                </div>
            </div>
        </div>
    )
}

export default MyWishlist
