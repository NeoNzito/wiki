import Image from "next/image";
import userIcon from "../../../public/images/user-svgrepo-com.svg";


const Profile = () => {
    return (
        <div className="flex flex-col items-center">
            <Image 
                src={userIcon}
                alt="User Icon"
                height={32}
                width={32}
            />
            <h2>Login</h2>
        </div>
    )
}

export default Profile;