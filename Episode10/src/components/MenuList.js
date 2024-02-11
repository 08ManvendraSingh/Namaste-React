import ItemCards from "./ItemCards";

const MenuList = ({data}) => {

  const {title,itemCards}=data?.card?.card;  
    
  return (
    <div className="pt-6 pl-2 pb-4 pr-4 border-b-[16px] border-[#f1f1f6]">
        <div className="w-full flex justify-between items-center mr-4">
          <h3 className="font-bold text-lg text-[#282828]">{title}({itemCards.length})</h3>
          <span>🔽</span>
        </div>
        <div>
          {itemCards.map((x)=><ItemCards data={x}/>)}
        </div>
    </div>
  )
}

export default MenuList;