function postNewBasementController(req, res) {
  res.status(200).json({ msg: 'Archivo Subido correctamente' });
}

module.exports = {
  postNewBasementController,
};
