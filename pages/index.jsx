import React, { useState } from 'react';
import Layout from '../components/Layout/Layout.jsx';
import ModalMenu from '../components/Layout/Pages/Home/Modal/index.jsx';
import GreetingsSection from '../components/Layout/Pages/Home/Sections/GreetingsSection/index.jsx';
import NewArrival from '../components/Layout/Pages/Home/Sections/NewArrival/index.jsx';
import PartnersLogoSection from '../components/Layout/Pages/Home/Sections/PartnersLogoSection/index.jsx';
import RoomsSection from '../components/Layout/Pages/Home/Sections/RoomsSection/index.jsx';

export default function Home() {

  return (
    <Layout>
      {/* START: EXPLORE NOW SECTION */}
      <GreetingsSection className="relative" />
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
