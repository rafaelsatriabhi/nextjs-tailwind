const ModalMenu = ({ modalHandler }) => {
    return (
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

export default ModalMenu
