import Deel from "../deels/Deel";

import deelImage from '@/public/images/px-1.png';

const RecentDeels = () =>  {
    const recentDeels = [
        {
            id: 1,
            img: "/images/px-1.png",
            name: "Gucci Leather Sneakers",
            desc: "MENS Gucci Ace Leater Sneakers, Size 45, Gently Used."
        },
        {
            id: 2,
            img: "/images/px-2.png",
            name: "Sony Playstation 3",
            desc: "Sony PS3 Original Console & 19 Games Bundle."
        },
        {
            id: 3,
            img: "/images/px-3.png",
            name: "Pressing Iron",
            desc: "Used Russell Hobbs Supreme Steam Traditional iron."
        },
        {
            id: 4,
            img: "/images/px-4.png",
            name: "Unripe Plantains",
            desc: "Fresh big unripe plantains to give you immediately."
        }
    ]

    return (
        <div className='my-8'>
            <div className='text-center mb-12'>
                <p className='text-[#5E6282] text-xs'>CATEGORY</p>
                <h1 className='text-2xl font-extrabold text-[#14183E]'>Recent Deels</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
                {recentDeels.map((deel) => (
                    <Deel key={deel.id} {...deel} />
                ))}
            </div>
        </div>
    );
}

export default RecentDeels;