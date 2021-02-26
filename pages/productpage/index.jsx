import Layout from '../../components/Layout/Layout'


const ProductPage = () => {
    return (
        <Layout>
          <section>
            <div className="flex flex-col md:flex-row lg:flex-row p-5 bg-red-200">
              <div className="mt-6 md:mt-0 md:order-first flex flex-col md:flex-row md:w-1/2 md:m-5 justify-between">
                <img className="rounded-3xl flex-shrink-0 object-cover md:w-3/4" src="/assets/images/products/chair-front.jpg" />
                <div className="overflow-x-auto md:overflow-y-auto flex flex-row lg:flex-col md:flex-col md:order-first md:justify-between">
                  <img className="rounded-2xl w-24 md:w-20 m-3 md:m-0" src="/assets/images/products/chair-front.jpg" />
                  <img className="rounded-2xl w-24 md:w-20 m-3 md:m-0" src="/assets/images/products/chair-front.jpg" />
                  <img className="rounded-2xl w-24 md:w-20 m-3 md:m-0" src="/assets/images/products/chair-front.jpg" />
                  <img className="rounded-2xl w-24 md:w-20 m-3 md:m-0" src="/assets/images/products/chair-front.jpg" />
                  <img className="rounded-2xl w-24 md:w-20 m-3 md:m-0" src="/assets/images/products/chair-front.jpg" />
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col">
                <div>
                  <h1 className="text-3xl font-semibold mb-3">Chair Thatty</h1>
                  <p className="pl-5">IDR 12.000.000</p>
                </div>
                <button className="bg-pink-200 my-3 flex flex-row py-2 justify-center rounded-full">
                  <img className="mr-3" src="/assets/design/cart.svg" />
                  <p>Add to cart</p>
                </button>
                <div>
                  <h6 className="font-semibold text-lg mb-3">About the product:</h6>
                  <p className="font-thin text-lg">
                    Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the
                    detail, Jetty has been influenced by timeless 1950s style.
                  </p>
                  <br/>
                  <p className="font-thin text-lg">
                    Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety
                    of elegant chairs and sofas.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 px-5 py-8 bg-blue-200">
              <div className="m-5">
                <h2 className="font-bold text-xl">Complete Your Room</h2>
                <h2 className="font-bold text-xl">With What We Designed</h2>
              </div>
              <div className="flex flex-row overflow-x-auto">
                <div className="inline-block flex-shrink-0 mx-3 p-5 bg-white rounded-3xl w-3/4">
                  <img className="rounded-3xl object-cover object-cover h-36 w-full" src="/assets/images/cangkir-mauttie.jpg" alt="Cangkir Mauttie"/>
                  <p className="mt-4 font-bold">Cangkir Mauttie</p>
                  <p className="mt-2">IDR 89.300.000</p>
                </div>
                <div className="inline-block flex-shrink-0 mx-3 p-5 bg-white rounded-3xl w-3/4">
                <img className="rounded-3xl object-cover object-cover h-36 w-full" src="/assets/images/cangkir-mauttie.jpg" alt="Cangkir Mauttie"/>
                <p className="mt-4 font-bold">Cangkir Mauttie</p>
                <p className="mt-2">IDR 89.300.000</p>
              </div>
              <div className="inline-block flex-shrink-0 mx-3 p-5 bg-white rounded-3xl w-3/4">
                <img className="rounded-3xl object-cover object-cover h-36 w-full" src="/assets/images/cangkir-mauttie.jpg" alt="Cangkir Mauttie"/>
                <p className="mt-4 font-bold">Cangkir Mauttie</p>
                <p className="mt-2">IDR 89.300.000</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
}

export default ProductPage
