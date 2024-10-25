'use client';

import { useState,useEffect } from 'react';
import Image from 'next/image';
import Logo from '../app/favicon.ico'
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
export default function Home() {
  return (
    <div className="bg-white">
      <Header/>
      <main>
      <div
  className="bg-no-repeat bg-cover bg-center relative"
  style={{
    backgroundImage:
      'url(https://images.unsplash.com/photo-1552066344-2464c1135c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
  }}
>
  <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
  <div className="min-h-screen flex justify-center items-center px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center z-10">
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
          Desempenho e estilo em cada passo - seu destino para os melhores tênis.
        </h2>

        <p className="mt-4 text-gray-300">
          Descubra a combinação perfeita de conforto, inovação e estilo em nossa coleção de tênis. Seja para atividades
          esportivas ou para compor seu visual do dia a dia, oferecemos uma ampla variedade de modelos que unem
          tecnologia de ponta e design moderno.
        </p>
        <div className="flex flex-row items-center justify-center md:justify-start space-x-3 mt-5">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-2xl font-bold text-lg bg-pink-600 hover:drop-shadow-lg transition ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-2xl font-bold text-lg bg-gray-900 hover:drop-shadow-lg transition ease-in duration-300"
          >
            <svg className="h-5 fill-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 15.047a.846.846 0 0 1-.008.112l-.006.037-.016.072c-.003.015-.008.028-.013.042l-.022.063-.02.042c-.008.02-.018.038-.028.057l-.025.04a.769.769 0 0 1-.108.135l-.035.034a.812.812 0 0 1-.049.04l-.038.03c-.005.003-.01.008-.015.01l-9.14 6.095a.858.858 0 0 1-.954 0l-9.14-6.094-.014-.01a.807.807 0 0 1-.088-.071c-.012-.01-.023-.022-.034-.034-.015-.015-.03-.03-.043-.046a.707.707 0 0 1-.066-.09 1.038 1.038 0 0 1-.054-.096l-.019-.042a.868.868 0 0 1-.022-.063c-.005-.014-.01-.027-.013-.042-.007-.023-.01-.048-.015-.072l-.007-.037A.847.847 0 0 1 2 15.047V8.953c0-.038.003-.075.008-.112l.007-.037c.004-.024.008-.049.015-.072a.774.774 0 0 1 .145-.295.978.978 0 0 1 .029-.038l.043-.046.034-.034a.834.834 0 0 1 .088-.07c.005-.003.009-.008.014-.01l9.14-6.095a.86.86 0 0 1 .954 0l9.14 6.094c.005.003.01.008.015.01l.038.03a.839.839 0 0 1 .05.041l.034.034a.735.735 0 0 1 .108.136l.025.04.029.056.019.042.022.063c.005.014.01.027.013.042.007.023.011.048.016.072l.006.037a.834.834 0 0 1 .008.112v6.094ZM3.719 10.562v2.876L5.869 12l-2.15-1.438Zm7.422-2.088V4.465l-6.734 4.49 3.008 2.011 3.726-2.492Zm8.452.48L12.86 4.465v4.009l3.726 2.492 3.007-2.012ZM4.407 15.046l6.734 4.489v-4.009l-3.726-2.492-3.008 2.012Zm8.453.48v4.009l6.733-4.49-3.007-2.01-3.726 2.491ZM12 9.966 8.96 12 12 14.033 15.04 12 12 9.967Zm8.281 3.472v-2.876L18.131 12l2.15 1.438Z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-2xl font-bold text-lg text-white bg-blue-400 hover:drop-shadow-lg transition ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-2xl font-bold text-lg text-white bg-blue-500 hover:drop-shadow-lg transition ease-in duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-0 max-w-xl w-full flex rounded-2xl bg-indigo-700 mt-8 md:mt-0">
        <div className="swiper-container flex-col flex self-center">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <blockquote className="text-left">
                <div className="relative">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1506544777-64cfbe1142df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="aji"
                      className="object-cover w-full h-64 mx-auto rounded-t-2xl"
                    />
                    <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div>
                  </div>
                </div>

                <div className="relative m-5 p-5">
                  <svg
                    className="absolute left-0 w-6 fill-indigo-500"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                  </svg>
                  <p className="text-gray-100 text-xl px-5">
                    eles foram feitos para consumidores que podem ou não amar basquete (que podem ou não praticar
                    esportes) e de qualquer classe social
                  </p>
                      <svg
                        className="absolute right-0 w-6 fill-indigo-500"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                      </svg>
                      <div className="text-sm mt-5 mx-5">
                        <p className="font-medium text-white">De Emil Wilbekin</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <br />
<div className="max-w-6xl mx-auto px-4 py-8 mt-8">
  <h2 className="text-2xl font-bold mb-6">Popular agora</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="text-start group">
      <p className="text-2xl font-bold group-hover:text-black">tenis</p>
      <hr className="border-t-2 border-black mt-2 transition-all duration-300 group-hover:border-t-4" />
    </div>
    <div className="text-start group">
      <p className="text-2xl font-bold group-hover:text-black">tênis masculino</p>
      <hr className="border-t-2 border-black mt-2 transition-all duration-300 group-hover:border-t-4" />
    </div>
    <div className="text-start group">
      <p className="text-2xl font-bold group-hover:text-black">Air Force</p>
      <hr className="border-t-2 border-black mt-2 transition-all duration-300 group-hover:border-t-4" />
    </div>
    <div className="text-start group">
      <p className="text-2xl font-bold group-hover:text-black">Jordan 1</p>
      <hr className="border-t-2 border-black mt-2 transition-all duration-300 group-hover:border-t-4" />
    </div>
    <div className="text-start group">
      <p className="text-2xl font-bold group-hover:text-black">adi2000</p>
      <hr className="border-t-2 border-black mt-2 transition-all duration-300 group-hover:border-t-4" />
    </div>
    <div className="text-start group">
      <p className="text-2xl font-bold group-hover:text-black">forum</p>
      <hr className="border-t-2 border-black mt-2 transition-all duration-300 group-hover:border-t-4" />
    </div>
  </div>
</div>

<div className="max-w-6xl mx-auto px-4 mt-8">
      <h1 className="text-4xl font-bold text-start my-8">Destaque</h1>
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
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
</div>
    
      </main>
                      <Footer/>
    </div>
  );
}



