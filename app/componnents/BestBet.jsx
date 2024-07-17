import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function BestBet() {
    return (
        <div>
            <p className="text-[0.88rem] font-medium text-[#9C9C9C]">Set Your Bet</p>
            <div className="flex justify-between items-center my-2">
                <div>
                    <CiCircleMinus className="text-[1.70rem] text-[#9C9C9C] cursor-ponter" />
                </div>
                <div className="text-center -translate-y-2">
                    <h2 className=" text-[3rem] text-[#0D0500] font-bold">$96</h2>
                    <p className="-translate-y-2 text-[#9C9C9C] font-normal text-[1rem]">CAD/Min</p>
                </div>
                <div>
                    <CiCirclePlus className="text-[1.70rem] text-[#000000] cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default BestBet;