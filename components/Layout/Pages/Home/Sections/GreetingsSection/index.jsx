import React from 'react'

const GreetingsSection = () => {
    return (
			<section className="flex flex-col h-96 md:flex-row lg:flex-row justify-center items-center">
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
        <div className="absolute right-0 bg-black bg-opacity-25 h-96 w-full md:w-1/2"></div>       
        <img src="/assets/design/btn-play.svg" className="absolute z-30 right-0 bg-black bg-opacity-25 h-6 md:w-1/2"></img>       
      </section>
    )
}

export default GreetingsSection
