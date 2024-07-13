const CatchAsyncErrors = require('../Middlewares/CatchAsyncErrors')

exports.initializeApp = CatchAsyncErrors(async(req,res)=>{
    res.status(200).json({
        success:true,
        message:'Successfully started with Node Backend!!',
        data:[
            `Your Node App is working on http://localhost:${process.env.PORT}`
        ]
    })
})