import Image from "next/image"
// import Pr from "../../../public/image/evening.jpg"
export default function RightbarCard({imgSrc, heading, description}) {
  return (
    <div className='mr-16 mb-7 border-[1px]'>
      <div className=' w-full h-28 bg-green-100'>
        <Image src={imgSrc} width={100} height={10} className="object-cover h-full w-full"/>
      </div>
      <p className='font-semibold text-sm my-1 ml-3'>{heading}</p>
      <p className='text-xs ml-3'>{description}</p>
    </div>
  )
}
