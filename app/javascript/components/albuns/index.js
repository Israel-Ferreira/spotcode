import React, { Fragment, useState, useEffect } from "react";
import { Columns, Image, Heading } from "react-bulma-components";
import styled from "styled-components";
import {useParams} from 'react-router-dom'

import AlbumService from '../../services/album'
import Musics from '../musics/Musics'

const DivVSpaced = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Albums = (props) => {
  const [album, setAlbum] = useState([]);
  const {id} = useParams()


  async function fetchAlbum(){
    const resp = await AlbumService.show(id)
    setAlbum(resp.data)
  }

  useEffect(() => {
    fetchAlbum()
  },[])


  return (
    <Fragment>
      <Columns className="is-vcentered is-mobile is-centered">
        <Columns.Column desktop={{ size: 3 }} mobile={{ size: 8}} className="has-text-centered">
          <Image src={album.cover_url} />
          <DivVSpaced>
            <Heading size={5} className="has-text-white">
              {album.title}
            </Heading>
            <Heading size={6} subtitle className="has-text-white">
              {album.artist_name}
            </Heading>
          </DivVSpaced>
        </Columns.Column>
      </Columns>
      <Musics songs={album.songs || []}/>
    </Fragment>
  );
};

export default Albums