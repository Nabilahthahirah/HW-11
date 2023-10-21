const errorHandler = (err, req, res, next) => {
  if (err.name === "ErrorNotFound") {
    return res.status(404).json({ message: " Error Not Found" });
  } else {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = errorHandler;
