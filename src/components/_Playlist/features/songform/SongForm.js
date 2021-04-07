import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "./songFormSlice";

// document.addEventListener("click", e => console.log(e.target)); // DOM HELPER
function SongForm() {
  const dispatch = useDispatch();

  const { songs } = useSelector((state) => state.playlist);

  const [newTitle, setNewTitle] = useState("");
  const [newArtist, setNewArtist] = useState("");
  const [newGenre, setNewGenre] = useState("Unknown");
  const [newRating, setNewRating] = useState("★");

  const addNewSong = (e) => {
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
    genre.value = "Unknown";
    rating.value = "★";
    console.log(songs);
  };

  return (
    <Fragment>
      <div className="form-container">
        <form onSubmit={addNewSong}>
          <table className="table-nav">
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Artist"
                    onChange={(e) => setNewArtist(e.target.value)}
                    required
                  />
                </td>
                <td>
                  <input
                    list="genre-list"
                    placeholder="Genre"
                    className="genre"
                    onChange={(e) => setNewGenre(e.target.value)}
                  ></input>
                  <datalist id="genre-list">
                    <option value="Country">Country</option>
                    <option value="Hiphop">Hiphop/Rap</option>
                    <option value="Latin">Latin</option>
                    <option value="Metal">Metal</option>
                    <option value="Nederlandstalig">Nederlandstalig</option>
                    <option value="Punk">Punk</option>
                    <option value="R&B">R&B</option>
                    <option value="Rock">Rock</option>
                    <option value="Techno">Techno</option>
                  </datalist>
                </td>
                <td>
                  <select
                    className="rating"
                    onChange={(e) => setNewRating(e.target.value)}
                  >
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
      </div>
    </Fragment>
  );
}

export default SongForm;
