import React from "react";
import { Droppable } from "react-beautiful-dnd";

const MyDroppable = ({ el, ind, ...props }) => (
    <Droppable key={ind} droppableId={`${ind}`}>
        {(provided, snapshot) => (
            <div
                className={snapshot.isDraggingOver ? "column drag-over" : "column"}
                ref={provided.innerRef}
                {...provided.droppableProps}
            >
                {props.children}
                {provided.placeholder}
            </div>
        )}
    </Droppable>)

export default MyDroppable