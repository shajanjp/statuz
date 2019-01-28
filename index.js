const os = require('os');
const pageUtils = require('./page.js');

function timeTillNow(seconds) { // time in seconds
  let ss = 0;
  if (!(+seconds)) { return 'Just now'; } // if not a number, get a out
  ss = +(+seconds).toFixed(0);

  let timeString = []; 
  let mm = 0;
  let hh = 0;
  let dd = 0;
  let MM = 0;
  
  if(ss >= 2.628e+6){
    MM = Math.trunc(ss / 2.628e+6);
    ss = ss % 2.628e+6;
    timeString.push(`${MM} months`);
  }

  if(ss >= 86400){
    dd = Math.trunc(ss / 86400);
    ss = ss % 86400;
    timeString.push(`${dd} days`);
  }

  if(ss >= 3600){
    hh = Math.trunc(ss / 3600);
    ss = ss % 3600;
    timeString.push(`${hh} hours`);
  }

  if(ss >= 60){
    mm = Math.trunc(ss / 60);
    ss = ss % 60;
    timeString.push(`${mm} minutes`);
  }

  timeString.push(`${ss} seconds`);

  return `${timeString.join(', ')} ago`;
}

// 2 days 5 hours 4 minutes 1 sec ago
function calculateResources(){
  let resourceUsed = {};
  resourceUsed.uptime = timeTillNow(process.uptime());
  resourceUsed.memory = {
    total: Math.trunc(os.totalmem()/1000000),
    free: Math.trunc(os.freemem()/1000000),
    using: Math.trunc(process.memoryUsage().heapUsed / 1000000) 
  }
  return resourceUsed;
} 

function getServerStatus(req, res){
  res.set('Content-Type', 'text/html');
  res.send(pageUtils.renderPage(calculateResources()));  
}

module.exports = getServerStatus;