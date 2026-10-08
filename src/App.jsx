import './App.css';
import Layout from "./componentes/layout/Layout";
import ItemListContainer from "./componentes/productos/ItemListContainer/ItemListContainer";

function App() {
  return(
    <Layout>
      <h1>¡Bienvenidos a mi página!</h1>
      <ItemListContainer />
    </Layout>
  )} 

export default App