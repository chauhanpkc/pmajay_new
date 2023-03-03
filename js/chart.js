var options = {
    series: [44, 55, 41, 17],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    plotOptions: {
      pie: {
        donut: {
          size: '40%'
        }
      }
    },
    chart: {
    type: 'donut',
    height:307,
    width:'100%'
  },
  colors: ['#fcaf2e', '#1fe398', '#1790f8', '#fd4362', '#fcaf2e'],
  title: {
    text: 'Project status',
    align: 'left',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      fontWeight:  '600',
      fontFamily:  'Poppins-Regular',
      color:  '#000'
    },
},
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();


//Chart 2

var colors = [
    '#fcaf2e',
    '#1fe398',
    '#1790f8',
    '#fd4362',
    '#8b76d5',
    '#4bb1a7',
    '#6e848d',
    '#d735e9'
  ]
  
var options = {
    series: [{
    name: 'Data',
    data: [21, 22, 10, 28, 16, 21, 13, 30],
    }],
    chart: {
    height: 310,
    with:'100%',
    type: 'bar',
    events: {
      click: function(chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  title: {
    text: 'Intervention wise projects',
    align: 'left',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '14px',
      fontWeight:  '600',
      fontFamily:  'Poppins-Regular',
      color:  '#000'
    },
},
  colors: colors,
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
      borderRadius: 5,
    }
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [
      ['John', 'Doe'],
      ['Joe', 'Smith'],
      ['Jake', 'Williams'],
      'Amber',
      ['Peter', 'Brown'],
      ['Mary', 'Evans'],
      ['David', 'Wilson'],
      ['Lily', 'Roberts'], 
    ],
    labels: {
      style: {
        colors: colors,
        fontSize: '12px'
      }
    }
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();