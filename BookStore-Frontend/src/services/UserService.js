import AxiosService from "./AxiosService";
const axiosService = new AxiosService();

// let baseurl = 'https://new-bookstore-backend.herokuapp.com/bookstore_user'
let baseurl = 'http://localhost:4000'
class UserService {
    SignUp(url,data){
        return axiosService.postMethod(`${baseurl}${url}`,data);
    }
    SignIn(url,data){
        return axiosService.postMethod(`${baseurl}${url}`,data);
    }
    displayBooks(url,config){
        return axiosService.getMethod(`${baseurl}${url}`,config);    
    }
    addToCart(url,data,config){
        return axiosService.postMethod(`${baseurl}${url}`,data,config);    
    }
    getCart(url,config){
        return axiosService.getMethod(`${baseurl}${url}`,config); 
    }
    addToWishlist(url,data,config){
        return axiosService.postMethod(`${baseurl}${url}`,data,config);    
    }
    getWishlist(url,config){
        return axiosService.getMethod(`${baseurl}${url}`,config); 
    }
    removeCartItem(url,config){
        return axiosService.deleteMethod(`${baseurl}${url}`,config);
    }
    quantityIncrement(url,data,config){
        return axiosService.putMethod(`${baseurl}${url}`,data,config);
    }
    quantityDecrement(url,data,config){
        return axiosService.putMethod(`${baseurl}${url}`,data,config);
    }
    customerDetails(url,data,config){
        return axiosService.postMethod(`${baseurl}${url}`,data,config);
    }
    addOrder(url,data,config){
        return axiosService.putMethod(`${baseurl}${url}`,data,config);    
    }
    removeWishlistItem(url,config){
        return axiosService.deleteMethod(`${baseurl}${url}`,config);
    }
}

export default UserService