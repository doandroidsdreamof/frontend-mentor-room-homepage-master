import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import React from 'react'
import Header from './Header.jsx'
import Slider from './Slider.jsx'
import image1 from '../images/desktop-image-hero-1.jpg'
import image2 from '../images/desktop-image-hero-2.jpg'
import image3 from '../images/desktop-image-hero-3.jpg'
import image4 from '../images/mobile-image-hero-1.jpg'
import image5 from '../images/mobile-image-hero-2.jpg'
import image6 from '../images/mobile-image-hero-3.jpg'
import { useState, useEffect } from 'react'


const Grid = () => {
    const image = [image1, image2, image3, image4, image5, image6]
    const [count, setCount] = useState(0)
    const responsiveImage = window.matchMedia("(min-width: 719px)")
    useEffect(() => {
        const head = document.querySelector('.grid__items2__head');
        const text = document.querySelector('.grid__items2__text');
        if (count > 2 && responsiveImage.matches) {
            setCount(0)
        } if (count < 0 && responsiveImage.matches) {
            setCount(2)
        }
        if (count > 5 && !responsiveImage.matches) {
            setCount(3)
        } if (count < 0 && !responsiveImage.matches) {
            setCount(5)
        }
        switch (count) {
            case 0:
                head.innerHTML = "Discover innovative ways to decorate";
                text.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
                break;
            case 1:
                head.innerHTML = "Manufactured with the best materials";
                text.innerHTML = " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
                break;
            case 2:
                head.innerHTML = "We are available all across the globe";
                text.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
                break;
            case 3:
                head.innerHTML = "Discover innovative ways to decorate";
                text.innerHTML = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
                break;
            case 4:        
                head.innerHTML = "We are available all across the globe";
                text.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
                break;
            case 5:
                head.innerHTML = "Manufactured with the best materials";
                text.innerHTML = " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
                break;
        }
    }, [count])
    return (
        <>
            {
                <div style={{ backgroundImage: `url(${image[`${count}`]})` }} className="grid__items1">
                </div>
            }
            <div className=" grid__items2">
                <h2 className='grid__items2__head'>Discover innovative ways to decorate</h2>
                <p className='grid__items2__text grid__items2__text--darkgray'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. </p>
                <a className='grid__items2__link' href="#">SHOP NOW <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero" /></svg></a>
                <div className="arrow arrow__container">
                    <AiOutlineLeft onClick={() => setCount(count - 1)} className="arrow__container__left" />
                    <AiOutlineRight onClick={() => setCount(count + 1)} className="arrow__container__right" />
                </div>
            </div>
            <div className=" grid__items3"> </div>
            <div className=" grid__items4">
                <h2 className='grid__items4__head'>About our furniture</h2>
                <p className='grid__items4__text  grid__items4__text--darkgray'> Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <div className=" grid__items5">
            </div>
        </>
    )
}
export default Grid