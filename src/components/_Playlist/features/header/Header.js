import { React, Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  sortSongsByTitle,
  sortSongsByArtist,
  sortSongsByGenre,
  sortSongsByRating,
} from "../playlist/playlistSlice";

function Header() {
  const dispatch = useDispatch();

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
    </Fragment>
  );
}

export default Header;
