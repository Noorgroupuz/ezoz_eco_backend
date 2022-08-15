const { v4: uuidv4 } = require("uuid");
const path = require("path");
const upload = {
  fileStore: async (req, res, next) => {
    try {
      if (!req.files || !req.files.image) {
        next();
      } else {
        if (!req.files.image || Object.keys(req.files.image).length === 0)
          return res.status(400).json({ ok: false, msg: "no file" });
        const files = req.files.image;
        let num = 0;
        const fileNames = [];

        const fileConverter = (myFile) => {
          if (
            myFile.mimetype !== "image/jpeg" &&
            myFile.mimetype !== "image/png"
          )
            return res
              .status(400)
              .json({ ok: false, msg: "File format is incorrect" });
          if (myFile.size > 1024 * 1024 * 5) {
            return res
              .status(500)
              .send({ ok: false, msg: "Size too large, max size: 5mb" });
          }

          const imgName = myFile.name.split(".");
          const fileName =
            myFile.md5 + uuidv4() + "." + imgName[imgName.length - 1];
          fileNames.push(fileName);
          const filePath = path.join(__dirname, "../public/files/", fileName);
          myFile.mv(filePath, (err) => {
            if (err) return res.status(400).json(err);
          });
          num = 1;
        };
        fileConverter(files);
        if (num === 1) {
          // for (let i = 0; i < fileNames.length; i++) {
          //   fileNames[i] = fileNames[i];
          // }
          req.fileNames = fileNames;
          next();
        }
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  service: async (req, res, next) => {
    try {
      if (!req.files) {
        next();
      } else {
        if (req.files.bannerImage) {
          if (
            !req.files.bannerImage ||
            Object.keys(req.files.bannerImage).length === 0
          )
            return res.status(400).json({ ok: false, msg: "no file" });
          const files = req.files.bannerImage;
          let num = 0;
          const fileNames = [];

          const fileConverter = (myFile) => {
            if (
              myFile.mimetype !== "image/jpeg" &&
              myFile.mimetype !== "image/png"
            )
              return res
                .status(400)
                .json({ ok: false, msg: "File format is incorrect" });
            if (myFile.size > 1024 * 1024 * 5) {
              return res
                .status(500)
                .send({ ok: false, msg: "Size too large, max size: 5mb" });
            }

            const imgName = myFile.name.split(".");
            const fileName =
              myFile.md5 + uuidv4() + "." + imgName[imgName.length - 1];
            fileNames.push(fileName);
            const filePath = path.join(__dirname, "../public/files/", fileName);
            myFile.mv(filePath, (err) => {
              if (err) return res.status(400).json(err);
            });
            num = 1;
          };
          fileConverter(files);
          if (num === 1) {
            // for (let i = 0; i < fileNames.length; i++) {
            //   fileNames[i] = fileNames[i];
            // }
            req.bannerImage = fileNames;
          }
        }

        if (req.files.productImage) {
          if (
            !req.files.productImage ||
            Object.keys(req.files.productImage).length === 0
          )
            return res.status(400).json({ ok: false, msg: "no file" });
          const files = req.files.productImage;
          let num = 0;
          const fileNames = [];

          const fileConverter = (myFile) => {
            if (
              myFile.mimetype !== "image/jpeg" &&
              myFile.mimetype !== "image/png"
            )
              return res
                .status(400)
                .json({ ok: false, msg: "File format is incorrect" });
            if (myFile.size > 1024 * 1024 * 5) {
              return res
                .status(500)
                .send({ ok: false, msg: "Size too large, max size: 5mb" });
            }

            const imgName = myFile.name.split(".");
            const fileName =
              myFile.md5 + uuidv4() + "." + imgName[imgName.length - 1];
            fileNames.push(fileName);
            const filePath = path.join(__dirname, "../public/files/", fileName);
            myFile.mv(filePath, (err) => {
              if (err) return res.status(400).json(err);
            });
            num = 1;
          };
          fileConverter(files);
          if (num === 1) {
            // for (let i = 0; i < fileNames.length; i++) {
            //   fileNames[i] = fileNames[i];
            // }
            req.productImage = fileNames;
          }
        }
        next();
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};

module.exports = upload;
 