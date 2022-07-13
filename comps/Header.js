import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/download.jpg' width={50} height={50}></Image>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas/"><a>Ninja Listing</a></Link>

            {/* <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas/"><a>Ninja Listing</a></Link> */}
        </nav>
    );
}

export default Navbar;