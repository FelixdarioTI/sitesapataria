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
                      <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Produtos</a>
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
                    <a href="#" className="group -m-2 flex items-center p-2">
                        
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
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">3</span>
                      <span className="sr-only">items no carrinho</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="mx-auto px-6 flex justify-center items-start w-full z-10">
  <section className="relative z-10 w-full">
    <div className={`w-full px-4 md:px-5 lg:px-6 mx-auto relative z-10 grid grid-cols-8 gap-8 transition-all duration-500 `}>

      <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-20 w-full">
        <div className="flex items-center justify-between pb-8 border-b border-gray-300">
          <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Itens no Carrinho</h2>
          <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">3 Itens</h2>
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

        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group">
          <div className="w-full md:max-w-[126px]">
            <img
              src="https://images.unsplash.com/photo-1684381282765-7d991fdbf007?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="produto"
              className="mx-auto rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-semibold text-base leading-7 text-black">Air Jordan 1 Rosa</h6>
                <h6 className="font-normal text-base leading-7 text-gray-500">Tênis</h6>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">R$135.00</h6>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <input type="text" className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px] text-center bg-transparent" placeholder="1" />
                <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 5.5V16.5M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$135.00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group">
          <div className="w-full md:max-w-[126px]">
            <img
              src="https://images.unsplash.com/photo-1612724189298-89d36b10b26d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="produto"
              className="mx-auto rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-semibold text-base leading-7 text-black">Air Jordan 1 Azul e Vermelho</h6>
                <h6 className="font-normal text-base leading-7 text-gray-500">Tênis</h6>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">R$135.00</h6>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <input type="text" className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px] text-center bg-transparent" placeholder="2" />
                <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 5.5V16.5M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$270.00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group">
          <div className="w-full md:max-w-[126px]">
            <img
              src="https://images.unsplash.com/photo-1693400652052-884f8dd3dfd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="produto"
              className="mx-auto rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            <div className="md:col-span-2">
              <div className="flex flex-col max-[500px]:items-center gap-3">
                <h6 className="font-semibold text-base leading-7 text-black">Air Jordan 1 Azul</h6>
                <h6 className="font-normal text-base leading-7 text-gray-500">Tênis</h6>
                <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">R$135.00</h6>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
              <div className="flex items-center h-full">
                <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <input type="text" className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px] text-center bg-transparent" placeholder="1" />
                <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                  <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 5.5V16.5M16.5 11H5.5" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
              <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$135.00</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-8 w-full">
          <a href="/registro">
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


                                            
    </div>
</div>

  );
}
