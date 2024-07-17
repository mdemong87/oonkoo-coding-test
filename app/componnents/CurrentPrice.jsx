import Image from "next/image";
import Ellipse from "../../public/Ellipse 25.png";


function CurrentPrice() {
    return (
        <div className="bg-[#0D0500] flex items-center justify-between p-3 px-4 w-full rounded-[0.31rem]">
            <div>
                <p className="text-[#9C9C9C] text-[1rem] font-normal translate-y-2">Current Price</p>
                <h2 className="text-[2rem] text-[#FFFFFF] font-bold">$95/min</h2>
            </div>
            <div className="w-[3.31rem] h-[3.31rem] translate-y-2">
                <Image src={Ellipse} alt="Ellipse photo" />
            </div>
        </div>
    )
}

export default CurrentPrice;