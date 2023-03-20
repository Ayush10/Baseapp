import {
  useDeleteMember,
  useGetMembersByProjectId,
} from "../../../api/member/useMember";
import moment from "moment";

const useMemberTable = () => {
  const { data } = useGetMembersByProjectId();

  const { mutate: mutateDelete } = useDeleteMember({});

  const handleDelete = (id) => {
    mutateDelete(id);
  };

  const columns = [
    { title: "id", field: "id" },
    { title: "name", field: "User", render: (rowData) => rowData?.User?.name },
    { title: "Type", field: "Type" },
    {
      title: "Contact",
      field: "User",
      render: (rowData) => rowData?.User?.phoneNumber,
    },
    {
      title: "Joined Date",
      field: "createdAt",
      render: (rowData) => moment(rowData?.createdAt).format("DD-MM-YYYY"),
    },
  ];
  return { data, columns, handleDelete };
};

export default useMemberTable;
