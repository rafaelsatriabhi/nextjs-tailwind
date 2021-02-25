import React, { useState } from 'react';
import Layout from '../components/Layout/Layout.jsx';
import ModalMenu from '../components/Layout/Pages/Home/Modal/index.jsx';
import GreetingsSection from '../components/Layout/Pages/Home/Sections/GreetingsSection/index.jsx';
import NewArrival from '../components/Layout/Pages/Home/Sections/NewArrival/index.jsx';
import PartnersLogoSection from '../components/Layout/Pages/Home/Sections/PartnersLogoSection/index.jsx';
import RoomsSection from '../components/Layout/Pages/Home/Sections/RoomsSection/index.jsx';

export default function Home() {

  const [modal, setModal] = useState(false)
  const [footer, setFooter] = useState({
    overview: false,
    company: false,
    explore: false,
  })

  const modalHandler = (e) => {
    console.log(e.target)
    if(e.target.id === "open-modal") {
      setModal(true)
    } else {
      setModal(false)
    }
  }

  const footerHandler = (e) => {
    const id = e.target.id

    if (id === 'footer-overview') {
      if( footer.overview ) {
        setFooter({...footer, overview: false })
      } else {
        setFooter({...footer, overview: true })

      }
    } else if (id === 'footer-company') {
      if( footer.company ) {
        setFooter({...footer, company: false })
      } else {
        setFooter({...footer, company: true })

      }
    } else {
      if( footer.explore ) {
        setFooter({...footer, explore: false })
      } else {
        setFooter({...footer, explore: true })

      }
    }
  }



  return (
    <Layout modalHandler={modalHandler} footer={footer} footerHandler={footerHandler} className="relative">
      {
        modal && (
          <ModalMenu modalHandler={ modalHandler }/>
        )
      }
      {/* START: EXPLORE NOW SECTION */}
      <GreetingsSection />
      {/* END: EXPLORE NOW SECTION */}

      {/* START: ROOMS SECTION */}
      <RoomsSection />
      {/* END: ROOMS SECTION */}
      {/* START: JUST ARRIVED CAROUSEL */}
      <NewArrival />
      {/* END: JUST ARRIVED CAROUSEL */}
      {/* START: PARTNERS */}
      <PartnersLogoSection />
      {/* END: PARTNERS */}
    </Layout>
  )
}
