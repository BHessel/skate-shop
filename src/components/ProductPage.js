import React from 'react';
import deck from "../images/mcclung-code.jpeg";

const ProductPage = () => {
    return (
        <div className='flex'>
        {/* this is the box  for image and description */}
        <div className='w-1/2'>
            <img src={deck} alt=""/>
        </div>
        <div className='w-1/2 py-6 px-10'>
            <h1 className='text-xl font-bold py-2'>Product Name</h1>
            <h4 className='text-md mb-2'> (link to brand page)</h4>
            <h4 className='mb-2'>Price</h4>
            <h4 className='mb-4'>Specs e.g. shoeSize, deckSize</h4>
            {/* dropdown of size options here */}
            
            <button className='w-full h-10 bg-blue-600 text-white mb-4'>Add to Cart</button>
        
        <p>Item description - The Epic Storm Grindshoes are an adventure seeker's dream. Why go for a boring walk when you could be grinding that ledge or sliding down those handrails? You can take them anywhere since they are shoes, which also means that you can grind anywhere! They have a strong outsole material with camouflage graphics mixed in and a convenient shock function. High tops offer a little bit more ankle support but they are still comfortable to wear for day-to-day walking.  You could even use them with other sports and create new tricks!

</p>
        </div>
            
        </div>
    );
}

export default ProductPage;
