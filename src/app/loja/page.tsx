'use client';

import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import SearchProducts from '@/app/components/SearchProducts';

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <Header />

        <section className="col-span-12 md:col-span-10">
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16">
              
              <div className="col-span-1 lg:col-span-1 p-4 rounded-lg">
                <SearchProducts />
              </div>

              <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
              <a href="/produto" className="max-w-full mx-auto">
                <div className="w-full max-w-sm aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1693400652052-884f8dd3dfd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Air Jordan 1"
                    className="w-full h-5/6 rounded-xl"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h6 className="font-medium text-xl leading-8 text-black mb-2">Air Jordan 1</h6>
                    <h6 className="font-semibold text-xl leading-8 text-indigo-600">124.99</h6>
                  </div>
                  <button
                    aria-label="Add to cart"
                    className="p-2 min-full:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                  >
                    <svg
                      className="transition-all duration-500 group-hover:"
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

              {/* Another Product Card */}
              <a href="/produto" className="max-w-full mx-auto">
                <div className="w-full max-w-sm aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1684381282765-7d991fdbf007?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Air Jordan 1"
                    className="w-full h-5/6 rounded-xl"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h6 className="font-medium text-xl leading-8 text-black mb-2">Air Jordan 1</h6>
                    <h6 className="font-semibold text-xl leading-8 text-indigo-600">139.99</h6>
                  </div>
                  <button
                    aria-label="Add to cart"
                    className="p-2 min-full:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                  >
                    <svg
                      className="transition-all duration-500 group-hover:"
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

              {/* Another Product Card */}
              <a href="/produto" className="max-w-full">
                <div className="w-full max-w-sm aspect-square relative">
                  <img
                    src="https://images.unsplash.com/photo-1612724189298-89d36b10b26d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Air Jordan 1"
                    className="w-full h-5/6 rounded-xl"
                  />
                  <span className="py-1 min-full:py-2 px-2 min-full:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">
                    20% Off
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h6 className="font-medium text-xl leading-8 text-black mb-2">Air Jordan 1</h6>
                    <h6 className="font-semibold text-xl leading-8 text-indigo-600">149.99</h6>
                  </div>
                  <button
                    aria-label="Add to cart"
                    className="p-2 min-full:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50"
                  >
                    <svg
                      className="transition-all duration-500 group-hover:"
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
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
}
