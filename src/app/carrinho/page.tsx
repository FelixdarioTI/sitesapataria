'use client';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { useState } from 'react';

export default function Carrinho() {
  // Array inicial de produtos no carrinho
  const initialCartItems = [
    {
      id: 1,
      name: 'Air Jordan 1 Rosa',
      category: 'Tênis',
      price: 135.00,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1684381282765-7d991fdbf007?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Air Jordan 1 Azul e Vermelho',
      category: 'Tênis',
      price: 135.00,
      quantity: 2,
      imageUrl: 'https://images.unsplash.com/photo-1612724189298-89d36b10b26d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Air Jordan 1 Azul',
      category: 'Tênis',
      price: 135.00,
      quantity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1693400652052-884f8dd3dfd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems
        .map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
        .filter(item => item.quantity > 0) 
    );
  };

  return (
    <div>
      <div className="bg-white">
        <Header />
        <div className="mx-auto px-6 flex justify-center items-start w-full z-40">
          <section className="relative z-10 w-full">
            <div className="w-full px-4 md:px-5 lg:px-6 mx-auto relative z-10 grid grid-cols-8 gap-8 transition-all duration-500">
              <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-20 w-full">
                <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                  <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Itens no Carrinho</h2>
                  <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">{totalItems} Itens</h2>
                </div>
                <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                  <div className="col-span-12 md:col-span-7">
                    <p className="font-normal text-lg leading-8 text-gray-400">Detalhes do Produto</p>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="grid grid-cols-5">
                      <div className="col-span-3">
                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantidade</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                      </div>
                    </div>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group">
                    <div className="w-full md:max-w-[126px]">
                      <img src={item.imageUrl} alt={item.name} className="mx-auto rounded-xl" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                      <div className="md:col-span-2">
                        <div className="flex flex-col max-[500px]:items-center gap-3">
                          <h6 className="font-semibold text-base leading-7 text-black">{item.name}</h6>
                          <h6 className="font-normal text-base leading-7 text-gray-500">{item.category}</h6>
                          <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">R{item.price.toFixed(2)}</h6>
                        </div>
                      </div>
                      <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                        <div className="flex items-center h-full">
                          <button onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))} className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                              <path d="M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                          </button>
                          <input type="number" min="0" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)} className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px] text-center bg-transparent" />
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                              <path d="M11 5.5V16.5M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                        <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">R{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between mt-8 w-full">
                  <h3 className="font-bold text-xl leading-8 text-gray-600">Total: R${totalPrice.toFixed(2)}</h3>
                  <a href="/cadasCompleto">
                    <button className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                      Confirmar Compra  
                      <svg className="transition-all duration-500 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
