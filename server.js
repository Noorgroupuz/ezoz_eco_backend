require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const routes = require("./routes/routes");
const postgress = require("./modules/postgres/postgres");
const customErrorMiddleware = require("./middlewares/customErrorMiddleware");
const PORT = process.env.PORT;
const expressFileUploader = require("express-fileupload");

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    const db = await postgress();

    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    app.use(
      expressFileUploader({
        useTempFiles: true,
      })
    );
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));

    app.use(express.static(path.join(__dirname, "public")));
    app.use(customErrorMiddleware);
  } catch (error) {
    console.log(error);
  } finally {
    routes(app);
  }
};
start();
