import React, {Fragment, useState} from 'react'
import NavbarFooter from "../../components/common/navbar_footer/index"
import SectionWrapper from '../../components/common/section_wrapper/index'
import Discovery from '../../components/Discovery'

const DiscoveryScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <NavbarFooter/>
    </Fragment>
  )
}

export default DiscoveryScreen