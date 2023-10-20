import Banner from "../../Components/Banner"
import ClientsSection from "../../Components/ClientsSection"
import CompanyLogoMarquee from "../../Components/CompanyLogoMarquee"
import DiscoverBrands from "../../Components/DiscoverBrands"
import Footer from "../../Components/Footer"
import GallerySection from "../../Components/GallerySection"

const HomePage = () => {
  return (
    <>
      <Banner />
      <DiscoverBrands/>
      <ClientsSection/>
      <GallerySection/>
      <CompanyLogoMarquee />
      <Footer/>
    </>
  )
}

export default HomePage