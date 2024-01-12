import userRouter from './user-route.js';
import bookRouter from './book-route.js';
import cartRouter from './cart-route.js';
import wishlistRouter from './wishlist-route.js';
import orderRouter from './order-route.js';
import multer from 'multer';

const DIR = './data/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null,fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

export default (app) => {
    app.use("/user",userRouter);
    app.use("/book",upload.single('bookImage'),bookRouter);
    app.use("/cart",cartRouter);
    app.use("/wishlist",wishlistRouter);
    app.use("/order",orderRouter);
  };