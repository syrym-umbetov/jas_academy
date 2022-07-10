import { Route, Routes } from 'react-router-dom';
import TableDraw from './table';
import Comment from './Comment';
export const Switch = ({ comments, shazams }) => {
  return (
    <Routes>
      <Route path='/songs' element={<TableDraw shazams={shazams} />}></Route>
      <Route path='/comments' element={<Comment comments={comments} />}></Route>
    </Routes>
  );
};
