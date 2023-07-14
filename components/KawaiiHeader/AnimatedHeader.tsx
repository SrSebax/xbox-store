import React from 'react'
import { Header, Transition } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXbox } from '@fortawesome/free-brands-svg-icons'

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
}

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <Header size="huge" as="h1" onClick={onClick}>
    Xbox
    <div className="xbox-icon-container">
      <FontAwesomeIcon icon={faXbox} style={{ fontSize: 40, margin: 0.8, color: '#107C10' }} />   
    </div>
    Store
    {/* <Transition
      animation="jiggle"
      visible={visible}
      duration={900}
      onComplete={onComplete}
    >
      <Avocado size="58px" />
    </Transition> */}
    <style jsx>{`
      .xbox-icon-container {
        margin-left: 15px;
        margin-right: 15px;
      }
    `}</style>
  </Header>
)

export default AnimatedHeader
