const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const fs = require('fs');

nightmare
  .goto('https://www.builtincolorado.com/')
  .click('.jobs a')
  .wait('.facet-block')
  .click('.main-categories .item:nth-child(5) a')
  .wait(2000)
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
  .end()
  .then(result => fs.writeFileSync('builtincolorado.json', JSON.stringify(result)))
  .catch(error => console.log({ error }))
