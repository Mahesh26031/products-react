import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./components/ProductList";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Products</h1>
      <ProductsList />
    </div>
  );
}

export default App;
