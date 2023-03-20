import { useUpdateProjectTask } from "../../../api/kanban/useKanban";
import { moveCard } from "@asseinfo/react-kanban";
import { useState } from "react";
import moment from "moment";

const useKanbanBoard = (card) => {
  const openCards = [];

  const toDoCards = [];

  const completeCards = [];

  const { mutate: mutateUpdate } = useUpdateProjectTask({});

  card &&
    card !== undefined &&
    Object.values(card).forEach((key) => {
      key.status === "open" &&
        openCards.push({
          id: key.id,
          title: key.name,
          description: key.description,
          type: key.type,
          createdAt: moment(key.createdAt).format("ll"),
          assignedTo: key.assignedTo,
        });
    });

  card &&
    card !== undefined &&
    Object.values(card).forEach((key) => {
      key.status === "to do" &&
        toDoCards.push({
          id: key.id,
          title: key.name,
          description: key.description,
          type: key.type,
          createdAt: moment(key.createdAt).format("ll"),
          assignedTo: key.assignedTo,
        });
    });

  card &&
    card !== undefined &&
    Object.values(card).forEach((key) => {
      key.status === "complete" &&
        completeCards.push({
          id: key.id,
          title: key.name,
          description: key.description,
          type: key.type,
          createdAt: moment(key.createdAt).format("ll"),
          assignedTo: key.assignedTo,
        });
    });

  const handleUpdateTask = (_card, destination) => {
    const values = {
      id: _card?.id,
      status: destination?.toColumnId,
    };

    mutateUpdate(values);
  };

  const board = {
    columns: [
      {
        id: "open",
        title: "Open",
        cards: openCards,
      },
      {
        id: "to do",
        title: "To Do",
        cards: toDoCards,
      },
      {
        id: "complete",
        title: "Done",
        cards: completeCards,
      },
    ],
  };
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    handleUpdateTask(_card, destination);
    setBoard(updatedBoard);
  }
  return {
    board,
    handleUpdateTask,
    controlledBoard,
    handleCardMove,
  };
};

export default useKanbanBoard;
