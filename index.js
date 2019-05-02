const fs = require('fs');
let series = [];

fs.readFile('result.json', 'utf-8', (err,data) => {
  if(err) throw err;
  let obj = JSON.parse(data)
  obj.forEach((resp) => {
    let seri = series.indexOf(resp.series);
    if(seri < 0){
      series.push(resp.series)
    }
  })
  fs.writeFile('series.json', JSON.stringify(series, null, 4), (err) => {
    if(err) throw err;
    console.log('success write file, check series.json');
  })
})