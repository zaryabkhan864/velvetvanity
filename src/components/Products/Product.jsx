import React from 'react'
import BigCard from '../Cards/BigCard'
import { ProductData } from '../DataFile/DataFile.js'
const Product = () => {
    return (
        <React.Fragment>
            <div className='flex justify-around'>
                {ProductData.map((product) => {
                    return (
                        <BigCard
                            key={product.id}
                            img_path={product.img_path}
                            text={product.text}
                        />
                    )
                })}
            </div>

        </React.Fragment>

    )
}

export default Product