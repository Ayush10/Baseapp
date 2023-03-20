import { useGetDashboard } from "../../api/dashboard/useDashboard";

export const useDashboardDetails = (id) => {
  const { data } = useGetDashboard(id);
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Open", "To Do", "Complete"],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [data?.totalOpenTask, data?.totalToDoTask, data?.totalCompleteTask],
    },
  ];
  return { data, options, series };
};
