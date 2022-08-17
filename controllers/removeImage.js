fs = require("fs");
const removeImage = async (newImage, oldImage) => {
  try {
    if (newImage !== oldImage) {
      let name = oldImage;
      name = "./public/files/" + name;
      await fs.unlink(name, (err) => {
        if (err) {
          
          return console.log(err);
        }
        console.log("Rasm O'chirildi");
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = removeImage;
