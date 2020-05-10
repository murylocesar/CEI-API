module.exports = app => {
    const controller = app.controllers.ceiController;

    app.route('/stockHistory')
      .post(controller.getStockHistory);
    
    app.route('/dividends')
      .post(controller.getDividends);
}
