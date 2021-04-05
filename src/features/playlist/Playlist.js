import React, { Fragment, useState } from "react";
import SongForm from "../songform/SongForm";
import uuid from "react-uuid";
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

// document.addEventListener("click", e => console.log(e.target)); // DOM HELPER
function Playlist() {
  const dispatch = useDispatch();

  // Songslist Selector
  const { songs } = useSelector((state) => state.playlist);

  const [currentTitle, setCurrentTitle] = useState("");
  const [currentArtist, setCurrentArtist] = useState("");
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentRating, setCurrentRating] = useState("");

  const remove = (i) => {
    dispatch(removeSong(i));
  };

  const edit = (e, i) => {
    dispatch(editSong(i));
    setCurrentTitle(e.target);
    setCurrentArtist(e.target);
    setCurrentGenre(e.target);
    setCurrentRating(e.target);
  };

  const cancel = (i) => {
    dispatch(cancelEdit(i));
  };

  const update = (i) => {
    dispatch(
      updateSong(currentTitle, currentArtist, currentGenre, currentRating, i)
    );
  };

  const sort = (e) => {
    if (e.target.parentNode.innerText === "Title") {
      dispatch(sortSongsByTitle(e.target.value));
    }
    if (e.target.parentNode.innerText === "Artist") {
      dispatch(sortSongsByArtist(e.target.value));
    }
    if (e.target.parentNode.innerText === "Genre") {
      dispatch(sortSongsByGenre(e.target.value));
    }
    if (e.target.parentNode.innerText === "Rating") {
      dispatch(sortSongsByRating(e.target.value));
    }
  };

  return (
    <Fragment>
      <SongForm />
      <table className="table-header">
        <thead>
          <tr>
            <th>
              <div>
                <button
                  name="title"
                  className="header-btn-left"
                  onClick={(e) => sort(e)}
                  value="ascending"
                ></button>
                <span>Title</span>
                <button
                  name="title"
                  className="header-btn-right"
                  onClick={(e) => sort(e)}
                  value="descending"
                ></button>
              </div>
            </th>
            <th>
              <div>
                <button
                  name="artist"
                  className="header-btn-left"
                  onClick={(e) => sort(e)}
                  value="ascending"
                ></button>
                <span>Artist</span>
                <button
                  name="artist"
                  className="header-btn-right"
                  onClick={(e) => sort(e)}
                  value="descending"
                ></button>
              </div>
            </th>

            <th>
              <div>
                <button
                  name="genre"
                  className="header-btn-left"
                  onClick={(e) => sort(e)}
                  value="ascending"
                ></button>
                <span>Genre</span>
                <button
                  name="genre"
                  className="header-btn-right"
                  onClick={(e) => sort(e)}
                  value="descending"
                ></button>
              </div>
            </th>
            <th>
              <div>
                <button
                  name="rating"
                  className="header-btn-left"
                  onClick={(e) => sort(e)}
                  value="ascending"
                ></button>
                <span>Rating</span>
                <button
                  name="rating"
                  className="header-btn-right"
                  onClick={(e) => sort(e)}
                  value="descending"
                ></button>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      {songs.map((song, i) => {
        return (
          <Fragment key={uuid()}>
            <table className="table-list">
              {!song.editing ? (
                <tbody>
                  <tr>
                    <td onDoubleClick={(e) => edit(e.target, i)}>
                      {song.title}
                    </td>
                    <td onDoubleClick={(e) => edit(e.target, i)}>
                      {song.artist}
                    </td>
                    <td onDoubleClick={(e) => edit(e.target, i)}>
                      {song.genre}
                    </td>
                    <td onDoubleClick={(e) => edit(e.target, i)}>
                      {song.rating}
                      <MdDeleteForever
                        className="misc_absolute-delete"
                        onClick={() => remove(i)}
                      />
                    </td>
                  </tr>
                </tbody>
              ) : (
                <table className="edit_table-body">
                  <tbody>
                    <tr>
                      <td className="edit_table-title">
                        <input
                          type="text"
                          value={currentTitle}
                          onChange={(e) => setCurrentTitle(e.target.value)}
                        />
                      </td>
                      <td className="edit_table-artist">
                        <input
                          type="text"
                          value={currentArtist}
                          onChange={(e) => setCurrentArtist(e.target.value)}
                        />
                      </td>
                      <td className="edit_table-genre">
                        <input
                          list="genre-list"
                          placeholder="Genre"
                          onChange={(e) => setCurrentGenre(e.target.value)}
                          className="genre"
                        ></input>
                        <datalist id="genre-list">
                          <option value="Country">Country</option>
                          <option value="Hiphop">Hiphop/Rap</option>
                          <option value="Latin">Latin</option>
                          <option value="Metal">Metal</option>
                          <option value="Nederlandstalig">
                            Nederlandstalig
                          </option>
                          <option value="Punk">Punk</option>
                          <option value="R&B">R&B</option>
                          <option value="Rock">Rock</option>
                          <option value="Techno">Techno</option>
                        </datalist>
                      </td>
                      <td className="edit_table-rating">
                        <select
                          type="text"
                          value={currentRating}
                          onChange={(e) => setCurrentRating(e.target.value)}
                        >
                          <option value="★">★</option>
                          <option value="★★">★★</option>
                          <option value="★★★">★★★</option>
                          <option value="★★★★">★★★★</option>
                          <option value="★★★★★">★★★★★</option>
                        </select>
                      </td>
                      <td>
                        <button onClick={() => cancel(i)}>X</button>
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
