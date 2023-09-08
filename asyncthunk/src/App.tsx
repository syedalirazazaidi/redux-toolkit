
import { Counter } from "./features/counter/Counter"
import "./App.css"
import AddPost from "./features/post/post"
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="App">
      <AddPost />
      <Button className="bg-red-500">Click me</Button>
    </div>
  )
}

export default App
