const https = require('https');
const fs = require('fs');

const setOptions = (asset) => {
  let path;
  if (asset === 'header') { path = '/totallymoney/headers/tm-global-nav.html' }
  if (asset === 'footer') { path = '/tm-static-site/tm-footer/index.html' }
  return {
    hostname: 's3-eu-west-1.amazonaws.com',
    port: 443,
    path,
    method: 'GET'
  };
}

// retrieves the latest TotallyMoney header from a bucket in S3 and places it in the partials directory
const headerReq = https.request(setOptions('header'), (res) => {
  let str;
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    str += chunk.toString()
  });

  res.on('end', () => {
    if (str.startsWith('undefined')) {
      str = str.replace('undefined', '')
    }
    fs.writeFile('site/themes/ga-hugo-theme/layouts/partials/tm-global-nav.html', str, function (err) {
      if (err) throw err;
      console.log('TotallyMoney Global Nav Saved')
    })
  })
});

headerReq.on('error', (e) => {
  console.error(e);
});

headerReq.end();

// retrieves the latest TotallyMoney footer from a bucket in S3 and places it in the partials directory
const footerReq = https.request(setOptions('footer'), (res) => {
  res.on('data', (d) => {
    fs.writeFile('site/themes/ga-hugo-theme/layouts/partials/tm-footer.html', d.toString(), function (err) {
      if (err) throw err;
      console.log('TotallyMoney Footer Saved')
    })
  });
});

footerReq.on('error', (e) => {
  console.error(e);
});

footerReq.end();
