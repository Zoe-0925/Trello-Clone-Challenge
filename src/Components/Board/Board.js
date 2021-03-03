import React from 'react'
import Column from "../Column/Column"
import Card from "../Card/Card"
import { DragDropContext } from 'react-beautiful-dnd';
import MyDraggable from "../DragDrop/Draggable"
import MyDroppable from "../DragDrop/Droppable"
import { v4 as uuidv4 } from 'uuid'

const cards = [
    { id: "1", index: 0, summary: "Card 1", description: "...", img: "" },
    { id: "2", index: 1, summary: "Card 2", description: "...", img: "" },
    { id: "3", index: 2, summary: "Card 3", description: "...", img: "" },
    { id: "4", index: 3, summary: "Card 4", description: "...", img: "" },
    { id: "5", index: 0, summary: "Card 5", description: "...", img: "" },
    { id: "6", index: 1, summary: "Card 6", description: "...", img: "" },
    { id: "7", index: 2, summary: "Card 7", description: "...", img: "" },
    { id: "8", index: 3, summary: "Card 8", description: "...", img: "" },
    { id: "9", index: 0, summary: "Card 9", description: "...", img: "" },
    { id: "10", index: 1, summary: "Card 10", description: "...", img: "" },
    { id: "11", index: 2, summary: "Card 11", description: "...", img: "" },
    { id: "12", index: 3, summary: "Card 12", description: "...", img: "" }
]

const mockColumns = [
    { id: "1", title: "Monday", tasks: ["1", "2", "3", "4"] },
    { id: "2", title: "Tuesday", tasks: ["5", "6", "7", "8"] },
    { id: "3", title: "Wednesday", tasks: ["9", "10", "11", "12"] },
    { id: "4", title: "Thursday", tasks: [] },
    { id: "5", title: "Friday", tasks: [] },
]
const Board = () => {
    const [columns, setColumns] = React.useState(mockColumns)

    const reorder = (list, startIndex, endIndex) => {
        //Move the item at the start index to the end index
        const [removedToReorder] = list.splice(startIndex, 1);
        list.splice(endIndex, 0, removedToReorder)
        return list
    }

    function onDragEnd(result) {
        const { source, destination } = result;
        // source and destination contain 2 properties.
        // index = card's index, droppableId = column's index

        if (!source || !destination) { // dropped outside the list
            return;
        }
        const sInd = +source.droppableId;  //The index of the column
        const dInd = +destination.droppableId;

        let columnsCopy = [...columns]
        let sourceTaskOrder = columnsCopy[sInd].tasks
        let destinationTaskOrder = columnsCopy[dInd].tasks

        if (sInd === dInd) {
            let updatedColumn = columnsCopy[sInd]
            const reordered = reorder(sourceTaskOrder, source.index, destination.index)
            updatedColumn.tasks = reordered
            columnsCopy[sInd].tasks = updatedColumn

        } else {
            const [removedToMove] = sourceTaskOrder.splice(sInd, 1)
            columnsCopy[sInd].tasks = sourceTaskOrder
            destinationTaskOrder.splice(dInd, 0, removedToMove)
            columnsCopy[dInd].tasks = destinationTaskOrder
        }
        setColumns(columnsCopy)
    }

    return (
        <div className="board">
            <div className="columns">
                <DragDropContext className="columns" onDragEnd={onDragEnd}>
                    {columns && columns.map((column, ind) =>
                        <MyDroppable key={ind} el={column} ind={ind}>
                            <Column key={uuidv4()} column={column}>
                                {column.tasks && column.tasks.map((cardId, index) =>
                                    <MyDraggable key={uuidv4()} id={cardId} index={index}>
                                        <Card key={uuidv4()} card={cards.find(card => card.id === cardId)} />
                                    </MyDraggable>
                                )}
                            </Column>
                        </MyDroppable>
                    )}
                </DragDropContext>

            </div>
        </div>
    )
}

export default Board

