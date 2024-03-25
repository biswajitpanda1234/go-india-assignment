import RightbarCard from "./RightbarCard";

import {marketStories} from "./data";
export default function Rightbar() {

  return (
    <>
      <div className="ml-8">
        <span className="text-sm text-red-600 my-1 py-2 font-semibold bg-gray-100 hidden md:block">MARKET STORIES</span>
        {
            marketStories.map((value, index)=>{
                
                return(
                    <div key={index}>
                        <RightbarCard imgSrc={value.imgSrc} heading={value.heading} description={value.description}/>
                    </div>
                )
            })
        }
        
        
       
      </div>
    </>
  )
}
