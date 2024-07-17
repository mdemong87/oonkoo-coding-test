'use client'

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../styles/placeBidBtn.module.css";
import Loading from "./Loading";



function PlaceBidBtn() {


    //local loading state
    const [loading, setloading] = useState(false);


    //handle btn click function here
    function handleBtnClicl() {

        // start loading 
        setloading(true);

        //stop loading and show success message after 3 second
        setTimeout(() => {
            setloading(false);
            toast.success("Bid Placed Successfull");
        }, 2000);
    }


    return (
        <button onClick={() => handleBtnClicl()} className={`w-full text-center text-[#FFFFFF] py-4 mt-2 font-medium text-base rounded-md flex justify-center items-center ${styles.placeBidBtnWrper}`}>
            {
                loading ? <Loading /> : "Place Bid"
            }




            {/* toastfy container Componnet  here*/}
            <ToastContainer
                position="bottom-left"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />

        </button>
    )
}

export default PlaceBidBtn;