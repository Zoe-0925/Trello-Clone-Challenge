import React from "react";
import {  Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid'

export const MyDraggable = ({ id=0, index=0, ...props }) => {

    return  <Draggable
        className="draggable"
        key={uuidv4()}
        draggableId={id}
        index={index}
    >
        {(provided, snapshot) => (
            <div
                className={snapshot.isDragging ? "is-dragging" : "card"}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={provided.draggableProps.style}
            >
                {props.children}
            </div>)}
    </Draggable>
}

export default MyDraggable
