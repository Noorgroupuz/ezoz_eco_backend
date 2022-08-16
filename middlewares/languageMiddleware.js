module.exports = async function (req, res, next) {
  console.log(req.cookies.language);
  if (await req.cookies.language) {
    req.language = await req.cookies.language;
  } else {
    req.language = "ru";
  }
  next();
};
