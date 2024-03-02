import React, { useState } from 'react'

const desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quo quae, perferendis nemo neque laudantium laboriosam aperiam recusandae veritatis velit veniam dicta! Quibusdam officia voluptas cupiditate quisquam, tempore debitis quasi!"
const ProductsDisplay = ({item}) => {
    console.log(item);

    const {name, id, price, seller, ratingsCount, quantity} = item

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
            <form >
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
            </form>
        </div>
    </div>
  )
}

export default ProductsDisplay