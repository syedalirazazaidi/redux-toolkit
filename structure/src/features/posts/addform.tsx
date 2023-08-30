import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { postAdded } from "./postSlice";
import { nanoid } from "nanoid";
export default function AddForm() {
  const user = useAppSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useAppDispatch();
  const handletitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const isData: boolean = Boolean(title) && Boolean(comment) && Boolean(userId);
  const handlecommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && comment) {
      dispatch(postAdded({ title, comment, id: nanoid(), userId }));
      setTitle(""), setComment("");
    }
  };
  const resetState = () => {
    setTitle(""), setComment("");
  };

  const onAuth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(event.target.value);
  };
  return (
    <Card className="w-[350px] mx-auto bg-gray-200 mt-8">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <form onSubmit={handleFormSubmit}>
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
          <select className="w-[293px] mt-10 p-2 rounded" onChange={onAuth}>
            <option>Please choose one option</option>

            {user &&
              user.map(({ user, id }) => <option key={id}>{user}</option>)}
          </select>
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
  );
}
