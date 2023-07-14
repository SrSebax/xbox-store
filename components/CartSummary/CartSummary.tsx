import React from 'react'
import { Segment, Button } from 'semantic-ui-react'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <Segment clearing size="large" as="section">
      <span>
        <strong>Cantidad de juegos que va a comprar:</strong>
        {` ${totalAmount}`}
      </span>
      
      <Button color="black" floated="right">
        Comprar
      </Button>
    </Segment>
  )
}

export default CartSummary
