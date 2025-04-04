import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Categories = () => {
    // State to track which dropdown is open for mobile (Accordion)
    const [openAccordion, setOpenAccordion] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle hamburger menu

    // Function to toggle accordion dropdown
    const handleAccordionToggle = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    // Categories with products (at least 4 products per category)
    const categories = [
        {
            name: 'Vegetables',
            products: ['Carrot', 'Potato', 'Spinach', 'Tomato', 'Onion', 'Cucumber']
        },
        {
            name: 'Fresh Fruit',
            products: ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes', 'Mango']
        },
        {
            name: 'Meat',
            products: ['Chicken', 'Beef', 'Pork', 'Lamb', 'Turkey', 'Duck']
        },
        {
            name: 'Seafood',
            products: ['Salmon', 'Shrimp', 'Tuna', 'Crab', 'Lobster', 'Mackerel']
        },
        {
            name: 'Baking',
            products: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Yeast', 'Baking Powder']
        },
        {
            name: 'Drinks',
            products: ['Coke', 'Pepsi', 'Orange Juice', 'Lemonade', 'Water', 'Tea']
        },
        {
            name: 'Other',
            products: ['Salt', 'Pepper', 'Garlic', 'Honey', 'Vinegar', 'Olive Oil']
        },
        {
            name: 'Other',
            products: ['Salt', 'Pepper', 'Garlic', 'Honey', 'Vinegar', 'Olive Oil']
        }
    ];

    return (
        <div className=" py-2 shadow-2xl ">
            
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-evenly space-x-4">
                {categories.map((category, index) => (
                    <div key={category.name} className="relative group">
                        <Link
                            to="/"
                            className="text-blue-900  text-[18px] font-[500] hover:text-black relative group"
                        >
                            {category.name} <span className='transition-opacity duration-1 group-hover:opacity-0'> <ArrowDropDownIcon/></span>
                        </Link>
                        {/* Dropdown Menu */}
                        <div
                            className="absolute hidden group-hover:block bg-white shadow-lg p-0 rounded-b-lg  mt-2 w-36"
                            style={{ left: -20 , top:18}}
                        >
                            <div className=" text-[16px]  relative group ">
                                {category.products.map((product, productIndex) => (
                                    <Link
                                        key={productIndex}
                                        to={`/${category.name.toLowerCase().replace(' ', '-')}/${product.toLowerCase().replace(' ', '-')}`}
                                        className="block group hover:bg-blue-50 py-2 hover:font-[500] ps-5  "
                                    >
                                        {product}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hamburger Icon and Mobile Accordion Menu */}
            <div className="md:hidden">
                {/* Hamburger Icon */}
                <button
                    className=" text-blue-900 m-5"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    Category &#9776;

                </button>

                {/* Hamburger Menu (Accordion) */}
                {menuOpen && (
                    <div className="bg-white absolute top-0 left-0 w-full h-screen p-5 pt-15 z-10 shadow-lg  ">
                        <button
                            className="absolute top-5 right-5 text-3xl text-blue-900"
                            onClick={() => setMenuOpen(false)}
                        >
                            &times;
                        </button>
                        {categories.map((category, index) => (
                            <div key={category.name} className="">
                                <button
                                    className="w-full text-left px-4 py-2 bg-white hover:bg-gray-300 focus:outline-none flex items-center justify-between"
                                    onClick={() => handleAccordionToggle(index)}
                                >
                                    <h3 className="text-xl ">{category.name}</h3>
                                    <svg
                                        className={`w-5 h-5 transform transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : 'rotate-0'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button >
                                {/* Accordion content */}
                                {openAccordion === index && (
                                    <div className="bg-white p-4">
                                        <div className="space-y-3 ">
                                            {category.products.map((product, productIndex) => (
                                                <Link
                                                    key={productIndex}
                                                    to={`/${category.name.toLowerCase().replace(' ', '-')}/${product.toLowerCase().replace(' ', '-')}`}
                                                    className="block text-blue-900 hover:text-black"
                                                >
                                                    {product}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Categories;
