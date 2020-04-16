import React, {Fragment} from 'react'
import {Button} from 'react-bulma-components'
import 'react-bulma-components/dist/react-bulma-components.min.css'

import './stylesheets/app.scss'

const App =  (props) => {
  return (
    <Fragment>
      <Button color="primary">Testando o Bulma</Button>
    </Fragment>
  )
}

export default App