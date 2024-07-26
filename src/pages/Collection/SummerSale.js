import React, { useEffect, useState } from 'react'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectLabels from '../../Components/Dropdown';
import Stack from '@mui/material/Stack';
import { useLocation } from "react-router-dom";
import { listProducts } from '../../store/actions/productAction';
import Product from '../../Components/Product';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../Components/Pagination';

const SummerSale = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const productList = useSelector((state) => state.productList);
    const { products, totalProducts } = productList;
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
    console.log({ products })
    // const user = useSelector((state) => state.user);
    // const { userInfo, isAuthenticated } = user;


    // console.log({userId})
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {location.pathname === "/summerSale" ? <p className="prd_heading">SUMMER SALE</p>
                : location.pathname === "/bags" ?
                    <><p className="prd_heading">ALL BAGS</p>
                        <p className='bagP'>Welcome to BagX.pk, your go-to destination for high-quality, fashion-forward handbags, school bags, college bags, and kids bags in Pakistan. Discover our diverse collection of stylish designs that combine timeless elegance with the latest trends. Crafted with meticulous attention to detail,
                            our bags are built to last. Shop now and upgrade your style with BagX.pk!</p></>
                    :
                    <><p className="prd_heading">NEW ARRIVAL</p>
                        <div className='bagP'>
                            <p>fulfilling your style need</p>
                            <p>It's always nice to have a bag that matches your outfit. These gorgeous chain strap shoulder bags can be carried in your hand or casually slung over your shoulder.</p>
                        </div>
                    </>
            }
            <div className="dropdown-container">
                <div className="p-left">
                    <p>{totalProducts} products</p>
                </div>
                <div className="drop-right">
                    {/* <SelectLabels /> */}
                </div>
            </div>
            <div className="body">
                <div className="product-container">
                    {currentProducts.map((product) => (
                        product.quantity > 0 && <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
            />
        </>
    )
}
export default SummerSale;