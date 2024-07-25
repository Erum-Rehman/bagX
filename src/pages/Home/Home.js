import React, { useEffect } from "react";
import './index.scss'
import Product from '../../Components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { listProducts } from '../../store/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import categories from "../../mock/categories";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <>
            <div className="container-img">
                <div className="img">
                </div>
            </div>

            <div className="categories">
                {
                    categories.map((item) => (
                        <div key={item.id} className="category">
                            {<div >
                                <Link to='/summerSale'>
                                <img src={`${window.location.origin}/${item.image}`} />
                                </Link>
                            </div>}
                        </div>
                    ))
                }
            </div>
            <div className="banner">
                <img src={require("../../assets/banner1.png")} alt="banner1" className='banner1' />
                <img src={require("../../assets/banner2.png")} alt="banner2" className='banner2' />
            </div>
            <p className="prd_heading">NEW ARRIVALS</p>
            <div className="body">
                <div className="product_container">
                    {products.map((product) => (
                        product.quantity>0 && <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
           <div className='rating_div'>
           <img src={require("../../assets/rating.png")} alt="banner1" />
                    <p>See the Thousand of Happy Customers</p>
                    <button className="rating-butn" onClick={() => navigate("/customerReviews")}>CUSTOMER REVIEWS</button>
           </div>
            {/* <Services /> */}
        </>
    )
}
export default Home;
