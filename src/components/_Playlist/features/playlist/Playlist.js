import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SongForm from "../songform/SongForm";
import Header from "../header/Header";
import { removeSong, editSong, updateSong, cancelEdit } from "./playlistSlice";

// import { current } from "@reduxjs/toolkit"; // current state translater logs

// Icons
import { MdDeleteForever } from "react-icons/md";
import { FcCheckmark, FcCancel } from "react-icons/fc";

// document.addEventListener("click", e => console.log(e.target)); // DOM HELPER

function Playlist() {
  const dispatch = useDispatch();

  // Songslist Selector
  const { songs } = useSelector(state => state.songlist);

  const [currentTitle, setCurrentTitle] = useState("");
  const [currentArtist, setCurrentArtist] = useState("");
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentRating, setCurrentRating] = useState("★");

  const remove = i => {
    dispatch(removeSong(i));
  };

  const edit = (e, i) => {
    setCurrentTitle(e.target);
    setCurrentArtist(e.target);
    setCurrentGenre(e.target);
    setCurrentRating(e.target);
    dispatch(editSong(i));
  };

  const update = i => {
    dispatch(updateSong(currentTitle, currentArtist, currentGenre, currentRating, i));
  };

  const cancel = i => {
    dispatch(cancelEdit(i));
  };

  return (
    <Fragment>
      <SongForm />
      <Header />

      {songs.map((song, i) => {
        return (
          <Fragment key={song.artist}>
            <table className="table-list">
              {!song.editing ? (
                <tbody>
                  <tr>
                    <td onDoubleClick={e => edit(e.target, i)}>{song.title}</td>
                    <td onDoubleClick={e => edit(e.target, i)}>{song.artist}</td>
                    <td onDoubleClick={e => edit(e.target, i)}>{song.genre}</td>
                    <td onDoubleClick={e => edit(e.target, i)}>
                      {song.rating}
                      <MdDeleteForever className="misc_absolute-delete" onClick={() => remove(i)} />
                    </td>
                  </tr>
                </tbody>
              ) : (
                <Fragment>
                  <table className="edit_table-body">
                    <tbody>
                      <tr>
                        <td>
                          <form>
                            <input
                              type="text"
                              placeholder="Title"
                              value={undefined}
                              onChange={e => setCurrentTitle(e.target.value)}
                            />
                          </form>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Artist"
                            value={undefined}
                            onChange={e => setCurrentArtist(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            list="genre-list"
                            placeholder="Genre"
                            onChange={e => setCurrentGenre(e.target.value)}
                            className="genre"></input>
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
                            type="text"
                            placeholder="Rating"
                            value={currentRating}
                            onChange={e => setCurrentRating(e.target.value)}>
                            <option value="★">★</option>
                            <option value="★★">★★</option>
                            <option value="★★★">★★★</option>
                            <option value="★★★★">★★★★</option>
                            <option value="★★★★★">★★★★★</option>
                          </select>
                          <button className="btn-absolute-update" onClick={() => update(i)}>
                            <FcCheckmark />
                          </button>
                          <button className="btn-absolute-cancel" onClick={() => cancel(i)}>
                            <FcCancel />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Fragment>
              )}
            </table>
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default Playlist;
