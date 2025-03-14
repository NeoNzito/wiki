import Image from "next/image";
import userIcon from "../../../public/images/user-svgrepo-com.svg";
import Link from "next/link";

interface ProfileProps {

}


const Profile = ({  }: ProfileProps) => {
    return (
        <Link href="/">
            <div className="flex flex-col items-center">
                <Image 
                    src={userIcon}
                    alt="User Icon"
                    height={32}
                    width={32}
                />
                <h2>My Profile</h2>
            </div>
        </Link>
    )
}

export default Profile;