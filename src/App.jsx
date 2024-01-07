import Header from './components/Header'
import Table from './components/Table'
import Footer from './components/Footer'
import CheckoutForm from './components/CheckoutForm'
import ProductDrawer from './components/ProductDrawer'

const App = () => {

  return (
    <div className='max-w-[600px] mx-auto h-screen overflow-hidden p-5'>
      <Header />
      <CheckoutForm  />
      <Table />
      <Footer/>
      <ProductDrawer />
    </div>
  )
}

export default App