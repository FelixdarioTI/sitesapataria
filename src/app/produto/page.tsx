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


                    <a href="/loja" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      Produtos
                    </a>
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
                
 <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
                    <div className="swiper main-slide-carousel swiper-container relative mb-6">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="block">
                                    <img src="https://images.unsplash.com/photo-1693400652052-884f8dd3dfd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Summer Travel Bag image" className="max-lg:mx-auto rounded-2xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                        <div className="flex items-center justify-between gap-6 mb-6">
                            <div className="text">
                                <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">Jordan 1
                                </h2>
                                <p className="font-normal text-base text-gray-500"></p>
                            </div>
                        </div>

                        <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                            <div className="flex items-center">
                                <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">R$ 125.00 </h5>
                                <span className="ml-3 font-semibold text-lg text-indigo-600">30% off</span>
                            </div>
                            <svg className="mx-5 max-[400px]:hidden" xmlns="http://www.w3.org/2000/svg" width="2"
                                height="36" viewBox="0 0 2 36" fill="none">
                                <path d="M1 0V36" stroke="#E5E7EB" />
                            </svg>
                            <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12657_16865)">
                                        <path
                                            d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                                            fill="white" />
                                        <g clip-path="url(#clip1_12657_16865)">
                                            <path
                                                d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                                                fill="white" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12657_16865">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_12657_16865">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="text-base font-medium text-white">4.8</span>
                            </button>
                        </div>
                        <p className="font-medium text-lg text-gray-900 mb-2">Color</p>
                        <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
                            <div className="color-box group">
                            <div>
                                    <img src="https://images.unsplash.com/photo-1684381282765-7d991fdbf007?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Summer Travel Bag image"
                                        className="border-2 border-gray-100 rounded-xl h-[90px] w-full transition-all duration-500 group-hover:border-indigo-600"
                                        />
                                    <p
                                        className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-indigo-600 ">
                                        Rosa</p>
                                </div>
                            </div>

                            <div className="color-box group">
                            <div>
                                    <img src="https://images.unsplash.com/photo-1693400652052-884f8dd3dfd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Summer Travel Bag image"
                                        className="border-2 border-gray-100 w-32  rounded-xl transition-all duration-500 group-hover:border-indigo-600"
                                        />
                                    <p
                                        className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-indigo-600 ">
                                        Azul</p>
                                </div>
                            </div>

                            <div className="color-box group">
                            <div>
                                    <img src="https://images.unsplash.com/photo-1612724189298-89d36b10b26d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Summer Travel Bag image"
                                        className="border-2 border-gray-100 rounded-xl h-[90px] w-full transition-all duration-500 group-hover:border-indigo-600"
                                        />
                                    <p
                                        className="font-normal text-sm leading-6 text-gray-400 text-center mt-2 group-hover:text-indigo-600 ">
                                        Azul e Vermelho</p>
                                </div>
                            </div>
                        </div>
                        <p className="font-medium text-lg text-gray-900 mb-2">Tamanho (BR)</p>
                        <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-3 min-[400px]:mb-8">
                            <button
                                className="border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">38
                                </button>
                            <button
                                className="border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                39</button>
                            <button
                                className="border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                40</button>
                            <button
                                className="border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                41</button>
                        </div>
                        <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                            <div className=" flex items-center justify-center border border-gray-400 rounded-full">
                                <button
                                    className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                    <svg className="stroke-black group-hover:stroke-black" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                            stroke-linecap="round" />
                                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                            stroke-linecap="round" />
                                    </svg>
                                </button>
                                <input type="text"
                                    className="font-semibold text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-indigo-600 outline-0 hover:placeholder:text-indigo-600"
                                    placeholder="1"/>
                                <button
                                    className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                                    <svg className="stroke-black group-hover:stroke-black" width="22" height="22"
                                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="#9CA3AF" stroke-width="1.6"
                                            stroke-linecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                                            stroke-width="1.6" stroke-linecap="round" />
                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                                            stroke-width="1.6" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                            <button
                                className="group py-3 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
                                <svg
                          className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
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
                                Adicione no carrinho</button>
                        </div>
                        <button
                            className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
                            Comprar Agora
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <h3 className="text-gray-600 text-2xl font-medium">Mais Produtos</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    <div
                      className="flex items-end justify-end h-56 w-full bg-cover"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1670105084645-d4e3c9800776?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                      }}
                    >
                      <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg
                          className="h-5 w-5"
                          fill="none"
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
                    <div className="px-5 py-3">
                      <h3 className="text-gray-700 uppercase">Jordan 1</h3>
                      <span className="text-gray-500 mt-2">R$12</span>
                    </div>
                  </div>
                  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    <div
                      className="flex items-end justify-end h-56 w-full bg-cover"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                      }}
                    >
                      <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg
                          className="h-5 w-5"
                          fill="none"
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
                    <div className="px-5 py-3">
                      <h3 className="text-gray-700 uppercase">Homem Kit</h3>
                      <span className="text-gray-500 mt-2">R$12</span>
                    </div>
                  </div>
                  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    <div
                      className="flex items-end justify-end h-56 w-full bg-cover"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1600717152781-b0d40a7e1486?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                      }}
                    >
                      <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg
                          className="h-5 w-5"
                          fill="none"
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
                    <div className="px-5 py-3">
                      <h3 className="text-gray-700 uppercase">Jordan 1</h3>
                      <span className="text-gray-500 mt-2">R$12</span>
                    </div>
                  </div>
                  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    <div
                      className="flex items-end justify-end h-56 w-full bg-cover"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                      }}
                    >
                      <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg
                          className="h-5 w-5"
                          fill="none"
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
                    <div className="px-5 py-3">
                      <h3 className="text-gray-700 uppercase">Mulher Kit</h3>
                      <span className="text-gray-500 mt-2">R$12</span>
                    </div>
                  </div>
                </div>
                </div>
        </div>
    </section>
        </div>
      </div>
  );
}
