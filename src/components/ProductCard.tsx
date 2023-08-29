import style from './productcard.module.css'
import Image from 'next/image'

export default function ProductCard({ hospitalName, imgSrc }: { hospitalName: string, imgSrc: string }) {
    return (
        <div className="w-1/5 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[70%]">
                <img
                    src={imgSrc}
                    alt="Product Card"
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold">{hospitalName}</h2>
            </div>
        </div>
    );
}
