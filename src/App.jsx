import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Nav from "./Components/Nav/Nav"
import Services from "./Components/Services/Services"
import Work from "./Work/Work"
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App