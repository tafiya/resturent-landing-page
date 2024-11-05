import About from "./components/About"
import Banner from "./components/Banner"
import FoodCarousel from "./components/FoodCarousel"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import TableBook from "./components/TableBook"
import Testimonial from "./components/Testimonial"


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <FoodCarousel></FoodCarousel>
      <TableBook></TableBook>
      <Testimonial></Testimonial>

      <Footer></Footer>
    </>
  )
}

export default App
