"use client"
import React, { useEffect, useState } from 'react';
import productsData from './products.json';
import Header from '@/app/components/Header';
interface Product {
  name: string;
  foto: string;
  category: string;
  Marca: string,
  tamanhos: string;
  id: number;
  description: string;
  price: string;
  discount: string;
}
const CrudProducts = () => {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [formData, setFormData] = useState<Product>({
    name: '',
    foto:'',
    category: '',
    Marca: '',
    tamanhos: '',
    id: 0,
    description: '',
    price: '',
    discount: '',
  });

  const closeModal = () => {
    setIsOpenUpdateModal(false);
    setIsOpenDeleteModal(false);
    setIsOpenAddModal(false);
    setFormData({ name: '', foto:'', category: '', Marca: '', tamanhos: '', id: 0, description: '', price: '', discount: '' }); // Resetar campos
    setSelectedProduct(null); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const openUpdateModal = (product: Product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      foto: product.foto,
      category: product.category,
      Marca: product.Marca,
      tamanhos: product.tamanhos,
      id: product.id,
      description: product.description,
      price: product.price,
      discount: product.discount,
    });
    setIsOpenUpdateModal(true);
  };
  return (
    <>
        <Header/>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <div className="mb-4">
            <nav className="flex mb-5" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li className="inline-flex items-center">
                  <a
                    href="/dashbord"
                    className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-2.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Dashbord
                  </a>
                </li>
                
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">
                      Produto
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Todos os Produtos</h1>
          </div>
          <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
            <div className="flex items-center mb-4 sm:mb-0">
              <form className="sm:pr-3" action="#" method="GET">
                <label htmlFor="products-search" className="sr-only">Pesquisa</label>
                <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                  <input
                    type="text"
                    name="search"
                    id="products-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pesquise seus produtos"
                  />
                </div>
              </form>
            </div>
            <button
              id="createProductButton"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              onClick={() => setIsOpenAddModal(true)}
            >
              Add novo produto
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          aria-describedby="checkbox-1"
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">Nome</th>
                    <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">Tamanhos</th>
                    <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">Categoria</th>
                    <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">Descrição</th>
                    <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">ID</th>
                    <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">Preço</th>
                    <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-500 uppercase dark:text-gray-400">Desconto</th>
                    <th scope="col" className="relative px-4 py-3">
                      <span className="sr-only">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {products.map(product => (
                    <tr key={product.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="p-4">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-${product.id}`}
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                          />
                          <label htmlFor={`checkbox-${product.id}`} className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                      <img className="w-10 h-10 rounded-full" src={`${product.foto}`} alt={`${product.name} foto`} />
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        <div className="text-base font-semibold text-gray-900 dark:text-white">{product.name}</div>
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{product.Marca}</div>
                      </div>
                    </td>
                            </td>
                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.tamanhos}</td>
                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.category}</td>
                            <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{product.description}</td>
                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.id}</td>
                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.price}</td>
                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.discount}</td>

                            <td className="p-4 space-x-2 whitespace-nowrap">
                                <button onClick={() => openUpdateModal(product)} type="button" id="updateProductButton" data-drawer-target="drawer-update-product-default" data-drawer-show="drawer-update-product-default" aria-controls="drawer-update-product-default" data-drawer-placement="right" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
                                    Edit
                                </button>
                                <button onClick={() => {
                    setSelectedProduct(product);
                    setIsOpenDeleteModal(true);
                  }} type="button" id="deleteProductButton" data-drawer-target="drawer-delete-product-default" data-drawer-show="drawer-delete-product-default" aria-controls="drawer-delete-product-default" data-drawer-placement="right" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                    Delete
                                </button>
                            </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <nav className="inline-flex items-center -space-x-px" aria-label="Pagination">
            <a className="px-3 py-2 text-sm font-medium text-gray-500 border border-gray-300 rounded-l-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700" href="#">Previous</a>
            <a className="px-3 py-2 text-sm font-medium text-gray-500 border-t border-b border-gray-300 dark:border-gray-700" href="#">1</a>
            <a className="px-3 py-2 text-sm font-medium text-gray-500 border-t border-b border-gray-300 dark:border-gray-700" href="#">2</a>
            <a className="px-3 py-2 text-sm font-medium text-gray-500 border-t border-b border-gray-300 dark:border-gray-700" href="#">3</a>
            <a className="px-3 py-2 text-sm font-medium text-gray-500 border border-gray-300 rounded-r-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700" href="#">Next</a>
          </nav>
        </div>
      </div>

      {isOpenUpdateModal && (
        <div id="drawer-update-product-default" className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800">
          <h5 id="drawer-label" className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Edit Produto</h5>
          <button
            type="button"
            onClick={closeModal}
            aria-controls="drawer-update-product-default"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <form onSubmit={(e) => {
            e.preventDefault();
            setProducts((prevProducts) =>
              prevProducts.map((prod) => (prod.id === selectedProduct?.id ? formData : prod))
            );
            closeModal();
          }}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome do produto"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                <select
                  name="category"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecionar Categoria</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Infantil">Infantil</option>
                </select>
              </div>
              <div>
                <label htmlFor="Marca" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                <select
                  name="Marca"
                  id="Marca"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.Marca}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecionar Marca</option>
                  <option value="Nike">Nike</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Puma">Puma</option>
                </select>
              </div>
              <div>
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.price} 
                  onChange={handleChange} 
                  placeholder="$0"
                  required
                />
              </div>
              <div>
                <label htmlFor="tamanhos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tamanhos</label>
                <input
                  type="text"
                  name="tamanhos"
                  id="tamanhos"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.tamanhos} 
                  onChange={handleChange} 
                  placeholder="40"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Descrição do produto"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="discount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desconto</label>
                <select
                  name="discount"
                  id="discount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.discount}
                  onChange={handleChange}
                >
                  <option value="">Não tem desconto</option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                type="submit"
                className="w-full justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit
              </button>
              <button
                type="button"
                className="w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={closeModal}
              >
                <svg aria-hidden="true" className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                </svg>
                Delete
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Modal de Exclusão */}
      {isOpenDeleteModal && (
        <div id="drawer-delete-product-default" className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800">
          <h5 id="drawer-label" className="inline-flex items-center text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Delete Produto</h5>
          <button
            type="button"
            onClick={closeModal}
            aria-controls="drawer-delete-product-default"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <p className="mt-6 text-sm font-medium text-gray-900 dark:text-white">Tem certeza de que deseja excluir este produto?</p>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              type="button"
              onClick={() => {
                setProducts((prevProducts) => prevProducts.filter((prod) => prod.id !== selectedProduct?.id));
                closeModal();
              }}
              className="w-full justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="w-full justify-center text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

{/* Modal para Adicionar Produto */}
{isOpenAddModal && (
  <div id="drawer-add-product-default" className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800">
    <h5 id="drawer-label" className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Add Produto</h5>
    <button type="button" onClick={closeModal} aria-controls="drawer-add-product-default" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
      <span className="sr-only">Close menu</span>
    </button>
    <form action="#">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
          <input type="text" name="title" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.name} onChange={handleChange} placeholder="Nome do Produto" required />
        </div>
        <div>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
          <select name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.category} onChange={handleChange}>
            
                  <option value="">Selecionar Categoria</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Infantil">Infantil</option>
          </select>
        </div>
        <div>
          <label htmlFor="Marca" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
          <select name="Marca" id="Marca" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.Marca} onChange={handleChange}>
            
                  <option value="">Selecionar Marca</option>
                  <option value="Nike">Nike</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Puma">Puma</option>
          </select>
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço</label>
          <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.price} onChange={handleChange} placeholder="$0" required />
        </div>
        <div>
          <label htmlFor="tamanhos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tamanhos</label>
          <input type="text" name="tamanhos" id="tamanhos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.tamanhos} onChange={handleChange} placeholder="40" required />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
          <textarea name="description" id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.description} onChange={handleChange} placeholder="Descrição do produto" required></textarea>
        </div>
        <div>
          <label htmlFor="discount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desconto</label>
          <select name="discount" id="discount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.discount} onChange={handleChange}>
            <option value="">Não tem desconto</option>
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button type="submit" className="w-full justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        <button type="button" className="w-full justify-center text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </form>
  </div>
)}

    </>
  );
};

export default CrudProducts;
