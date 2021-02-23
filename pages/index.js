import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <header className="flex flex-row justify-between items-center mx-10 py-5">
      <div className="w-auto flex-shrink-0">
        <Image src="/assets/images/logo.svg" width="134px" height="35px" />
      </div>
      <div className="w-full">
      </div>
      <div className="w-auto flex flex-row">
        <ul className="invisible md:visible flex flex-row">
          <li className="mx-3">
            Showcase
          </li>
          <li className="mx-3">
            Catalog
          </li>
          <li className="mx-3">
            Delivery
          </li>
          <li className="mx-3">
            Rewards
          </li>
        </ul>
        <div className="flex-shrink-0 visible md:invisible">
          <Image src="/assets/design/menu-hamburger.svg" width="17px" height="16px" />
        </div>
        <div className="flex-shrink-0 mx-3">
          <Image src="/assets/design/cart.svg" width="26px" height="23px" />
        </div>
      </div>
    </header>
  )
}
