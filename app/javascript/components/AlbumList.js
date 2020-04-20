import React from "react";
import { Columns } from "react-bulma-components";
import Album from "./common/Album";


const AlbumList = (props) => {
  const albums = props.list.map((album, key) => {
    return (
      <Columns.Column key={key} desktop={{size: 2}} mobile={{size: 6}} >
        <Album
          artist_name={album.artist_name}
          title={album.title}
          cover_url={album.cover_url}
          id={album.id}
        />
      </Columns.Column>
    );
  });

  return <Columns className="is-mobile" size={2}>{albums}</Columns>;
};

export default AlbumList;
