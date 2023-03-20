const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const db = require("./models");

//routes app
const userRouter = require("./routes/Users");
const projectRouter = require("./routes/project");
const memberRouter = require("./routes/Member");
const taskRouter = require("./routes/Task");
const subTaskRouter = require("./routes/SubTask");
const issueRouter = require("./routes/Issue");
const componentRouter = require("./routes/Component");
const dashboardRouter = require("./routes/Dashboard");

app.use("/user", userRouter);

app.use("/project", projectRouter);

app.use("/member", memberRouter);

app.use("/task", taskRouter);

app.use("/subTask", subTaskRouter);

app.use("/issue", issueRouter);

app.use("/component", componentRouter);

app.use("/dashboard", dashboardRouter);

app.disable("etag");

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
