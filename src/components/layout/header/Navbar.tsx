import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <Link href='/'>
                <span>Home</span>
            </Link>
            <div className='pr-4' />
            <Link href='/offers'>
                <span>Offers</span>
            </Link>
            <div className='pr-4' />
            <Link href='/request'>
                <span>Request</span>
            </Link>
            <div className='pr-4' />
            <Link href='/deels'>
                <span>Deels</span>
            </Link>
            <div className='pr-4' />
            <Link href='/signup'>
                <span>Sign Up</span>
            </Link>
            <div className='pr-4' />
            <Link href='/login'>
                <span>Login</span>
            </Link>
        </>
    );
}

export default Navbar;