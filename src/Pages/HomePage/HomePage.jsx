import Banner from "../../Components/Banner"
import ClientsSection from "../../Components/ClientsSection"
import CompanyLogoMarquee from "../../Components/CompanyLogoMarquee"
import Footer from "../../Components/Footer"
import GallerySection from "../../Components/GallerySection"

const HomePage = () => {
  return (
    <>
      <Banner />
      <CompanyLogoMarquee />
      <GallerySection/>
      <ClientsSection/>
      <Footer/>
    </>
  )
}

export default HomePage