import Item from "../Item/Item";
import styles from "./ItemList.module.css";

function ItemList({ productos }) {
return (
    <div>
        {productos.map(prod => (
            <Item key={prod.id} {...prod} />
        ))}
    </div>
);
}

export default ItemList;