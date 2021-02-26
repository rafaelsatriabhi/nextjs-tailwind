import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [modal, setModal] = useState(false)

  const modalHandler = (e) => {
    console.log(e.target)
    if(e.target.id === "open-modal") {
      setModal(true)
    } else {
      setModal(false)
    }
  }

    return (
      <>
      {
        modal
        && (
          <div className="md:hidden absolute z-50 h-full w-screen bg-white bg-opacity-75 flex flex-col justify-center ">
          <div className="fixed top-0 h-screen w-screen flex flex-col items-center justify-center">
            <button role="button" id="close-modal" onClick={(e) => modalHandler(e)} className="absolute top-2 right-5">X</button>
            <div className="flex flex-col justify-equal items-center">
              <button className="rounded-full bg-black px-10 py-1 text-pink-300 my-6">
                Showcase
              </button>
              <button className="rounded-full bg-black px-10 py-1 text-pink-300 my-6">
                Catalog
              </button>
              <button className="rounded-full bg-black px-10 py-1 text-pink-300 my-6">
                Delivery
              </button>
              <button className="rounded-full bg-black px-10 py-1 text-pink-300 my-6">
                Rewards
              </button>
            </div>
          </div>
        </div>
        )
      }
        <header className="absolute top-0 px-4 py-5 z-40 flex flex-row justify-between items-center w-full">
          <Link href="/">
            <img role="button" className="w-auto flex-shrink-0" src="/assets/images/logo.svg" />
          </Link>
          <div className="w-auto flex flex-row items-center">
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
            <div role="button" className="flex-shrink-0 z-50 visible md:invisible lg:invisible">
              <img className="transition delay-150 duration-300 ease-in-out" id="open-modal" onClick={(e) => { modalHandler(e) }}  src="/assets/design/menu-hamburger.svg" />
            </div>
            <div className="flex-shrink-0 mx-3">
              <img src="/assets/design/cart.svg" />
            </div>
          </div>
        </header>
      </>
    )
}

export default Header