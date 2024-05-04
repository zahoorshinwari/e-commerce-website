import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quo quae, perferendis nemo neque laudantium laboriosam aperiam recusandae veritatis velit veniam dicta! Quibusdam officia voluptas cupiditate quisquam, tempore debitis quasi!"
const ProductsDisplay = ({item}) => {
    console.log(item);

    const {name, id, price, seller, ratingsCount, quantity, img} = item

    const [prequantity, setPrequantity] = useState(quantity)
    const [coupen, setCoupen] = useState("")
    const [size, setSize] = useState("Select Size")
    const [color, setColor] = useState("Select Color")
  
    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleDecrease = () => {
        if(prequantity > 1)  {
            setPrequantity(prequantity - 1)
        }
    }

    const handleIncrease = () => {
        setPrequantity(prequantity + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupen: coupen
        }
        // console.log(product);

        const existingCart = JSON.parse(localStorage.getItem("cart")) || []

        const existingProductIndex = existingCart.findIndex((item) => item.id === id)

        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity
        } else {
            existingCart.push(product)
        }
        // update local storage
        localStorage.setItem("cart", JSON.stringify(existingCart))

        // reset form fields
        setPrequantity(1)
        setSize("select size")
        setColor("select color")
        setCoupen("")

    }
    return (
    <div>
        <div>
            <p className="rating">
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <span >{ratingsCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
        </div>

        {/* cart component */}
        <div>
            <form onSubmit={handleSubmit}>
                {/* this is for size selection */}
                <div className='select-product size'>
                    <select value={size} onChange={handleSizeChange}>
                        <option >Select Size</option>
                        <option >SM</option>
                        <option >MD</option>
                        <option >LG</option>
                        <option >XL</option>
                        <option >XXL</option>

                    </select>
                    <i className="icofont-rounded-down"></i>
                </div>

                {/* this is for color selection */}
                <div className='select-product color'>
                    <select value={color} onChange={handleColorChange}>
                        <option >Select Color</option>
                        <option >Pink</option>
                        <option >Red</option>
                        <option >White</option>
                        <option >Black</option>
                        <option >Blue</option>
                        <option >Gold</option>

                    </select>
                    <i className="icofont-rounded-down"></i>
                </div>

                {/* cart plus minus */}
                <div className="cart-plus-minus">
                    <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                    <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} onChange={(e) => setPrequantity(parseInt(e.target.value, 10))}/>
                    <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                </div>

                {/* coupon field */}
                <div className="discount-code mb-2">
                    <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupen(e.target.value)} id="" />
                </div>

                {/* btn section */}
                <button type='submit' className='lab-btn'>
                    <span>Add to Cart</span>
                </button>
                <Link to='/cart-page'  className='lab-btn bg-primary'>
                    <span>Check Out</span>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default ProductsDisplay