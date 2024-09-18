import Image from "next/image"

const Usercard = ({ type }: { type: string }) => {
    return (
        <div className='rounded-2xl odd:bg-jaisky even:bg-jaiyellow p-4 flex-1'>
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/09</span>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold my-4">1,234</h1>
            <h2 className="capitalize text-sm text-gray-600">{type}</h2>
        </div>
    )
}

export default Usercard