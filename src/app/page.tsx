import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{margin: "20px", display: "flex", flexDirection: "row", 
    flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
        <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' />
        <ProductCard hospitalName='Thammasat Hospital' imgSrc='/img/thammasat.jpg' />
        <ProductCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg' />
        
      </div>
    </main>
  )
}
