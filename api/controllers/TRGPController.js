/**
 * TRGPController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    //(preview)
    TRGPForm: async function (req, res) {

        if (req.method == 'GET') { return res.view('competition/form/TRGPForm'); }

        req.session.data = req.body.TRGP;

        return res.view('pages/competition/form/TRGPFormPreview', { 'data': req.session.data || {} });
    },

    //(create)
    //action - create 
    TRGPFormPreview: async function (req, res) {
        if (req.method == "POST") {
            req.session.data.payStatus = "unpaid";
            req.session.data.formStatus = "ToBeCon";
            req.session.data.teamStatus = "suTeam";
            var condition = {};
            condition.compYear = req.session.data.compYear;

            //Set idCode to TRGP
            var modelNum = await TRGP.count({
                where: condition
            })
            var newID = modelNum + 1;
            var newIDCode = "TRGP" + req.session.data.compYear + "-" + newID;
            req.session.data.idCode = newIDCode;

            //create TRGP
            await TRGP.create(req.session.data);

            //clear all session data
            req.session.data = null;
            req.session.TRGPdata = null;
            var user = await User.update(req.session.userId).set({
                TRGPdata: null
            }).fetch();
            if (user.length == 0) return res.notFound();

            return res.view('pages/competition/form/confirm_form', {'formIDCode': newIDCode, 'form': "TRGP"});
        }

    },

    save: async function (req, res) {

        if (req.method == "GET") return res.forbidden();

        req.session.TRGPdata = req.body;
        req.session.data = null;

        var user = await User.update(req.session.userId).set({
            TRGPdata: req.body
        }).fetch();

        if (user.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "???????????? Sucessfully save.", url: '/competition/form/TRGPForm' });    // for ajax request
        } else {
            return res.redirect('/competition/form/TRGPForm');           // for normal request
        }
    },

    //**************************admin/HandleApply*************************
    //update form
    update: async function (req, res) {
        if (req.method == "GET") {
            var model = await TRGP.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('admin/applyHandle/TRGPEdit', { TRGP: model });

        } else {
            if (!req.body.TRGP)
                return res.badRequest("Form-data not received.");

            var models = await TRGP.update(req.params.id).set({
                compYear: req.body.TRGP.compYear,
                teamName: req.body.TRGP.teamName,
                Phone: req.body.TRGP.Phone,
                Email: req.body.TRGP.Email,
                CoachName: req.body.TRGP.CoachName,
                CoachPhone: req.body.TRGP.CoachPhone,
                category: req.body.TRGP.category,
                havecname1: req.body.TRGP.havecname1,
                Mate1ChiName: req.body.TRGP.Mate1ChiName,
                Mate1EngName: req.body.TRGP.Mate1EngName,
                Mate1IDNo: req.body.TRGP.Mate1IDNo,
                Mate1Date: req.body.TRGP.Mate1Date,
                havecname2: req.body.TRGP.havecname2,
                Mate2ChiName: req.body.TRGP.Mate2ChiName,
                Mate2EngName: req.body.TRGP.Mate2EngName,
                Mate2IDNo: req.body.TRGP.Mate2IDNo,
                Mate2Date: req.body.TRGP.Mate2Date,
                havecname3: req.body.TRGP.havecname3,
                Mate3ChiName: req.body.TRGP.Mate3ChiName,
                Mate3EngName: req.body.TRGP.Mate3EngName,
                Mate3IDNo: req.body.TRGP.Mate3IDNo,
                Mate3Date: req.body.TRGP.Mate3Date,
                havecname4: req.body.TRGP.havecname4,
                Mate4ChiName: req.body.TRGP.Mate4ChiName,
                Mate4EngName: req.body.TRGP.Mate4EngName,
                Mate4IDNo: req.body.TRGP.Mate4IDNo,
                Mate4Date: req.body.TRGP.Mate4Date,
                TeamNumber: req.body.TRGP.TeamNumber,
                TeamPrice: req.body.TRGP.TeamPrice,
                TeamTotalPrice: req.body.TRGP.TeamTotalPrice,
                leaderName: req.body.TRGP.leaderName,
                leaderPosition: req.body.TRGP.leaderPosition,
                Declaration: req.body.TRGP.Declaration,
                VBRC: req.body.TRGP.VBRC,
                payStatus: req.body.TRGP.payStatus,
                formStatus: req.body.TRGP.formStatus,
                teamStatus: req.body.TRGP.teamStatus,
            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.redirect('/admin/applyHandle/HKRGASearch');
        }
    },



    confirmAll: async function (req, res) {

        if (req.method == "GET") return res.forbidden();

        var condition = {};
        if (req.session.searchResult.compYear) condition.compYear = req.session.searchResult.compYear;
        if (req.session.searchResult.category) condition.category = req.session.searchResult.category;
        if (req.session.searchResult.payStatus) condition.payStatus = req.session.searchResult.payStatus;
        if (req.session.searchResult.formStatus) condition.formStatus = req.session.searchResult.formStatus;
        if (req.session.searchResult.teamStatus) condition.teamStatus = req.session.searchResult.teamStatus;

        var models = await TRGP.find({
            where: condition
        });

        if (models.length == 0) return res.notFound();

        models.forEach(async function (model) {
            if (model.formStatus == "ToBeCon" || model.formStatus == "dataDef") {
                await TRGP.update(model.id).set({ formStatus: "accepted" })
            }
        });

        if (req.wantsJSON) {
            return res.json({ message: "???????????????????????? Sucessfully confirm all applications.", url: '/admin/applyHandle/HKRGASearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/HKRGASearch');           // for normal request
        }
    },

    // action - confirm form
    confirm: async function (req, res) {
        if (req.method == "GET") return res.forbidden();

        var models = await TRGP.update(req.params.id).set({ formStatus: "accepted" }).fetch();

        if (models.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "?????????????????? Application has been accepted.", url: '/admin/applyHandle/HKRGASearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/HKRGASearch');           // for normal request
        }
    },

    reject: async function (req, res) {
        if (req.method == "GET") return res.forbidden();

        var models = await TRGP.update(req.params.id).set({ formStatus: "rejected" }).fetch();

        if (models.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "?????????????????? Application has been rejected.", url: '/admin/applyHandle/HKRGASearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/HKRGASearch');           // for normal request
        }

    },

    dataDef: async function (req, res) {
        if (req.method == "GET") return res.forbidden();

        var models = await TRGP.update(req.params.id).set({ formStatus: "dataDef" }).fetch();

        if (models.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "?????????????????? Data Deficiency.", url: '/admin/applyHandle/HKRGASearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/HKRGASearch');           // for normal request
        }

    },

    waitingList: async function (req, res) {
        if (req.method == "GET") return res.forbidden();

        var models = await TRGP.update(req.params.id).set({ teamStatus: "waitTeam" }).fetch();

        if (models.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "????????????/????????????????????? Applied Team/Group has been set on waiting list.", url: '/admin/applyHandle/HKRGASearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/HKRGASearch');           // for normal request
        }

    },

    export_xlsx: async function (req, res) {
        var condition = {};
        if (req.session.searchResult.compYear) condition.compYear = req.session.searchResult.compYear;
        if (req.session.searchResult.category) condition.category = req.session.searchResult.category;
        if (req.session.searchResult.payStatus) condition.payStatus = req.session.searchResult.payStatus;
        if (req.session.searchResult.formStatus) condition.formStatus = req.session.searchResult.formStatus;
        if (req.session.searchResult.teamStatus) condition.teamStatus = req.session.searchResult.teamStatus;

        var models = await TRGP.find({
            where: condition
        });

        var XLSX = require('xlsx');
        var wb = XLSX.utils.book_new();
        var payStatus, formStatus, teamStatus;
        var ws = XLSX.utils.json_to_sheet(models.map(model => {

            var day1 = model.Mate1Date.split('-');
            var date1 = day1[2] + "/" + day1[1] + "/" + day1[0];
            var day2 = model.Mate2Date.split('-');
            var date2 = day2[2] + "/" + day2[1] + "/" + day2[0];
            var day3 = model.Mate3Date.split('-');
            var date3 = day3[2] + "/" + day3[1] + "/" + day3[0];
            var day4 = model.Mate4Date.split('-');
            var date4 = day4[2] + "/" + day4[1] + "/" + day4[0];

            var n = new Date(model.createdAt);
            var cmonth = n.getMonth() + 1;
            var applyDate = n.getDate() + "/" + cmonth + "/" + n.getFullYear();

            var m = new Date(model.updatedAt);
            var umonth = m.getMonth() + 1;
            var updateDate = m.getDate() + "/" + umonth + "/" + m.getFullYear() + " " + m.getHours() + ":" + m.getMinutes() + ":" + m.getSeconds();

            if (model.payStatus == "paid") {
                payStatus = "????????? Paid";
            } else {
                payStatus = "????????? Unpaid";
            }

            if (model.formStatus == "ToBeCon") {
                formStatus = "????????? To be handled";
            } else if (model.formStatus == "accepted") {
                formStatus = "????????? Accepted";
            } else if (model.formStatus == "rejected") {
                formStatus = "????????? Rejected";
            } else if (model.formStatus == "dataDef") {
                formStatus = "???????????? Data Deficiency";
            }

            if (model.teamStatus == "suTeam") {
                teamStatus = "?????? Successful Team";
            } else {
                teamStatus = "?????? Team on Waitiing List";
            }

            return {
                "??????????????? Application Number": model.idCode,
                "???????????? Year of Competition": model.compYear,
                "????????????(??????) Organization Name(Chinese)": model.teamName,
                "???????????? Contact Number": model.Phone,
                "???????????? Email Address": model.Email,
                "???????????? Coach Name": model.CoachName,
                "?????????????????? Coach Contact Number": model.CoachPhone,
                "???????????? Category": model.category,
                "?????????(1)????????????????????? Applicant(1) Any Chinese name": model.havecname1,
                "?????????(1)???????????? Applicant(1) Name in Chinese": model.Mate1ChiName,
                "?????????(1)???????????? Applicant(1) Name in English": model.Mate1EngName,
                "?????????(1)???????????????  Applicant(1) ID Card Number": model.Mate1IDNo,
                "?????????(1)????????????  Applicant(1) Date of Birth": date1,
                "?????????(2)????????????????????? Applicant(2) Any Chinese name": model.havecname2,
                "?????????(2)???????????? Applicant(2) Name in Chinese": model.Mate2ChiName,
                "?????????(2)???????????? Applicant(2) Name in English": model.Mate2EngName,
                "?????????(2)???????????????  Applicant(2) ID Card Number": model.Mate2IDNo,
                "?????????(2)????????????  Applicant(2) Date of Birth": date2,
                "?????????(3)????????????????????? Applicant(3) Any Chinese name": model.havecname3,
                "?????????(3)???????????? Applicant(3) Name in Chinese": model.Mate3ChiName,
                "?????????(3)???????????? Applicant(3) Name in English": model.Mate3EngName,
                "?????????(3)???????????????  Applicant(3) ID Card Number": model.Mate3IDNo,
                "?????????(3)????????????  Applicant(3) Date of Birth": date3,
                "?????????(4)????????????????????? Applicant(4) Any Chinese name": model.havecname4,
                "?????????(4)???????????? Applicant(4) Name in Chinese": model.Mate4ChiName,
                "?????????(4)???????????? Applicant(4) Name in English": model.Mate4EngName,
                "?????????(4)???????????????  Applicant(4) ID Card Number": model.Mate4IDNo,
                "?????????(4)????????????  Applicant(4) Date of Birth": date4,
                "????????????(???) Group Event(team(s)) ": model.TeamNumber,
                "??????(hk$)": model.TeamPrice,
                "?????? Total price($)": model.TeamTotalPrice,
                "????????????????????? Leader's Name": model.leaderName,
                "????????????????????? Leader's Position": model.leaderPosition,
                "???????????? Payment Status": payStatus,
                "???????????? Apply Status": formStatus,
                "??????/???????????? Team Status": teamStatus,
                "???????????? Apply Date": applyDate,
                "???????????? Last upadated": updateDate,
            }
        }));
        XLSX.utils.book_append_sheet(wb, ws, "TRGP");
        res.set("Content-disposition", "attachment; filename=TRGP.xlsx");
        return res.end(XLSX.write(wb, { type: "buffer", bookType: "xlsx" }));
    },

    import_xlsx: async function (req, res) {

        if (req.method == "GET") return res.forbidden();

        req.file('file').upload({ maxBytes: 10000000 }, async function whenDone(err, uploadedFiles) {
            if (err) { return res.serverError(err); }
            if (uploadedFiles.length === 0) { return res.badRequest('No file was uploaded'); }

            var XLSX = require('xlsx');
            var workbook = XLSX.readFile(uploadedFiles[0].fd);
            var ws = workbook.Sheets[workbook.SheetNames[0]];
            var data = XLSX.utils.sheet_to_json(ws, { range: 1, header: ["idCode", "compYear", "teamName", "Phone", "Email", "CoachName", "CoachPhone", "category", "havecname1", "Mate1ChiName", "Mate1EngName", "Mate1IDNo", "Mate1Date", "havecname2", "Mate2ChiName", "Mate2EngName", "Mate2IDNo", "Mate2Date", "havecname3", "Mate3ChiName", "Mate3EngName", "Mate3IDNo", "Mate3Date", "havecname4", "Mate4ChiName", "Mate4EngName", "Mate4IDNo", "Mate4Date", "TeamNumber", "TeamPrice", "TeamTotalPrice", "leaderName", "leaderPosition", "payStatus", "formStatus", "teamStatus"] });

            for (var i = 0; i < data.length; i++) {
                if (data[i].payStatus == "????????? Unpaid") {
                    data[i].payStatus = "unpaid";
                } else if (data[i].payStatus == "????????? Paid") {
                    data[i].payStatus = "paid";
                }

                if (data[i].formStatus == "????????? To be handled") {
                    data[i].formStatus = "ToBeCon";
                } else if (data[i].formStatus == "????????? Accepted") {
                    data[i].formStatus = "accepted";
                } else if (data[i].formStatus == "????????? Rejected") {
                    data[i].formStatus = "rejected";
                } else if (data[i].formStatus == "???????????? Data Deficiency") {
                    data[i].formStatus = "dataDef";
                }

                if (data[i].teamStatus == "?????? Successful Team") {
                    data[i].teamStatus = "suTeam";
                } else if (data[i].teamStatus == "?????? Team on Waitiing List") {
                    data[i].teamStatus = "waitTeam";
                }

                var day1 = data[i].Mate1Date.split('/');
                var date1 = day1[2] + "-" + day1[1] + "-" + day1[0];
                data[i].Mate1Date = date1;
                var day2 = data[i].Mate2Date.split('/');
                var date2 = day2[2] + "-" + day2[1] + "-" + day2[0];
                data[i].Mate2Date = date2;
                var day3 = data[i].Mate3Date.split('/');
                var date3 = day3[2] + "-" + day3[1] + "-" + day3[0];
                data[i].Mate3Date = date3;
                var day4 = data[i].Mate4Date.split('/');
                var date4 = day4[2] + "-" + day4[1] + "-" + day4[0];
                data[i].Mate4Date = date4;
            }

            console.log(data);


            var models = await TRGP.createEach(data).fetch();
            if (models.length == 0) {
                return res.badRequest("No data imported.");
            }
            return res.redirect('/admin/applyHandle/HKRGASearch');
        });

    },




};

