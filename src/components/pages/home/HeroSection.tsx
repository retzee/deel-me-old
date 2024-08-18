import Image from "next/image";
import styles from './HeroSection.module.scss';

import HeroImage from '@/public/images/Hero-Image.png';

const HeroSection = () =>  {
    return (
            <div className={styles.main_container}>
                <div className='md:w-1/2'>
                    <h1>INSPIRING PEOPLE TO LOVE AND SHARE</h1>
                    <span className={styles.user_counter}>Over 10,000+ <br /> 
                        <span className='text-[#34d399]'>Deelers </span> 
                        <span>ready to <br /> receive what you have got</span>
                    </span>
                    <p className='text-sm pt-4 text-[#5E6282]'> We are a social enterprise, poised to make profit by giving true  <br />value to our altruistic users , therefore we make profit optimally  <br /> with a clear vision towards a greener and circle economy.</p>
                    <div className='mt-4'>
                    <button className={styles.sign_up}>
                        Sign Up
                    </button>
                    </div>
                    <div className={styles.search_form}>
                        <input
                            type="text"
                            className='rounded-md p-1 flex-grow'
                            placeholder='Search for any Deels'
                            aria-label='Search input'
                        />
                        <button
                            aria-label='Search button'
                        >
                            Search
                        </button>
                    </div>
                </div>
                
                <div className=''>
                    <Image src={HeroImage} alt="Deel Me" className="w-full h-auto" width={400} height={400} />
                </div>
            </div>
    );
}

export default HeroSection;