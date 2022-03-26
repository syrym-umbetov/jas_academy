import React from 'react';

const TableDraw = ({ shazams }) => {
  console.log('shazams', shazams);
  return (
    <table className='draw__table'>
      <tbody className='draw__tbody'>
        <tr className='draw__thead'>
          <th></th>
          <th>ПЕСНЯ</th>
          <th>АРТИСТ</th>
          <th>АЛЬБОМ</th>
          <th></th>
        </tr>

        {shazams.map((item, index) => (
          <tr className='tr__td' key={index}>
            <td>{<img className='tr__img' src={item.image[0]['#text']} />}</td>
            <td>{item.name}</td>
            <td>{item.artist.name}</td>
            <td>{item.artist.name}</td>
            <td>
              {
                <a className='tr__a' href={item.url} target='_blank'>
                  Shazam
                </a>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDraw;
