import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ProductCard = ({ product, onAdd }) => {
    const [added, setAdded] = useState(false);

    
    const badgeColor = {
        "best-seller": "badge-soft badge-warning",
        "new": "badge-soft badge-success",
        "popular": "badge-soft badge-secondary"
    };

    const handleClick = () => {
        onAdd(product);
        setAdded(true);
    };

    return (
    <div className="card bg-base-100 shadow-lg p-4 space-y-3 border border-zinc-100 rounded-lg text-[#627382]">

      <div className='flex justify-between'>
        <div></div>
        <div className={`badge ${badgeColor[product.tagType]} mt-2`}>
          {product.tag}
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <img src={product.icon} className="w-12 h-12" />
      </div>

      <h2 className="text-lg text-[#101727] font-bold mt-2">{product.name}</h2>


      <p className="text-sm mt-2">{product.description}</p>

      <p className="mt-3 font-normal text-[16px]">
        <span className='font-bold text-2xl text-[#101727]'>${product.price}</span> / {product.period}
      </p>

      <ul className="mt-3 space-y-1">
        {product.features.slice(0, 3).map((f, i) => (
          <li key={i} ><span className='flex items-center gap-2'><FaCheck className='text-green-600'/> {f}</span></li>
        ))}
      </ul>


      <button
        onClick={handleClick}
        className={`btn mt-3 rounded-full text-white ${
          added
            ? "bg-green-500 hover:bg-green-600"
            : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
        }`}
      >
        {added ? "Added to cart" : "Buy Now"}
      </button>
    </div>
    );
};

export default ProductCard;