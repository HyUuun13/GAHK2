const supertest = require('supertest');
const Async = require('async');
describe('UserController', function () {

    let cookie;

    describe('UserController - #applylist() to show applied courses of user TestUser1', function () {
        it('Return 200 with “Show applied courses successfully”', function (done) {
            Async.series([
                function (cb) {
                    supertest(sails.hooks.http.app)
                        .post('/user/login')
                        .send({ email: 'testuser@user.com', password: 'user123456' })
                        .expect(302)
                        .then(res => {
                            const cookies = res.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]);
                            cookie = cookies.join(';');
                            cb();
                        });
                },
                function (cb) {
                    supertest(sails.hooks.http.app)
                        .get('/user/application')
                        .set('Cookie', cookie)
                        // .send("Person[name]=Peter&Person[age]=50")
                        .expect(200, cb);
                }
            ], done);
        });
    });
    describe('UserController - #resultlist() to show exam results of user TestUser3', function () {
        it('Return 200 with “View the exam result of user TestUser1 successfully”', function (done) {
            Async.series([
                function (cb) {
                    cb();
                },
                function (cb) {
                    supertest(sails.hooks.http.app)
                        .get('/user/results')
                        .set('Cookie', cookie)
                        // .send("Person[name]=Peter&Person[age]=50")
                        .expect(200, cb);
                }
            ], done);
            // Test.find({ sort: 'createdAt DESC' }).then(function (data) {
            //     supertest(sails.hooks.http.app)
            //         .get('/user/results')
            //         .set('Cookie', data[0].cookie)
            //         // The following two lines making the request as normal form submission instead of AJAX request
            //         .set('Accept', 'text/html,application/xhtml+xml,application/xml')
            //         .set('Content-Type', 'application/x-www-form-urlencoded')
            //         // .send("email=testuser1@user.com&password=user123456")
            //         .expect(200, done)

            // });
        });
    });

});