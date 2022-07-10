import './App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchComments, fetchSongs } from './APIs/api';
import { Switch } from './components/Routes';

function App() {
  const [comments, setComments] = useState([]);
  const [shazams, setShazams] = useState([]);

  useEffect(() => {
    fetchComments(setComments);
  }, []);
  useEffect(() => {
    fetchSongs(setShazams);
  }, []);

  return (
    <div className='App'>
      <div className='app-links'>
        <Link to='/'>Home</Link>
        <Link to='/songs'>Songs</Link>
        <Link to='/comments'>Comments</Link>
      </div>
      <Switch comments={comments} shazams={shazams} />
    </div>
  );
}

export default App;
