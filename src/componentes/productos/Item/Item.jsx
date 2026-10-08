import styles from "./Item.module.css";

function Item({ nombre, precio, stock }) {
return (
    <div>
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>Stock: {stock}</p>
        <button>Comprar</button>
    </div>);
}

export default Item;