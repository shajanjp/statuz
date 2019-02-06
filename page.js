function renderPage(data){
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/table.min.css">
    <style>
    body{
      font-family: 'Open Sans', sans-serif;
      color: #333;
      background-color: #efefef;
    }
    .container {
      position: absolute;
      top: 50%;
      left: 50%;
      -moz-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
    }
    .ui.table{
      border-radius: 0px;
      border: 0px;
    }
    .ui.table{
      -webkit-box-shadow: 0 4px 8px -8px #444;
      box-shadow: 0 4px 8px -8px #444;
      border-radius: 0px;
      border-top: 2px solid #a3de83;
      transition: 0.5s box-shadow ease-in-out;
    }
    .ui.table:hover{
      -webkit-box-shadow: 0 10px 8px -8px #AAA;
      box-shadow: 0 10px 8px -8px #AAA;
      border-radius: 0px;
    }
  </style>
  </head>
  <body>
    <div class="container">
      <table class="ui small table">
        <tbody>
          <tr>
            <td>Status</td>
            <td>Live</td>
          </tr>
          <tr>
            <td>App Path</td>
            <td>${data.appPath}</td>
          </tr>
          <tr>
            <td>Last Restart</td>
            <td>${data.uptime}</td>
          </tr>
          <tr>
            <td>Last Update</td>
            <td>${data.lastUpdate}</td>
          </tr>
          <tr>
            <td>System Memory</td>
            <td>${data.memory.free} Mb free of ${data.memory.total} Mb</td>
          </tr>
          <tr>
            <td>App Memory Usage</td>
            <td>${data.memory.using} Mb</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
  </html>`;
}

module.exports = {
  renderPage
};