/**
 * User.js
 *
 * @description :: A model definition represents a coachbase table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    Uid: {
      type: 'string'
    },

    supervises: {
      collection: 'Coach',
      via: 'worksFor'
    },

    Username: {
      type: 'string'
    },

    Password: {
      type: 'string'
    },

    Gender: {
      type: 'string'
    },
    
    Age: {
      type: 'number'
    },

    FormSub:{

      type:'string'
    },

    role: {
      type: 'string',
      isIn: ['admin', 'user', 'member', 'athelete', 'coach', 'visitor'],
      defaultsTo: 'visitor'
    },

    ChiName: {
      type: 'string',

    },
    EngName: {
      type: 'string',

    },


    Date: {
      type: 'ref',
      columnType: 'datetime'
    },


    Mobile: {
      type: 'string',

    },
    Hnumber: {
      type: 'string',

    },

    Email: {
      type: 'string',
      unique:true,
      required:true
    },

    /////////////////////////////////////////////////////////////////////
    GRGSdata: {
      type: 'json',
    },

    GRGPdata: {
      type: 'json',
    },
    
    TRGPdata: {
      type: 'json',
    },

    TRGSdata: {
      type: 'json',
    },

    clubMemdata: {
      type: 'json',
    },


    tramData: {
      type: 'json',
    },

    gfaData: {
      type: 'json',
    },

    Acrodata: {
      type: 'json',
    },



    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝


    membership: {
      collection: 'Membership',
      via: 'user'
    },
    athelete: {
      collection: 'Athelete',
      via: 'user'
    },
    coach: {
      collection: 'Coach',
      via: 'user'
    },

    taughtCourse: {
      collection: 'Course',
      via: 'coach'
    },

    applys: {
      collection: 'Course',
      via: 'applicationOwner',
      through: 'Application'
    },

    hasResults: {
      collection: 'Course',
      via: 'resultOwner',
      through: 'Results'
    },

    applysParent: {
      collection: 'Application',
      via: 'applicant'
    },
  },

  getDateValue: function() {
    let d = new Date(this.Date);
    let dateString = `${d.getFullYear()}-${d.getMonth() < 9 ? '0':''}${d.getMonth()+1}-${d.getDate() < 10 ? '0':''}${d.getDate()}`;
    return dateString;
  },
   getAge: function() {
    let d = new Date(this.Date);
    return new Date() - d / 3600*24*365*1000;
   }

};

