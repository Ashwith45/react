import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import './DragDrop.css';

const initialPlayers = [
  { id: '1', name: 'Rohit Sharma' },
  { id: '2', name: 'Shubman Gill' },
  { id: '3', name: 'Virat Kohli' },
  { id: '4', name: 'Shreyas Iyer' },
  { id: '5', name: 'Rishabh Pant' },
  { id: '6', name: 'KL Rahul' },
  { id: '7', name: 'Hardik Pandya' },
  { id: '8', name: 'Ravindra Jadeja' },
  { id: '9', name: 'Axar Patel' },
  { id: '10', name: 'Washington Sundar' },
  { id: '11', name: 'Kuldeep Yadav' },
  { id: '12', name: 'Varun Chakravarthy' },
  { id: '13', name: 'Mohammed Shami' },
  { id: '14', name: 'Arshdeep Singh' },
  { id: '15', name: 'Harshit Rana' },
];

const DragDrop = () => {
  const [batters, setBatters] = useState(initialPlayers);
  const [bowlers, setBowlers] = useState([]);
  const [allrounders, setAllrounders] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceList = getListById(source.droppableId);
    const destinationList = getListById(destination.droppableId);
    const [movedItem] = sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, movedItem);

    updateListById(source.droppableId, sourceList);
    updateListById(destination.droppableId, destinationList);
  };

  const getListById = (id) => {
    switch (id) {
      case 'batters':
        return batters;
      case 'bowlers':
        return bowlers;
      case 'allrounders':
        return allrounders;
      default:
        return [];
    }
  };

  const updateListById = (id, list) => {
    switch (id) {
      case 'batters':
        setBatters(list);
        break;
      case 'bowlers':
        setBowlers(list);
        break;
      case 'allrounders':
        setAllrounders(list);
        break;
      default:
        break;
    }
  };

  const renderList = (players, droppableId, title) => (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div className="list-container">
          <h3>{title}</h3>
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="player-list"
          >
            {players.map((player, index) => (
              <Draggable key={player.id} draggableId={player.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`player-item ${snapshot.isDragging ? 'dragging' : ''}`}
                  >
                    {player.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );

  return (
    <div className="drag-drop-container">
      <h2>Indian Cricket Team Player Categorization</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="lists">
          {renderList(batters, 'batters', 'Batters')}
          {renderList(bowlers, 'bowlers', 'Bowlers')}
          {renderList(allrounders, 'allrounders', 'Allrounders')}
        </div>
      </DragDropContext>
    </div>
  );
};

export default DragDrop;
