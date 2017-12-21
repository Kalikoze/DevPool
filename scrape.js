const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.builtincolorado.com/')
  .click('.jobs a')
  .wait('.facet-block')
  .click('.main-categories .item:nth-child(5) a')
  .wait(2000)
  .evaluate(() => {
    let title = document.querySelector('.center-left .title').innerHTML;
    let company = document.querySelector('.center-left .company-title').innerHTML;
    let description = document.querySelector('.center-left .description').innerHTML

    return (
      {
        title,
        company,
        description
      }
    )
  })
  .end()
  .then(result => console.log(result))
  .catch(error => console.log({ error }))
