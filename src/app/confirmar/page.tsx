'use client';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '../favicon.ico'
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null);
  const [tabSelect, setTabSelect] = useState<number | null>(null);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMenuItem = (index: number) => {
    setActiveMenuItem(activeMenuItem === index ? null : index);
  };
  const toggleTab = (index: number) => {
    setTabSelect(tabSelect === index ? null : index);
  };

  return (
    <div>
      <div className="bg-white">
        <header className="relative bg-white">

         

          <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center">
                

                <div className="ml-4 mt-20 flex lg:ml-0">
                <a href="/loja">
                  <span className="sr-only">Sua Empresa</span>
                  <img src={Logo.src} className='h-24' alt="" />
                  
                </a>
            </div>
            </div>
          </nav>
        </header>
        <section className="py-12 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-full flex-col justify-start items-start lg:gap-14 gap-8 flex">
                    <div className="w-full text-center text-black text-3xl font-bold font-manrope leading-normal">Confirmar Pedido</div>
                    <div className="flex-col justify-start items-start gap-3 flex">
                        <h4 className="text-black text-xl font-medium leading-8">Olá, John smith</h4>
                        <h5 className="text-gray-500 text-lg font-normal leading-8">Obrigado pela sua compra</h5>
                    </div>
                </div>
                <div className="w-full justify-center items-start ">
                    <div className="w-full hidden md:grid grid-cols-2 p-4 bg-gray-50">
                        <span className="text-gray-500 text-base font-normal leading-relaxed">Produto</span>
                        <p className="flex items-center justify-between">
                            <span className="w-full max-w-[200px] text-center px-8 text-gray-500 text-base font-normal leading-relaxed ">Tamanho</span>
                            <span className="w-full max-w-[260px] text-center px-8 text-gray-500 text-base font-normal leading-relaxed ">Quantidade</span>
                            <span className="w-full max-w-[200px] text-center px-8 text-gray-500 text-base font-normal leading-relaxed ">Preço</span>
                            <span className="w-full max-w-[200px] text-center"></span>
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-sm:max-w-xl max-xl:mx-auto">
                        <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-sm:justify-center max-sm:max-w-xl max-xl:mx-auto">
                            <div className="w-[120px] h-[120px] img-box bg-gray-50 rounded-xl justify-center items-center inline-flex">
                                <img src="https://images.unsplash.com/photo-1684381282765-7d991fdbf007?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Denim Shirt image" className="xl:w-[75px]"/>
                            </div>
                            <div className="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
                                <h4 className="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">Air Jordan 1 Rosa</h4>
                                <h5 className="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">Product ID: 4553458120</h5>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between flex-col min-[550px]:flex-row w-full max-sm:max-w-xl max-xl:mx-auto gap-2">
                            <h5 className="w-full max-w-[142px] text-center text-black text-lg font-medium leading-relaxed">40</h5>
                            <button className="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                                </svg>
                                <input type="text" className="w-12 h-12 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-relaxed px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex" placeholder="01"/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 6V18M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                                </svg>
                            </button>
                            <h5 className="max-w-[142px] w-full text-center text-black text-lg font-medium leading-relaxed pl-5">R$125.00</h5>
                            <button className="group max-w-[176px] text-center w-full flex items-center justify-center transition-all duration-700 ease-in-out">
                                <svg className="text-gray-500 group-hover:text-gray-900 transition-all duration-700 ease-in-out"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <g filter="url(#filter0_d_484_1442)">
                                <path d="M13.5 13.5L26.5 26.5M26.5 13.5L13.5 26.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
                                </g>
                                <defs>
                                <filter id="filter0_d_484_1442" x="-2" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                <feOffset dy="1"></feOffset>
                                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_484_1442"></feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_484_1442" result="shape"></feBlend>
                                </filter>
                                </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-sm:max-w-xl max-xl:mx-auto">
                        <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-sm:justify-center max-sm:max-w-xl max-xl:mx-auto">
                            <div className="w-[120px] h-[120px] img-box bg-gray-50 rounded-xl justify-center items-center inline-flex">
                                <img src="https://images.unsplash.com/photo-1612724189298-89d36b10b26d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blue T-shirt for Men image" className="xl:w-[75px]"/>
                            </div>
                            <div className="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
                                <h4 className="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">Air Jordan 1 Azul e Vermelho</h4>
                                <h5 className="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">Product ID: 8953458747</h5>
                            </div>
                        </div>
                        <div className="flex items-center justify-between flex-col min-[550px]:flex-row w-full max-sm:max-w-xl max-xl:mx-auto gap-2">
                            <h5 className="w-full max-w-[142px] text-center text-black text-lg font-medium leading-relaxed">39</h5>
                            <button className="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                                </svg>
                                <input type="text" className="w-12 h-12 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-relaxed px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex" placeholder="02"/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 6V18M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                                </svg>
                            </button>
                            <h5 className="max-w-[142px] w-full text-center text-black text-lg font-medium leading-relaxed pl-5">R$135.00</h5>
                            <button className="group max-w-[176px] text-center w-full flex items-center justify-center transition-all duration-700 ease-in-out">
                                <svg className="text-gray-500 group-hover:text-gray-900 transition-all duration-700 ease-in-out"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <g filter="url(#filter0_d_484_1442)">
                                <path d="M13.5 13.5L26.5 26.5M26.5 13.5L13.5 26.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
                                </g>
                                <defs>
                                <filter id="filter0_d_484_1442" x="-2" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                <feOffset dy="1"></feOffset>
                                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_484_1442"></feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_484_1442" result="shape"></feBlend>
                                </filter>
                                </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 min-[550px]:gap-6 py-3 border-b border-gray-200 max-sm:max-w-xl max-xl:mx-auto">
                        <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-4 w-full max-sm:justify-center max-sm:max-w-xl max-xl:mx-auto">
                            <div className="w-[120px] h-[120px] img-box bg-gray-50 rounded-xl justify-center items-center inline-flex">
                                <img src="https://images.unsplash.com/photo-1693400652052-884f8dd3dfd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blue T-shirt for Men image" className="xl:w-[75px]"/>
                            </div>
                            <div className="pro-data w-full max-w-sm flex-col justify-start items-start gap-2 inline-flex">
                                <h4 className="w-full text-black text-lg font-medium leading-8 max-[550px]:text-center">Air Jordan 1 Azul</h4>
                                <h5 className="w-full text-gray-500 text-base font-normal leading-relaxed min-[550px]:my-0 my-2 max-[550px]:text-center">Product ID: 6766633789</h5>
                            </div>
                        </div>
                        <div className="flex items-center justify-between flex-col min-[550px]:flex-row w-full max-sm:max-w-xl max-xl:mx-auto gap-2">
                            <h5 className="w-full max-w-[142px] text-center text-black text-lg font-medium leading-relaxed">41</h5>
                            <button className="max-w-[160px] flex items-center w-full mx-0 justify-center gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                                </svg>
                                <input type="text" className="w-12 h-12 focus:outline-none text-gray-900 placeholder-gray-900 text-lg font-medium leading-relaxed px-2.5 bg-white rounded-full border border-gray-200 justify-center items-center flex" placeholder="02"/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 6V18M18 12H6" stroke="#111827" stroke-width="1.6" stroke-linecap="round"></path>
                                </svg>
                            </button>
                            <h5 className="max-w-[142px] w-full text-center text-black text-lg font-medium leading-relaxed pl-5">R$135.00</h5>
                            <button className="group max-w-[176px] text-center w-full flex items-center justify-center transition-all duration-700 ease-in-out">
                                <svg className="text-gray-500 group-hover:text-gray-900 transition-all duration-700 ease-in-out"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <g filter="url(#filter0_d_484_1442)">
                                <path d="M13.5 13.5L26.5 26.5M26.5 13.5L13.5 26.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
                                </g>
                                <defs>
                                <filter id="filter0_d_484_1442" x="-2" y="-1" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                <feOffset dy="1"></feOffset>
                                <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"></feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_484_1442"></feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_484_1442" result="shape"></feBlend>
                                </filter>
                                </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="w-full p-5 rounded-xl border border-gray-200 flex-col justify-start items-center gap-4 flex">
                <div className="w-full justify-between items-center gap-6 inline-flex">

                <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Cupom</label>
              <div className="flex pb-4 w-full">
                <div className="relative w-full">
                  <input type="text" className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400" placeholder="xxxx xxxx xxxx" />
                </div>
              </div>
              <div className="flex items-center">
                <button className="rounded-lg mt-4 w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                  Aplicar
                </button>
              </div>
                    </div>
                    <div className="w-full justify-between items-center gap-6 inline-flex">

                        <h5 className="text-gray-600 text-lg font-normal leading-8">Subtotal:</h5>
                        <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">R$ 530.00</h5>
                    </div>
                    <div className="w-full justify-between items-center gap-6 inline-flex">
                        <h5 className="text-gray-600 text-lg font-normal leading-8">Entrega:</h5>
                        <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">Free</h5>
                    </div>
                    <div className="w-full justify-between items-center gap-6 inline-flex">
                        <h5 className="text-gray-600 text-lg font-normal leading-8">Total:</h5>
                        <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">R$530.00</h5>
                    </div>
                </div>
            </div>
            <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col mt-8">
                <a href="/loja"className="w-full px-6 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-600 hover:border-transparent hover:bg-indigo-50 transition-all duration-700 ease-in-out justify-center items-center flex"><button>
                  <span className="px-2 py-px text-center text-indigo-600 text-lg font-semibold leading-8">Cancelar</span>
                </button></a>
                <a className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"><button  >
                  <span className="px-2 text-center text-white text-lg font-semibold leading-8">Confirmar Compra</span>
                </button></a>
                
              </div>
        </div>
    </section>
                                            

                                            
    </div>
</div>

  );
}
