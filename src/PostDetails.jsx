import React from 'react';
import { useQuery } from 'react-query';

async function fetchComments(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return response.json();
}

const PostDetails = ({ post }) => {
  const { data, isSuccess } = useQuery(['comments', post.id], () => fetchComments(post.id));
  return (
    <>
      <h1>Comments</h1>
      {isSuccess &&
        data.map((comment, index) => (
          <li key={index}>
            {comment.email}: {comment.body}
          </li>
        ))}
      <div>{post.body}</div>
    </>
  );
};

export default PostDetails;
