import { useState } from "react";
import { Button } from "@/components/ui/button";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      hi this is raza
      <Button className="bg-red-400">Click me</Button>
    </div>
  );
}

export default App;
