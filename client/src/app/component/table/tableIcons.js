import { forwardRef } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";

export const tableIcons = {
  Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => (
    <DeleteOutlineOutlinedIcon {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRightOutlinedIcon {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <ModeEditIcon {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAltIcon {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterListIcon {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => (
    <ChevronRightIcon {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeftIcon {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
  Search: forwardRef((props, ref) => (
    <SearchOutlinedIcon {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref) => (
    <ArrowDownwardIcon {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props, ref) => (
    <RemoveCircleOutlineIcon {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props, ref) => (
    <ViewColumnIcon {...props} ref={ref} />
  )),
};
