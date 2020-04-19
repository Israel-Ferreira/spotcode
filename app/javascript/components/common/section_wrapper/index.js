import React from "react"
import {Section, Container} from "react-bulma-components"


const SectionWrapper = (props) => {
  return (
    <Section>
      <Container>
        {props.children}
      </Container>
    </Section>
  )
}


export default SectionWrapper