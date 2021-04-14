import { React, Fragment } from "react";
import { useDispatch } from "react-redux";
import { sortSongsAscending, sortSongsDescending } from "../playlist/playlistSlice";

function Header() {
  const dispatch = useDispatch();

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
                  onClick={e => dispatch(sortSongsAscending(e.target.value))}
                  value="title"></button>
                <span>Title</span>
                <button
                  name="title"
                  className="header-btn-right"
                  onClick={e => dispatch(sortSongsDescending(e.target.value))}
                  value="title"></button>
              </div>
            </th>
            <th>
              <div>
                <button
                  name="artist"
                  className="header-btn-left"
                  onClick={e => dispatch(sortSongsAscending(e.target.value))}
                  value="artist"></button>
                <span>Artist</span>
                <button
                  name="artist"
                  className="header-btn-right"
                  onClick={e => dispatch(sortSongsDescending(e.target.value))}
                  value="artist"></button>
              </div>
            </th>

            <th>
              <div>
                <button
                  name="genre"
                  className="header-btn-left"
                  onClick={e => dispatch(sortSongsAscending(e.target.value))}
                  value="genre"></button>
                <span>Genre</span>
                <button
                  name="genre"
                  className="header-btn-right"
                  onClick={e => dispatch(sortSongsDescending(e.target.value))}
                  value="genre"></button>
              </div>
            </th>
            <th>
              <div>
                <button
                  name="rating"
                  className="header-btn-left"
                  onClick={e => dispatch(sortSongsAscending(e.target.value))}
                  value="rating"></button>
                <span>Rating</span>
                <button
                  name="rating"
                  className="header-btn-right"
                  onClick={e => dispatch(sortSongsDescending(e.target.value))}
                  value="rating"></button>
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </Fragment>
  );
}

export default Header;
