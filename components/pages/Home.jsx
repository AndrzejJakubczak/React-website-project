import { Fragment, useContext, useEffect } from "react"
import Wrapper from "../components/wrapper/Wrapper"
import Section from "../components/Section"
import {products ,discoutProducts } from "../utils/products"
import { DataContainer } from "../App"
import SliderHome from "../components/Slider"

const Home = () => {
  const {addToCart} =useContext(DataContainer);
  const newArrivalData = products.filter(item => item.category ==="smartphone" || item.category ==="słuchawki");
  const bestSales = products.filter(item => item.category ==="sofy");
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <Fragment>
      <SliderHome/>
      <Wrapper />
      <Section title="Wyprzedaż" bgColor="#f6f9fc" productItems={discoutProducts} addToCart={addToCart}/>
      <Section title="Nowość" bgColor="white" productItems={newArrivalData} addToCart={addToCart}/>
      <Section title="Artykuły w dobrej cenie" bgColor="#f6f9fc" productItems={bestSales} addToCart={addToCart}/>
    </Fragment>
  )
}

export default Home
