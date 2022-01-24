const supertest = require('supertest');
const Async = require('async');

describe('CoachController', function () {

    describe('CoachController - #passFail() to set the pass or fail status for students of course ACRO05', function () {
        it('Set first two student pass/fail status to pass of course ACRO05 successfully', function (done) {
            Course.findOne({ courseID: 'ACRO05' }).then(function (course) {
                Test.find({ sort: 'createdAt DESC' }).then(function (data) {
                    supertest(sails.hooks.http.app)
                        .post('/coach/passFail/' + course.id)
                        .set('Cookie', data[0].cookie)
                        // The following two lines making the request as normal form submission instead of AJAX request
                        .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                        .set('Content-Type', 'application/json')
                        .send('[{"resultID": "42", "passFail": 1}, {"resultID": "43", "passFail": 1}]')
                        .expect(200, done);

                });
            });
        });
    });
    describe('CoachController - #endList() to show the courses that require to upload documents', function () {
        it('Found the current courses', function (done) {

            Test.find({ sort: 'createdAt DESC' }).then(function (data) {
                supertest(sails.hooks.http.app)
                    .get('/coach/endCourseList')
                    .set('Cookie', data[0].cookie)
                    // The following two lines making the request as normal form submission instead of AJAX request
                    .set('Accept', 'text/html,application/xhtml+xml,application/xml')
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .expect(200, done);

            });
        });
    });
   

});