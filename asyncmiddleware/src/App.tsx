import { Button } from "@/components/ui/button"
import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import PostForm from "./features/posts/addposts"

function App() {
  return (
    <div className="App">
      hi this is developer
      <PostForm />
    </div>
  )
}

export default App
