import Image from "next/image";
import { BsSendFill } from "react-icons/bs";

const Offer = ({img, location, category, posted}) => {
    return (
        <div className='flex flex-col w-full shadow-xl rounded-xl'>
            <Image src={img} alt={location} className='h-48 object-fit' width={400} height={400} />
            <div className='pl-4'>
                <p className='text-gray-400 font-bold text-xs my-3'>{category}</p>
                <div className='flex items-center'>
                    <BsSendFill className='mr-2' />
                    <span className='text-gray-400'>{location}</span>
                </div>
                <p className='text-gray-400 font-bold text-xs my-3'>Posted: {posted}</p>
            </div>
        </div>
    );
}

export default Offer;