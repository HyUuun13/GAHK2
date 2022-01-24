/**
 * Course.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    courseID: {
      type: "string",
      unique: true,
      required: true
    },
    // name: {
    //   type: "string"
    // },
    startDate: {
      type: "string"
    },
    endDate: {
      type: "string"
    },
    category: {
      type: "string"
    },
    level: {
      type: "string",
      defaultsTo: "N/A"
    },
    weekday: {
      type: "json",
      columnType: "array"
    },
    time: {
      type: "string"
    },
    // coach: {
    //   type: "string"
    // },
    // coachAccount:{
    //   type:"string"
    // },
    maxAge: {
      type: "string",
      allowNull: true
    },
    minAge: {
      type: "string",
      allowNull: true
    },
    region: {
      type: "string"
    },
    // district: {
    //   type: "string"
    // },
    stadium: {
      type: "string"
    },
    address: {
      type: "string"
    },
    coord: {
      type: "string"
    },
    space: {
      type: "string"
    },
    quota: {
      type: "number",
      // allowNull: true,
      defaultsTo: 0
    },
    fee: {
      type: "number",
      // allowNull: true,
      defaultsTo: 0
    },
    detail: {
      type: "string"
    },
    dates: {
      type: "string"
    },
    /* phase of the course
    // phase1 (4-8): 0 
    // phase2 (9-3): 1
    */
    // phase: {
    //   type: "number"
    // },
    appDeadline: {
      type: "string"
    },
    /* status of the course
    // available: 0
    // full: 1
    // expired: 2
    // deleted: 3
    */
    status: {
      type: "number",
      defaultsTo: 0
    },


    //save uploaded document
    attendance: {
      type: "string"
    },
    examResult: {
      type: "string"
    },

    /* status of the upload doc
    // none: 0
    // updated: 1
    */
    docStatus: {
      type: 'number',
      defaultsTo: 0
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    applicant: {
      collection: 'User',
      via: 'course',
      through: 'Application'
    },

    participant: {
      collection: 'User',
      via: 'course',
      through: 'Results'
    },

    coach: {
      collection: 'User',
      via: 'taughtCourse',
    }

  },

};

