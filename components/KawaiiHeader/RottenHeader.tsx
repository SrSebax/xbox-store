import React from 'react'
import { Header, Transition, Confirm } from 'semantic-ui-react'

import { PosMeMuero } from '@components/SVGIcons'

const RottenHeader = () => (
  <Header size="huge" as="h1">
    Xbox
    <PosMeMuero size="58px" />
    Store
  </Header>
)

export default RottenHeader
