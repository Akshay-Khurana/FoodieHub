import ItemCard from "./ItemCard";

const Menu = ({menu}) =>{
    const itemcards = menu?.card?.card?.itemCards;
    return (
        <>
        {/* <h2> hii </h2> */}
        {itemcards?.map((item) => (
            <ItemCard foodItem={item}></ItemCard>
          ))}
        </>
    )
}

export default Menu;