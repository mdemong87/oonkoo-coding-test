'use client'

import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import userphoto from '../../public/userphoto.png';
import styles from "../../styles/UserToggle.module.css";
import ToggleItems from "./ToggleItems";

function UserToggle({ toggleController }) {


    console.log(toggleController);

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen z-10 ${styles.userToogleWrper}`}>
            <div className="h-screen red-light-bg">
                <div className="flex justify-between ">
                    <div className="flex gap-3 items-center">
                        <div className="w-[3rem] h-[3rem] md:w-[3.30rem] md:h-[3.30rem] rounded-full">
                            <Image src={userphoto} alt="User-photo" />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-medium text-gray-600">Md Emon Hossen</h3>
                            <p className="text-gray-400 font-normal text-sm md:text-md">@mdemong87</p>
                        </div>
                    </div>
                    <div onClick={() => toggleController(false)} className={'w-[39px] h-[39px] md:w-[43px] md:h-[43px] bg-[#FF7621] rounded-lg flex justify-center items-center hover:rotate-180 transition duration-500'}>
                        <RxCross2 className="text-gray-50 text-2xl" />
                    </div>
                </div>

                <div className="mt-8 md:mt-14">
                    <ToggleItems />
                    <ToggleItems />
                    <ToggleItems />
                    <ToggleItems />
                    <ToggleItems />
                    <ToggleItems />
                </div>
            </div>
        </div>
    )
}

export default UserToggle;