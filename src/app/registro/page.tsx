'use client';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '../favicon.ico'
import { useRouter } from 'next/navigation';
export default function Home() {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null);
    const [tabSelect, setTabSelect] = useState<number>(1);
  
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const toggleMenuItem = (index: number) => {
      setActiveMenuItem(activeMenuItem === index ? null : index);
    };
    const toggleTab = (index: number) => {
      setTabSelect(index);
    };
  
    const handleCadastrar = () => {
      if (tabSelect < 3) {
        setTabSelect(tabSelect + 1);
      } else {
        router.push('/confirmar');
      }
    };
    const [cardNumber, setCardNumber] = useState("4256 4256 4256 4256");
    const [expDate, setExpDate] = useState("12/24");
    const [ccvNumber, setCcvNumber] = useState("342");
    const [cardName, setCardName] = useState("John Doe");
    const [seeBack, setSeeBack] = useState(false);
  
    const toggleBackCard = () => setSeeBack(!seeBack);
    const showBackCard = () => setSeeBack(true);
    const hideBackCard = () => setSeeBack(false);
  
    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target.value.replace(/\D/g, "");
      let formattedInput = "";
      for (let i = 0; i < input.length; i++) {
        if (i % 4 === 0 && i > 0) {
          formattedInput += " ";
        }
        formattedInput += input[i];
      }
      setCardNumber(formattedInput);
    };
  
    const handleExpDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target.value.replace(/\D/g, "");
      let formattedInput = "";
      for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0 && i > 0) {
          formattedInput += "/";
        }
        formattedInput += input[i];
      }
      setExpDate(formattedInput);
    };
  
    const handleCcvNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target.value.replace(/\D/g, "");
      setCcvNumber(input);
    };
  
    const handleCardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCardName(event.target.value);
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
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                  <div className="group relative text-base sm:text-sm">
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
                          Mulheres
                        </button>
                      </div>
                      {activeMenuItem === 2 && (
                        <div className="absolute inset-x-0 top-full text-sm text-gray-500 z-30">
                          <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                          <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                  <div className="group relative text-base sm:text-sm">
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
                          Homens
                        </button>
                      </div>
                      {activeMenuItem === 3 && (
                        <div className="absolute inset-x-0 top-full text-sm text-gray-500 z-30">
                          <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                          <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                  <div className="group relative text-base sm:text-sm">
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
                
 
{/* Conteúdo principal */}
<section className="py-12 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
              <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">Informações Da Conta</h2>
              <div className="w-full flex-col justify-center items-center gap-8 flex">
                <ol className="w-full flex items-center justify-center gap-8 text-xs text-gray-900 font-medium sm:text-base">
                  <li className={`flex relative text-center ${tabSelect === 1 ? "text-indigo-600" : "text-gray-500"} text-base font-semibold leading-relaxed justify-center after:content-[''] sm:after:w-[172px] after:w-[150px] after:border-dashed after:border after:border-indigo-600 after:inline-block after:absolute after:top-5 sm:after:left-[110px] after:left-[100px]`}>
                    <div className="sm:w-[176px] w-auto sm:whitespace-nowrap text-center z-10">
                      <span className={`w-10 h-10 ${tabSelect === 1 ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-600"} border border-dotted border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-1 text-base font-bold leading-relaxed lg:w-10 lg:h-10`}>1</span> Informações Da Conta
                    </div>
                  </li>
                  <li className={`flex relative justify-center ${tabSelect === 2 ? "text-indigo-600" : "text-gray-500"} text-base font-semibold after:content-[''] leading-relaxed sm:after:w-[172px] after:w-[150px] after:border-dashed after:border after:border-indigo-200  after:inline-block after:absolute after:top-5 sm:after:left-[106px] after:left-24`}>
                    <div className="sm:w-[176px] w-auto sm:whitespace-nowrap text-center flex flex-col z-10">
                      <span className={`w-10 h-10 ${tabSelect === 2 ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-600"} rounded-full flex justify-center items-center mx-auto mb-1 text-base font-bold leading-relaxed lg:w-10 lg:h-10`}>2</span> Seu Endereço
                    </div>
                  </li>
                  <li className={`flex relative justify-center ${tabSelect === 3 ? "text-indigo-600" : "text-gray-500"} text-base font-semibold leading-relaxed`}>
                    <div className="sm:w-[176px] w-auto sm:whitespace-nowrap text-center flex items-center flex-col z-10">
                      <span className={`w-10 h-10 ${tabSelect === 3 ? "bg-indigo-600 text-white" : "bg-transparent text-indigo-600"} border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-1 lg:w-10 lg:h-10`}>3</span> Forma de Pagamento
                    </div>
                  </li>
                </ol>
              </div>

              {/* Conteúdo das Abas */}
              {tabSelect === 1 && (
                <div className="w-full lg:p-11 md:p-8 p-7 bg-white rounded-3xl shadow-[0px_15px_60px_-4px_rgba(16,_24,_40,_0.08)] flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-8 flex">
                    <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Nome Completo</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Nome Completo"/>
                      </div>
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">CPF</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="CPF"/>
                      </div>
                    </div>
                    <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Email</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Email"/>
                      </div>
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Data de Nascimento</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Data de Nascimento"/>
                      </div>
                    </div>
                    <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Descrição</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Descrição"/>
                      </div>
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Número de Telefone</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Número de Telefone"/>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tabSelect === 2 && (
                <div className="w-full lg:p-11 md:p-8 p-7 bg-white rounded-3xl shadow-[0px_15px_60px_-4px_rgba(16,_24,_40,_0.08)] flex-col justify-start items-start flex">
                  <div className="w-full flex-col justify-start items-start gap-8 flex">
                    <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Endereço Completo</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Endereço Completo"/>
                      </div>
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Complemento</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Complemento"/>
                      </div>
                    </div>
                    <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">CEP</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="CEP"/>
                      </div>
                      <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                        <label htmlFor="" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Cidade</label>
                        <input type="text" className="bg-white w-full focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex" placeholder="Cidade"/>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tabSelect === 3 && (
                <form className="bg-white w-full max-w-3xl mx-auto px-4 lg:px-6 py-8 shadow-md rounded-md flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 lg:pr-8 lg:border-r-2 lg:border-slate-300">
                  <div className="mb-4">
                    <label className="text-neutral-800 font-bold text-sm mb-2 block">Card number:</label>
                    <input
                      id="cardNumber"
                      type="text"
                      onClick={hideBackCard}
                      className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      maxLength={19}
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                  </div>
                  <div className="flex gap-x-2 mb-4">
                    <div className="block">
                      <label className="text-neutral-800 font-bold text-sm mb-2 block">Exp. date:</label>
                      <input
                        id="expDate"
                        type="text"
                        onClick={hideBackCard}
                        className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        maxLength={5}
                        placeholder="MM/YY"
                        value={expDate}
                        onChange={handleExpDateChange}
                      />
                    </div>
                    <div className="block">
                      <label className="text-neutral-800 font-bold text-sm mb-2 block">CCV:</label>
                      <input
                        id="ccvNumber"
                        type="text"
                        onClick={showBackCard}
                        className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        maxLength={3}
                        placeholder="123"
                        value={ccvNumber}
                        onChange={handleCcvNumberChange}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-neutral-800 font-bold text-sm mb-2 block">Card holder:</label>
                    <input
                      id="cardName"
                      type="text"
                      onClick={hideBackCard}
                      className="flex h-10 w-full rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John Doe"
                      value={cardName}
                      onChange={handleCardNameChange}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8">
                  <div className="w-full max-w-sm h-56" style={{ perspective: "1000px" }}>
                    <div
                      id="creditCard"
                      className={`relative crediCard cursor-pointer transition-transform duration-500 ${seeBack ? "seeBack" : ""}`}
                      style={{ transformStyle: "preserve-3d" }}
                      onClick={toggleBackCard}
                    >
                      <div className="w-full h-56 m-auto rounded-xl text-white shadow-2xl absolute" style={{ backfaceVisibility: "hidden" }}>
                        <img
                          src="https://i.ibb.co/LPLv5MD/Payment-Card-01.jpg"
                          className="relative object-cover w-full h-full rounded-xl"
                          alt="Card front"
                        />
                        <div className="w-full px-8 absolute top-8">
                          <div className="text-right">
                            <svg
                              className="w-14 h-14 ml-auto"
                              width="45"
                              height="36"
                              viewBox="0 0 45 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.4164 2.97418H28.5836V24.8367H16.4164V2.97418Z"
                                fill="#FF5F00"
                              />
                              <path
                                d="M8.18925 35.8409V33.5234C8.18925 32.6348 7.64837 32.0556 6.72127 32.0556C6.2578 32.0556 5.75563 32.2101 5.40794 32.7123C5.13768 32.2873 4.75146 32.0556 4.17204 32.0556C3.78564 32.0556 3.3996 32.1714 3.09045 32.5963V32.1328H2.2793V35.8409H3.09045V33.7937C3.09045 33.1372 3.43813 32.828 3.97902 32.828C4.51955 32.828 4.79017 33.1757 4.79017 33.7937V35.8409H5.60132V33.7937C5.60132 33.1372 5.98736 32.828 6.48953 32.828C7.03042 32.828 7.30068 33.1757 7.30068 33.7937V35.8409H8.18925ZM20.2018 32.1328H18.8887V31.0127H18.0775V32.1328H17.3436V32.8666H18.0774V34.5663C18.0774 35.4162 18.4251 35.9182 19.3522 35.9182C19.6998 35.9182 20.0859 35.8024 20.3565 35.6479L20.1246 34.9525C19.8929 35.107 19.6226 35.1457 19.4294 35.1457C19.0432 35.1457 18.8887 34.914 18.8887 34.5276V32.8666H20.2018V32.1328ZM27.0774 32.0554C26.614 32.0554 26.305 32.2873 26.1118 32.5963V32.1328H25.3006V35.8409H26.1118V33.7551C26.1118 33.1372 26.3821 32.7895 26.8842 32.7895C27.0387 32.7895 27.2319 32.8282 27.3864 32.8668L27.6181 32.0943C27.4637 32.0556 27.2319 32.0556 27.0774 32.0556V32.0554ZM16.687 32.4418C16.3006 32.1714 15.7599 32.0556 15.1805 32.0556C14.2535 32.0556 13.6356 32.5191 13.6356 33.253C13.6356 33.8711 14.099 34.2186 14.9102 34.3346L15.2964 34.3733C15.7213 34.4503 15.9531 34.5663 15.9531 34.7595C15.9531 35.0298 15.6441 35.223 15.1032 35.223C14.5625 35.223 14.1376 35.0298 13.8671 34.8367L13.4809 35.4547C13.9058 35.7637 14.4853 35.9182 15.0645 35.9182C16.1461 35.9182 16.7642 35.4162 16.7642 34.7208C16.7642 34.0641 16.262 33.7164 15.4894 33.6007L15.1032 33.562C14.7555 33.5232 14.4853 33.4462 14.4853 33.2144C14.4853 32.944 14.7555 32.7895 15.1805 32.7895C15.6441 32.7895 16.1076 32.9825 16.3393 33.0985L16.687 32.4418ZM38.2405 32.0556C37.7769 32.0556 37.4679 32.2873 37.2747 32.5963V32.1328H36.4635V35.8409H37.2747V33.7551C37.2747 33.1372 37.5451 32.7895 38.0471 32.7895C38.2018 32.7895 38.395 32.8282 38.5495 32.8668L38.7812 32.0943C38.6267 32.0556 38.395 32.0556 38.2405 32.0556V32.0556ZM27.8886 33.9869C27.8886 35.107 28.661 35.9182 29.8586 35.9182C30.3993 35.9182 30.7855 35.8024 31.1717 35.4934L30.7855 34.8367C30.4765 35.0685 30.1675 35.1843 29.8199 35.1843C29.1632 35.1843 28.6997 34.7208 28.6997 33.9869C28.6997 33.2917 29.1632 32.828 29.8199 32.7895C30.1675 32.7895 30.4765 32.9053 30.7855 33.1372L31.1717 32.4805C30.7855 32.1714 30.3993 32.0556 29.8586 32.0556C28.661 32.0556 27.8886 32.8668 27.8886 33.9869ZM35.3821 33.9869V32.1328H34.571V32.5963C34.3005 32.2488 33.9143 32.0556 33.4121 32.0556C32.3693 32.0556 31.5581 32.8668 31.5581 33.9869C31.5581 35.107 32.3693 35.9182 33.4121 35.9182C33.9529 35.9182 34.3392 35.7251 34.571 35.3774V35.8409H35.3821V33.9869ZM32.4078 33.9869C32.4078 33.3302 32.8327 32.7895 33.5279 32.7895C34.1846 32.7895 34.6482 33.2917 34.6482 33.9869C34.6482 34.6435 34.1846 35.1843 33.5279 35.1843C32.8327 35.1455 32.4078 34.6435 32.4078 33.9869ZM22.7127 32.0556C21.6311 32.0556 20.8585 32.828 20.8585 33.9869C20.8585 35.1457 21.6309 35.9182 22.7512 35.9182C23.292 35.9182 23.8328 35.7637 24.2578 35.4162L23.8714 34.8367C23.5624 35.0685 23.1762 35.223 22.79 35.223C22.2878 35.223 21.7856 34.9912 21.6697 34.3344H24.4123V34.0256C24.451 32.828 23.7556 32.0556 22.7125 32.0556H22.7127ZM22.7127 32.7508C23.2147 32.7508 23.5626 33.06 23.6396 33.6394H21.7084C21.7856 33.1372 22.1333 32.7508 22.7127 32.7508ZM42.837 33.9869V30.665H42.0258V32.5963C41.7554 32.2488 41.3692 32.0556 40.867 32.0556C39.8241 32.0556 39.013 32.8668 39.013 33.9869C39.013 35.107 39.8241 35.9182 40.867 35.9182C41.4079 35.9182 41.7941 35.7251 42.0258 35.3774V35.8409H42.837V33.9869ZM39.8628 33.9869C39.8628 33.3302 40.2876 32.7895 40.9829 32.7895C41.6396 32.7895 42.1031 33.2917 42.1031 33.9869C42.1031 34.6435 41.6396 35.1843 40.9829 35.1843C40.2876 35.1455 39.8628 34.6435 39.8628 33.9869ZM12.747 33.9869V32.1328H11.9359V32.5963C11.6654 32.2488 11.2792 32.0556 10.777 32.0556C9.73413 32.0556 8.92298 32.8668 8.92298 33.9869C8.92298 35.107 9.73413 35.9182 10.777 35.9182C11.3179 35.9182 11.7041 35.7251 11.9359 35.3774V35.8409H12.747V33.9869ZM9.73413 33.9869C9.73413 33.3302 10.1591 32.7895 10.8543 32.7895C11.5109 32.7895 11.9746 33.2917 11.9746 33.9869C11.9746 34.6435 11.5109 35.1843 10.8543 35.1843C10.1591 35.1455 9.73413 34.6435 9.73413 33.9869Z"
                                  fill="white"
                                />
                              <path
                                d="M17.1888 13.9055C17.1888 9.46353 19.2746 5.52356 22.4805 2.97416C20.1244 1.12013 17.1503 0 13.9057 0C6.21876 0 0 6.21876 0 13.9055C0 21.5921 6.21876 27.811 13.9055 27.811C17.1501 27.811 20.1243 26.6909 22.4805 24.8367C19.2746 22.326 17.1888 18.3475 17.1888 13.9055Z"
                                fill="#EB001B"
                              />
                              <path
                                d="M44.9995 13.9055C44.9995 21.5921 38.7808 27.811 31.094 27.811C27.8494 27.811 24.8752 26.6909 22.519 24.8367C25.7636 22.2874 27.8109 18.3475 27.8109 13.9055C27.8109 9.46353 25.7249 5.52356 22.519 2.97416C24.8751 1.12013 27.8494 0 31.094 0C38.7808 0 44.9997 6.25747 44.9997 13.9055H44.9995Z"
                                fill="#F79E1B"
                              />
                            </svg>
                          </div>
                          <div className="pt-1">
                            <p className="font-light">Número do Cartão</p>
                            <p id="imageCardNumber" className="font-medium tracking-more-wider h-6">
                              {cardNumber}
                            </p>
                          </div>
                          <div className="pt-6 flex justify-between">
                            <div>
                              <p className="font-light">Nome</p>
                              <p id="imageCardName" className="font-medium tracking-widest h-6">
                                {cardName}
                              </p>
                            </div>
                            <div>
                              <p className="font-light">Expira</p>
                              <p id="imageExpDate" className="font-medium tracking-wider h-6 w-14">
                                {expDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-full h-56 m-auto rounded-xl text-white shadow-2xl absolute"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <img
                          src="https://i.ibb.co/LPLv5MD/Payment-Card-01.jpg"
                          className="relative object-cover w-full h-full rounded-xl"
                          alt="Card back"
                        />
                        <div className="w-full absolute top-8">
                          <div className="bg-black h-10"></div>
                          <div className="px-8 mt-5">
                            <div className="flex space-between">
                              <div className="flex-1 h-8 bg-red-100"></div>
                              <p id="imageCCVNumber" className="bg-white text-black flex items-center pl-4 pr-2 w-14">
                                {ccvNumber}
                              </p>
                            </div>
                            <p className="font-light flex justify-end text-xs mt-2">security code</p>
                            <div className="flex justify-end mt-2">
                              <svg
                                className="w-14 h-14"
                                width="45"
                                height="36"
                                viewBox="0 0 45 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M16.4164 2.97418H28.5836V24.8367H16.4164V2.97418Z"
                                  fill="#FF5F00"
                                />
                                <path
                                  d="M8.18925 35.8409V33.5234C8.18925 32.6348 7.64837 32.0556 6.72127 32.0556C6.2578 32.0556 5.75563 32.2101 5.40794 32.7123C5.13768 32.2873 4.75146 32.0556 4.17204 32.0556C3.78564 32.0556 3.3996 32.1714 3.09045 32.5963V32.1328H2.2793V35.8409H3.09045V33.7937C3.09045 33.1372 3.43813 32.828 3.97902 32.828C4.51955 32.828 4.79017 33.1757 4.79017 33.7937V35.8409H5.60132V33.7937C5.60132 33.1372 5.98736 32.828 6.48953 32.828C7.03042 32.828 7.30068 33.1757 7.30068 33.7937V35.8409H8.18925ZM20.2018 32.1328H18.8887V31.0127H18.0775V32.1328H17.3436V32.8666H18.0774V34.5663C18.0774 35.4162 18.4251 35.9182 19.3522 35.9182C19.6998 35.9182 20.0859 35.8024 20.3565 35.6479L20.1246 34.9525C19.8929 35.107 19.6226 35.1457 19.4294 35.1457C19.0432 35.1457 18.8887 34.914 18.8887 34.5276V32.8666H20.2018V32.1328ZM27.0774 32.0554C26.614 32.0554 26.305 32.2873 26.1118 32.5963V32.1328H25.3006V35.8409H26.1118V33.7551C26.1118 33.1372 26.3821 32.7895 26.8842 32.7895C27.0387 32.7895 27.2319 32.8282 27.3864 32.8668L27.6181 32.0943C27.4637 32.0556 27.2319 32.0556 27.0774 32.0556V32.0554ZM16.687 32.4418C16.3006 32.1714 15.7599 32.0556 15.1805 32.0556C14.2535 32.0556 13.6356 32.5191 13.6356 33.253C13.6356 33.8711 14.099 34.2186 14.9102 34.3346L15.2964 34.3733C15.7213 34.4503 15.9531 34.5663 15.9531 34.7595C15.9531 35.0298 15.6441 35.223 15.1032 35.223C14.5625 35.223 14.1376 35.0298 13.8671 34.8367L13.4809 35.4547C13.9058 35.7637 14.4853 35.9182 15.0645 35.9182C16.1461 35.9182 16.7642 35.4162 16.7642 34.7208C16.7642 34.0641 16.262 33.7164 15.4894 33.6007L15.1032 33.562C14.7555 33.5232 14.4853 33.4462 14.4853 33.2144C14.4853 32.944 14.7555 32.7895 15.1805 32.7895C15.6441 32.7895 16.1076 32.9825 16.3393 33.0985L16.687 32.4418ZM38.2405 32.0556C37.7769 32.0556 37.4679 32.2873 37.2747 32.5963V32.1328H36.4635V35.8409H37.2747V33.7551C37.2747 33.1372 37.5451 32.7895 38.0471 32.7895C38.2018 32.7895 38.395 32.8282 38.5495 32.8668L38.7812 32.0943C38.6267 32.0556 38.395 32.0556 38.2405 32.0556V32.0556ZM27.8886 33.9869C27.8886 35.107 28.661 35.9182 29.8586 35.9182C30.3993 35.9182 30.7855 35.8024 31.1717 35.4934L30.7855 34.8367C30.4765 35.0685 30.1675 35.1843 29.8199 35.1843C29.1632 35.1843 28.6997 34.7208 28.6997 33.9869C28.6997 33.2917 29.1632 32.828 29.8199 32.7895C30.1675 32.7895 30.4765 32.9053 30.7855 33.1372L31.1717 32.4805C30.7855 32.1714 30.3993 32.0556 29.8586 32.0556C28.661 32.0556 27.8886 32.8668 27.8886 33.9869ZM35.3821 33.9869V32.1328H34.571V32.5963C34.3005 32.2488 33.9143 32.0556 33.4121 32.0556C32.3693 32.0556 31.5581 32.8668 31.5581 33.9869C31.5581 35.107 32.3693 35.9182 33.4121 35.9182C33.9529 35.9182 34.3392 35.7251 34.571 35.3774V35.8409H35.3821V33.9869ZM32.4078 33.9869C32.4078 33.3302 32.8327 32.7895 33.5279 32.7895C34.1846 32.7895 34.6482 33.2917 34.6482 33.9869C34.6482 34.6435 34.1846 35.1843 33.5279 35.1843C32.8327 35.1455 32.4078 34.6435 32.4078 33.9869ZM22.7127 32.0556C21.6311 32.0556 20.8585 32.828 20.8585 33.9869C20.8585 35.1457 21.6309 35.9182 22.7512 35.9182C23.292 35.9182 23.8328 35.7637 24.2578 35.4162L23.8714 34.8367C23.5624 35.0685 23.1762 35.223 22.79 35.223C22.2878 35.223 21.7856 34.9912 21.6697 34.3344H24.4123V34.0256C24.451 32.828 23.7556 32.0556 22.7125 32.0556H22.7127ZM22.7127 32.7508C23.2147 32.7508 23.5626 33.06 23.6396 33.6394H21.7084C21.7856 33.1372 22.1333 32.7508 22.7127 32.7508ZM42.837 33.9869V30.665H42.0258V32.5963C41.7554 32.2488 41.3692 32.0556 40.867 32.0556C39.8241 32.0556 39.013 32.8668 39.013 33.9869C39.013 35.107 39.8241 35.9182 40.867 35.9182C41.4079 35.9182 41.7941 35.7251 42.0258 35.3774V35.8409H42.837V33.9869ZM39.8628 33.9869C39.8628 33.3302 40.2876 32.7895 40.9829 32.7895C41.6396 32.7895 42.1031 33.2917 42.1031 33.9869C42.1031 34.6435 41.6396 35.1843 40.9829 35.1843C40.2876 35.1455 39.8628 34.6435 39.8628 33.9869ZM12.747 33.9869V32.1328H11.9359V32.5963C11.6654 32.2488 11.2792 32.0556 10.777 32.0556C9.73413 32.0556 8.92298 32.8668 8.92298 33.9869C8.92298 35.107 9.73413 35.9182 10.777 35.9182C11.3179 35.9182 11.7041 35.7251 11.9359 35.3774V35.8409H12.747V33.9869ZM9.73413 33.9869C9.73413 33.3302 10.1591 32.7895 10.8543 32.7895C11.5109 32.7895 11.9746 33.2917 11.9746 33.9869C11.9746 34.6435 11.5109 35.1843 10.8543 35.1843C10.1591 35.1455 9.73413 34.6435 9.73413 33.9869Z"
                                  fill="white"
                                />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </form>
              )}

              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <button onClick={() => toggleTab(tabSelect - 1)} className="w-full px-6 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-600 hover:border-transparent hover:bg-indigo-50 transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-2 py-px text-center text-indigo-600 text-lg font-semibold leading-8">Voltar</span>
                </button>
                <button onClick={handleCadastrar} className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 text-center text-white text-lg font-semibold leading-8">Cadastrar</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
  );
}

                                    