import { combineReducers } from 'redux';

const songsReducer = () => {  // although using reducer for static list is overkill, this is used for learning purposes
  return [
    { title: 'Dream Of Dreams', duration: '4:12'},
    { title: 'Macaroni', duration: '3:36'},
    { title: 'Everybody, yeah', duration: '3:12'},
    { title: 'Shululululu', duration: '3:13'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});