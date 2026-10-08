import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

const productos = [
{ id: '1234', nombre: 'Notebook Pro', precio: 12000, stock: 15 },
{ id: '1235', nombre: 'Celular', precio: 8000, stock: 17 },
{ id: '1236', nombre: 'Auriculares', precio: 2000, stock: 19},
];

function ItemListContainer() {
    return <ItemList productos={productos}/>
}

export default ItemListContainer;