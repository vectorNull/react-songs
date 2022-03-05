import { combineReducers } from "redux";

const songReducer = () => {
	return [
		{ title: "I want it that way", duration: "4:04" },
		{ title: "Allah Knows Best", duration: "Eternal" },
		{ title: "Trust in Allah", duration: "3:23" },
		{ title: "Reaching for Allah", duration: "2:34" },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer,
});
