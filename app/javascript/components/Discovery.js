import React, { Fragment, useState, useEffect } from "react";
import { Columns,Heading } from "react-bulma-components";
import styled from 'styled-components';

import DiscoveryService from "../services/discovery"
import AlbumList from "./AlbumList"


const DivVSpaced = styled.div`
  margin-top: 50px;
`


const Discovery = (props) => {
  const [recentAlbums, setRecentAlbums] = useState([])
  const [recomendedAlbums, setRecomendedAlbums] = useState([])

  async function fetchAlbums(){
    const resp = await DiscoveryService.index()

    console.log(resp)

    setRecentAlbums(resp.data['recent_albums'])
    setRecomendedAlbums(resp.data['recommended_albums'])
  }

  useEffect(() => {
    fetchAlbums()
    console.log(recentAlbums)
  },[])



  const albums = <AlbumList list={recomendedAlbums} />

  return (
    <Fragment>
      <div>
        <Heading className="has-text-white" size={4}>
          Tocadas recentemente
        </Heading>
        <Columns className="is-mobile">{albums}</Columns>
      </div>

      <DivVSpaced>
        <Heading className="has-text-white" size={4}>
          Recomendadas
        </Heading>
        <AlbumList list={recomendedAlbums} />
      </DivVSpaced>
    </Fragment>
  );
};

export default Discovery;
