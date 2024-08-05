import React, { useEffect, useState } from "react";
import './index.scss';
import Product from '../../Components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from "react-router-dom";
import { listProducts } from '../../store/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import categories from "../../mock/categories";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const [width, setWidth] = useState(window.screen.width);
    const [itemsToShow, setItemsToShow] = useState(4);
    const { products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth < 600) {
                setItemsToShow(1); // Mobile: 1 item
            } else if (window.innerWidth < 950) {
                setItemsToShow(3); // Tablet: 3 items
            } else {
                setItemsToShow(4); // Laptop/Desktop: 4 items
            }
        };

        updateItemsToShow(); // Set the initial number of items
        window.addEventListener('resize', updateItemsToShow);

        return () => {
            window.removeEventListener('resize', updateItemsToShow);
        };
    }, []);
    const visibleItems = categories.slice(currentIndex, currentIndex + itemsToShow);

    return (
        <>
            <div className="container-img">
                <div className="img">
                </div>
            </div>
            <div className="categories-carousel">
                <ArrowBackIosIcon className="arrowIcon" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length)} />
                <div className="categories">
                    {visibleItems.map((item, index) => (
                        <div key={index} className="category">
                            <Link to='/summerSale'>
                                <img src={`${window.location.origin}/${item.image}`} alt={item.name} />
                            </Link>
                        </div>
                    ))}
                </div>
                <ArrowForwardIosIcon className="arrowIcon" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length)} />
            </div>
            <div className="banner">
                <img src={require("../../assets/banner1.png")} alt="banner1" className='banner1' />
                <img src={require("../../assets/banner2.png")} alt="banner2" className='banner2' />
            </div>

            <p className="prd_heading">NEW ARRIVALS</p>
            <div className="body">
                <div className="product_container">
                    {products.map((product) => (
                        product.quantity > 0 && <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>

            <div className='rating_div'>
                <img src={require("../../assets/rating.png")} alt="rating" />
                <p>See the Thousand of Happy Customers</p>
                <button className="rating-butn" onClick={() => navigate("/customerReviews")}>CUSTOMER REVIEWS</button>
            </div>
        </>
    );
}

export default Home;
