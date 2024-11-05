function SearchProducts() {
  return (
    <section className="relative py-12">
      <div className="w-full mx-auto">
        <div>
          <div className="col-span-12 lg:col-span-3 w-full lg:max-w-xs">
            <div className="box rounded-xl border border-gray-300 bg-white p-6 w-full shadow-md">
              <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                <p className="font-medium text-base leading-7 text-black">Filtro</p>
                <p className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                  RESET
                </p>
              </div>

              {/* Avaliação */}
              <div className="mb-7">
                <div className="accordion-group grid grid-cols-1 gap-5" data-accordion="default-accordion">
                  <div className="accordion" id="category-heading-one">
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                      aria-controls="category-collapse-one"
                    >
                      <h5 className="font-medium text-sm text-gray-900">Avaliação</h5>
                      <svg
                        className="text-gray-900 transition duration-500 group-hover:text-indigo-600 rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="category-collapse-one"
                      className="accordion-content overflow-hidden max-h-0"
                      aria-labelledby="category-heading-one"
                    >
                      <div className="flex flex-col gap-2 mt-5">
                        {['option-1', 'option-2', 'option-3'].map((option, index) => (
                          <div className="flex items-center" key={index}>
                            <input
                              id={`checkbox-option-${index + 1}`}
                              type="checkbox"
                              className="w-5 h-5 border border-gray-500 rounded hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600"
                            />
                            <label htmlFor={`checkbox-option-${index + 1}`} className="ml-1 text-xs text-gray-600">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desconto */}
              <div className="mb-7">
                <label htmlFor="Offer" className="font-medium text-sm text-gray-600 mb-1">
                  Desconto
                </label>
                <div className="relative">
                  <select
                    id="Offer"
                    defaultValue="5% off"
                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full w-full py-2.5 px-4 bg-white"
                  >
                    <option value="5% off">5% off</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                  </select>
                  <svg
                    className="absolute top-1/2 right-4 transform -translate-y-1/2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                      stroke="#111827"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Marca */}
              <p className="font-medium text-sm text-black mb-3">Marca</p>
              <div className="flex flex-col gap-2 mb-5">
                {['Nike', 'Adidas', 'Puma'].map((brand, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      id={`checkbox-default-${index + 1}`}
                      type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded-md hover:border-indigo-500 checked:bg-indigo-100"
                    />
                    <label htmlFor={`checkbox-default-${index + 1}`} className="text-xs text-gray-600 leading-4 ml-2">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>

              {/* Faixa de Preço */}
              <div className="flex items-center mb-5 gap-1">
                <select
                  id="FROM"
                  defaultValue="Min"
                  className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full w-full py-2.5 px-4 bg-white"
                >
                  <option value="Min">Min</option>
                  <option value="option 1">option 1</option>
                </select>
                <p className="font-medium text-sm text-black">-</p>
                <select
                  id="TO"
                  defaultValue="Max"
                  className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full w-full py-2.5 px-4 bg-white"
                >
                  <option value="Max">Max</option>
                  <option value="option 1">option 1</option>
                </select>
              </div>

              <button className="bg-indigo-600 rounded-full w-full py-3 font-medium text-white hover:bg-indigo-700 transition duration-300">
                Aplicar Filtro
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchProducts;
