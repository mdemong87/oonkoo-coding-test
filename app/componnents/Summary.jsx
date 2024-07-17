function Summary() {
    return (
        <div>
            <p className="text-[0.88rem] font-medium text-[#9C9C9C]">Summary</p>
            <div className="my-2 border-2 border-gray-200 rounded-[0.31rem] p-3 flex flex-col gap-16">

                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <p className="text-[#0D0500] font-medium text-[0.88rem]">1st July (All Day)</p>
                        <b className="text-[#FF7621] text-[0.88rem]">$134,400 CAD</b>
                    </div>
                    <div className="flex gap-1 items-center">
                        <p className="text-[0.88rem] font-medium text-[#0D0500]">Position</p>
                        <span className="bg-[#77FF47] rounded-full flex justify-center items-center w-[1.25rem] h-[1.25rem]">
                            <span className="text-[0.63rem] ">1</span>
                        </span>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <b className="text-[0.88rem] text-[#0D0500]">Peterborough</b>
                    <b className="text-[0.88rem] text-[#FF7621]">1400min</b>
                </div>

            </div>
        </div>
    )
}


export default Summary;