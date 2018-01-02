const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
const fs = require('fs');

nightmare
.goto('https://www.builtincolorado.com/')
.click('.jobs a')
.wait('.facet-block')
.click('.main-categories .item:nth-child(5) a')
.wait(`.items .item:nth-child(${1}) a`)
.click(`.items .item:nth-child(${1}) a`)
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
.then(result => fs.writeFileSync('BuiltInColorado/Net.json', JSON.stringify(result)))
.then(() => {
  return getNextData('Android', 1)
})
.then(() => {
  return getNextData('C#', 2)
})
.then(() => {
  return getNextData('C++', 3)
})
.then(() => {
  return getNextData('DevOps', 4)
})
.then(() => {
  return getNextData('Front-End', 5)
})
.then(() => {
  return getNextData('Golang', 6)
})
.then(() => {
  return getNextData('iOS', 7)
})
.then(() => {
  return getNextData('Java', 8)
})
.then(() => {
  return getNextData('Javascript', 9)
})
.then(() => {
  return getNextData('Linux', 10)
})
.then(() => {
  return getNextData('Management', 11)
})
.then(() => {
  return getNextData('Other', 12)
})
.then(() => {
  return getNextData('Perl', 13)
})
.then(() => {
  return getNextData('PHP', 14)
})
.then(() => {
  return getNextData('Python', 15)
})
.then(() => {
  return getNextData('QA', 16)
})
.then(() => {
  return getNextData('Ruby', 17)
})
.then(() => {
  return getNextData('Scala', 18)
})
.then(() => {
  return getNextData('Security', 19)
})
.then((result) => nightmare.end())
.catch(error => console.log({ error }))

const getNextData = (data, i) => {
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
