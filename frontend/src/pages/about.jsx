import React from 'react';
import ExtensionIcon from '@mui/icons-material/Extension';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import MartImage from '../images/mart-image.avif';
import Carousel from '../components/common/carousel';

// Sample blog data
const sampleItems = [
    { 
        name: 'MERN Stack Overview', 
        description: 'An introduction to MERN stack and its components including MongoDB, Express, React, and Node.js.', 
        image: 'https://via.placeholder.com/300?text=MERN+Stack+Overview', 
        date: 'October 12, 2024' 
    },
    { 
        name: 'What is E-commerce?', 
        description: 'A deep dive into the world of e-commerce, the types of e-commerce, and the future of online shopping.', 
        image: 'https://via.placeholder.com/300?text=E-commerce', 
        date: 'October 13, 2024' 
    },
    { 
        name: 'Building Scalable Web Apps', 
        description: 'Learn how to scale your web applications to handle millions of users efficiently.', 
        image: 'https://via.placeholder.com/300?text=Scalable+Web+Apps', 
        date: 'October 14, 2024' 
    },
    { 
        name: 'Integrating APIs in Web Apps', 
        description: 'Step-by-step guide on how to integrate third-party APIs into your web applications.', 
        image: 'https://via.placeholder.com/300?text=API+Integration', 
        date: 'October 15, 2024' 
    },
    { 
        name: 'Node.js for Beginners', 
        description: 'A comprehensive guide to getting started with Node.js, focusing on the basics and core concepts.', 
        image: 'https://via.placeholder.com/300?text=Node.js+Beginners', 
        date: 'October 16, 2024' 
    },
    { 
        name: 'React Hooks Explained', 
        description: 'Understanding React Hooks, how to use them, and why they are a game changer for functional components.', 
        image: 'https://via.placeholder.com/300?text=React+Hooks', 
        date: 'October 17, 2024' 
    },
    { 
        name: 'MongoDB vs SQL Databases', 
        description: 'Comparing NoSQL databases (like MongoDB) to SQL databases, and understanding their use cases.', 
        image: 'https://via.placeholder.com/300?text=MongoDB+vs+SQL', 
        date: 'October 18, 2024' 
    },
    { 
        name: 'Express.js for Web Development', 
        description: 'An overview of Express.js, a popular framework for building web applications in Node.js.', 
        image: 'https://via.placeholder.com/300?text=Express.js', 
        date: 'October 19, 2024' 
    },
    { 
        name: 'Introduction to MERN Delivery System', 
        description: 'A guide to building a delivery system using MERN stack, ideal for e-commerce platforms.', 
        image: 'https://via.placeholder.com/300?text=MERN+Delivery', 
        date: 'October 20, 2024' 
    },
    { 
        name: 'How to Deploy MERN Apps', 
        description: 'Learn how to deploy your MERN stack apps to production environments with ease.', 
        image: 'https://via.placeholder.com/300?text=Deploy+MERN+Apps', 
        date: 'October 21, 2024' 
    }
];

function About() {
    return (
        <div className='bg-yellow-50 pb-10'>
            <h2 className="text-5xl text-center py-5 pb-9 bg-white  mb-6 uppercase">About Us</h2>
            <div className="lg:mx-15 shadow rounded-2xl lg:flex p-10 bg-white">
                <div className="lg:w-6/12 rounded-2xl space-y-4 text-[18px] py-5  ">
                    <p className='text-justify'>
                        At TastyDaily, we are committed to providing you with the freshest and highest-quality groceries at affordable prices. Our mission is to simplify your shopping experience, save you time, and ensure you have access to a wide range of products to meet all your household needs.
                        TastyDaily is a leading online grocery store that brings convenience to your doorstep. We understand the importance of fresh and nutritious food for a healthy lifestyle, and we strive to make it easy for you to access a diverse selection of groceries.
                        To be the go-to destination for customers seeking the freshest produce, pantry staples, and household essentials while delivering exceptional customer service and an effortless online shopping experience.
                    </p>
                    <h3 className="font-[500] text-[20px]">
                        <ExtensionIcon className='text-green-500' /> Quality
                    </h3>
                    <p>We source our products from reputable suppliers to ensure you receive only the best quality items.</p>
                    <h3 className="font-[500] text-[20px]">
                        <HeadsetMicIcon className='text-green-500' /> Customer Support
                    </h3>
                    <p>Our friendly and knowledgeable customer support team is available to assist you with any inquiries or concerns.</p>
                    <h3 className="font-[500] text-[20px]">
                        <ShoppingBasket className='text-green-500' /> Fast and Reliable Delivery
                    </h3>
                    <p>We ensure your order reaches your doorstep promptly and in pristine condition.</p>
                </div>
                <div className="w-6/12 flex justify-center items-center p-4">
                    <img src={MartImage} alt="Mart Image" className='h-[70%] rounded-2xl object-fill' />
                </div>
            </div>

            {/* Passing sampleItems data to Carousel Component */}
            <div className='m-3 shadow rounded-2xl lg:my-10 lg:mx-15 bg-white'>
                <h2 className='text-2xl uppercase p-5'>Our Blogs</h2>
                <Carousel items={sampleItems} />
            </div>
        </div>
    );
}

export default About;
