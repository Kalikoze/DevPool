const Android = require('../../../BuiltInColorado/Android.json');
const CSharp = require('../../../BuiltInColorado/C#.json');
const CPlusPlus = require('../../../BuiltInColorado/C++.json');
const DevOps = require('../../../BuiltInColorado/DevOps.json');
const Frontend = require('../../../BuiltInColorado/Front-End.json');
const Golang = require('../../../BuiltInColorado/Golang.json');
const iOS = require('../../../BuiltInColorado/Android.json');
const Java = require('../../../BuiltInColorado/Java.json');
const Javascript = require('../../../BuiltInColorado/Javascript.json');
const Linux = require('../../../BuiltInColorado/Linux.json');
const Management = require('../../../BuiltInColorado/Management.json');
const Net = require('../../../BuiltInColorado/Net.json');
const Other = require('../../../BuiltInColorado/Other.json');
const Perl = require('../../../BuiltInColorado/Perl.json');
const Php = require('../../../BuiltInColorado/PHP.json');
const Python = require('../../../BuiltInColorado/Python.json');
const Qa = require('../../../BuiltInColorado/QA.json');
const Ruby = require('../../../BuiltInColorado/Ruby.json');
const Scala = require('../../../BuiltInColorado/Scala.json');
const Security = require('../../../BuiltInColorado/Security.json');

const createJob = (knex, job) => {
  return knex('jobs').insert(job);
};

exports.seed = (knex, Promise) => {
  return knex('jobs').del()
    .then(() => {
      let jobPromises = [];

      Android.forEach(job => jobPromises.push(createJob(knex, job)));
      CSharp.forEach(job => jobPromises.push(createJob(knex, job)));
      CPlusPlus.forEach(job => jobPromises.push(createJob(knex, job)));
      DevOps.forEach(job => jobPromises.push(createJob(knex, job)));
      Frontend.forEach(job => jobPromises.push(createJob(knex, job)));
      Golang.forEach(job => jobPromises.push(createJob(knex, job)));
      iOS.forEach(job => jobPromises.push(createJob(knex, job)));
      Java.forEach(job => jobPromises.push(createJob(knex, job)));
      Javascript.forEach(job => jobPromises.push(createJob(knex, job)));
      Linux.forEach(job => jobPromises.push(createJob(knex, job)));
      Management.forEach(job => jobPromises.push(createJob(knex, job)));
      Net.forEach(job => jobPromises.push(createJob(knex, job)));
      Other.forEach(job => jobPromises.push(createJob(knex, job)));
      Perl.forEach(job => jobPromises.push(createJob(knex, job)));
      Php.forEach(job => jobPromises.push(createJob(knex, job)));
      Python.forEach(job => jobPromises.push(createJob(knex, job)));
      Qa.forEach(job => jobPromises.push(createJob(knex, job)));
      Ruby.forEach(job => jobPromises.push(createJob(knex, job)));
      Scala.forEach(job => jobPromises.push(createJob(knex, job)));
      Security.forEach(job => jobPromises.push(createJob(knex, job)));

      return Promise.all(jobPromises);
    })
    .then(() => console.log('Seeding is complete.'))
    .catch(error => console.log(`Error seeding data: ${error}`));
};
