import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Workflow from './components/Workflow'
import './index.css'

function App() {
  
  return (
  <>
  <Navbar></Navbar>
  <div className="max-w-5xl mx-auto px-6 pt-20">
  <HeroSection></HeroSection>
  <FeatureSection></FeatureSection>
  <Workflow></Workflow>
  <Pricing></Pricing>
  <Testimonials></Testimonials>
  <Footer></Footer>
  </div>
   
  </>
  )
}

export default App
