/**
 * ReceiptController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        if (req.method == "GET") {

            var application = await Application.findOne({id: req.params.id}).populate('produce').populate('course').populate('applicationOwner');
            if(!application) return res.notFound();

            return res.view('admin/applyHandle/receipt/', {layout:false, application: application});
        }

        var application = await Application.findOne({ id: req.params.id }).populate('produce').populate('course').populate('applicationOwner');
        if(application.produce.length == 0) {
            var receipt = await Receipt.create(req.body).fetch();
            await Application.addToCollection(req.params.id, "produce").members(receipt.id);
        } else {
            return res.status(406).json("已有收據。");
        }

        var application = await Application.findOne({id: application.id}).populate('produce').populate('course').populate('applicationOwner');

        return res.view('admin/applyHandle/receipt/', {layout: false, application: application});
    },

    json: async function (req, res) {
        var receipt = await Receipt.find().populate("GenBy");
        return res.json(receipt);
    },
    delete: async function (req, res) {
        var receipt = await Receipt.findOne({id: req.params.id}).populate('GenBy');
        var a = await Receipt.destroyOne({id: req.params.id});
        await Receipt.removeFromCollection(receipt.id, "GenBy").members(receipt.GenBy[0].id);
        if(a)
            return res.redirect('/admin/course/'+ receipt.GenBy[0].course +'/applicant');
        else
            return res.status(500);
    },

    showAll: async function(req, res) {
        var receipt = await Receipt.find().populate('GenBy');
        if(receipt.length == 0) {
            return res.status(404).json("找不到收據。");
        }
        var course = [];
        var user = [];

        for (var i = 0; i < receipt.length; i++ ){
            course[i] = await Course.findOne({id: receipt[i].GenBy[0].course});
            user[i] = await User.findOne({id: receipt[i].GenBy[0].applicationOwner});
        }

        var r = new Array(receipt.length);
        for (var i = 0; i < r.length; i++) {
            r[i] = new Array(4);
        }

        for (var i = 0; i < r.length; i++) {
            r[i][0] = course[i].courseID;
            r[i][1] = user[i].ChiName;
            r[i][2] = "HK$ " + receipt[i].amount;
            r[i][3] = receipt[i].id;
        }
        var newtable = new Array(r + 1);
        newtable[0] = ["課程編號", "付款人", "費用", "收據號碼"];
    
        for (var j = 1; j < r.length+1; j++)
            newtable[j] = r[j-1];

        var XLSX = require('xlsx');
        var wb = XLSX.utils.book_new();
        var dataSheet = XLSX.utils.json_to_sheet(newtable, {skipHeader: true,});

        XLSX.utils.book_append_sheet(wb, dataSheet, "Receipts");
    
        res.set("Content-disposition", "attachment; filename=AllReceipts.xlsx");
        return res.end(XLSX.write(wb, { type: "buffer", bookType: "xlsx" }));

    },
};

