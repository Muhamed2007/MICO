import { useState } from "react";

import "./App.css";
import { Banner } from "./components/Banner/banner";
import { Categories } from "./components/categories/categories";
import { Footer } from "./components/footer/footer";
import { Listing } from "./components/listing/listing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">

      <Listing />

    </div>
  );
}

export default App;
