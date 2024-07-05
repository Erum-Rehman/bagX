import React, { useState } from 'react'
import './index.scss'
import products from '../../mock/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '../../Components/Rating';
import SelectLabels from '../../Components/Dropdown';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useLocation } from "react-router-dom";

const SummerSale = () => {
    // const navigate = useNavigate();
    const location = useLocation();
 
    return (
        <>
            {location.pathname === "/" ? <p className="prd_heading">SUMMER SALE</p>
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
                    <p>345 products</p>
                </div>
                <div className="drop-right">
                    <SelectLabels />
                </div>
            </div>
            <div className="body">
                <div className="product-container">
                    {
                        products.map((item) => (
                            <div className="products" key={item.id} >
                                <div className='tag'>Sale</div>
                                {<div className="product-img">
                                    <img src={`${window.location.origin}/${item.image}`} />
                                </div>}
                                <p className="product-title">{item.p_name}</p>
                                <div className='product-rating'> <Rating /></div>
                                <span className="price"><s>Rs.{item.oldPrice}</s></span>
                                &ensp;<span className="price">Rs.{item.discountPrice}</span>
                            </div>))
                    }
                </div>
            </div>
            <Stack spacing={2} className="pagination-body">
                <Pagination count={4} shape="rounded" />
            </Stack>
        </>
    )
}
export default SummerSale;