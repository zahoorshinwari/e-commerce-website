import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules"
import ProductsDisplay from './ProductsDisplay';


const SingleProduct = () => {

    const [products, setProducts] = useState([])
    const { id } = useParams()
    // console.log(id);

    useEffect(() => {
        fetch("/src/products.json").then(res => res.json()).then(data => setProducts(data))
    }, [])
    // console.log(products);


    const result = products.filter((product) => product.id === id)
    console.log(result);
    return (
        <div>
            <PageHeader title={"OUR SHOP SINGLE PRODUCT"} curPage={"Shop/ Single Product"} />

            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">

                        {/* left side */}
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <div className="swiper-container pro-single-top">
                                                    <Swiper
                                                        className="mySwiper"
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={true}
                                                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                                                        modules={[Autoplay]}
                                                        navigation={{ prevEl: ".pro-single-prew", nextEl: ".pro-single-next" }}
                                                    >
                                                        {
                                                            result.map((item, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className='single-thumb'>
                                                                        <img src={item.img} alt="" />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>

                                                    <div className="pro-single-prev">
                                                        <i className="icofont-rounded-right"></i>
                                                    </div>
                                                    <div className="pro-single-next">
                                                        <i className="icofont-rounded-left"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* detail of the product */}
                                        <div className="col-md-6 col-12">
                                            <div className='post-content'>
                                                { 
                                                    result.map(item => <ProductsDisplay key={item.id} item={item}/>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* reviews */}
                                <div className="review">
                                    Review
                                </div>
                            </article>
                        </div>

                        {/* right side */}
                        <div className="col-lg-4 col-12">right side</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct 