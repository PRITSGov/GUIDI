export function graphs(){
    const options = {
      series: [121, 78, 621],
      chart: {
      height: 430,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 300,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#104842', '#9c3795', '#00b1df'],
    labels: ['Agencia de Gobierno', 'Municipios', 'Hospitalizados'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'top-left',
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
            show: false
        }
      }
    }]
    };
  
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  
    const optionsBar = {
      series: [{
      name: 'San Juan',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Mayagüez',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
      name: 'Ponce',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '75%',
        endingShape: 'rounded'
      },
    },
    colors:['#104842', '#9c3795', '#00b1df'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
    };
  
    const chartBar = new ApexCharts(document.querySelector("#chartBar"), optionsBar);
    chartBar.render();
  
  
       
          var optionsLines = {
            series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
            chart: {
            height: 350,
            type: 'line',
            
            zoom: {
              enabled: false
            }
          },
          colors:['#00b1df'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
          };
  
          var chartLines = new ApexCharts(document.querySelector("#chartLines"), optionsLines);
          chartLines.render();
  }