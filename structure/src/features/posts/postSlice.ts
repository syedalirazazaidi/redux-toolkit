import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface PostState {
  id: number;
  title: string;
  comment: string;
}

const initialState: PostState[] = [
  { id: 1, title: "Learing Redux toolkit", comment: "I have heard this thing" },
  { id: 2, title: "pizzza...", comment: "I have heard this thing" },
  { id: 3, title: "slice ...", comment: "Thie more i say slice" },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, { payload }) => {
      console.log(payload);
      state.push(payload);

      //   prepare(title, comment) {
      //     return {
      //       payload: {
      //         id: nanoid(),
      //         title,
      //         comment,
      //       },
      //     };
      //   },
    },
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // reset: (state) => {
    //   state.value = 0;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { postAdded } = postsSlice.actions;

export const selectAllPost = (state: RootState) => state.post;

export default postsSlice.reducer;
