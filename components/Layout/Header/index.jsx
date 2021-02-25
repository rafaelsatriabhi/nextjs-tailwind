import React from 'react'

const Header = ({ modalHandler }) => {
    return (
        <header className="absolute px-4 py-5 lg:px-32 lg:py-16 z-40 flex flex-row justify-between items-center w-full">
        <img className="w-auto flex-shrink-0" src="/assets/images/logo.svg" />
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
    )
}

export default Header