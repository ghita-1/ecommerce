import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import pic from './assets/pic.jpg';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import c from './assets/c.png';
import cc from './assets/cc.png';
import ccc from './assets/ccc.png';
function App() {
  
  return (
    <div>
        <header className="bg-black text-white">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-2xl font-bold">GHA</div>
                <nav className="space-x-4">
                    <a href="#" className="hover:underline">EVERYTHING</a>
                    <a href="#" className="hover:underline">WOMEN</a>
                    <a href="#" className="hover:underline">MEN</a>
                    <a href="#" className="hover:underline">ACCESSORIES</a>
                </nav>
                <div className="space-x-4">
                    <a href="#" className="hover:underline">ABOUT</a>
                    <a href="#" className="hover:underline">CONTACT US</a>
                    <a href="#" className="hover:underline"><FontAwesomeIcon icon={faShoppingCart} className="text-gray-500 text-2xl" />0.00DH</a>
                </div>
            </div>
        </header>
        <section className="bg-blue-800 text-white text-center py-20" style={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover' }}>
            <h1 className="text-4xl font-bold">Raining Offers For Hot Summer!</h1>
            <p className="mt-4 text-lg">25% Off On All Products</p>
            <div className="mt-6 space-x-4">
                <button className="bg-white text-black px-6 py-2 rounded">SHOP NOW</button>
                <button className="border border-white text-white px-6 py-2 rounded">FIND MORE</button>
            </div>
        </section>
        <section className="bg-white py-10">
            <div className="container mx-auto text-center flex justify-center items-center">
                <div className="flex justify-center  space-x-36 w-14">
                    <img src={pic2} alt="logoipsum" />
                    <img src={pic3} alt="logoipsum" />
                    <img src={pic1} alt="logoipsum" />
                    <img src={pic4} alt="logoipsum" />
                    <img src={pic5} alt="logoipsum" />
                </div>
            </div>
            
        </section>
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded shadow">
                    <img src={c} alt="Woman in tank top" className="w-full h-48 object-cover rounded" />
                    <h2 className="mt-4 text-xl font-bold">20% Off On Tank Tops</h2>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded">SHOP NOW</button>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <img src={cc} alt="Man with sunglasses" className="w-full h-48 object-cover rounded" />
                    <h2 className="mt-4 text-xl font-bold">Latest Eyewear For You</h2>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded">SHOP NOW</button>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <img src={ccc} alt="Red high heels" className="w-full h-48 object-cover rounded" />
                    <h2 className="mt-4 text-xl font-bold">Let's Lorem Suit Up!</h2>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded">CHECK OUT</button>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <div className="bg-white p-6 rounded shadow">
                    <img src={c} alt="Woman in tank top" className="w-full h-48 object-cover rounded" />
                    <h2 className="mt-4 text-xl font-bold">20% Off On Tank Tops</h2>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded">SHOP NOW</button>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <img src={cc} alt="Man with sunglasses" className="w-full h-48 object-cover rounded" />
                    <h2 className="mt-4 text-xl font-bold">Latest Eyewear For You</h2>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded">SHOP NOW</button>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <img src={ccc} alt="Red high heels" className="w-full h-48 object-cover rounded" />
                    <h2 className="mt-4 text-xl font-bold">Let's Lorem Suit Up!</h2>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                    <button className="mt-4 bg-black text-white px-4 py-2 rounded">CHECK OUT</button>
                </div>
            </div>
        </section>
    </div>
)
}

export default App
