import Image from "next/image";

const Deel = ({img, name, desc}) => {
    return (
        <div
            className="flex flex-col items-center space-y-2 p-4"
        >
            <Image
                src={img}
                alt={name}
                className='w-40 h-40 object-contain'
                width={400}
                height={400}
            />
            <p className='font-bold text-center text-xs my-3'>{name}</p>
            <p className='text-gray-400 text-center text-xs'>{desc}</p>
        </div>
    );
}

export default Deel;