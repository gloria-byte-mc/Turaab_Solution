import React from 'react'
import ContactHero from '../components/ContactHero'
import ContactMain from '../components/ContactMain'
import WhyContact from '../components/WhyContact'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const ContactPage = () => {
  return (
    <>

    <SEO
        title="Contact Us | Turaab Solutions Limited"
        description="Get in touch with Turaab Solutions for bulk calculator orders, quotes, and delivery across Kenya. Call +254 712 598 888 or email turaabsolutions@gmail.com."
        keywords="contact Turaab Solutions, calculator order Kenya, bulk calculator order, Turaab phone number, Turaab email"
        url=""
      />

    <ContactHero />
    <ContactMain />
    <WhyContact />
    <Footer />

    </>
  )
}

export default ContactPage