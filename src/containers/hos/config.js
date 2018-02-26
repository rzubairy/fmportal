const width = '100%';
const height = '100px';

/* * * * * * * * * * * * * * * * * * * *
              Line Charts
* * * * * * * * * * * * * * * * * * * */
const lineChart = {
  title: 'HoursofService',
  chartType: 'LineChart',
  key: 'LineChart',
  width,
  // height,
  columns: [
    {
      label: 'Hours',
      type: 'number',
    },
    {
      label: 'Status',
      type: 'number',
    },

  ],
  rows: [
     [0, 4], [2, 4], [2, 2], [12, 2], [12, 3], [13, 3], [13,1], [15,1], [15,2], [24,2]
  ],
  options: {
    legend: {
      position: 'none',
        },
    width: '100%',
    height: 200,
    chartArea: {
      left: 50,
      top: 0,
      right: 10
    },
    left: 0,
    legend: {
      position: 'none',
    },

    hAxis: {
      ticks: [ {v:0, f:'12'}, {v:1, f:'11'}, {v:2, f:'10'}, {v:3, f:'9'}, {v:4, f:'8'}, {v:5, f:'7'}, {v:6, f:'6'}, {v:7, f:'5'}, {v:8, f:'4'}, {v:9, f:'3'}, {v:10, f:'2'}, {v:11, f:'1'}, {v:12, f:'N'}, {v:13, f:'1'}, {v:14, f:'2'}, {v:15, f:'3'}, {v:16, f:'4'}, {v:17, f:'5'}, {v:18, f:'6'}, {v:19, f:'7'}, {v:20, f:'8'}, {v:21, f:'9'}, {v:22, f:'10'}, {v:23, f:'11'}, {v:24, f:'12'} ],
      textStyle: {
        color: '#788195',
        fontSize: 8,
      },
      title: 'Hours',
      titleTextStyle: {
        color: '#788195',
        fontSize: 12,
      },

    },
    vAxis: {
      textStyle: {
        color: '#788195',

      },
      ticks: [{
        v: 0,
        f: ''
        }, {
        v: 1,
        f: 'ON'
        }, {
        v: 2,
        f: 'D'
        }, {
        v: 3,
        f: 'OFF'
        }, {
        v: 4,
        f: 'SB'
        }, {
        v: 5,
        f: ''
        }],
      // title: 'Status',
      titleTextStyle: {
         color: '#788195',
         fontSize: 12,
       },
    },
    colors: ['#48A6F2'],
    dataOpacity: 1.0,
    animation: {
      duration: 1000,
      easing: 'in',
      startup: true,
    },
    tooltip: {
      textStyle: {
        color: '#788195',
      },
    },
    // series: {
    //
    //    2: {
    //      //  lineWidth: 5,
    //       color: '#fa0000',
    //    },
    // },
  },

};


export {

  lineChart,

};
