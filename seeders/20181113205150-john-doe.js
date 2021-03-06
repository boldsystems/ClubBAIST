'use strict';

const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('ALTER SEQUENCE "Members_MemberID_seq" RESTART WITH 1');

    let date = new Date(2018, 1, 1, 1, 1, 1);

    await queryInterface.bulkInsert('MembershipTiers', [
      { Name: 'Gold', createdAt: date, updatedAt: date },
      { Name: 'Silver', createdAt: date, updatedAt: date },
      { Name: 'Bronze', createdAt: date, updatedAt: date },
      { Name: 'Copper', createdAt: date, updatedAt: date },
      { Name: 'Clerk', createdAt: date, updatedAt: date }
    ]);

    await queryInterface.bulkInsert('Members', [
      {
        FirstName: 'Gold',
        LastName: 'Member',
        Address: '123 Residence Lane',
        PostalCode: 'A1B2C3',
        Phone: '123-456-7890',
        Email: 'gm@clubbaist.com',
        DateOfBirth: new Date(1980, 1, 1, 1, 1, 1),
        MembershipTierType: 1,
        Password: 'password',
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      },
      {
        FirstName: 'Gold2',
        LastName: 'Member2',
        Address: '123 Residence Lane',
        PostalCode: 'A1B2C3',
        Phone: '123-456-7890',
        Email: 'gm2@clubbaist.com',
        DateOfBirth: new Date(1980, 1, 1, 1, 1, 1),
        MembershipTierType: 1,
        Password: 'password',
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      },
      {
        FirstName: 'Gold3',
        LastName: 'Member3',
        Address: '123 Residence Lane',
        PostalCode: 'A1B2C3',
        Phone: '123-456-7890',
        Email: 'gm3@clubbaist.com',
        DateOfBirth: new Date(1980, 1, 1, 1, 1, 1),
        MembershipTierType: 1,
        Password: 'password',
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      },
      {
        FirstName: 'Silver',
        LastName: 'Member',
        Address: '123 Residence Lane',
        PostalCode: 'A1B2C3',
        Phone: '123-456-7890',
        Email: 'sm@clubbaist.com',
        DateOfBirth: new Date(1980, 1, 1, 1, 1, 1),
        MembershipTierType: 2,
        Password: 'password',
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      },
      {
        FirstName: 'Bronze',
        LastName: 'Member',
        Address: '123 Residence Lane',
        PostalCode: 'A1B2C3',
        Phone: '123-456-7890',
        Email: 'bm@clubbaist.com',
        DateOfBirth: new Date(1980, 1, 1, 1, 1, 1),
        MembershipTierType: 3,
        Password: 'password',
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      },
      {
        FirstName: 'Bronze2',
        LastName: 'Member2',
        Address: '123 Residence Lane',
        PostalCode: 'A1B2C3',
        Phone: '123-456-7890',
        Email: 'bm2@clubbaist.com',
        DateOfBirth: new Date(1980, 1, 1, 1, 1, 1),
        MembershipTierType: 3,
        Password: 'password',
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      },
      {
        FirstName: 'Bronze3',
        LastName: 'Member3',
        Address: '123 Residence Lane',
        PostalCode: 'A1B2C3',
        Phone: '123-456-7890',
        Email: 'bm3@clubbaist.com',
        DateOfBirth: new Date(1980, 1, 1, 1, 1, 1),
        MembershipTierType: 3,
        Password: 'password',
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      },
      {
        FirstName: 'Copper',
        LastName: 'Member',
        Address: '123 Residence Lane',
        PostalCode: 'A1B2C3',
        Phone: '123-456-7890',
        Email: 'cm@clubbaist.com',
        DateOfBirth: new Date(1980, 1, 1, 1, 1, 1),
        MembershipTierType: 4,
        Password: 'password',
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      },
      {
        FirstName: 'Clerk',
        LastName: 'Clerk',
        Address: '123 Residence Lane',
        PostalCode: 'A1B2C3',
        Phone: '123-456-7890',
        Email: 'cc@clubbaist.com',
        DateOfBirth: new Date(1980, 1, 1, 1, 1, 1),
        MembershipTierType: 5,
        Password: 'password',
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      }], {});

    let today = moment('12:00 PM', 'hh:mm aa');

    await queryInterface.bulkInsert('TeeTimes', [{
      Player1ID: 1,
      Player2ID: 2,
      Player3ID: 3,
      Player4ID: 4,
      CartCount: 2,
      Timeslot: today.add(1, 'day').toDate(),
      createdAt: new Date(2018, 1, 1, 1, 1, 1),
      updatedAt: new Date(2018, 1, 1, 1, 1, 1)
    }, {
      Player1ID: 4,
      Player2ID: 5,
      Player3ID: 1,
      CartCount: 2,
      Timeslot: today.add(1, 'day').toDate(),
      createdAt: new Date(2018, 1, 1, 1, 1, 1),
      updatedAt: new Date(2018, 1, 1, 1, 1, 1)
    }, {
      Player1ID: 2,
      Player2ID: 3,
      Player3ID: 1,
      Player4ID: 6,
      CartCount: 4,
      Timeslot: today.add(1, 'day').toDate(),
      createdAt: new Date(2018, 1, 1, 1, 1, 1),
      updatedAt: new Date(2018, 1, 1, 1, 1, 1)
    }, {
      Player1ID: 1,
      CartCount: 1,
      Timeslot: today.add(1, 'day').toDate(),
      createdAt: new Date(2018, 1, 1, 1, 1, 1),
      updatedAt: new Date(2018, 1, 1, 1, 1, 1)
    }], {});

    today = moment('12:00 PM', 'hh:mm aa');

    let scores = [];
    for (let i = 0; i < 100; i++) {
      let TotalScore = Math.floor(Math.random() * 144) + 1;
      let Handicap = ((TotalScore - 70.6) / 128) * 113;

      scores.push({
        MemberID: Math.floor(Math.random() * 6) + 1,
        Date: today.subtract(1, 'day').toDate(),
        TotalScore,
        Handicap,
        createdAt: new Date(2018, 1, 1, 1, 1, 1),
        updatedAt: new Date(2018, 1, 1, 1, 1, 1)
      });
    }

    await queryInterface.bulkInsert('PlayerScores', scores, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TeeTimes', null, {});
    await queryInterface.bulkDelete('PlayerScores', null, {});
    await queryInterface.bulkDelete('Members', null, {});
    await queryInterface.bulkDelete('MembershipTiers', null, {});
    await queryInterface.sequelize.query('ALTER SEQUENCE "Members_MemberID_seq" RESTART WITH 1');
    await queryInterface.sequelize.query('ALTER SEQUENCE "MembershipTiers_TierType_seq" RESTART WITH 1');
    await queryInterface.sequelize.query('ALTER SEQUENCE "TeeTimes_TeeTimeID_seq" RESTART WITH 1');
  }
};
