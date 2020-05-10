module.exports = app => {
    const controller = app.controllers.ceiController;

    app.route('/api/stockHistory')
      .post(controller.getStockHistory);
    
    app.route('/api/dividends')
      .post(controller.getDividends);
}
