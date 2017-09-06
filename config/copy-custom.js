module.exports = {
    copyAssets: {
      src: ['{{SRC}}/assets/**/*'],
      dest: '{{WWW}}/assets'
    },
    copyAssets2: {
      src: ['{{SRC}}/assets/**/*'],
      dest: '{{BUILD}}/assets'
    },
    copyIndexContent: {
      src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
      dest: '{{WWW}}'
    },
    copyFonts: {
      src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
      dest: '{{WWW}}/assets/fonts'
    },
    copyPolyfills: {
      src: [`{{ROOT}}/node_modules/ionic-angular/polyfills/${process.env.IONIC_POLYFILL_FILE_NAME}`],
      dest: '{{BUILD}}'
    },
    copySwToolbox: {
      src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
      dest: '{{BUILD}}'
    },
     copyPrimeng: {
        src: ['{{ROOT}}/node_modules/primeng/resources/themes/omega/theme.css', 
        '{{ROOT}}/node_modules/primeng/resources/primeng.min.css',
        '{{ROOT}}/node_modules/primeng/resources/images/*', 
         '{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css', 
         ],
        dest: '{{BUILD}}/assets/css'
      },
      copyFontAwesome: {
        src: ["{{ROOT}}/node_modules/font-awesome/fonts/**/*"],
        dest: "{{BUILD}}/assets/fonts"
      },
      copyHigtchartsCss:{
        src: ["{{ROOT}}/node_modules/highcharts/css/highcharts.css"],
        dest: '{{BUILD}}/assets/css'
      },
      copyHigtchartsJs:{
         src: ["{{ROOT}}/node_modules/highcharts/js/highcharts.js",
         "{{ROOT}}/node_modules/highcharts/js/highcharts-more.js"
         ],
        dest: '{{BUILD}}/assets/js'
      },
      copyJquery:{
         src: ["{{ROOT}}/node_modules/jquery/dist/jquery.min.js"],
         dest: '{{BUILD}}/assets/js'
      },
      copyFullcalendarjs:{
        src: ["{{ROOT}}/node_modules/fullcalendar/dist/fullcalendar.min.js"],
        dest: '{{BUILD}}/assets/js'
      },
      copyFullcalendarCss:{
        src: ["{{ROOT}}/node_modules/fullcalendar/dist/fullcalendar.min.css"],
        dest: '{{BUILD}}/assets/css/talcosa'
      },
      copyMoment:{
        src: ["{{ROOT}}/node_modules/moment/min/*"],
        dest: '{{BUILD}}/assets/js'
      },
  }
  