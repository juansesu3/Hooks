import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./Formulario";
import CategoriasApp from "./Ejercicioshooks/CategoriasApp";
import CategoriasAdd from "./Ejercicioshooks/CategoriasAdd";


function App() {
  return (
    <div className="App">

      {/* <Counter /> */}
      {/* <Formulario/> */}
      <CategoriasApp/>
      <CategoriasAdd/>
    
    </div>
  );
}

export default App;
