import { useAppSelector } from "../../app/hooks";

export default function PostsList() {
  const orderedPosts = useAppSelector((state) => state.post);

  const renderedPosts = orderedPosts.map(({ comment, id, title }) => (
    <article key={id}>
      <h1 className="text-xl font-semibold">{title}</h1>
      <h3>{comment}</h3>
      {/* <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} /> */}
    </article>
  ));
  return (
    <div className="">
      <h1 className="text-xl font-extrabold">Posts</h1>
      {renderedPosts}
    </div>
  );
}