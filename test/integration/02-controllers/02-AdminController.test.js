const supertest = require('supertest');
const Async = require('async');

describe('AdminController',  function () {

    describe('AdminController - #allcourseSearch() to show the course of ACRO05', function () {
        it('Show the course of courseID ACRO05 successfully', function (done) {
            Test.find({sort:'createdAt DESC'}).then(function(data){
                supertest(sails.hooks.http.app)
                .post('/admin/course/list')
                .set('Cookie', data[0].cookie)
                // The following two lines making the request as normal form submission instead of AJAX request
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .send("courseID=ACRO05")
                .expect(200, done);
            });
        });
    });
    describe('AdminController - #listGrade() to list courses with grade information of ACRO05 after coach submit files', function () {
        it('Find grades of courseACRO05 successfully', function (done) {
            Test.find({sort:'createdAt DESC'}).then(function(data){
                supertest(sails.hooks.http.app)
                .get('/admin/course/grade')
                .set('Cookie', data[0].cookie)
                // The following two lines making the request as normal form submission instead of AJAX request
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .send("courseID=ACRO05")
                .expect(200, done);
            });
        });
    });
    describe('AdminController - #applyList() to find the courses with applications in year 2021 phase 1', function () {
        it('Find courses with application in year 2021 phase 1 successfully', function (done) {
            Test.find({sort:'createdAt DESC'}).then(function(data){
                supertest(sails.hooks.http.app)
                .get('/admin/course/application')
                .set('Cookie', data[0].cookie)
                // The following two lines making the request as normal form submission instead of AJAX request
                .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .send("year=2021,1")
                .expect(200, done);
            });
        });
    });

    describe('AdminController - #reviewMarkSheet() to download the file coach submitted for course ACRO05', function () {
        it('Download the file the coach submitted successfully', function (done) {
             Course.findOne({courseID:'ACRO05'}).then(function(course){
                sheet = Test.find({sort:'createdAt DESC'}).then(function(data){
                    supertest(sails.hooks.http.app)
                    .get('/admin/course/mark/'+course.id)
                    .set('Cookie', data[0].cookie)
                    // The following two lines making the request as normal form submission instead of AJAX request
                    .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    // .send(":id="+)
                    .expect(200, done);

                });
                if(sheet.length==0){
                    throw new Erorr('No Marksheet found');
                }
             });
            
        });
    });
  ;

});