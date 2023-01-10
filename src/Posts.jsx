import React, { useState } from 'react';
import { useQuery } from 'react-query';
import PostDetails from './PostDetails';
function Posts() {
  const fetcher = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    return res.json();
  };
  const { data, isSuccess } = useQuery('key', fetcher);
  const [currentPost, setCurrentPost] = useState(null);

  console.log(data);
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
    </>
  );
}

export default Posts;
