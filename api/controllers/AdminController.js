/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Application = require('../models/Application');

module.exports = {
  index: async function (req, res) {
    return res.view('admin/index');
  },

  news_list: async function (req, res) {
    var models = await News.find({ sort: 'category' });
    return res.view('admin/news/index', { news: models });
  },

  news_create: async function (req, res) {

    if (req.method === 'GET') {
      return res.view('admin/news/detail', { news: {} });
    }

    if (!req.body.News) return res.badRequest();

    req.body.News.startDate = new Date(req.body.News.startDate);
    req.body.News.endDate = new Date(req.body.News.endDate);

    return res.json(await News.create(req.body.News).fetch())
  },

  news_detail: async function (req, res) {
    //    var models = await News.find({sort:'create_at DESC'});

    var id = req.params.id || '';

    if (req.method === 'GET') {
      return res.view('admin/news/detail', { news: await News.findOne(id) });
    }

    if (!req.body.News) return res.badRequest();

    req.body.News.startDate = new Date(req.body.News.startDate);
    req.body.News.endDate = new Date(req.body.News.endDate);

    return res.json(await News.update(id).set(req.body.News).fetch());
  },

  news_delete: async function (req, res) {
    return res.json(await News.destroy(req.params.id).fetch());
  },

  email_list: async function (req, res) {
    return res.view('admin/email/index', { emails: await Email.find() });
  },

  email_detail: async function (req, res) {
    return res.json(await Email.update(req.params.id).set(req.body.Email).fetch());
  },

  user_list: async function (req, res) {
    return res.view('admin/user/index', { news: await User.find({ sort: 'create_at DESC' }) });
  },

  user_detail: async function (req, res) {

  },

  //applyHandle
  /*apply_search: async function (req, res) {
    req.session.searchResult = {};
    var condition = {};
    var form = req.query.application;
    var projectYear = req.query.year;

    if (req.query.application == "TRGP") {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;

      var models = await TRGP.find({
        where: condition
      });
    } else if (req.query.application == "TRGS") {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;

      var models = await TRGS.find({
        where: condition
      });

    } else if (req.query.application == "GRGS") {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;

      var models = await GRGS.find({
        where: condition
      });
    } else if (req.query.application == "GRGP") {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;

      var models = await GRGP.find({
        where: condition
      });
    } else if (req.query.application == "trampoline") {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.gender) condition.gender = req.query.gender;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;

      var models = await Trampoline.find({
        where: condition
      });
    } else if (req.query.application == "gfa") {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;

      var models = await GFA.find({
        where: condition
      });
    } else if (req.query.application == "acroage") {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.item) condition.item = req.query.item;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;

      var models = await Acroage.find({
        where: condition
      });

    } else if (req.query.application == "clubMem") {
      if (req.query.year) condition.clubYear = req.query.year;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      var models = await ClubMember.find({
        where: condition
      });

    }
    req.session.searchResult = condition;
    return res.view('admin/applyHandle/search', { applications: models, form, projectYear });
  },*/

  acroSearch: async function (req, res) {
    req.session.acroSearchResult = {};
    var condition = {};
    var projectYear = req.query.year;

    if (!req.query.year && !req.query.item && !req.query.category && !req.query.payStatus && !req.query.formStatus && !req.query.teamStatus) {
      var models = await Acroage.find();

    } else {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.item) condition.item = req.query.item;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;
      var models = await Acroage.find({
        where: condition
      });
      req.session.acroSearchResult = condition;
    }

    return res.view('admin/applyHandle/acroSearch', { applications: models, projectYear });
  },

  gfaSearch: async function (req, res) {
    req.session.gfaSearchResult = {};
    var condition = {};
    var projectYear = req.query.year;

    if (!req.query.year && !req.query.category && !req.query.payStatus && !req.query.formStatus && !req.query.teamStatus) {
      var models = await GFA.find();

    } else {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;
      var models = await GFA.find({
        where: condition
      });
      req.session.gfaSearchResult = condition;
    }

    return res.view('admin/applyHandle/gfaSearch', { applications: models, projectYear });
  },

  trampolineSearch: async function (req, res) {
    req.session.tramSearchResult = {};
    var condition = {};
    var projectYear = req.query.year;

    if (!req.query.year && !req.query.gender && !req.query.category && !req.query.payStatus && !req.query.formStatus && !req.query.teamStatus) {
      var models = await Trampoline.find();

    } else {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.gender) condition.gender = req.query.gender;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;
      var models = await Trampoline.find({
        where: condition
      });
      req.session.tramSearchResult = condition;
    }

    return res.view('admin/applyHandle/trampolineSearch', { applications: models, projectYear });
  },

  clubMemberSearch: async function (req, res) {
    req.session.clubMemSearchResult = {};
    var condition = {};
    var projectYear = req.query.year;

    if (!req.query.year && !req.query.payStatus && !req.query.formStatus) {
      var models = await ClubMember.find();

    } else {
      if (req.query.year) condition.clubYear = req.query.year;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      var models = await ClubMember.find({
        where: condition
      });
      req.session.clubMemSearchResult = condition;
    }

    return res.view('admin/applyHandle/clubMemberSearch', { applications: models, projectYear });
  },

  HKRGASearch: async function (req, res) {
    req.session.hkrgaSearchResult = {};
    var condition = {};
    var form = req.query.application;
    var projectYear = req.query.year;

    if (!req.query.application && !req.query.year && !req.query.category && !req.query.payStatus && !req.query.formStatus && !req.query.teamStatus) {
      var trgpModels = await TRGP.find();
      var trgsModels = await TRGS.find();
      var grgpModels = await GRGP.find();
      var grgsModels = await GRGS.find();

    } else {
      if (req.query.year) condition.compYear = req.query.year;
      if (req.query.category) condition.category = req.query.category;
      if (req.query.payStatus) condition.payStatus = req.query.payStatus;
      if (req.query.formStatus) condition.formStatus = req.query.formStatus;
      if (req.query.teamStatus) condition.teamStatus = req.query.teamStatus;

      if (req.query.application) {
        if (req.query.application == "TRGP") {
          var trgpModels = await TRGP.find({
            where: condition
          });

        } else if (req.query.application == "TRGS") {
          var trgsModels = await TRGS.find({
            where: condition
          });
        } else if (req.query.application == "GRGP") {
          var grgpModels = await GRGP.find({
            where: condition
          });
        } else if (req.query.application == "GRGS") {
          var grgsModels = await GRGS.find({
            where: condition
          });
        }

      } else {
        var trgpModels = await TRGP.find({
          where: condition
        });
        var trgsModels = await TRGS.find({
          where: condition
        });
        var grgpModels = await GRGP.find({
          where: condition
        });
        var grgsModels = await GRGS.find({
          where: condition
        });
      }

      req.session.hkrgaSearchResult.form = req.query.application;
      req.session.hkrgaSearchResult = condition;
    }

    return res.view('admin/applyHandle/HKRGASearch', { trgpApp: trgpModels, trgsApp: trgsModels, grgpApp: grgpModels, grgsApp: grgsModels, form, projectYear });
  },

  // viewAllCourseInfo: async function (req, res) {

  //   var courses = await Course.find();

  //   return res.view('admin/courseManagement/courseInfo', { courses: courses });
  // },

  //action - search for courses in course management page
  allCourseSearch: async function (req, res) {

    var whereClause = {};
    if (req.query.category) whereClause.category = { contains: req.query.category };
    if (req.query.courseID) whereClause.courseID = { contains: req.query.courseID.toUpperCase() };
    if (req.query.year) {
      var phase = req.query.year.split(',');

      var thisP, nextP;
      if (phase[1] == '1') {
        thisP = phase[0].toString() + '-04-01';
        nextP = '' + new Date(thisP).getFullYear() + '-09-01';

      };
      if (phase[1] == '2') {
        thisP = phase[0].toString() + '-09-01';
        nextP = '' + (new Date(thisP).getFullYear() + 1) + '-04-01';

      }
      whereClause.startDate = { '>=': thisP, '<': nextP };

    };

    whereClause.status = { '!=': 3 };
    if (req.wantsJSON) {

      var limit = Math.max(req.query.limit, 20) || 20;
      var offset = Math.max(req.query.offset, 0) || 0;
      var thoseCourses = await Course.find({
        where: whereClause,
        limit: limit,
        skip: offset,
        sort: 'category'
      });
      var count = await Course.count({
        where: whereClause,
      });

      return res.json({ thoseCourses, count });

    } else {
      var thoseCourses = await Course.find({
        where: whereClause,
        limit: limit,
        skip: offset,
        sort: 'category'
      });

      var count = await Course.count({
        where: whereClause,
      });

      return res.view('admin/courseManagement/courseInfo', { courses: thoseCourses, numOfRecords: count });
    }

  },


  import_course_xlsx: async function (req, res) {

    if (req.method == 'GET')
      return res.view('course/import_xlsx');

    req.file('file').upload({ maxBytes: 10000000 }, async function whenDone(err, uploadedFiles) {
      if (err) { return res.serverError(err); }
      if (uploadedFiles.length === 0) { return res.badRequest('No file was uploaded'); }

      var XLSX = require('xlsx');
      var workbook = XLSX.readFile(uploadedFiles[0].fd);
      var ws = workbook.Sheets[workbook.SheetNames[0]];

      var data = XLSX.utils.sheet_to_json(ws, { raw: false, dateNF: 'yyyy-mm-dd' });


      for (i = 0; i < data.length; i++) {
        item = data[i];
        if (item['編號'] == null) {
          return res.badRequest('Please check whether you have input Course ID');
        } else if (item['全部上課日期'] == null ||item['開始日期']==null||item['項目']==null||item['教練帳號']==null){
          return res.badRequest('Please check whether you have input all required information for course: ' + item['編號']);
        }else{

        var course = await Course.findOne({ courseID: item['編號'] });
        var coach = await User.findOne({ Email: item['教練帳號'] });
        var alldates = item['全部上課日期'].trim().split(",");
        var appDDL = new Date(item['開始日期']);
        var appDDLday = alldates[2].trim().split('/');
        appDDL = appDDL.getFullYear() + "-" + ((appDDLday[1] < 9 ? '0' : '') + appDDLday[1]) + "-" + ((appDDLday[0] < 10 ? '0' : '') + appDDLday[0]);
        if (course) {

          return res.badRequest('Course ' + course.courseID + " already exists. Please check and reload this course together with courses after this course.");

        } else if (!coach) {

          return res.badRequest("Cannot find the coach " + item['教練帳號'] + " for course " + item['編號'] + " Please check and reload this course together with courses after this course.");
        } else {

          var course = await Course.create({
            courseID: item['編號'].toUpperCase(),
            category: item['項目'],
            level: item['Level']|| "",
            startDate: item['開始日期'],
            endDate: item['結束日期']|| "",
            weekday: item['星期'] || "",//type array, json 
            time: item['時間']|| "",
            appDeadline: appDDL || "",
            maxAge: item['年齡上限'] || "",
            minAge: item['年齡下限'] || "",
            stadium: item['體育館'],
            address: sails.getStatiumCoord(item['體育館'])[0].address || '',
            coord: sails.getStatiumCoord(item['體育館'])[0].coord || '',
            space: item['房間'] || "",
            quota: item['名額']|| "",
            fee: item['費用']|| "",
            detail: item['簡介'] || "",
            dates: item['全部上課日期'],
          }).fetch();

          await Course.addToCollection(course.id, "coach").members(coach.id);
        }
      }
    }

      if (data.length == 0) {
      return res.badRequest("No data imported.");
    } else {

      return res.redirect('/admin/course/list');
    }
  });

},

  export_course_xlsx: async function (req, res) {

    var whereClause = {};
    whereClause.status = { '!=': 3 };

    var models = await Course.find({
      where: whereClause,
    });
    for (var i = 0; i < models.length; i++) {
      models[i].coach = await Course.find(models[i].id).populate('coach');
      models[i].coach = models[i].coach[0].coach[0];
    };



    var XLSX = require('xlsx');
    var wb = XLSX.utils.book_new();

    var ws = XLSX.utils.json_to_sheet(models.map(model => {

      return {
        編號: model.courseID,
        項目: model.category,
        Level: model.level,
        年齡下限: model.minAge,
        年齡上限: model.maxAge,
        星期: model.weekday,
        時間: model.time,
        體育館: model.stadium,
        房間: model.space,
        地址: model.address,
        費用: model.fee,
        名額: model.quota,
        開始日期: model.startDate,
        結束日期: model.endDate,
        全部上課日期: model.dates,
        簡介: model.detail,
        教練姓名: model.coach.ChiName,
        教練帳號: model.coach.Email,

      }
    }));
    XLSX.utils.book_append_sheet(wb, ws, "Courses");
    res.set("Content-disposition", "attachment; filename=course.xlsx");
    return res.end(XLSX.write(wb, { type: "buffer", bookType: "xlsx" }));
  },


//show list of applicants apply for that course
applicationHandler: async function (req, res) {
  if (req.method == 'GET') {
    var applicationList = await Application.find({ course: req.params.id }).populate('course').populate('applicationOwner').populate('produce');
    for (var i = 0; i < applicationList.length; i++) {
      applicationList[i].createdAt = getDateTimeString(applicationList[i].createdAt);
      applicationList[i].updatedAt = getDateTimeString(applicationList[i].updatedAt);

    }
    var thatCourse = await Course.findOne(req.params.id);
    var numOfAdmitted = await Application.count({ course: req.params.id, status: [1, 4] });
    // console.log(applicationList);
    return res.view('admin/applyHandle/courseApplicantList', { applications: applicationList, course: thatCourse, appCount: numOfAdmitted });
  }

  var records = req.body;
  // console.log(typeof records);
  // console.log(records[0].status);
  var course = await Course.findOne(req.params.id);
  // console.log(course);

  for (var i = 0; i < records.length; i++) {
    var numOfAdmitted = await Application.count({ course: course.id, status: [1, 4] });
    if (records[i].status == 1) {
      // console.log("A: "+numOfAdmitted);
      if (numOfAdmitted >= course.quota) {
        // console.log("B: "+course.quota);
        var r = await Course.updateOne(req.params.id).set({ status: 1 });
        if (!r) { res.status(500); return res.json("Error updating Course Status"); }
        records[i].status = 3;
      }
    }
    else if (records[i].status == 2 || records[i].status == 3) {
      // console.log("A");
      if (numOfAdmitted >= course.quota) {
        var r = await Course.updateOne(req.params.id).set({ status: 0 });
        if (!r) { res.status(500); return res.json("Error updating Course Status"); }
      }
    }
    else if (records[i].status == 4) {
      var applicant = await Application.findOne(records[i].Aid);
      res.status(500);
      if (applicant.status != 1) { return res.json("未錄取該申請: " + records[i].Aid); }
    }


    var response = await Application.updateOne({ id: records[i].Aid }).set({ status: records[i].status });
    var updatedapplicant = await Application.findOne(records[i].Aid).populate('applicationOwner');

    var emailto = ["20209460@life.hkbu.edu.hk", "18253008@life.hkbu.edu.hk", "17214432@life.hkbu.edu.hk", "18251625@life.hkbu.edu.hk"];
    if (updatedapplicant.status == 1) {
      var email = await Email.findOne({ title: "課程申請已錄取" });
      sails.hooks['email-without-ejs'].send({
        to: updatedapplicant.applicationOwner.Email,
        subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
        html: email.emailcontent.replace('%coursefee%', `HK$${course.fee}`).replace('%coursename%', `${course.courseID} ${course.category}`).replace('%username%', `${updatedapplicant.applicationOwner.ChiName}`).replace('%username1%', `${updatedapplicant.applicationOwner.ChiName}`),
      }, function (err) { console.log(err || "課程申請已錄取 worked!") })

    } else if (updatedapplicant.status == 3) {
      var email = await Email.findOne({ title: "課程申請暫列入候補名單" });
      sails.hooks['email-without-ejs'].send({
        to: updatedapplicant.applicationOwner.Email,
        subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
        html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${updatedapplicant.applicationOwner.ChiName}`),
      }, function (err) { console.log(err || "課程申請暫列入候補名單 worked!") })

    } else if (updatedapplicant.status == 2) {
      var email = await Email.findOne({ title: "課程申請已拒絕" });
      sails.hooks['email-without-ejs'].send({
        to: updatedapplicant.applicationOwner.Email,
        subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
        html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${updatedapplicant.applicationOwner.ChiName}`),
      }, function (err) { console.log(err || "課程申請已拒絕 worked!") })

    } else if (updatedapplicant.status == 4) {
      await Course.addToCollection(req.params.id, 'participant').members(updatedapplicant.applicationOwner.id);

      var email = await Email.findOne({ title: "課程付款已收到" });
      sails.hooks['email-without-ejs'].send({
        to: updatedapplicant.applicationOwner.Email,
        subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
        html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${updatedapplicant.applicationOwner.ChiName}`),
      }, function (err) { console.log(err || "課程付款已收到 worked!") })

    }

    if (numOfAdmitted >= course.quota) {
      // console.log("B: "+course.quota);
      var r = await Course.updateOne(req.params.id).set({ status: 1 });
      if (!r) { res.status(500); return res.json("Error updating Course Status"); }
    }

    if (!response) {
      res.status(500);
      return res.json("Error updating Application " + records[i]);
    }
  }
  return res.ok();


},


// action - view grade information of all courses
listGrade: async function (req, res) {
  //search and paginate
  if (req.method === 'GET') {
    var whereClause = {};
    if (req.query.category) whereClause.category = { contains: req.query.category };
    if (req.query.courseID) whereClause.courseID = { contains: req.query.courseID.toUpperCase() };
    if (req.query.courseName) whereClause.name = { contains: req.query.courseName };
    if (req.query.phase) {
      phase = req.query.phase.split(",");

      var thisP, nextP;
      if (phase[1] == '1') {
        thisP = phase[0].toString() + '-04-01';
        nextP = '' + new Date(thisP).getFullYear() + '-09-01';

      };
      if (phase[1] == '2') {
        thisP = phase[0].toString() + '-09-01';
        nextP = '' + (new Date(thisP).getFullYear() + 1) + '-04-01';

      }
      whereClause.startDate = { '>=': thisP, '<': nextP };

    }
    whereClause.status = { '!=': 3 };
    if (req.wantsJSON) {

      var limit = Math.max(req.query.limit, 20) || 20;
      var offset = Math.max(req.query.offset, 0) || 0;
      var everyCourse = await Course.find({
        where: whereClause,
        limit: limit,
        skip: offset,
        sort: 'category'
      }).populate('participant').populate('coach');
      var count = await Course.count({
        where: whereClause,
      });



    } else {
      var everyCourse = await Course.find({
        where: whereClause,
        limit: limit,
        skip: offset,
        sort: 'category'
      }).populate('participant').populate('coach');

      var count = await Course.count({
        where: whereClause,
      });
    };

    var courseList = [];

    for (var i = 0; i < everyCourse.length; i++) {
      var results = await Results.find({ course: everyCourse[i].id }).populate('resultOwner');
      for (var y = 0; y < results.length; y++) {
        if (results[y].isVerified == 2) {
          if (everyCourse[i].verify != 2) {
            await Course.updateOne(everyCourse[i].id).set({ verify: 2 });
            break;
          }
        } else if (results[y].isVerified == 1) {
          if (everyCourse[i].verify != 1) {
            await Course.updateOne(everyCourse[i].id).set({ verify: 1 });
            break;
          }
        } else {
          if (everyCourse[i].verify != 0) {
            await Course.updateOne(everyCourse[i].id).set({ verify: 0 });
            break;
          }
        }
      }
      if (results.length > 0) {
        everyCourse[i].updatedAt = getDateTimeString(everyCourse[i].updatedAt);
        courseList.push(everyCourse[i]);
      }
    }
    if (req.wantsJSON) { return res.json({ courseList, count }); }
    return res.view('admin/courseManagement/gradeManagement', { courses: courseList });
  }

},

reviewGrade: async function (req, res) {
  var result = await Results.find({ course: req.params.id }).populate('resultOwner').populate('course');

  return res.view('admin/courseManagement/grade/', { results: result });
},

verified: async function (req, res) {
  await Results.update({ course: req.params.id }).set({ isVerified: 1 });
  var course = await Course.findOne({ id: req.params.id });

  var emailList = await Results.find({ course: req.params.id }).populate('resultOwner');
  //console.log(emailList);

  //var emailto = ["20209460@life.hkbu.edu.hk", "18253008@life.hkbu.edu.hk", "17214432@life.hkbu.edu.hk", "18251625@life.hkbu.edu.hk"];

  for (var i = 0; i < emailList.length; i++) {
    var email = await Email.findOne({ title: "考試成績通知" });
    sails.hooks['email-without-ejs'].send({
      to: emailList[i].resultOwner.Email,
      subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
      html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${emailList[i].resultOwner.ChiName}`)
    }, function (err) { console.log(err || "考試成績通知 worked!") })
  }

  return res.view('admin/courseManagement/gradeManagement');

},

reject: async function (req, res) {
  await Results.update({ course: req.params.id }).set({ isVerified: 2 });
  var course = await Course.findOne({ id: req.params.id }).populate('coach');

  //var emailto = ["20209460@life.hkbu.edu.hk", "18253008@life.hkbu.edu.hk", "17214432@life.hkbu.edu.hk", "18251625@life.hkbu.edu.hk"];

  var emailList = await User.findOne(course.coach[0].id);
  //console.log(emailList);

  var email = await Email.findOne({ title: "課程文件資料有誤" });
  sails.hooks['email-without-ejs'].send({
    to: emailList.Email,
    subject: email.emailtitle.replace('%name%', `${course.courseID} ${course.category}`),
    html: email.emailcontent.replace('%name%', `${course.courseID} ${course.category}`).replace('%username%', `${emailList.ChiName}`)
  }, function (err) { console.log(err || "課程文件資料有誤 worked!") })

  return res.view('admin/courseManagement/gradeManagement');

},

reviewMarkSheet: async function (req, res) {
  var course = await Course.findOne(req.params.id);
  if (!course.examResult)
    return res.notFound();
  return res.sendFile(course.examResult);
  // return res.view('admin/course/mark', {course: course});
},

reviewAttSheet: async function (req, res) {
  var course = await Course.findOne(req.params.id);
  if (!course.attendance)
    return res.notFound();
  return res.sendFile(course.attendance);
  // return res.view('admin/course/attendance', {course: course});
},

applyList: async function (req, res) {

  var whereClause = {};
  if (req.query.category) whereClause.category = { contains: req.query.category };
  if (req.query.courseID) whereClause.courseID = { contains: req.query.courseID.toUpperCase() };

  if (req.query.year) {
    var phase = req.query.year.split(',');

    var thisP, nextP;
    if (phase[1] == '1') {
      thisP = phase[0].toString() + '-04-01';
      nextP = '' + new Date(thisP).getFullYear() + '-09-01';

    };
    if (phase[1] == '2') {
      thisP = phase[0].toString() + '-09-01';
      nextP = '' + (new Date(thisP).getFullYear() + 1) + '-04-01';

    }
    whereClause.startDate = { '>=': thisP, '<': nextP };

  };

  whereClause.status = { '!=': 3 };
  //console.log(whereClause);
  if (req.wantsJSON) {

    var limit = Math.max(req.query.limit, 20) || 20;
    var offset = Math.max(req.query.offset, 0) || 0;
    var everyCourse = await Course.find({
      where: whereClause,
      limit: limit,
      skip: offset,
      sort: 'category'
    }).populate('applicant');


    var count = await Course.count({
      where: whereClause
    });


    for (var i = 0; i < everyCourse.length; i++) {

      everyCourse[i].apps = await Application.find({
        course: everyCourse[i].id
      });
    }
    if (req.query.status >= 0) {
      var k = 'status' + req.query.status;
      return res.json({
        courses: everyCourse.map(function (c) {
          c['status0'] = 0;
          c['status1'] = 0;
          c['status2'] = 0;
          c['status3'] = 0;
          c['status4'] = 0;
          (c.apps || []).forEach(function (a) {
            c['status' + a.status]++;
          });
          return c;
        }).filter(function (c) { return c['status' + req.query.status] > 0; }), count: count
      });
    }
    else {
      return res.json({
        courses: everyCourse.map(function (c) {
          c['status0'] = 0;
          c['status1'] = 0;
          c['status2'] = 0;
          c['status3'] = 0;
          c['status4'] = 0;
          (c.apps || []).forEach(function (a) {
            c['status' + a.status] += 1;
          });
          return c;
        }), count: count
      });

    }

  } else {

    var limit = Math.max(req.query.limit, 20) || 20;
    var offset = Math.max(req.query.offset, 0) || 0;
    var everyCourse = await Course.find({
      where: whereClause,
      limit: limit,
      skip: offset,
      sort: 'category'
    }).populate('applicant');

    var count = await Course.count({
      where: whereClause
    });

    for (var i = 0; i < everyCourse.length; i++) {

      everyCourse[i].apps = await Application.find({
        course: everyCourse[i].id
      });

    };

    if (req.query.status == 0) {
      return res.view('admin/applyHandle/courseApplyHandle', {
        courses: everyCourse.map(function (c) {
          c['status0'] = 0;
          c['status1'] = 0;
          c['status2'] = 0;
          c['status3'] = 0;
          c['status4'] = 0;
          (c.apps || []).forEach(function (a) {
            c['status' + a.status]++;
          });
          return c;
        }).filter(function (c) { return c.status0 > 0; }), count: count
      });
    }
    else {
      return res.view('admin/applyHandle/courseApplyHandle', {
        courses: everyCourse.map(function (c) {
          c['status0'] = 0;
          c['status1'] = 0;
          c['status2'] = 0;
          c['status3'] = 0;
          c['status4'] = 0;
          (c.apps || []).forEach(function (a) {
            c['status' + a.status] += 1;
          });
          return c;
        }), count: count
      });

    }
  };

},

attendanceSheet: async function (req, res) {
  var course = await Course.findOne(req.params.id);
  var coach = await Course.findOne(req.params.id).populate('coach');
  var coacht = new Array(coach.coach.length + 1);

  coach = coach.coach[0];
  //console.log(coach);
  var students = await Course.findOne(req.params.id).populate('participant');
  students = students.participant;
  var dates = course.dates.split(",");

  var head = 5;
  // Attendance table for coach 
  for (var i = 0; i < coacht.length; i++) {
    coacht[i] = new Array(dates.length + head);
  }
  for (var i = 0; i < coacht.length; i++) {
    for (var j = 0; j < coacht[i].length; j++) {
      if (i == 0) {
        if (j == 0) coacht[i][j] = "#";
        else if (j == 1) coacht[i][j] = '教練姓名';
        else if (j == 2) coacht[i][j] = '英文姓名';
        else if (j == 3) coacht[i][j] = '電話';
        else if (j == 4) coacht[i][j] = '';
        else coacht[i][j] = dates[j - head];

      } else {
        if (j == 0) coacht[i][j] = i.toString();
        else if (j == 1) coacht[i][j] = coach.ChiName;
        else if (j == 2) coacht[i][j] = coach.EngName;
        else if (j == 3) coacht[i][j] = coach.Mobile;
        else coacht[i][j] = '';
      }
    }

  }
  //attendance table for students
  var table = new Array(students.length + 1);
  for (var i = 0; i < table.length; i++) {
    table[i] = new Array(dates.length + head);
  }

  for (var i = 0; i < table.length; i++) {
    for (var j = 0; j < table[i].length; j++) {
      if (i == 0) {
        if (j == 0) {
          table[i][j] = '#';
        } else if (j == 1) {
          table[i][j] = '學員姓名';
        } else if (j == 2) {
          table[i][j] = '英文姓名';
        } else if (j == 3) {
          table[i][j] = '年齡';
        } else if (j == 4) {
          table[i][j] = '電話';
        } else {
          table[i][j] = dates[j - head];
        }
      } else {
        if (j == 0) {
          table[i][j] = i.toString();
        } else if (j == 1) {
          table[i][j] = students[i - 1].ChiName;
        } else if (j == 2) {
          table[i][j] = students[i - 1].EngName;
        } else if (j == 3) {
          table[i][j] = students[i - 1].Age;
        } else if (j == 4) {
          table[i][j] = students[i - 1].Mobile;
        } else {
          table[i][j] = "";
        }
      }

    }
  }


  var XLSX = require('xlsx');
  var wb = XLSX.utils.book_new();

  // var arrayToString = JSON.stringify(Object.assign({}, table));
  //combine two attendance tables and add header
  var today = new Date();
  var phase;
  if (course.startDate < today.getFullYear() + "-09-01" && course.startDate > today.getFullYear() + "-03-31")
    phase = 1;
  else
    phase = 2;

  var newtable = new Array(table.length + coacht.length + 9);
  newtable[0] = ["", "", "", "", "", "中國香港體操總會"];
  newtable[1] = ["", "", "", "", "", "The Gymnastics Association of Hong Kong, China"];
  newtable[2] = ["", "", "", "", "", "2020 – 2021體操發展計劃 " + " 第" + phase + "期"];
  newtable[3] = ["", "", course.courseID, "", "( " + course.level + " )", "", course.category];
  newtable[4] = ["日期:", course.startDate + " 至 " + course.endDate];
  newtable[5] = ["時間:", course.time];
  newtable[6] = ["地點:", course.stadium];
  newtable[7] = [""];
  newtable[8] = [""];

  for (var j = 0; j < coacht.length; j++) {
    newtable[j + 9] = coacht[j];
  }
  newtable[coacht.length + 9] = [""];
  for (var k = 0; k < table.length; k++) {
    newtable[k + coacht.length + 10] = table[k];
  }

  var dataSheet = XLSX.utils.json_to_sheet(newtable,
    {
      skipHeader: true,
    }
  );

  //    console.log("Excel", dataSheet);
  XLSX.utils.book_append_sheet(wb, dataSheet, "AttendanceSheet");

  res.set("Content-disposition", "attachment; filename=" + course.courseID + "_Attendance.xlsx");
  return res.end(XLSX.write(wb, { type: "buffer", bookType: "xlsx" }));

},

scoreSheet: async function (req, res) {
  var course = await Course.findOne(req.params.id);
  var coach = await Course.findOne(req.params.id).populate('coach');
  coach = coach.coach[0];
  var students = await Course.findOne(req.params.id).populate('participant');
  students = students.participant;


  var table = new Array(students.length);
  for (var i = 0; i < table.length; i++) {
    table[i] = new Array(2);
    for (var j = 0; j < 2; j++) {
      if (j == 0) {
        table[i][j] = (i + 1).toString() + ". " + students[i].ChiName;
      }
      else table[i][j] = '';
    }

  };
  var criteria;//criteria of each kind of score sheet
  if (course.category == "健美體操") {

    criteria = new Array(4);
    criteria[0] = ['', '', '第一部份 - 藝 術 分', '', '', '', '', '', '第二部份 - 完 成 分', '', '', '', ''];
    criteria[1] = ['', '1. 主體內容（10）', '', '2. 音樂與樂感（5）', '3. 藝術表現力（5）', '', '標準性（10）', '', '準確性（10）'];
    criteria[2] = ['姓名', '動作的流暢度 (5)', '動作的強度 (5)', '動作與音樂拍子的配合程度 (5)', '呈現笑容、展現自信和活力(5)', '第一部分得分(20) 分', '展現腳尖、正確指型和面向(10)', '手、腳動作的角度 (10)', '動作次序正確(5)', '左右方向正確(5)', '第二部分得分30 分', '總得分(共50分)', '証書編號'];
    criteria[3] = ['備 註 :1. 合格分數 :30 分 ( 評分準則請參閱「 健美體操章別計劃動作大綱 」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', ''];


  } else if (course.category == "技巧體操") {
    if (course.level == 'L1') {
      criteria = new Array(3);
      criteria[0] = ['', '個人動作', '', '', '', '雙人動作', '', '', '', '自選動作（任擇兩個）', '', '', '', '', ''];
      criteria[1] = ['姓名', '團身前滾翻', '分腿跳', '直跳轉體一週', '半蹲拉手單足平衡', '背拉平衡', '單足互拉平衡', '站手', '仰臥撐背', '站膝牽引平衡', '雙足互疊平衡', '支撐中穿', '總分', '備註', '證書編號'];
      criteria[2] = ['備 註 :1. 合格分數 :80 分 ( 評分準則請參閱「技巧體操章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    } else if (course.level == 'L2') {
      criteria = new Array(3);
      criteria[0] = ['', '個人動作', '', '', '', '雙人動作', '', '', '', '自選動作（任擇兩個）', '', '', '', '', '', ''];
      criteria[1] = ['姓名', '分腿前滾翻', '屈體後滾翻', '側手翻', '靠墻手倒立3秒', '仰臥撐背', '站膝牽引平衡', '雙足互疊平衡', '支撐中穿', '背靠站膝平衡', '腹撐平衡', '分腿坐扶手倒立', '拋起站立', '總分', '備註', '證書編號'];
      criteria[2] = ['備 註 :1. 合格分數 :80 分 ( 評分準則請參閱「技巧體操章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

    } else if (course.level == 'L3') {
      criteria = new Array(3);
      criteria[0] = ['', '個人動作', '', '', '', '雙人動作', '', '', '', '自選動作（任擇兩個）', '', '', '', '', '', ''];
      criteria[1] = ['姓名', '側手翻內轉', '拱橋', '連續兩個側手翻', '頭手倒立2秒', '背靠站膝平衡', '腹撐平衡', '分腿坐扶手倒立', '拋起站立', '半蹲站燕式平衡', '仰臥肘撐站', '拋跳轉180', '分腿坐站肩', '總分', '備註', '證書編號'];
      criteria[2] = ['備 註 :1. 合格分數 :80 分 ( 評分準則請參閱「技巧體操章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

    }
  }
  else if (course.category == "藝術體操") {
    if (course.level == 'L1') {
      criteria = new Array(4);
      criteria[0] = ['', '第一部分-徒手動作\n(考生需在 1-5 欄中各選一個動作,另再選四個動作,共九個動作)', '', '', '', '', '', '', '', '', '', '', '', '', '', '第二部份 - 球 的 單 動 作\n(需在 6-9 欄中各選一個動作,另再選二個動作,共六個動作)'];
      criteria[1] = ['', '1.舞蹈步', '', '', '2.跳步', '', '', '3.轉體', '', '4.平衡', '', '', '5. 柔韌', '', '', '6.拋接', '', '7.主動拍球', '', '8.身上滾動', '', '9.八字', '', '', '', ''];
      criteria[2] = ['姓名', '足尖步', '小跑步', '柔軟步', '并步/側并步', '跳轉180°', '小貓跳', '巴塞180°', '踏轉360°', '巴塞', '前/側舉腿30°', '阿拉貝斯30°', '手波浪', '全身波浪', '體前屈', '第一部分得分（9分）', '雙手中拋接', '單手小拋接', 'V字拍球', '節奏拍球', '雙手胸臂滾球', '背滾', '正雙手8字', '反雙手8字', '第二部分得分（6分）', '總得分（共15分）', '證書編號'];
      criteria[3] = ['備註: 1. 合格分數 :12 分 ( 評分準則請參閱「藝術體操章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

    } else if (course.level == 'L2') {
      criteria = new Array(4);
      criteria[0] = ['', '第一部分-徒手動作\n(考生需在 1-5 欄中各選一個動作,另再選四個動作,共九個動作)', '', '', '', '', '', '', '', '', '', '', '', '', '', '第二部份 - 球 的 單 動 作\n(需在 6-9 欄中各選一個動作,另再選二個動作,共六個動作)'];
      criteria[1] = ['', '1.舞蹈步', '', '', '2.跳步', '', '', '', '3.轉體', '', '4.平衡', '', '5. 柔韌', '', '', '6.拋接', '', '7.主動拍球', '', '8.身上滾動', '', '9.八字', '', '', '', ''];
      criteria[2] = ['姓名', '踏跳步', '彈簧步', '滾動步', '挺身跳', '小跨跳', '團身跳', '單腿變身跳', '平轉720°', '巴塞360°', '側轉後腿阿拉貝斯', '舉腿平衡（由前至後）', '拱橋', '側波浪', '第一部分得分（9分）', '前過繩小跳', '後過繩小跳', '地上放單繩', '臂下放單繩', '頭上繞環接三折繩', '單手體前轉動繩', '側8字', '單手上下8字', '第二部分得分（6分）', '總得分（共15分）', '證書編號'];
      criteria[3] = ['備註: 1. 合格分數 :12 分 ( 評分準則請參閱「藝術體操章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    } else if (course.level == 'L3') {
      criteria = new Array(4);
      criteria[0] = ['', '第一部分-徒手動作\n(起評分為 8 分,動作輕微錯誤每次扣 0.1 分,顯著錯誤每次扣 0.2 分,嚴重錯誤每次扣0.3 分; 沒有 1-6 欄中的身體動作,則每個扣 0.5 分; 額外加分欄最高每項加 0.2 分。)', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '第二部份 - 球 的 單 動 作\n(需在 6-9 欄中各選一個動作,另再選二個動作,共六個動作)'];
      criteria[1] = ['', '1.舞步', '', '', '2.跳步', '', '', '', '3.轉體', '', '4.平衡', '', '5. 柔韌', '', '', '', '6.技巧動作', '額外加分', '', '', '', '', '7.滾動', '', '8.轉動', '', '9.穿圈', '', '10.八字', '', '11.拋接', '', '', '', ''];
      criteria[2] = ['姓名', '并步', '小跑步', '華爾茲', '小貓跳', '小跨跳', '團身跳', '巴塞360°', '踏轉360°', '側轉後腿阿拉貝斯', '阿拉貝斯30°', '側波浪', '手波浪', '全身波浪', '一字馬', '滾翻', '流暢與熟練的表演', '充分利用場地', '動作與音樂特點和諧', '動作與音樂節奏和諧', '第一部分得分（8分）', '地上滾動', '肩背滾動', '單手頭上轉動', '體前手轉動', '側身穿圈', '兩腳依次跳進跳出', '體側手繞', '上下8字', '單手小拋接（離頭約1米）', '雙手翻拋一周', '第二部分得分（6分）', '總得分（共15分）', '證書編號'];
      criteria[3] = ['備註: 1. 合格分數 :12 分 ( 評分準則請參閱「藝術體操章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    }

  }
  else if (course.category == "彈網訓練") {
    if (course.level == 'L1') {
      criteria = new Array(2);
      criteria[0] = ['姓名', '年齡', '直彈', '抱膝彈', '分腿彈', '接體彈', '半轉彈', '坐彈', '手膝彈', '膝彈', '總分', '備註', '證書編號'];
      criteria[1] = ['備 註 :1. 合格分數 : 80 分 ( 評分準則請參閱「 彈網章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '',];

    } else if (course.level == 'L2') {
      criteria = new Array(3);
      criteria[0] = ['', '規定動作', '', '', '', '', '', '', '自選動作（選四項）', '', '', '', '', '', '', '', ''];
      criteria[1] = ['姓名', '連續抱膝彈', '分腿、直彈分腿彈', '抱膝、半轉、抱膝彈', '半轉、抱膝、半轉彈', '坐彈、回足彈、抱膝彈', '坐彈、回足彈、半轉、回足彈', '手膝彈、腹彈、手膝彈、回足彈', '坐彈、半轉、腹彈', '坐彈、半轉回足彈', '半轉、坐彈', '全轉', '腹彈', '背彈', '總分', '證書編號'];
      criteria[2] = ['備 註 :1. 合格分數 : 80 分 ( 評分準則請參閱「 彈網章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '',];

    } else if (course.level == 'L3') {
      criteria = new Array(3);
      criteria[0] = ['', '規定動作', '', '', '', '', '', '', '自選動作（選四項）', '', '', '', '', '', '', '', '基本套路（二選一）', '', '', ''];
      criteria[1] = ['姓名', '坐彈、半轉回足彈', '半轉坐彈', '坐彈接半轉坐彈', '腹彈', '背彈', '半轉坐彈、半轉回足彈', '手膝彈向前翻滾接背彈', '坐彈、轉體坐彈', '背彈、半轉回足彈', '半轉背彈', '坐彈接腹彈', '腹彈接住彈', '住彈、全體回足彈', '（1）分腿彈、坐彈、半轉回足彈、接體彈、腹彈、回足彈、抱膝彈、手膝彈、各前翻滾接背彈、回足彈', '半轉回足彈、半轉坐彈、半轉回足彈、半轉彈、抱膝彈、腹彈、回足彈、分腿彈、背彈、回足彈', '總分', '證書編號'];
      criteria[2] = ['備 註 :1. 合格分數 : 80 分 ( 評分準則請參閱「 彈網章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如証書發出後需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '',];

    }


  }
  else if (course.category == "競技體操") {
    if (course.level == 'L1') {
      criteria = new Array(2);
      criteria[0] = ['姓名', '靠墻手倒立', '仰臥起橋', '屈體分腿坐', '360°轉體跳', '肩胛倒立', '前滾翻', '後滾翻', '燕式平衡', '原地分腿跳', '總分', '備註', '證書編號（由體操協會填寫）'];
      criteria[1] = ['備 註 :1. 合格分數 : 80 分 ( 評分準則請參閱「競技體操章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如 証 書 發 出 後 需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '', ''];
    } else if (course.level == 'L2') {
      criteria = new Array(2);
      criteria[0] = ['姓名', '劈叉', '側平衡', '頭手倒立', '前滾翻成分腿站立', '後滾翻成分腿站立', '後滾翻', '側手翻', '向前跳轉180°', '蹲跳上分腿跳下', '蹲腿跨越', '總分', '備註', '證書編號（由體操協會填寫）'];
      criteria[1] = ['備 註 :1. 合格分數 : 80 分 ( 評分準則請參閱「競技體操章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如 証 書 發 出 後 需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '', ''];

    } else if (course.level == "L3") {
      criteria = new Array(2);
      criteria[0] = ['姓名', '倒立前滾翻', '魚躍前滾翻', '頭手翻/拱橋向前起立', '側翻內轉', '屈體跳', '後翻上', '支撐後擺跳下', '跳上分腿坐/跳上蹲立', '一腿前擺轉體/屈腿跳下', '分腿跨越', '總分', '備註', '證書編號（由體操協會填寫）'];
      criteria[1] = ['備 註 :1. 合格分數 : 70 分 ( 評分準則請參閱「競技體操章別計劃手冊」\n2. 學員如需到總會領取証書,請於課程完結後三星期後到本會領取,為期一年,逾期不獲補領\n3. 收費請參閱中國香港體操總會網站\n4. 申請人請小心核對考生資料,如 証 書 發 出 後 需要更改 , 每張証書需付 $10.00 手續費\n5. 如以支票付款 , 抬頭「中國香港體操總會」', '', '', ''];

    }

  }

  //title
  var newtable = new Array(table.length + criteria.length + 9);
  newtable[0] = ["", "", "", "", "", "中國香港體操總會", "", "", "", "", "", course.category];
  newtable[1] = ["", "", "", "", "", course.level + "分紙", "", ""];
  newtable[2] = ["", "", "", "", "", ""];

  for (var i = 0; i < criteria.length - 1; i++) {
    newtable[i + 4] = criteria[i];
  };
  for (var j = 0; j < table.length; j++) {
    newtable[3 + criteria.length + j] = table[j];
  };
  newtable[5 + criteria.length + students.length] = ['教練姓名：', coach.ChiName, '', '教練簽署：', '', '', '', '', '', ''];
  newtable[6 + criteria.length + students.length] = ['聯絡電話：', coach.Mobile, '', '考試日期：', '', '', '', '', '', ''];
  newtable[7 + criteria.length + students.length] = ['考試地點：', '', '', '課程編號：', course.courseID, '', '', '', '', ''];
  newtable[8 + criteria.length + students.length] = ['課程完結日期：', course.endDate, '', '備註：', '', '', '', '', '', ''];
  newtable[9 + criteria.length + students.length] = criteria[criteria.length - 1];
  // console.log(newtable);

  var XLSX = require('xlsx');
  var wb = XLSX.utils.book_new();

  var ws = XLSX.utils.json_to_sheet(newtable, {
    skipHeader: true,
  });

  XLSX.utils.book_append_sheet(wb, ws, "ScoreSheet");

  res.set("Content-disposition", "attachment; filename=" + course.courseID + "_ScoreSheet.xlsx");
  return res.end(XLSX.write(wb, { type: "buffer", bookType: "xlsx" }));

},

certApplication: async function (req, res) {
  let firstCourse = await Course.find({
    sort: 'startDate',
    limit: 1
  });
  let lastCourse = await Course.find({
    sort: 'endDate DESC',
    limit: 1
  });


  return res.view("admin/applyHandle/certificate", { firstCourse: firstCourse[0], lastCourse: lastCourse[0] });
},

showall: async function (req, res) {
  var whereClause = {};
  whereClause.status = { '!=': 3 };
  var phase;
  if (req.body) {
    //  console.log(req.body);
    if (req.body.courseID != '') whereClause.courseID = { contains: req.body.courseID.toUpperCase() };

    if (req.body.phase != '') {
      phase = req.body.phase.split(",");

      var thisP, nextP;
      if (phase[1] == '1') {
        thisP = phase[0].toString() + '-04-01';
        nextP = '' + new Date(thisP).getFullYear() + '-09-01';

      };
      if (phase[1] == '2') {
        thisP = phase[0].toString() + '-09-01';
        nextP = '' + (new Date(thisP).getFullYear() + 1) + '-04-01';

      }
      whereClause.startDate = { '>=': thisP, '<': nextP };

    }
  }
  //console.log(whereClause);
  var models = await Course.find({
    where: whereClause,
  });
  //console.log(models);

  var table = new Array();
  if (models.length == 0) {
    //2020 phase 2 - 3 courses
    //2021 phase 1 - 6 courses
    return res.status(404).json("此時期沒有課程或輸入的課程編號不正確.");
  }
  var count = 0;
  var participants = [];
  for (var i = 0; i < models.length; i++) {
    participants[i] = await Results.find({ course: models[i].id, cert: true }).populate('resultOwner').populate('course');
    count += participants[i].length;
  }
  if (count == 0) {
    return res.status(404).json("此時期沒有申請人或輸入的課程編號不正確。");
  } else {

    for (var j = 0; j < participants.length; j++) {
      if (participants[j].length > 0) {
        for (var k = 0; k < participants[j].length; k++) {
          var row = { courseID: '', category: '', level: '', endDate: '', appDate: '', name: '', account: '' };
          row.courseID = participants[j][k].course.courseID;
          row.category = participants[j][k].course.category;
          row.level = participants[j][k].course.level;
          row.endDate = participants[j][k].course.endDate;
          row.name = participants[j][k].resultOwner.ChiName;
          row.account = participants[j][k].resultOwner.Email;
          table.push(row);
        }
      }
    }

    var XLSX = require('xlsx');
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(table.map(table => {
      return {
        "課程編號": table.courseID,
        "課程項目": table.category,
        "課程等級": table.level,
        "課程結束日期": table.endDate,
        "學員姓名": table.name,
        "學員帳號": table.account,

      }
    }));
    var singleSheet = new Array(1);
    singleSheet[0] = [table[0]];
    if (table.length > 0) {
      var cID = table[0].courseID;
      for (var i = 1; i < table.length; i++) {
        if (table[i].courseID === cID) {
          var length = singleSheet.length - 1;

          singleSheet[length].push(table[i]);
        } else {
          var newSheet = [table[i]];
          singleSheet.push(newSheet);
          cID = table[i].courseID;
        }
      }
    }
    var wSingleSheet = new Array(1);

    wSingleSheet[0] = XLSX.utils.json_to_sheet(singleSheet[0].map(item => {
      return {
        課程編號: item.courseID,
        課程項目: item.category,
        課程等級: item.level,
        課程結束日期: item.endDate,
        學員姓名: item.name,
        學員帳號: item.account,

      }
    }));
    for (var i = 1; i < singleSheet.length; i++) {

      var ss = XLSX.utils.json_to_sheet(singleSheet[i].map(item => {
        return {
          課程編號: item.courseID,
          課程項目: item.category,
          課程等級: item.level,
          課程結束日期: item.endDate,
          學員姓名: item.name,
          學員帳號: item.account,

        }
      }));
      wSingleSheet.push(ss);
    }
    XLSX.utils.book_append_sheet(wb, ws, "certificate");
    for (var i = 0; i < wSingleSheet.length; i++) {

      XLSX.utils.book_append_sheet(wb, wSingleSheet[i], wSingleSheet[i].A2.v);
    }
    res.set("Content-disposition", "attachment; filename=certificate.xlsx");
    return res.end(XLSX.write(wb, { type: "buffer", bookType: "xlsx" }));
  }
},

};

function getDateTimeString(unixDate) {
  let date = new Date(unixDate);
  let dateString = `${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  let timeString = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}:${date.getSeconds() < 10 ? '0' : ''}${date.getSeconds()}`;
  return dateString + '\n' + timeString;
}

