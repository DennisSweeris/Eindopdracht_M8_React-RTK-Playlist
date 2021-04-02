import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong } from "./songFormSlice";

// document.addEventListener("click", e => console.log(e.target)); // DOM HELPER
function SongForm() {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("Unknown");
  const [newArtist, setNewArtist] = useState("Unknown");
  const [newGenre, setNewGenre] = useState("Rock");
  const [newRating, setNewRating] = useState("★");

  const addNewSong = e => {
    e.preventDefault();
    const [title, artist, genre, rating] = e.target;
    const addedSong = {
      title: newTitle,
      artist: newArtist,
      genre: newGenre,
      rating: newRating,
      editing: false,
    };

    dispatch(addSong(addedSong));
    title.value = "";
    artist.value = "";
    genre.value = "";
    rating.value = "";
  };

  return (
    <Fragment>
      <h1>React / RTK Playlist</h1>
      <form onSubmit={addNewSong}>
        <table className="table-nav">
          <tbody>
            <tr>
              <td>
                <input type="text" placeholder="Title" onChange={e => setNewTitle(e.target.value)} required />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Artist"
                  onChange={e => setNewArtist(e.target.value)}
                  required
                />
              </td>
              <td>
                <select className="genre" onChange={e => setNewGenre(e.target.value)}>
                  <option value="Rock">Rock</option>
                  <option value="Reggae">Reggae</option>
                  <option value="Klassiek">Klassiek</option>
                  <option value="Hiphop">Hip/Hop/Rap</option>
                  <option value="Metal">Metal</option>
                  <option value="Nederlandstalig">Nederlandstalig</option>
                </select>
              </td>
              <td>
                <select className="rating" onChange={e => setNewRating(e.target.value)}>
                  <option value="★">★</option>
                  <option value="★★">★★</option>
                  <option value="★★★">★★★</option>
                  <option value="★★★★">★★★★</option>
                  <option value="★★★★★">★★★★★</option>
                </select>
              </td>
              <td>
                <input value="Add Song" type="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Fragment>
  );
}

export default SongForm;
