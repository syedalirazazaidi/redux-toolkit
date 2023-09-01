import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { reactionAdded } from "./postSlice";

interface REACTIONPROPS {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}
interface REACTIONTYPE {
  reactions: REACTIONPROPS;
  id: number;
}
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};
export default function ReactionButton({ reactions, id }: REACTIONTYPE) {
  const dispatch = useAppDispatch();
  //   const reaction = useAppSelector((state) => state.post);
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => dispatch(reactionAdded({ postId: id, reaction: name }))}
      >
        {emoji} {reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
}
