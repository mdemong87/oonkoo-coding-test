function ForMiddleContentSkelation() {
    return (
        <div class="rounded-md p-4 w-full mx-auto ">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-lg bg-gray-200 h-32 w-32"></div>
                <div class="flex-1 space-y-6 py-1">
                    <div class="h-10 bg-gray-200 rounded"></div>
                    <div class="space-y-1">
                        <div class="grid grid-cols-4 gap-4">
                            <div class="h-6 bg-gray-200 rounded col-span-3"></div>
                            <div class="h-5 bg-gray-200 rounded col-span-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForMiddleContentSkelation;