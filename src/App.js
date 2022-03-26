import './App.css';
import CommentBlock from './components/CommentBlock';

import TableDraw from './components/table';
import { useEffect, useState } from 'react';

function App() {
  const [comments, setComments] = useState([]);
  const [shazams, setShazams] = useState([]);
  useEffect(() => {
    fetch(
      'https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComments(data);
        return data;
      });
  }, []);
  useEffect(() => {
    fetch(
      'https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=rj&api_key=75df4c0dd1c2d1c7cd0bbbc551f3d373&format=json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShazams(data.toptracks.track);
        return data.toptracks.track;
      })
      .then((response) => {
        console.log(response);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <div>
        <TableDraw shazams={shazams} />
      </div>
      {comments.map((comment, index) => (
        <CommentBlock key={index} comment={comment} suffix='end' />
      ))}
    </div>
  );
}

export default App;
