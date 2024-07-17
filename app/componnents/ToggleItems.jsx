
function ToggleItems() {
    return (
        <div class="rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                <div class="flex-1 space-y-6 py-1">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="space-y-1">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-3 bg-gray-200 rounded col-span-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToggleItems;