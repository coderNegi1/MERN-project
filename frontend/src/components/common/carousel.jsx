import React, { useState } from 'react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next set of 4 items
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    // Function to go to the previous set of 4 items
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 4 + items.length) % items.length);
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden p-0">
            <div className="flex items-center justify-between p-5 w-full relative">
                <button
                    onClick={prevSlide}
                    className="absolute left-1  h-10 w-10 bg-black opacity-10 text-white rounded-full hover:opacity-100 z-1 "
                >
                    &#10094;
                </button>

                {/* Carousel items container */}
                <div className="flex w-full justify-between space-x-4">
                    {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
                        <div key={index} className="text-center border rounded-2xl relative w-64">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-64 h-64 object-cover rounded-t-2xl border-b"
                            />
                            <h4 className="mt-4 text-lg font-semibold">{item.name}</h4>
                            <p className="mt-2 text-[14px] text-gray-700 pb-3 text-start p-3">{item.description}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-1  h-10 w-10 bg-black opacity-10 text-white rounded-full hover:opacity-100 z-1"
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
