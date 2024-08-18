import Offer from "../offers/Offer";

import deelImage from '@/public/images/px-1.png';

const TopOffers = () =>  {
    const topOffers = [
        {
            id: 1,
            img: "/images/offer1.png",
            category: "Female Clothes",
            location: "Surulere, Lagos.",
            posted: "09/2/24"
        },
        {
            id: 2,
            img: "/images/offer1.png",
            category: "Baby Accessories",
            location: "Uselu, Benin City.",
            posted: "09/2/24"
        },
        {
            id: 3,
            img: "/images/offer1.png",
            category: "Food Items",
            location: "Wuse, Abuja.",
            posted: "09/2/24"
        }
    ];
    
    const dtype = 'true';

    return (
        <>
            <div className='my-24'>
                <div className='text-center mb-12'>
                    <p className='text-[#5E6282] text-xs'>Top Offers</p>
                    <h1 className='text-2xl font-extrabold text-[#14183E]'>Popular Choices</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {topOffers.map((offer) => (
                        <Offer key={offer.id} {...offer} />
                    ))}
                </div>
            </div> 
        </>
    );
}

export default TopOffers;