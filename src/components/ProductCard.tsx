import style from './productcard.module.css'
import Image from 'next/image'

export default function productCard () {
    return (
        <div className={style.card}>
            <div className={style.cardimg}>
                <Image src={'/img/vaccine1.jpg'}
                alt='productcard'
                fill={true}
                objectFit='cover'/>
            </div>
            <div className={style.cardtext}>
                Moderna
            </div>

        </div>
    )
}