import { Component } from '@angular/core';
declare var require: any;
let gettingStarted = require('./getting-started.md');

@Component({
  selector: 'app',
  template: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>WSGC MRA Table</title>
  
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Editable Table in test">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
  
    <!--link to bootstrap.css-->
    <link rel="stylesheet" href="assets/css/prism-okaidia.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-aNUYGqSUL9wG/vP7+cWZ5QOM4gsQou3sBfWRr/8S3R1Lv0rysEmnwsRKMbhiQX/O" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.9/css/jquery.dataTables.css">
    <link rel="stylesheet" href="assets/css/style.css">
  
    <style media="screen">
      .header {
        background-color: #0143A3;
        background: -webkit-linear-gradient(#0143A3, #0273D4);
        background: linear-gradient(#0143A3, #0273D4);
        color: #FFF;
        padding: 30px;
      }
      section {
        padding-top: 30px;
      }
    </style>
  </head>
  <body>
  <main class="bd-pageheader">
  
</main>

<div class="container">


  <table-section class="col-md-12"></table-section>
</div>

<footer class="footer">
  <div class="container">
    <p class="text-muted text-center">This is maintained by William Sonoma</p>
  </div>
</footer>
  </body>
  </html>
  
 
  `
})
export class DemoComponent {
}
