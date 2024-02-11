import { useState } from "react";
import ItemCards from "./ItemCards";

const MenuList = ({data,showItem,setShowIndex}) => {

  // const [showItem,setShowItem]=useState(false);
  const {title,itemCards}=data?.card?.card;  

  const toggleItem=()=>{
    setShowIndex();
  }
    
  return (
    <div className="pt-6 pl-2 pb-4 pr-4 border-b-[16px] border-[#f1f1f6]">
        <div onClick={toggleItem} className="w-full flex justify-between items-center mr-4 cursor-pointer">
          <h3 className="font-bold text-lg text-[#282828]">{title}({itemCards.length})</h3>
          {showItem ?<span>🔼</span>:<span>🔽</span>}
        </div>
        {showItem &&
          <div>
            {itemCards.map((x)=><ItemCards key={x?.card?.info?.id} data={x}/>)}
          </div>
        }
    </div>
  )
}

export default MenuList;