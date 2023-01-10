import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
function Films() {
  const fetcher = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  };
  const { data = [], isLoading } = useQuery('key', fetcher);
  return (
    <div>
      {isLoading
        ? 'Loading...'
        : data.map((item, key) => <li key={`${key}_${item}`}>{item.name}</li>)}
    </div>
  );
}

export default Films;
