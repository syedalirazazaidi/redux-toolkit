import { useAppSelector } from "../../app/hooks";

const PostAuthor = ({ userId }) => {
  const users = useAppSelector((state) => state.user);
  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author : "Unknown author"}</span>;
};
export default PostAuthor;
