import Navbar from './components/Header/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductSection from './components/ProductCard/ProductSection'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProductSection />
      <Footer />
    </div>
  )
}

export default App
