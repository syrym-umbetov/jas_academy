import axios from 'axios';

export const fetchComments = (setComments) => {
  axios
    .get(
      'https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json'
    )
    .then((data) => {
      setComments(data.data);
      return data.data;
    });
};

export const fetchSongs = (setShazams) => {
  axios
    .get(
      'https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=rj&api_key=75df4c0dd1c2d1c7cd0bbbc551f3d373&format=json'
    )
    .then((data) => {
      setShazams(data.data.toptracks.track);
      return data.data.toptracks.track;
    });
};
