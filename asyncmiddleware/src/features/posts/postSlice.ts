import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import { sub } from "date-fns"
import axios from "axios"

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
  posts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
}
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(POSTS_URL)
  return response.data
})

const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{},
    

})