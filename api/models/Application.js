/**
 * Application.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    // AppID: {
    //   type: "string"
    // },

    parent: {
      type: 'boolean'
    },

    ParentAc: {
      type: 'string'
    },

    chiNameParent: {
      type: "string"
    },
    engNameParent: {
      type: "string"
    },
    GenderParent: {
      type: "string"
    },
    AgeParent: {
      type: "number",
      allowNull: true
    },
    DOBParent: {
      type: "string"
    },
    EmailParent: {
      type: "string"
    },
    PhoneParent: {
      type: "string"
    },

    chiNameEmer: {
      type: "string"
    },
    AddressEmer: {
      type: "string"
    },
    PhoneEmer: {
      type: "string"
    },

    payment: {
      type: "string"
    },
    declare: {
      type: 'boolean'
    },
    declare1: {
      type: 'boolean'
    },
    adult: { 
      type: 'boolean'
    },

    /* Application status
       Pending: 0
       Admit: 1
       Reject: 2
       Waiting List: 3
       Paid: 4
     */
    status: {
      // type: "string",
      // defaultsTo: "待處理 Pending"
      type: "number",
      defaultsTo: 0
    },
    receipt: {
      type: "string"
    },

    applicationOwner: {
      model: 'User'
    },

    course: {
      model: 'Course'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    applicant: {
      collection: 'User',
      via: 'applysParent'
    },

    produce: {
      collection: 'Receipt',
      via: 'GenBy'
    },

    // belong: {
    //   collection: 'Receipt',
    //   via: 'AppBy'
    // },

  },

};

