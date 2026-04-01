import React from 'react';

const Cart = ({ cart, onRemove, onCheckout }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <div>
            <div className='border border-zinc-50 py-12'>
                {cart.length === 0 ? (
                    <p className="text-center text-gray-500">Cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                    {cart.map((item) => (
                        <div
                        key={item.id}
                        className="flex justify-between items-center bg-zinc-100 p-3 rounded"
                        >
                        <div className="flex items-center gap-3">
                            <img src={item.icon} className="w-8 h-8" />
                            <div>
                            <p className='font-bold'>{item.name}</p>
                            <p className='text-[#627382'>${item.price}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => onRemove(item.id)}
                            className="btn btn-error btn-sm"
                        >
                            Remove
                        </button>
                        </div>
                    ))}

                    <h2 className="  flex justify-between">
                        <div className='text-[#627382]'>Total</div>
                        <div className='font-bold text-lg'>${total}</div>
                    </h2>

                    <button
                        onClick={onCheckout}
                        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-full"
                    >
                        Proceed to Checkout
                    </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;