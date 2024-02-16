export const addToPlaylist = (song) => { 
    return {
        type: "ADD_TO_PLAYLIST",
        payload: song
    }
}