module.exports = () => {
    const ceiCrawler = require("cei-crawler")
    const controller = {};
    
    controller.getStockHistory = async (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        
        let cei = new ceiCrawler(username, password, {
          /* options */
          trace: true
        });
        
        try {
            var result;
            
            if ((typeof(req.body.startDate) == "undefined" || req.body.startDate == null) ||
                (typeof(req.body.endDate) == "undefined" || req.body.endDate == null)) {
                result = await cei.getStockHistory();
            }
            else {
                let startDate = new Date(req.body.startDate);
                let endDate = new Date(req.body.endDate);
                
                result = await cei.getStockHistory(startDate, endDate);
            }

            res.status(200).json(result);
        } catch (err) {
            next(err)
        }
    }
    
    controller.getDividends = async (req, res, next) => {
        let username = req.body.username;
        let password = req.body.password;
        
        let cei = new ceiCrawler(username, password, {
          /* options */
          trace: true
        });
        
        try {
            let result = await cei.getDividends();
            res.status(200).json(result);
        } catch (err) {
            next(err)
        }
    }

    return controller;
}
