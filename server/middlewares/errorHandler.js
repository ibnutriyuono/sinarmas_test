const errorHandler = (err, req, res, next) => {
  if(err){
    switch (err.name) {
      case 'NoData':
        res.status(404).json({
          message: 'No Data.'
        })
        break;
      default:
        res.status(500).json({
          message: 'Internal server error.'
        })
        break;
    }
  }
}

module.exports = errorHandler