import React from 'react'
import {Row} from "reactstrap"

const Card = ({ card }) => {
    return (
        <div className="card">
            <Row>{card.summary}</Row>
        </div>
    )
}

export default Card