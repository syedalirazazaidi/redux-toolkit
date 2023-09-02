import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { sub } from "date-fns";

export interface PostState {
  id: number;
  title: string;
  comment: string;
  userId?: string;
  date?: string;
  reactions: Reactions;
}
export type Reactions = {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
};

const initialState: PostState[] = [
  {
    id: 1,
    title: "Learing Redux toolkit",
    comment: "I have heard this thing",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "pizzza...",
    comment: "I have heard this thing",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 3,
    title: "slice ...",
    comment: "Thie more i say slice",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];
// post async middleware
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, { payload }) => {
      state.push(payload);
    },
    reactionAdded(state, { payload }) {
      const { postId, reaction } = payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { postAdded, reactionAdded } = postsSlice.actions;

export const selectAllPost = (state: RootState) => state.post;

export default postsSlice.reducer;
