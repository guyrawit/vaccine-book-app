import styles from './banner.module.css'
import Image from 'next/image'


export default function Banner () { 
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Vaccinate for a Safer Tomorrow</h1>
                <h3>By getting vaccinated today, you're ensuring a safer and healthier future for yourself and your community. Choose protection, choose vaccination.</h3>
            </div>
        </div>
    )
}