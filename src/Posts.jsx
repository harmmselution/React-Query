import React, { useState } from 'react';
import { useQuery } from 'react-query';
import PostDetails from './PostDetails';
function Posts() {
  async function getPosts(currentPage) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${currentPage}`);
    return res.json();
  }
  const [currentPost, setCurrentPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess } = useQuery(['key', currentPage], () => getPosts(currentPage));
  return (
    <>
      <div className="asd">
        {isSuccess
          ? data.map((item, key) => (
              <div key={`${key}_${item}`} onClick={() => setCurrentPost(item)}>
                {item.title}
              </div>
            ))
          : 'Loading...'}
      </div>
      {currentPost && <PostDetails post={currentPost} />}
      <div className="buttons">
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
          Previous
        </button>
        {currentPage}
        <button disabled={currentPage >= 10} onClick={() => setCurrentPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </>
  );
}

export default Posts;
