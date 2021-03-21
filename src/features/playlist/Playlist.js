import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "./playlistSlice";
import { current } from "@reduxjs/toolkit";
import { MdDeleteForever } from "react-icons/md";

function Playlist() {
  const dispatch = useDispatch();
  const [newSong, setNewSong] = useState("Unknown");
  const [newArtist, setNewArtist] = useState("Unknown");
  const [newGenre, setNewGenre] = useState("Rock");
  const [newRating, setNewRating] = useState("★");
  const { songs } = useSelector(state => state);

  const addNewSong = e => {
    e.preventDefault();
    const addedSong = {
      title: newSong,
      artist: newArtist,
      genre: newGenre,
      rating: newRating,
    };
    dispatch(addSong(addedSong));
    //   if (addedSong.title) {
    //     dispatch(addSong(addedSong));
    //     // setNewSong("");
    //     // setNewArtist("");
    //     // setNewGenre("");
    //     // setNewRating("");
    //   }
  };

  const remove = i => {
    dispatch(removeSong(i));
  };

  return (
    <Fragment>
      <h1>React / RTK Playlist</h1>
      <form onSubmit={addNewSong}>
        <table className="table-nav">
          <tbody>
            <tr>
              <td>
                <input type="text" placeholder="Title" onChange={e => setNewSong(e.target.value)} />
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
                <button value="Add Song">Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <table className="table-header">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>
        </thead>
      </table>
      {songs.map((song, i) => {
        return (
          <div key={song.title}>
            <table className="table-list">
              <tbody>
                <tr>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                  <td>{song.rating}</td>
                  <td onClick={() => remove(i)}>
                    <MdDeleteForever />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </Fragment>
  );
}
// style={{ width: "20%" }}

export default Playlist;
