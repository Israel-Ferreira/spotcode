import React, { Fragment, useState, useEffect } from "react";
import { Button, Columns, Heading } from "react-bulma-components";
import styled from "styled-components";
import Music from "./Music";

const PlaySequenceButton = styled(Button)`
  margin-bottom: 30px;
`;

const Musics = (props) => {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState([]);

  useEffect(() => {
    setSongs(
      props.songs.map((song, key) => (
        <Music
          song={song}
          playing={playing.id == song.id}
          setPlaying={setPlaying}
          key={key}
          artist_name={song.artist_name}
        />
      ))
    );
  }, [props.songs, playing]);

  return (
    <Fragment>
      <Columns className="is-vcentered is-mobile is-centered">
        <Columns.Column desktop={{ size: 1 }} mobile={{ size: 2 }}>
          <PlaySequenceButton className="is-medium" color="primary" outlined>
            Tocar em Sequência
          </PlaySequenceButton>
          <audio controls>
            <source src={playing.file_url} />
          </audio>
        </Columns.Column>
      </Columns>
      {songs}
    </Fragment>
  );
};

export default Musics
