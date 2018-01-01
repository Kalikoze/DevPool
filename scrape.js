const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const fs = require('fs');

const jobSpecialties = ['Net', 'Android', 'C#', 'C++', 'DevOps', 'Front-End', 'Golang', 'iOS', 'Java', 'Javascript', 'Linux', 'Management', 'Other', 'Perl', 'PHP', 'Python', 'QA', 'Ruby', 'Scala', 'Security'];

const getData = (data, i) => {
  nightmare
  .goto('https://www.builtincolorado.com/')
  .click('.jobs a')
  .wait('.facet-block')
  .click('.main-categories .item:nth-child(5) a')
  .wait(`.items .item:nth-child(${i}) a`)
  .click(`.items .item:nth-child(${i}) a`)
  .wait('.center-left')
  .evaluate(() => {
    let jobs = document.querySelectorAll('.center-left');
    const jobInfo = [];

    jobs.forEach((job, i) => {
      let title = job.querySelector('.title').innerText;
      let company = job.querySelector('.company-title').innerText;
      let description = job.querySelector('.description').innerText;

      jobInfo.push({title, company, description});
    })

    return jobInfo;
  })
  .then(result => fs.writeFileSync(`BuiltInColorado/${data}.json`, JSON.stringify(result)))
  .then(() => {
    return getNextData(jobSpecialties[i], i)
  })
  .then(() => {
    return getNextData(jobSpecialties[i+1], i+1)
  })
  .then(() => {
    return getNextData(jobSpecialties[i+2], i+2)
  })
  .then(() => {
    return getNextData(jobSpecialties[i+3], i+3)
  })
  .then(() => {
    return getNextData(jobSpecialties[i+4], i+4)
  })
  .then(() => {
    return getNextData(jobSpecialties[i+5], i+5)
  })
  .then(() => {
    return getNextData(jobSpecialties[i+6], i+6)
  })
  .then(() => {
    return getNextData(jobSpecialties[i+7], i+7)
  })
  .then((result) => nightmare.end())
  .catch(error => console.log({ error }))
}

const getNextData = (data, i) => {
  console.log(data, i)
  return nightmare
  .click(`.items .item:nth-child(${i+1}) a`)
  .wait(10000)
  .click(`.items .item:nth-child(${i}) a`)
  .wait(10000)
  .evaluate(() => {
    let jobs = document.querySelectorAll('.center-left');
    const jobInfo = [];

    jobs.forEach((job, i) => {
      let title = job.querySelector('.title').innerText;
      let company = job.querySelector('.company-title').innerText;
      let description = job.querySelector('.description').innerText;

      jobInfo.push({title, company, description});
    })

    return jobInfo;
  })
  .then(result => fs.writeFileSync(`BuiltInColorado/${data}.json`, JSON.stringify(result)))
}



getData(jobSpecialties[0], 1)
