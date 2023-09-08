import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
export default function AddPost() {
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const [userId, setUserId] = useState("")
  const handletitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const isData: boolean = Boolean(title) && Boolean(comment) && Boolean(userId)
  const handlecommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }
  const resetState = () => {
    setTitle(""), setComment("")
  }
  return (
    <Card className="w-[350px] mx-auto bg-gray-200 mt-8">
      <CardHeader>
        <CardTitle className="bg-red-200">Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <form>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="text">Title</Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={handletitleChange}
                placeholder="Name of your project"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="text">Comment</Label>
              <Input
                value={comment}
                id="comment"
                type="text"
                onChange={handlecommentChange}
                placeholder="Name of your project"
              />
            </div>
          </div>
          {/* <select className="w-[293px] mt-10 p-2 rounded" onChange={onAuth}>
            <option>Please choose one option</option>

            {user &&
              user.map(({ user, id }) => <option key={id}>{user}</option>)}
          </select> */}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={resetState}>
            Cancel
          </Button>
          <Button disabled={!isData} type="submit">
            Save Post
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
