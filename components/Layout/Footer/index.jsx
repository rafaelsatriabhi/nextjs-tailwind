import React from 'react'

const Footer = ({ footer, footerHandler }) => {
    return (
        <>
        {/* START: FOOTER */}
            <footer className="h-auto w-full p-8 flex flex-col items-center bg-gray-100">
                <img className="w-auto mb-5" src="/assets/images/logo.svg" />
                <div className="flex flex-col md:flex-row justify-evenly w-full">
                {/* START: Footer - Overview Mobile */}
                <div className="flex flex-col w-full justify-between">
                    <div className="flex flex-row w-full justify-between">
                    <p className="font-semibold pb-1">Overview</p>
                    { footer.overview 
                    ? (
                        <img className="md:hidden transform rotate-180 transition duration-300 " id="footer-overview" onClick={(e) => {footerHandler(e)}}src="/assets/design/arrow.svg" />
                        )
                    : <img className="md:hidden transform rotate-0 transition duration-300 " id="footer-overview" onClick={(e) => {footerHandler(e)}}src="/assets/design/arrow.svg" />
                    }
                    </div>
                    {
                    footer.overview && (
                        <div className="md:hidden flex flex-col md:flex-col bg-white rounded-b-xl px-4 py-2">
                        <p className="text-sm">Shipping</p>
                        <p className="text-sm">Refund</p>
                        <p className="text-sm">Promotion</p>
                        </div>
                    )
                    }
                    <div className="hidden md:flex md:flex-col">
                    <p>Shipping</p>
                    <p>Refund</p>
                    <p>Promotion</p>
                    </div>
                </div>
                {/* END: Footer - Overview Mobile */}
                {/* START: Footer - Company Mobile */}
                <div className="flex flex-col w-full justify-between">
                    <div className="flex flex-row w-full justify-between">
                    <p className="font-semibold pb-1">Company</p>
                    { footer.company 
                    ? (
                        <img className="md:hidden transform rotate-180 transition duration-300 " id="footer-company" onClick={(e) => {footerHandler(e)}}src="/assets/design/arrow.svg" />
                        )
                    : <img className="md:hidden transform rotate-0 transition duration-300 " id="footer-company" onClick={(e) => {footerHandler(e)}}src="/assets/design/arrow.svg" />
                    }
                    </div>
                    {
                    footer.company && (
                        <div className="md:hidden flex flex-col md:flex-col bg-white rounded-b-xl px-4 py-2">
                        <p>About</p>
                        <p>Career</p>
                        <p>Contact Us</p>
                        </div>
                    )
                    }
                    <div className="hidden md:flex md:flex-col">
                    <p>About</p>
                    <p>Career</p>
                    <p>Contact Us</p>
                    </div>
                </div>
                {/* END: Footer - Company Mobile */}
                {/* START: Footer - Explore Mobile */}
                <div className="flex flex-col w-full justify-between">
                    <div className="flex flex-row w-full justify-between">
                    <p className="font-semibold pb-1">Explore</p>
                    { footer.explore 
                    ? (
                        <img className="md:hidden transform rotate-180 transition duration-300 " id="footer-explore" onClick={(e) => {footerHandler(e)}}src="/assets/design/arrow.svg" />
                        )
                    : <img className="md:hidden transform rotate-0 transition duration-300 " id="footer-explore" onClick={(e) => {footerHandler(e)}}src="/assets/design/arrow.svg" />
                    }
                    </div>
                    {
                    footer.explore && (
                        <div className="md:hidden flex flex-col md:flex-col bg-white rounded-b-xl px-4 py-2">
                        <p>Terms &amp; Cons</p>
                        <p>Privacy Policy</p>
                        <p>Refund</p>
                        </div>
                    )
                    }
                    <div className="hidden md:flex md:flex-col">
                    <p>Terms &amp; Cons</p>
                    <p>Privacy Policy</p>
                    <p>Refund</p>
                    </div>
                </div>
                {/* END: Footer - Explore Mobile */}
                <div className="flex flex-col">
                    <p className="font-semibold pb-1">Special Letter</p>
                    <form className="md:w-1/2 flex flex-row w-auto">
                    <input className="w-full rounded-l-lg pl-3" type="text" placeholder="Your email address" />
                    <img className="relative right-2 rounded-l-xl" src="/assets/design/send-button.svg" />
                    </form>
                </div>
                </div>
            </footer>
        {/* END: FOOTER */}
        </>
    )
}

export default Footer
