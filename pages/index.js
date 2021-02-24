import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>LuxSpace</title>
        <meta name="viewport" content="initial-scale=1.0" width="device-width" />
      </Head>
      <header className="absolute px-4 py-5 lg:px-32 lg:py-16 z-50 flex flex-row justify-between items-center w-full">
        <div className="w-auto flex-shrink-0">
          <Image src="/assets/images/logo.svg" width="134px" height="35px" />
        </div>
        <div className="w-auto flex flex-row">
          <div className="hidden md:flex lg:flex flex-row">
            <div className="mx-3">
              Showcase
            </div>
            <div className="mx-3">
              Catalog
            </div>
            <div className="mx-3">
              Delivery
            </div>
            <div className="mx-3">
              Rewards
            </div>
          </div>
          <div className="flex-shrink-0 visible md:invisible lg:invisible">
            <Image src="/assets/design/menu-hamburger.svg" width="17px" height="16px" />
          </div>
          <div className="flex-shrink-0 mx-3">
            <Image src="/assets/design/cart.svg" width="26px" height="23px" />
          </div>
        </div>
      </header>
      {/* START: EXPLORE NOW SECTION */}
      <section className="flex flex-col md:flex-row lg:flex-row justify-center items-center h-auto">
        <div className="absolute md:relative flex flex-col w-full h-auto lg:w-1/2 z-10 text-center justify-center items-center pt-16">
          <h1 className="text-3xl lg:text-5xl mt-2">
            The Room
          </h1>
          <h1 className="text-3xl lg:text-5xl mt-2">
            You've Dreaming
          </h1>
          <p className="mt-2">
            Kami menyediakan fitur berkelas
          </p>
          <p className="mt-2">
            yang membuat ruangan terasa homey
          </p>
          <button className="btn py-2 px-8 mt-3 text-pink-300 rounded-full bg-black hover:bg-pink-300 hover:text-black">
          Exlpore Now
        </button>
        </div>
        <img className="object-cover h-96 w-full md:w-1/2" src="/assets/images/furnitures-and-plants.jpg" />          
      </section>
      {/* END: EXPLORE NOW SECTION */}

      {/* START: ROOMS SECTION */}
      <section className="bg-gray-100 z-20 h-auto p-8">
        <p className="text-2xl md:text-3xl">
          Browse the room
        </p>
        <p className="text-2xl md:text-3xl">
         That we designed for you
        </p>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-8 md:grid-rows-2 gap-8 mt-8">
          <div className="relative md:col-span-3 flex justify-center">
            <div className="absolute p-8 flex flex-col w-full h-full items-end justify-center">
              <h1 className="text-sm md:text-2xl">Living Room</h1>
              <p className="text-xs md:text-lg">1.1 items</p>
            </div>
            <img src="/assets/images/living-room-mobile.jpg" className="object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
          </div>
          <div className="relative md:row-span-2 md:col-span-2 flex justify-center">
            <div className="absolute p-8 flex flex-col w-full h-full md:h-full items-end md:justify-start md:pt-8 md:items-center justify-center">
              <h1 className="text-sm md:text-2xl">Decoration</h1>
              <p className="text-xs md:text-lg">1.2 items</p>
            </div>
            <img src="/assets/images/decoration-mobile.jpg" className="md:hidden object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
            <img src="/assets/images/decoration.jpg" className="hidden md:flex object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
          </div>
          <div className="relative md:row-span-2 md:col-span-3 flex justify-center">
            <div className="absolute p-8 flex flex-col w-full h-full items-center">
              <h1 className="text-sm md:text-2xl">Bed Room</h1>
              <p className="text-xs md:text-lg">1.808 items</p>
            </div>
            <img src="/assets/images/bed-room-mobile.jpg" className=" md:hidden object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
            <img src="/assets/images/bed-room.jpg" className="hidden md:flex object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
          </div>
          <div className="relative md:col-span-3 flex justify-center">
            <div className="absolute p-8 flex flex-col w-full h-full items-end justify-center">
              <h1 className="text-sm md:text-2xl">Children Room</h1>
              <p className="text-xs md:text-lg">1.808 items</p>
            </div>
            <img src="/assets/images/children-room-mobile.jpg" className="object-cover h-full w-full md:h-full rounded-3xl md:rounded-xl" />
          </div>
        </div>
      </section>
      {/* END: ROOMS SECTION */}
    </div>
  )
}
