import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core';
//import {EditableInput} from "../EditableText/Editabletext"
import { Row } from "reactstrap"

const Column = ({ column, ...props }) => {
    // const{ state, setState, edit, setEdit } = useEditText(column.title)

    return (
        <div className="column">
            <Row>
                <p className="column-title">{column.title}</p>
            </Row>
            {props.children}
            <Row>
                <ListItem className="column-footer" button >
                    <ListItemText primary="+ Add another card" />
                </ListItem>
            </Row>
        </div>
    )
}

export default Column

//  <EditableInput edit={edit} text={column.title} setEdit={setEdit} className="column-title" />