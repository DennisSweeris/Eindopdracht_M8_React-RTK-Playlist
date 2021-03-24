import React, { Fragment, useState } from "react";
import { current } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import {
  addSong,
  removeSong,
  editSong,
  updateSong,
  cancelEdit,
  sortSongsByTitle,
  sortSongsByArtist,
  sortSongsByGenre,
  sortSongsByRating,
} from "./playlistSlice";
import { MdDeleteForever } from "react-icons/md";

document.addEventListener("click", e => console.log(e.target)); // DOM HELPER
function Playlist() {
  const dispatch = useDispatch();
  const { songs } = useSelector(state => state);
  const [newTitle, setNewTitle] = useState("Unknown");
  const [newArtist, setNewArtist] = useState("Unknown");
  const [newGenre, setNewGenre] = useState("Rock");
  const [newRating, setNewRating] = useState("★");
  // console.log(songs);

  const [currentTitle, setCurrentTitle] = useState("");
  const [currentArtist, setCurrentArtist] = useState();
  const [currentGenre, setCurrentGenre] = useState();
  const [currentRating, setCurrentRating] = useState();
  const addNewSong = e => {
    e.preventDefault();
    const [title, artist] = e.target;
    const addedSong = {
      title: newTitle,
      artist: newArtist,
      genre: newGenre,
      rating: newRating,
      editing: false,
    };

    if (title.value === "" && artist.value === "") {
      title.className = "table-nav-input";
      artist.className = "table-nav-input";
    } else {
      dispatch(addSong(addedSong));
      title.value = "";
      artist.value = "";
      title.className = "";
      artist.className = "";
    }
  };

  const remove = i => {
    dispatch(removeSong(i));
    setNewTitle("Unknown");
    setNewArtist("Unknown");
  };

  const edit = (e, i) => {
    dispatch(editSong(i));
    setCurrentTitle(e.target);
    setCurrentArtist(e.target);
  };

  const cancel = i => {
    dispatch(cancelEdit(i));
  };

  const update = i => {
    dispatch(updateSong(currentTitle, currentArtist, i));
    // setCurrentTitle("");
    // setCurrentArtist("");
    // setCurrentGenre();
    // setCurrentRating();
  };

  const sort = e => {
    // dispatch(sortSongsByTitle(songs));
  };

  return (
    <Fragment>
      <h1>React / RTK Playlist</h1>
      <form onSubmit={addNewSong}>
        <table className="table-nav">
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Title"
                  onChange={e => setNewTitle(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Artist"
                  onChange={e => setNewArtist(e.target.value)}
                />
              </td>
              <td>
                <select className="genre" onChange={e => setNewGenre(e.target.value)}>
                  <option value="Rock">Rock</option>
                  <option value="Reggae">Reggae</option>
                  <option value="Klassiek">Klassiek</option>
                  <option value="Hiphop">Hip/Hop/Rap</option>
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
      <table className="table-header">
        <thead>
          <tr>
            <th onClick={() => dispatch(sortSongsByTitle(songs))}>Title</th>
            <th onClick={() => dispatch(sortSongsByArtist(songs))}>Artist</th>
            <th onClick={() => dispatch(sortSongsByGenre(songs))}>Genre</th>
            <th onClick={() => dispatch(sortSongsByRating(songs))}>Rating</th>
          </tr>
        </thead>
      </table>
      {songs.map((song, i) => {
        return (
          <Fragment key={song.title}>
            <table className="table-list">
              {!song.editing ? (
                <tbody>
                  <tr>
                    <td onClick={e => edit(e.target, i)}>{song.title}</td>
                    <td onClick={e => edit(e.target, i)}>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.rating}</td>

                    <span className="misc_absolute-delete" onClick={() => remove(i)}>
                      <MdDeleteForever />
                    </span>
                  </tr>
                </tbody>
              ) : (
                <table className="edit_table-body" s>
                  <tbody>
                    <tr>
                      <td className="edit_table-title">
                        <input
                          type="text"
                          value={currentTitle}
                          onChange={e => setCurrentTitle(e.target.value)}
                        />
                      </td>
                      <td className="edit_table-artist">
                        <input
                          type="text"
                          value={currentArtist}
                          onChange={e => setCurrentArtist(e.target.value)}
                        />
                      </td>
                      {/*                   
                    <td>
                      <select
                        className="genre"
                        value={currentGenre}
                        onChange={e => setNewGenre(e.target.value)}>
                        <option value="Rock">Rock</option>
                        <option value="Reggae">Reggae</option>
                        <option value="Klassiek">Klassiek</option>
                        <option value="Hiphop">Hip/Hop/Rap</option>
                      </select>
                    </td>
                    <td>
                      <select
                        className="rating"
                        value={currentRating}
                        onChange={e => setNewRating(e.target.value)}>
                        <option value="★">★</option>
                        <option value="★★">★★</option>
                        <option value="★★★">★★★</option>
                        <option value="★★★★">★★★★</option>
                        <option value="★★★★★">★★★★★</option>
                      </select>
                    </td> */}
                      <td>
                        <button onClick={() => cancel(i)}>Cancel</button>
                      </td>
                      <td>
                        <button onClick={() => update(i)}>Update</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </table>
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default Playlist;
