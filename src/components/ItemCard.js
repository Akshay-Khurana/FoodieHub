const ItemCard = ({foodItem}) => {
    return(
        <p className="itemcard-para"> {foodItem?.card?.info?.name}</p>
    )
}

export default ItemCard;