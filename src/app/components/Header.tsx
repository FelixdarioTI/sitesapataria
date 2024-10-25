"use client";
import { Search, Clock, X } from 'lucide-react'; 
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import Image from 'next/image';
import Logo from '../favicon.ico'
function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null);
  const [tabSelect, setTabSelect] = useState<number | null>(null);
  const [history, setHistory] = useState(['Flowbite Components', 'Tailwind CSS Modal', 'React Tutorial']);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

const toggleMenuItem = (index: number) => {
  setActiveMenuItem(activeMenuItem === index ? null : index);
};

  const toggleTab = (index: number) => {
    setTabSelect(tabSelect === index ? null : index);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setHistory([searchQuery, ...history]); 
    setSearchQuery('');
  };

  return(
    <header className="relative bg-white">
          {mobileMenuOpen && (
            <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 bg-black bg-opacity-25"></div>
              <div className="fixed inset-0 z-40 flex">
                <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      onClick={toggleMobileMenu}
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    >
                      <span className="absolute -inset-0.5"></span>
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-2">
                    <div className="border-b border-gray-200">
                      <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                      <button
                          id="tabs-1-tab-1"
                          onClick={() => toggleTab(1)}
                          className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          aria-controls="tabs-1-panel-1"
                          role="tab"
                          type="button"
                        >
                          Tênis
                        </button>
                        <button
                          id="tabs-1-tab-1"
                          onClick={() => toggleTab(2)}
                          className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          aria-controls="tabs-1-panel-1"
                          role="tab"
                          type="button"
                        >
                          Feminino
                        </button>
                        <button
                          id="tabs-1-tab-2"
                          onClick={() => toggleTab(3)}
                          className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          aria-controls="tabs-1-panel-2"
                          role="tab"
                          type="button"
                        >
                          Masculino
                        </button>
                      </div>
                    </div>

                    {tabSelect === 1 && (
                      <div id="tabs-1-panel-1" className="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                        <div className="grid grid-cols-2 gap-x-4">
                          <div className="group relative text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <Image
                                src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                className="object-cover object-center"
                                layout="fill"
                              />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {tabSelect === 2 && (
                      <div id="tabs-1-panel-2" className="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabIndex={0}>
                        <div className="grid grid-cols-2 gap-x-4">
                          <div className="group relative text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <Image
                                src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="object-cover object-center"
                                layout="fill"
                              />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {tabSelect === 3 && (
                      <div id="tabs-1-panel-1" className="space-y-10 px-4 pb-8 pt-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex={0}>
                        <div className="grid grid-cols-2 gap-x-4">
                          <div className="group relative text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <Image
                                src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                className="object-cover object-center"
                                layout="fill"
                              />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Company</a>
                    </div>
                    <div className="flow-root">
                      <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Stores</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  onClick={toggleMobileMenu}
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Abrir menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>

                <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Sua Empresa</span>
                  <img src={Logo.src} className='h-10 w-20' alt="" />
                  
                </a>
                </div>

                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    <div className="flex">
                      <div className="relative flex">
                        <button
                          type="button"
                          onClick={() => toggleMenuItem(1)}
                          className={`border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                            activeMenuItem === 1 ? 'border-indigo-600 text-indigo-600' : ''
                          }`}
                          aria-expanded="false"
                        >
                          Tênis
                        </button>
                      </div>
                      {activeMenuItem === 1 && (
  <div className="absolute inset-x-0 top-full text-sm text-gray-500 z-30">
    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-16">
          <div className="col-span-2 grid grid-cols-2 gap-x-8">
            <ul className="text-sm text-gray-700">
              <h6 className="font-medium text-sm text-gray-500 mb-2">Novidades</h6>
              <li>
                <a
                  href="#"
                  className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                >
                  <div className="bg-yellow-50 rounded-lg w-12 h-12 flex items-center justify-center">
                    {/* Icon or Image */}
                  </div>
                  <div className="ml-4 w-4/5">
                    <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Roupas Infantis</h5>
                    <p className="text-xs font-medium text-gray-400">Conforto e estilo para os pequenos.</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                >
                  <div className="bg-pink-50 rounded-lg w-12 h-12 flex items-center justify-center">
                    {/* Icon or Image */}
                  </div>
                  <div className="ml-4 w-4/5">
                    <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Calçados</h5>
                    <p className="text-xs font-medium text-gray-400">Calçados para brincar com segurança.</p>
                  </div>
                </a>
              </li>
            </ul>

            <ul className="text-sm text-gray-700">
              <h6 className="font-medium text-sm text-gray-500 mb-2">Marcas Populares</h6>
              <li>
                <a
                  href="#"
                  className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                >
                  <div className="bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                    {/* Icon or Image */}
                  </div>
                  <div className="ml-4 w-4/5">
                    <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Fisher-Price</h5>
                    <p className="text-xs font-medium text-gray-400">Brinquedos educativos e seguros.</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                >
                  <div className="bg-green-50 rounded-lg w-12 h-12 flex items-center justify-center">
                    {/* Icon or Image */}
                  </div>
                  <div className="ml-4 w-4/5">
                    <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Carters</h5>
                    <p className="text-xs font-medium text-gray-400">Moda infantil com qualidade.</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 relative">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                alt="Models sitting back to back, wearing Basic Tee in black and bone."
                className="object-cover object-center"
                layout="fill"
              />
            </div>
            <a href="#" className="mt-6 block font-medium text-gray-900">
              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
              New Arrivals
            </a>
            <p aria-hidden="true" className="mt-1">Shop now</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

                    </div>
                    <div className="flex">
                      <div className="relative flex">
                        <button
                          type="button"
                          onClick={() => toggleMenuItem(2)}
                          className={`border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                            activeMenuItem === 2 ? 'border-indigo-600 text-indigo-600' : ''
                          }`}
                          aria-expanded="false"
                        >
                          Feminino
                        </button>
                      </div>
                      {activeMenuItem === 2 && (
                        <div className="absolute inset-x-0 top-full text-sm text-gray-500 z-30">
                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-16">
                              <div className="col-span-2 grid grid-cols-2 gap-x-8">
                                <ul className="text-sm text-gray-700">
                                  <h6 className="font-medium text-sm text-gray-500 mb-2">Novidades</h6>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-yellow-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Roupas Infantis</h5>
                                        <p className="text-xs font-medium text-gray-400">Conforto e estilo para os pequenos.</p>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-pink-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Calçados</h5>
                                        <p className="text-xs font-medium text-gray-400">Calçados para brincar com segurança.</p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                    
                                <ul className="text-sm text-gray-700">
                                  <h6 className="font-medium text-sm text-gray-500 mb-2">Marcas Populares</h6>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Fisher-Price</h5>
                                        <p className="text-xs font-medium text-gray-400">Brinquedos educativos e seguros.</p>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-green-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Carters</h5>
                                        <p className="text-xs font-medium text-gray-400">Moda infantil com qualidade.</p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                    
                              <div className="col-span-1 relative">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                                  <Image
                                    src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                    alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                    className="object-cover object-center"
                                    layout="fill"
                                  />
                                </div>
                                <a href="#" className="mt-6 block font-medium text-gray-900">
                                  <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                  New Arrivals
                                </a>
                                <p aria-hidden="true" className="mt-1">Shop now</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                    </div>
                    <div className="flex">
                      <div className="relative flex">
                        <button
                          type="button"
                          onClick={() => toggleMenuItem(3)}
                          className={`border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                            activeMenuItem === 3 ? 'border-indigo-600 text-indigo-600' : ''
                          }`}
                          aria-expanded="false"
                        >
                          Masculino
                        </button>
                      </div>
                      {activeMenuItem === 3 && (
                        <div className="absolute inset-x-0 top-full text-sm text-gray-500 z-30">
                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-16">
                              <div className="col-span-2 grid grid-cols-2 gap-x-8">
                                <ul className="text-sm text-gray-700">
                                  <h6 className="font-medium text-sm text-gray-500 mb-2">Novidades</h6>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-yellow-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Roupas Infantis</h5>
                                        <p className="text-xs font-medium text-gray-400">Conforto e estilo para os pequenos.</p>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-pink-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Calçados</h5>
                                        <p className="text-xs font-medium text-gray-400">Calçados para brincar com segurança.</p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                    
                                <ul className="text-sm text-gray-700">
                                  <h6 className="font-medium text-sm text-gray-500 mb-2">Marcas Populares</h6>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Fisher-Price</h5>
                                        <p className="text-xs font-medium text-gray-400">Brinquedos educativos e seguros.</p>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-green-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Carters</h5>
                                        <p className="text-xs font-medium text-gray-400">Moda infantil com qualidade.</p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                    
                              <div className="col-span-1 relative">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                                  <Image
                                    src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                    alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                    className="object-cover object-center"
                                    layout="fill"
                                  />
                                </div>
                                <a href="#" className="mt-6 block font-medium text-gray-900">
                                  <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                  New Arrivals
                                </a>
                                <p aria-hidden="true" className="mt-1">Shop now</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                      </div>
                      <div className="flex">
                      <div className="relative flex">
                        <button
                          type="button"
                          onClick={() => toggleMenuItem(4)}
                          className={`border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out ${
                            activeMenuItem === 4 ? 'border-indigo-600 text-indigo-600' : ''
                          }`}
                          aria-expanded="false"
                        >
                          Infantil
                        </button>
                      </div>
                      {activeMenuItem === 4 && (
                        <div className="absolute inset-x-0 top-full text-sm text-gray-500 z-30">
                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-16">
                              <div className="col-span-2 grid grid-cols-2 gap-x-8">
                                <ul className="text-sm text-gray-700">
                                  <h6 className="font-medium text-sm text-gray-500 mb-2">Novidades</h6>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-yellow-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Roupas Infantis</h5>
                                        <p className="text-xs font-medium text-gray-400">Conforto e estilo para os pequenos.</p>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-pink-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Calçados</h5>
                                        <p className="text-xs font-medium text-gray-400">Calçados para brincar com segurança.</p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                    
                                <ul className="text-sm text-gray-700">
                                  <h6 className="font-medium text-sm text-gray-500 mb-2">Marcas Populares</h6>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Fisher-Price</h5>
                                        <p className="text-xs font-medium text-gray-400">Brinquedos educativos e seguros.</p>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                                    >
                                      <div className="bg-green-50 rounded-lg w-12 h-12 flex items-center justify-center">
                                        {/* Icon or Image */}
                                      </div>
                                      <div className="ml-4 w-4/5">
                                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Carters</h5>
                                        <p className="text-xs font-medium text-gray-400">Moda infantil com qualidade.</p>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                    
                              <div className="col-span-1 relative">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                                  <Image
                                    src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                    alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                    className="object-cover object-center"
                                    layout="fill"
                                  />
                                </div>
                                <a href="#" className="mt-6 block font-medium text-gray-900">
                                  <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                                  New Arrivals
                                </a>
                                <p aria-hidden="true" className="mt-1">Shop now</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                    </div>


                    <a href="/loja" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      Produtos
                    </a>
                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Login
                    </a>
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>
                    <a href="/cadastro" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Criar conta
                    </a>
                  </div>

                  <div className="flex lg:ml-6">
                    <a href="#" onClick={toggleModal} className="p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </a>
                  </div>
                  {isOpen && (


<div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-2 w-full max-w-md max-h-full">
       
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
           
            <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-t dark:border-gray-600">
            <form onSubmit={handleSearch} className="relative mb-4">
           <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" /> 
           <input
             type="text"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="border-none rounded-lg w-full pl-10 py-3 "
             placeholder="Digite sua pesquisa..."
             required
           />
         </form>
                <button onClick={toggleModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Histórico</h3>
           <ul className="space-y-2">
             {history.map((item, index) => (
               <li key={index} className="flex items-center bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">
                 <Clock className="h-5 w-5 text-gray-400 mr-3" /> {/* Ícone de relógio */}
                 <span>{item}</span>
               </li>
             ))}
           </ul>
            </div>
        </div>
    </div>
</div> 
      )}
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="/carrinho" className="group -m-2 flex items-center p-2">
                        
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                      <span className="sr-only">items no carrinho</span>
                    </a>
                  </div>
                  </div>
            </div>
          </div>
        </nav>
      </header>
  )
}
export default Header;