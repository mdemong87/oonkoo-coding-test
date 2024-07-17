'use client'

import Image from "next/image";
import { useState } from "react";
import userphoto from '../../public/userphoto.png';
import UserToggle from "./UserToggle";

function HeaderUser() {


    //local state here
    const [showToggle, setshowToggle] = useState(false);


    return (
        <div>
            <div onClick={() => setshowToggle(true)} className="w-[3.25rem] h-[3.25rem] md:w-[3.38rem] md:h-[3.38rem] rounded-full">
                <Image src={userphoto} alt="User-photo" />
            </div>
            {
                showToggle && <UserToggle toggleController={setshowToggle} />
            }
        </div>
    )
}

export default HeaderUser;