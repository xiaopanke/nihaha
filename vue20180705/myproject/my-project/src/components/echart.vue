<template>
<div class="hello">
  <div id="daymyChart1" :style="{width: '1200px', height: '600px'}"></div>
</div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
export default {
  name: 'HelloWorld',
  data() {
    return {
      chart:{},
      dataBox:[
        {name: '海门', value: 100},
        {name: '鄂尔多斯', value: 321},
        {name: '招远', value: 21},
        {name: '舟山', value: 221},
        {name: '齐齐哈尔', value: 167}
],
      geoCoordMap:{
        '海门':[121.15,31.89],
        '鄂尔多斯':[109.781327,39.608266],
        '招远':[120.38,37.35],
        '舟山':[122.207216,29.985295],
        '齐齐哈尔':[123.97,47.33]
},
      option: {
        title: {
          text: '学而思培优 实时续报看板',
          subtext: '在读人次/在读人读？？？？？',
          sublink: 'http://www.pm25.in',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [{
              'featureType': 'water',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'land',
              'elementType': 'all',
              'stylers': {
                'color': '#f3f3f3'
              }
            }, {
              'featureType': 'railway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'highway',
              'elementType': 'all',
              'stylers': {
                'color': '#fdfdfd'
              }
            }, {
              'featureType': 'highway',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'geometry',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'poi',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'green',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'subway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'manmade',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'local',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'boundary',
              'elementType': 'all',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'building',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'label',
              'elementType': 'labels.text.fill',
              'stylers': {
                'color': '#999999'
              }
            }]
          }
        },
        series: [{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [],
            symbolSize: function(val) {
              return val[2] / 10;
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            itemStyle: {
              color: 'purple'
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: [],
            symbolSize: function(val) {
              return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            itemStyle: {
              color: 'purple',
              shadowBlur: 10,
              shadowColor: '#333'
            },
            zlevel: 1
          }
        ]
      }
    }
  },
  mounted() {
    this.$nextTick(()=>{
      // this.option.series[0].data=this.convertData(this.data);
      // this.option.series[1].data=this.convertData(this.data.sort(function(a, b) {
      //   return b.value - a.value;
      // }).slice(0, 6));
      this.$set(this.option.series[0], 'data', this.convertData(this.dataBox));
      this.$set(this.option.series[1], 'data', this.convertData(this.dataBox.sort(function(a, b) {
        return b.value - a.value;
      }).slice(0, 1)));
      this.initChart()
      console.log(this.option);
      console.log(this.chart);
      this.chart.setOption(this.option)
      // setInterval(()=>{
      //   // this.dataBox=[
      //   //   {name: '海门', value: 130},
      //   //   {name: '鄂尔多斯', value: 351},
      //   //   {name: '招远', value: 27},
      //   //   {name: '舟山', value: 251},
      //   //   {name: '齐齐哈尔', value: 167}
      //   // ];
      //   var index=Math.round(Math.random()*5);
      //   console.log(index);
      //   this.dataBox[index].value=((index+1)*this.dataBox[index].value)%1000;
      //   this.$set(this.option.series[0], 'data', this.convertData(this.dataBox));
      //   this.$set(this.option.series[1], 'data', this.convertData(this.dataBox.sort(function(a, b) {
      //     return b.value - a.value;
      //   }).slice(0, 1)));
      //     // this.chart.setOption(this.option)
      // },1000)
    })

  },
  watch:{
    option:{
      handler: function(nVal, oVal){
        if(this.chart){
          if(nVal){
            this.chart.setOption(nVal)
          }else{
            this.chart.setOption(oVal)
          }
        }else{
          this.initChart();
        }
      },
      deep: true
    }
  },
  methods: {
    initChart(){
      let chartWrapper = document.getElementById('daymyChart1')
      this.chart = this.$echarts.init(chartWrapper);
    },
    convertData(data){
      console.log(data);
      var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
