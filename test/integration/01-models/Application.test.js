describe('Application (model) initial data', function (){
    describe('Check application of course AERO01 has applicant TestUser1 in bootstrap data', function () {
        it('Find the application of course AERO01 has applicant TestUser1 in bootstrap', function (done) {
            fCourse = Course.findOne({courseID:"ACRO05"});
            fApplicant = User.findOne({EngName:"TestUser1"});
            Application.find({ course:fCourse.id,applicationOwner:fApplicant.id})
                .then(function (app) {

                    if (app.length == 0) {
                        return done(new Error(
                            'Should return the application ' +
                            'But instead, got: no application found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });

    describe('Check application of course GFA02 has a applicant in bootstrap data', function () {
        it('Find an application of course GFA02 in bootstrap', function (done) {
            fCourse = Course.findOne({courseID:"GFA02"});
        
            Application.find({ course:fCourse.id})
                .then(function (app) {

                    if (app.length == 0) {
                        return done(new Error(
                            'Should return the application ' +
                            'But instead, got: no application found'
                        ));
                    }
                    return done();
                })
                .catch(done);
        });
    });

});