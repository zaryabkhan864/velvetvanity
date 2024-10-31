import React from 'react'

const BigCard = ({ key, img_path, text }) => {
    return (
        <React.Fragment>
            <div className="relative w-64 h-72  overflow-hidden shadow-lg" key={key}>
                <img
                    src={img_path}
                    alt="Product"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-pink-200 bg-opacity-40 flex items-center ">
                    <span className="text-white font-Sen font-regular text-20px ps-2">{text}</span>
                </div>
            </div>
        </React.Fragment>

    )
}

export default BigCard