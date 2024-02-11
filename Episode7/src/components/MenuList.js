import ItemCards from "./ItemCards";

const MenuList = ({data}) => {

  const {title,itemCards}=data?.card?.card;  
    
  return (
    <div className="menu_list">
        <div className="menu_header">
          <h3>{title}({itemCards.length})</h3>
          <span>🔽</span>
        </div>
        <div className="food_card_container">
          {itemCards.map((x)=><ItemCards data={x}/>)}
        </div>
    </div>
  )
}

export default MenuList;