import type { RootState } from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  id: number;
  user: string;
}
const initialState: UserState[] = [
  { id: 1, user: "aliraza" },
  { id: 2, user: "khurram" },
  { id: 3, user: "hassan" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // postAdded: (state, action) => {
    //   state.push(action.payload);
    // },
  },
});

// export const { postAdded } = usersSlice.actions;

export const selectAllPost = (state: RootState) => state.user;

export default usersSlice.reducer;
