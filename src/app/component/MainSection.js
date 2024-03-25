import MainSecCard from "./MainSecCard";
import {discussionForum} from "./data";
export default function MainSection() {
  return (
    <>
    <span className="text-red-600 font-bold text-xl bg-gray-100 p-4 hidden md:block">DISCUSSION FOURM</span>
    {
            discussionForum.map((value, index)=>{
                
                return(
                    <div key={index}>
                        <MainSecCard imgSrc={value.imgSrc} heading={value.heading} description={value.description} view={value.view} like={value.like} comment={value.comment} share={value.share} time={value.time}/>
                    </div>
                )
            })
        }
    
    </>
  )
}
