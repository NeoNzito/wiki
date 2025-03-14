import Image from "next/image";
import headerIcon from "../../../public/images/alt-book-svgrepo-com.svg";
import Link from "next/link";
import Profile from "./profile";

const Header = () => {
   return (
    <div className="flex bg-[var(--foreground)] justify-between w-[80%] py-4 px-8 mt-4 items-center rounded-lg">
        <div></div>
        <Link className="flex flex-col items-center" href="/">
            <Image
                priority
                src={headerIcon}
                alt="Wiki Logo"
                width={48}
                height={48}
            /> 
            <h1 className="capitalize text-2xl font-bold">WIKI</h1>
        </Link>
        <Profile />    
    </div>
   ) 
}

export default Header;