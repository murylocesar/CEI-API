module.exports = () => {
    const CeiCrawler = require("cei-crawler")
    const controller = {};
    
    controller.getStockHistory = async (req, res, next) => {
        console.log(`Executando getStockHistory`)

        let username = req.body.username;
        let password = req.body.password;
        
        let ceiCrawler = new CeiCrawler(username, password, {
          puppeteerLaunch: {
              args: [ '--no-sandbox',
                      '--disable-setuid-sandbox',
                      '--disable-dev-shm-usage',
                      '--single-process' ]
          },
          trace: true
        });
        
        try {
            var result;
            
            if ((typeof(req.body.startDate) == "undefined" || req.body.startDate == null) ||
                (typeof(req.body.endDate) == "undefined" || req.body.endDate == null)) {
                console.log(`Buscando histórico s/ data`)
                
                result = await ceiCrawler.getStockHistory();
            }else {
                let startDate = new Date(req.body.startDate);
                let endDate = new Date(req.body.endDate);
                
                console.log(`Buscando histórico c/ data`)
                result = await ceiCrawler.getStockHistory(startDate, endDate);
            }
            await ceiCrawler.close();
            res.status(200).json(result);
        } catch (err) {
            console.log(`Erro getStockHistory`)
            res.status(500).json(err)
        }
    }
    
    controller.getDividends = async (req, res, next) => {
        console.log(`Executando getDividends`)

        let username = req.body.username;
        let password = req.body.password;
        
        let ceiCrawler = new CeiCrawler(username, password, {
          puppeteerLaunch: {
              args: [ '--no-sandbox',
                      '--disable-setuid-sandbox',
                      '--disable-dev-shm-usage',
                      '--single-process' ]
          },
          trace: true
        });
        
        try {
            console.log(`Buscando dividendos`)
            
            let result = await ceiCrawler.getDividends();
            await ceiCrawler.close();
            res.status(200).json(result);
        } catch (err) {
            console.log(`Erro getDividends`)
            res.status(500).json(err)
        }
    }
    
    controller.getWallet = async (req, res, next) => {
        console.log(`Executando getWallet`)

        let username = req.body.username;
        let password = req.body.password;
        
        let ceiCrawler = new CeiCrawler(username, password, {
          puppeteerLaunch: {
              args: [ '--no-sandbox',
                      '--disable-setuid-sandbox',
                      '--disable-dev-shm-usage',
                      '--single-process' ]
          },
          trace: true
        });
        
        try {
            var result;
            
            if (typeof(req.body.date) == "undefined" || req.body.date == null) {
                console.log(`Buscando wallet s/ data`)
                
                result = await ceiCrawler.getWallet();
            }else {
                let date = new Date(req.body.date);
                console.log(`Buscando wallet c/ data`)
                result = await ceiCrawler.getWallet(date);
            }
            await ceiCrawler.close();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err)
        }
    }

    return controller;
}
