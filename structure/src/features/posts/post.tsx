import { useAppSelector } from "../../app/hooks";
import ReactionButton from "./reactionButton";
import TimeAgo from "./timeago";
type Reactions = {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
};

interface POST_TYPE {
  id: number;
  title: string;
  comment: string;
  userId?: string;
  date?: string;
  reactions: Reactions;
}
export default function PostsList() {
  const posts: POST_TYPE[] = useAppSelector((state) => state.post);
  const orderedPosts = posts.slice().sort((a: POST_TYPE, b: POST_TYPE) => {
    if (a.date && b.date) {
      return b.date.localeCompare(a.date);
    }
    return 0; // Return 0 if either a.date or b.date is undefined
  });
  const renderedPosts = orderedPosts.map(
    ({ comment, id, title, userId, date, reactions }: POST_TYPE) => (
      <article key={id}>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{comment.substring(0, 100)}</p>
        <p className="text-xs text-gray-500">
          {userId ? ` Created By ${userId}` : "by UnKnown Author"}
          <TimeAgo timestamp={date} />
        </p>
        <ReactionButton reactions={reactions} id={id} />
      </article>
    )
  );
  return (
    <div className="">
      <h1 className="text-xl font-extrabold">Posts</h1>
      {renderedPosts}
    </div>
  );
}
