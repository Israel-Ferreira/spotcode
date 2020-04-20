import React, {Fragment, useState} from 'react'
import NavbarFooter from '../../components/common/navbar_footer/index'
import Albums from '../../components/albuns/index'

const AlbumScreen = () => {
  return (
    <Fragment>
      <NavbarFooter/>
      <Albums />
    </Fragment>
  )
}


export default AlbumScreen