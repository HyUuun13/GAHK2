describe('Course (model) initial data', function (){
    describe('Find the course ACRO05 in the bootstrap', function () {
        it('Find the record of course ACRO05', function (done) {
            Course.find({ courseID:"ACRO05"})
                .then(function (courses) {

                    if (courses.length == 0) {
                        return done(new Error(
                            'Should return the course --  ACRO05' +
                            'But instead, got: no course found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });

    describe('Find a course in category “競技體操”', function () {
        it('Find a “競技體操” course', function (done) {
            Course.find({category:"競技體操"})
                .then(function (courses) {

                    if (courses.length == 0) {
                        return done(new Error(
                            'Should return a course --  競技體操' +
                            'But instead, got: no course found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });
    describe('Find a course a course with application deadline on 2021-04-18', function () {
        it('Find a course with application deadline on 2021-04-18', function (done) {
            Course.find({appDeadline: "2021-04-18"})
                .then(function (courses) {

                    if (courses.length == 0) {
                        return done(new Error(
                            'Should return a course ' +
                            'But instead, got: no course found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });

});