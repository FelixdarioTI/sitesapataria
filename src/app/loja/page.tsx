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
                          Mulheres
                        </button>
                        <button
                          id="tabs-1-tab-2"
                          onClick={() => toggleTab(2)}
                          className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          aria-controls="tabs-1-panel-2"
                          role="tab"
                          type="button"
                        >
                          Homens
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
                <a href="/loja">
                  <span className="sr-only">Sua Empresa</span>
                  <img src={Logo.src} className='h-10 w-20' alt="" />
                  
                </a>
                </div>

                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="flex h-full space-x-8">
        {/* Tênis */}
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
            <div
              id="megamenu"
              aria-labelledby="megamenu"
              className="animate-fade z-10 relative lg:absolute top-2 lg:top-14 lg:-left-4 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full open"
            >
              <div className="flex flex-col sm:flex-row lg:justify-between">
                <ul className="text-sm text-gray-700 lg:w-1/2">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Novidades</h6>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                          Tênis Esportivo
                        </h5>
                        <p className="text-xs font-medium text-gray-400">
                          Desempenho e conforto para esportes.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                          Tênis Casual
                        </h5>
                        <p className="text-xs font-medium text-gray-400">
                          Para o dia a dia com estilo.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className="text-sm text-gray-700 lg:w-1/2">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Marcas Populares</h6>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Nike</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Modelos icônicos da marca.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Adidas</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Conforto e inovação para todos.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Mulheres */}
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
              Mulheres
            </button>
          </div>
          {activeMenuItem === 2 && (
            <div
              id="megamenu"
              aria-labelledby="megamenu"
              className="animate-fade z-10 relative lg:absolute top-2 lg:top-14 lg:-left-4 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full open"
            >
              <div className="flex flex-col sm:flex-row lg:justify-between">
                <ul className="text-sm text-gray-700 lg:w-1/2">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Novidades</h6>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-pink-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Vestidos</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Elegância para qualquer ocasião.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Sapatos</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Conforto e estilo em cada passo.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className="text-sm text-gray-700 lg:w-1/2">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Marcas Populares</h6>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Gucci</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Luxo e sofisticação.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-yellow-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Chanel</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Moda atemporal para todas as idades.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Homens */}
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
              Homens
            </button>
          </div>
          {activeMenuItem === 3 && (
            <div
              id="megamenu"
              aria-labelledby="megamenu"
              className="animate-fade z-10 relative lg:absolute top-2 lg:top-14 lg:-left-4 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full open"
            >
              <div className="flex flex-col sm:flex-row lg:justify-between">
                <ul className="text-sm text-gray-700 lg:w-1/2">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Novidades</h6>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-gray-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Camisas</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Estilo formal para o dia a dia.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-green-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Calças</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Conforto e versatilidade.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className="text-sm text-gray-700 lg:w-1/2">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Marcas Populares</h6>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Armani</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Sofisticação para o homem moderno.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Ralph Lauren</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Casual e elegante.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Infantil */}
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
            <div
              id="megamenu"
              aria-labelledby="megamenu"
              className="animate-fade z-10 relative lg:absolute top-2 lg:top-14 lg:-left-4 bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] xl:p-8 lg:p-4 p-2 lg:min-w-[800px] md:min-w-[500px] min-w-full open"
            >
              <div className="flex flex-col sm:flex-row lg:justify-between">
                <ul className="text-sm text-gray-700 lg:w-1/2">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Novidades</h6>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-yellow-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                          Roupas Infantis
                        </h5>
                        <p className="text-xs font-medium text-gray-400">
                          Conforto e estilo para os pequenos.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-pink-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Calçados</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Calçados para brincar com segurança.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className="text-sm text-gray-700 lg:w-1/2">
                  <h6 className="font-medium text-sm text-gray-500 mb-2">Marcas Populares</h6>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-red-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">Fisher-Price</h5>
                        <p className="text-xs font-medium text-gray-400">
                          Brinquedos educativos e seguros.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="px-2 lg:px-3 py-2 lg:py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                    >
                      <div className="bg-green-50 rounded-lg w-12 h-12 flex items-center justify-center">
                        {/* Icon or Image */}
                      </div>
                      <div className="ml-4 w-4/5">
                        <h5 className="text-gray-900 text-base mb-1.5 font-semibold">
                          Carter's
                        </h5>
                        <p className="text-xs font-medium text-gray-400">
                          Moda infantil com qualidade.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>


                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Login
                    </a>
                    <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                      Criar conta
                    </a>
                  </div>

                  <div className="flex lg:ml-6">
                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
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
        <section className="py-12 relative">
        <div className="w-full max-w-fit mx-auto ml-10">
            <div className="grid grid-cols-12">
                <div className="col-span-10 md:col-span-2 w-full max-md:max-w-md max-md:mx-auto">
                    
                    <div className="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                        <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                            <p className="font-medium text-base leading-7 text-black ">Filtro</p>
                            <p
                                className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                                RESET</p>
                        </div>


                        <div className="w-full mb-7">
                            <div className='accordion-group grid grid-cols-1 gap-5 sm:gap-9'
                                data-accordion="default-accordion">
                                <div className='accordion '
                                    id='category-heading-one'>
                                    <button
                                        className='accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600'
                                        aria-controls='category-collapse-one'>
                                        <h5 className="font-medium text-sm text-gray-900">
                                            Avaliação
                                        </h5>
                                        <svg className='text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180'
                                            width='22' height='22' viewBox='0 0 22 22' fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25'
                                                stroke='currentColor' stroke-width='1.6' stroke-linecap='round'
                                                stroke-linejoin='round'></path>
                                        </svg>

                                    </button>
                                    <div id='category-collapse-one'
                                        className='accordion-content w-full px-0 overflow-hidden pr-4 max-h-0 '
                                        aria-labelledby='category-heading-one'>
                                        
                                        <div className="box flex flex-col gap-2 mt-5">
                                           
                                            <div className="flex items-center mb-2">
                                                <input id="checkbox-option-1" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                <label htmlFor="checkbox-option-1" className="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-1</label>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <input id="checkbox-option-2" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                    <label htmlFor="checkbox-option-2" className="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-2</label>
                                                    </div>
                                                    <div className="flex items-center mb-2">
                                                        <input id="checkbox-option-3" type="checkbox" value="" className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-600 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                                        <label htmlFor="checkbox-option-3" className="ml-1 font-normal text-xs cursor-pointer  text-gray-600">option-3</label>
                                                        </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <label htmlFor="Offer" className="font-medium text-sm leading-6 text-gray-600 mb-1">Desconto</label>
                        <div className="relative w-full mb-7">
                            <select id="Offer"
                                className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option selected>5% off</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                            <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                    stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="font-medium text-sm leading-6 text-black mb-3">Marca</p>
                        <div className="box flex flex-col gap-2">
                            <div className="flex items-center">
                                <input id="checkbox-default-1" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label htmlFor="checkbox-default-1" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">Nike</label>
                            </div>
                            <div className="flex items-center">
                                <input id="checkbox-default-2" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label htmlFor="checkbox-default-2" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">Adidas</label>
                            </div>
                            <div className="flex items-center">
                                <input id="checkbox-default-3" type="checkbox" value="" className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"/>
                                <label htmlFor="checkbox-default-3" className="text-xs font-normal text-gray-600 leading-4 cursor-pointer">Puma</label>
                            </div>
                        </div>
                        <div className="flex items-center mb-5 gap-1 mt-6">
                            <div className="relative w-full">
                                <select id="FROM"
                                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                    <option selected>Min</option>
                                    <option value="option 1">option 1</option>
                                    <option value="option 2">option 2</option>
                                    <option value="option 3">option 3</option>
                                    <option value="option 4">option 4</option>
                                </select>
                                <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                        stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="px-1 font-normal text-sm leading-6 text-gray-600">to</p>
                            <div className="relative w-full">
                                <select id="FROM"
                                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                    <option selected>Max</option>
                                    <option value="option 1">option 1</option>
                                    <option value="option 2">option 2</option>
                                    <option value="option 3">option 3</option>
                                    <option value="option 4">option 4</option>
                                </select>
                                <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                        stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-600 w-full">Tamanho</label>
                        <div className="relative w-full mb-8">
                            <select id="FROM"
                                className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white">
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                            <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16"
                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827"
                                    stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <button
                            className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  ">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
                                    stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Pesquisa
                        </button>
                    </div>

                    </div>
                
                <div className="col-span-12 md:col-span-10">
            <section>
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope font-bold text-3xl min-full:text-4xl text-black mb-8 max-lg:text-center">Produtos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <a href="/produto" className="max-w-full mx-auto">
                    <div className="w-full max-w-sm aspect-square">
                        <img src="https://images.unsplash.com/photo-1693400652052-884f8dd3dfd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cream image" className="w-full h-5/6 rounded-xl"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="">
                        <h6 className="font-medium text-xl leading-8 text-black mb-2">Air Jordan 1</h6>
                        <h6 className="font-semibold text-xl leading-8 text-indigo-600">R$124.99</h6>
                        </div>
                        <button
                            className="p-2 min-full:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                             <svg
                          className=" transition-all duration-500 group-hover:"
                          fill="none"
                          width="22"
                          height="22"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        </button>
                    </div>
                </a>

                <a href="/produto" className="max-w-full mx-auto">
                    <div className="w-full max-w-sm aspect-square">
                        <img src="https://images.unsplash.com/photo-1684381282765-7d991fdbf007?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cream image" className="w-full h-5/6 rounded-xl"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="">
                        <h6 className="font-medium text-xl leading-8 text-black mb-2">Air Jordan 1</h6>
                        <h6 className="font-semibold text-xl leading-8 text-indigo-600">R$139.99</h6>
                        </div>
                        <button
                            className="p-2 min-full:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                             <svg
                          className=" transition-all duration-500 group-hover:"
                          fill="none"
                          width="22"
                          height="22"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        </button>
                    </div>
                </a>

                <a href="/produto" className="max-w-full">
                    <div className="w-full max-w-sm aspect-square relative">
                        <img src="https://images.unsplash.com/photo-1612724189298-89d36b10b26d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="serum bottle image" className="w-full h-5/6 rounded-xl"/>
                        <span
                            className="py-1 min-full:py-2 px-2 min-full:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">20%
                            Off</span>
                    </div>
                    <div className=" flex items-start justify-between">
                        <div className="">
                            <h6 className="font-medium text-xl leading-8 text-black mb-2">Air Jordan 1</h6>
                            <h6 className="font-semibold text-xl leading-8 text-indigo-600">R$149.99</h6>
                        </div>
                        <button
                            className="p-2 min-full:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                             <svg
                          className=" transition-all duration-500 group-hover:"
                          fill="none"
                          width="22"
                          height="22"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        </button>
                    </div>
                </a>
            </div>
        </div>
    </section>
                                            
            </div>
                </div>
            </div>

    </section>
        </div>
      </div>
  );
}
