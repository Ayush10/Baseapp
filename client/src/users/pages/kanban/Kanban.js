import { Skeleton } from "@mui/material";
import React from "react";
import CardContentHeader from "../../../app/component/card/header/CardContentHeader";
import KanbanBoard from "../../components/kanban/board/KanbanBoard";
import { useGetTaskByProjectId } from "../../hooks/api/kanban/useKanban";

const Kanban = () => {
  const { data, isLoading } = useGetTaskByProjectId();
  return isLoading ? (
    <Skeleton />
  ) : (
    <div>
      <div>
        <CardContentHeader title="Kanban" />
      </div>
      <div>
        <KanbanBoard card={data} />
      </div>
    </div>
  );
};

export default Kanban;
