/**
 * AcroageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    //(preview)
    acroage: async function (req, res) {

        if (req.method == 'GET') { return res.view('competition/form/acroage'); }

        req.session.data = req.body.Acroage;

        return res.view('pages/competition/form/acroage_preview', { 'data': req.session.data || {} });
    },


    //action - create
    acroage_preview: async function (req, res) {

        if (req.method == 'POST') {
            //create Acroage
            req.session.data.payStatus = "unpaid";
            req.session.data.formStatus = "ToBeCon";
            req.session.data.teamStatus = "suTeam";
            var condition = {};
            condition.compYear = req.session.data.compYear;

            //Set idCode to Acroage
            var modelNum = await Acroage.count({
                where: condition
            })
            var newID = modelNum + 1;
            var newIDCode = "AGO" + req.session.data.compYear + "-" + newID;
            req.session.data.idCode = newIDCode;

            //create Acroage
            await Acroage.create(req.session.data);

            //clear all session data
            req.session.data = null;
            req.session.Acrodata = null;
            var user = await User.update(req.session.userId).set({
                Acrodata: null
            }).fetch();
            if (user.length == 0) return res.notFound();

            return res.view('pages/competition/form/confirm_form', { 'formIDCode': newIDCode, 'form': "acroage" });
        }
    },


    save: async function (req, res) {

        if (req.method == "GET") return res.forbidden();

        req.session.Acrodata = req.body;

        var user = await User.update(req.session.userId).set({
            Acrodata: req.body
        }).fetch();

        if (user.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "???????????? Sucessfully save.", url: '/competition/form/acroage' });    // for ajax request
        } else {
            return res.redirect('/competition/form/acroage');           // for normal request
        }
    },

    //**************************admin/HandleApply*************************
    //update form
    update: async function (req, res) {
        if (req.method == "GET") {
            var model = await Acroage.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('admin/applyHandle/AcroageEdit', { acroage: model });

        } else {
            if (!req.body.Acroage)
                return res.badRequest("Form-data not received.");

            if (req.body.Acroage.item != "???????????? Women's trio") {
                req.body.Acroage.havecname3 = "";
                req.body.Acroage.cpChiName3 = "";
                req.body.Acroage.cpEngName3 = "";
                req.body.Acroage.gender3 = "";
                req.body.Acroage.birthday3 = "";
                req.body.Acroage.idNo3 = "";
                req.body.Acroage.contactNo3 = "";
                req.body.Acroage.email3 = "";
                req.body.Acroage.address3 = "";
                req.body.Acroage.photo2 = "";
                req.body.Acroage.imgIDCard2 = "";
                req.body.Acroage.declaration2 = "";
                req.body.Acroage.parentName3 = "";
            }

            var models = await Acroage.update(req.params.id).set({
                compYear: req.body.Acroage.compYear,
                category: req.body.Acroage.category,
                item: req.body.Acroage.item,
                //Applicant 1
                havecname1: req.body.Acroage.havecname1,
                cpChiName1: req.body.Acroage.cpChiName1,
                cpEngName1: req.body.Acroage.cpEngName1,
                gender1: req.body.Acroage.gender1,
                birthday1: req.body.Acroage.birthday1,
                idNo1: req.body.Acroage.idNo1,
                contactNo1: req.body.Acroage.contactNo1,
                email1: req.body.Acroage.email1,
                address1: req.body.Acroage.address1,
                photo0: req.body.Acroage.photo0,
                imgIDCard0: req.body.Acroage.imgIDCard0,
                declaration0: req.body.Acroage.declaration0,
                //Applicant 2
                havecname2: req.body.Acroage.havecname2,
                cpChiName2: req.body.Acroage.cpChiName2,
                cpEngName2: req.body.Acroage.cpEngName2,
                gender2: req.body.Acroage.gender2,
                birthday2: req.body.Acroage.birthday2,
                idNo2: req.body.Acroage.idNo2,
                contactNo2: req.body.Acroage.contactNo2,
                email2: req.body.Acroage.email2,
                address2: req.body.Acroage.address2,
                photo1: req.body.Acroage.photo1,
                imgIDCard1: req.body.Acroage.imgIDCard1,
                declaration1: req.body.Acroage.declaration1,
                //Applicant 3
                havecname3: req.body.Acroage.havecname3,
                cpChiName3: req.body.Acroage.cpChiName3,
                cpEngName3: req.body.Acroage.cpEngName3,
                gender3: req.body.Acroage.gender3,
                birthday3: req.body.Acroage.birthday3,
                idNo3: req.body.Acroage.idNo3,
                contactNo3: req.body.Acroage.contactNo3,
                email3: req.body.Acroage.email3,
                address3: req.body.Acroage.address3,
                photo2: req.body.Acroage.photo2,
                imgIDCard2: req.body.Acroage.imgIDCard2,
                declaration2: req.body.Acroage.declaration2,
                //coach
                coachName: req.body.Acroage.coachName,
                cContactNo: req.body.Acroage.cContactNo,
                organName: req.body.Acroage.organName,
                receiptHeader: req.body.Acroage.receiptHeader,
                receiptName: req.body.Acroage.receiptName,
                //declaration
                parentName1: req.body.Acroage.parentName1,
                parentName2: req.body.Acroage.parentName2,
                parentName3: req.body.Acroage.parentName3,

                payStatus: req.body.Acroage.payStatus,
                formStatus: req.body.Acroage.formStatus,
                teamStatus: req.body.Acroage.teamStatus,
            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.redirect('/admin/applyHandle/acroSearch');
        }
    },

    reject: async function (req, res) {
        if (req.method == "GET") return res.forbidden();

        var models = await Acroage.update(req.params.id).set({ formStatus: "rejected" }).fetch();

        if (models.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "?????????????????? Application has been rejected.", url: '/admin/applyHandle/acroSearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/acroSearch');           // for normal request
        }

    },

    // action - confirm all
    confirmAll: async function (req, res) {

        if (req.method == "GET") return res.forbidden();

        var condition = {};
        if (req.session.acroSearchResult == "") {
            var models = await Acroage.find();

        } else {
            if (req.session.acroSearchResult.compYear) condition.compYear = req.session.acroSearchResult.compYear;
            if (req.session.acroSearchResult.item) condition.item = req.session.acroSearchResult.item;
            if (req.session.acroSearchResult.category) condition.category = req.session.acroSearchResult.category;
            if (req.session.acroSearchResult.payStatus) condition.payStatus = req.session.acroSearchResult.payStatus;
            if (req.session.acroSearchResult.formStatus) condition.formStatus = req.session.acroSearchResult.formStatus;
            if (req.session.acroSearchResult.teamStatus) condition.teamStatus = req.session.acroSearchResult.teamStatus;

            var models = await Acroage.find({
                where: condition
            });
        }


        if (models.length == 0) return res.notFound();

        models.forEach(async function (model) {
            if (model.formStatus == "ToBeCon" || model.formStatus == "dataDef") {
                await Acroage.update(model.id).set({ formStatus: "accepted" })
            }
        });

        if (req.wantsJSON) {
            return res.json({ message: "???????????????????????? Sucessfully confirm all applications.", url: '/admin/applyHandle/acroSearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/acroSearch');           // for normal request
        }
    },

    // action - confirm form
    confirm: async function (req, res) {
        if (req.method == "GET") return res.forbidden();

        var models = await Acroage.update(req.params.id).set({ formStatus: "accepted" }).fetch();

        if (models.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "?????????????????? Application has been accepted.", url: '/admin/applyHandle/acroSearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/acroSearch');           // for normal request
        }
    },

    dataDef: async function (req, res) {
        if (req.method == "GET") return res.forbidden();

        var models = await Acroage.update(req.params.id).set({ formStatus: "dataDef" }).fetch();

        if (models.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "?????????????????? Data Deficiency.", url: '/admin/applyHandle/acroSearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/acroSearch');           // for normal request
        }

    },

    waitingList: async function (req, res) {
        if (req.method == "GET") return res.forbidden();

        var models = await Acroage.update(req.params.id).set({ teamStatus: "waitTeam" }).fetch();

        if (models.length == 0) return res.notFound();

        if (req.wantsJSON) {
            return res.json({ message: "????????????/????????????????????? Applied Team/Group has been set on waiting list.", url: '/admin/applyHandle/acroSearch' });    // for ajax request
        } else {
            return res.redirect('/admin/applyHandle/acroSearch');           // for normal request
        }

    },

    //action - import excel
    import_xlsx: async function (req, res) {

        if (req.method == "GET") return res.forbidden();

        req.file('file').upload({ maxBytes: 10000000 }, async function whenDone(err, uploadedFiles) {
            if (err) { return res.serverError(err); }
            if (uploadedFiles.length === 0) { return res.badRequest('No file was uploaded'); }

            var XLSX = require('xlsx');
            var workbook = XLSX.readFile(uploadedFiles[0].fd);
            var ws = workbook.Sheets[workbook.SheetNames[0]];
            var data = XLSX.utils.sheet_to_json(ws, { range: 1, header: ["idCode", "compYear", "category", "item", "havecname1", "cpChiName1", "cpEngName1", "gender1", "birthday1", "idNo1", "contactNo1", "email1", "address1", "havecname2", "cpChiName2", "cpEngName2", "gender2", "birthday2", "idNo2", "contactNo2", "email2", "address2", "havecname3", "cpChiName3", "cpEngName3", "gender3", "birthday3", "idNo3", "contactNo3", "email3", "address3", "coachName", "cContactNo", "organName", "receiptHeader", "receiptName", "parentName1", "parentName2", "parentName3", "payStatus", "formStatus", "teamStatus"] });

            for (var i = 0; i < data.length; i++) {
                var date1 = data[i].birthday1.split('/');
                day1 = date1[2] + "-" + date1[1] + "-" + date1[0];
                data[i].birthday1 = day1;

                var date2 = data[i].birthday2.split('/');
                day2 = date2[2] + "-" + date2[1] + "-" + date2[0];
                data[i].birthday2 = day2;

                if (data[i].birthday3 != null) {
                    var date3 = data[i].birthday3.split('/');
                    day3 = date3[2] + "-" + date3[1] + "-" + date3[0];
                    data[i].birthday3 = day3;
                }

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

            } console.log(data);

            var models = await Acroage.createEach(data).fetch();
            if (models.length == 0) {
                return res.badRequest("No data imported.");
            }
            return res.redirect('/admin/applyHandle/acroSearch');
        });
    },

    export_xlsx: async function (req, res) {
        var condition = {};
        if (req.session.acroSearchResult == "") {
            var models = await Acroage.find();

        } else {
            if (req.session.acroSearchResult.compYear) condition.compYear = req.session.acroSearchResult.compYear;
            if (req.session.acroSearchResult.item) condition.item = req.session.acroSearchResult.item;
            if (req.session.acroSearchResult.category) condition.category = req.session.acroSearchResult.category;
            if (req.session.acroSearchResult.payStatus) condition.payStatus = req.session.acroSearchResult.payStatus;
            if (req.session.acroSearchResult.formStatus) condition.formStatus = req.session.acroSearchResult.formStatus;
            if (req.session.acroSearchResult.teamStatus) condition.teamStatus = req.session.acroSearchResult.teamStatus;

            var models = await Acroage.find({
                where: condition
            });
        }

        var XLSX = require('xlsx');
        var wb = XLSX.utils.book_new();
        var payStatus, formStatus, teamStatus;
        var ws = XLSX.utils.json_to_sheet(models.map(model => {

            var day1 = model.birthday1.split('-');
            var date1 = day1[2] + "/" + day1[1] + "/" + day1[0];
            var day2 = model.birthday2.split('-');
            var date2 = day2[2] + "/" + day2[1] + "/" + day2[0];
            if (model.item == "???????????? Women's trio") {
                var day3 = model.birthday3.split('-');
                var date3 = day3[2] + "/" + day3[1] + "/" + day3[0];
            } else {
                var date3 = "";
            }


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
                "??????/?????? Category/Age": model.category,
                "?????? Item": model.item,
                "?????????(1)????????????????????? Applicant(1) Any Chinese name": model.havecname1,
                "?????????(1)???????????? Applicant(1) Name in Chinese": model.cpChiName1,
                "?????????(1)???????????? Applicant(1) Name in English": model.cpEngName1,
                "?????????(1)?????? Applicant(1) Gender": model.gender1,
                "?????????(1)????????????  Applicant(1) Date of Birth": date1,
                "?????????(1)???????????????  Applicant(1) ID Card Number": model.idNo1,
                "?????????(1)???????????? Applicant(1) Contact No.": model.contactNo1,
                "?????????(1)?????? Applicant(1) Email Address": model.email1,
                "?????????(1)???????????? Applicant(1) Contact Address": model.address1,
                "?????????(2)????????????????????? Applicant(2) Any Chinese name": model.havecname2,
                "?????????(2)???????????? Applicant(2) Name in Chinese": model.cpChiName2,
                "?????????(2)???????????? Applicant(2) Name in English": model.cpEngName2,
                "?????????(2)?????? Applicant(2) Gender": model.gender2,
                "?????????(2)????????????  Applicant(2) Date of Birth": date2,
                "?????????(2)???????????????  Applicant(2) ID Card Number": model.idNo2,
                "?????????(2)???????????? Applicant(2) Contact No.": model.contactNo2,
                "?????????(2)?????? Applicant(2) Email Address": model.email2,
                "?????????(2)???????????? Applicant(2) Contact Address": model.address2,
                "?????????(3)????????????????????? Applicant(3) Any Chinese name": model.havecname3,
                "?????????(3)???????????? Applicant(3) Name in Chinese": model.cpChiName3,
                "?????????(3)???????????? Applicant(3) Name in English": model.cpEngName3,
                "?????????(3)?????? Applicant(3) Gender": model.gender3,
                "?????????(3)????????????  Applicant(3) Date of Birth": date3,
                "?????????(3)???????????????  Applicant(3) ID Card Number": model.idNo3,
                "?????????(3)???????????? Applicant(3) Contact No.": model.contactNo3,
                "?????????(3)?????? Applicant(3) Email Address": model.email3,
                "?????????(3)???????????? Applicant(3) Contact Address": model.address3,
                "???????????? Coach Name": model.coachName,
                "?????????????????? Coach Contact Number": model.cContactNo,
                "??????/????????????(?????????) School/Organization Name(If applicable)": model.organName,
                "???????????? Receipt header": model.receiptHeader,
                "??????/???????????? School/Institution Name": model.receiptName,
                "?????????(1)???????????? Applicant(1)'s Parent Name": model.parentName1,
                "?????????(2)???????????? Applicant(2)'s Parent Name": model.parentName2,
                "?????????(3)???????????? Applicant(3)'s Parent Name": model.parentName3,
                "???????????? Payment Status": payStatus,
                "???????????? Apply Status": formStatus,
                "??????/???????????? Team Status": teamStatus,
                "???????????? Apply Date": applyDate,
                "???????????? Last upadated": updateDate,
            }
        }));
        XLSX.utils.book_append_sheet(wb, ws, "acroage");
        res.set("Content-disposition", "attachment; filename=acroage.xlsx");
        return res.end(XLSX.write(wb, { type: "buffer", bookType: "xlsx" }));
    },


};