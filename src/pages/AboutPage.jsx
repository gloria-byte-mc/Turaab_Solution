import React from 'react'
import AboutHero from '../components/AboutHero'
import WhoWeAre from '../components/WhoWeAre'
import Accreditation from '../components/Accreditation'
import Commitment from '../components/Commitment'
import Footer from '../components/Footer'
import PartnerSchools from '../components/PartnerSchools'
import SEO from '../components/SEO'

const AboutPage = () => {
  return (
    <>

    <SEO
        title="About Us | Turaab Solutions Limited"
        description="Turaab Solutions Limited is a trusted importer and distributor of KICD-approved scientific calculators in Kenya. Headquartered in Nairobi, serving schools across the country."
        keywords="Turaab Solutions, about Turaab, calculator supplier Kenya, Nairobi calculator distributor"
        url=""
      />

    <AboutHero />
    <WhoWeAre />
    <PartnerSchools />
    <Accreditation />
    <Commitment />
    <Footer />
    
    </>
  )
}

export default AboutPage