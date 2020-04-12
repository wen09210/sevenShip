/*
  Highcharts JS v7.0.3 (2019-02-06)

 Indicator series type for Highstock

 (c) 2010-2019 Pawel Fus, Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define(function(){return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){var q=function(c){var e=c.error;return{isParentLoaded:function(c,m,h,p,l){if(c)return p?p(c):!0;e(l||this.generateMessage(h,m));return!1},generateMessage:function(c,e){return'Error: "'+c+'" indicator type requires "'+e+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+
c}}}(e);(function(c,e){var q=c.pick,m=c.error,h=c.Series,p=c.isArray,l=c.addEvent,t=c.seriesType,r=c.seriesTypes,n=c.seriesTypes.ohlc.prototype,u=e.generateMessage;l(c.Series,"init",function(b){b=b.options;b.useOhlcData&&"highcharts-navigator-series"!==b.id&&c.extend(this,{pointValKey:n.pointValKey,keys:n.keys,pointArrayMap:n.pointArrayMap,toYData:n.toYData})});l(h,"afterSetOptions",function(b){b=b.options;var d=b.dataGrouping;d&&b.useOhlcData&&"highcharts-navigator-series"!==b.id&&(d.approximation=
"ohlc")});t("sma","line",{name:void 0,tooltip:{valueDecimals:4},linkedTo:void 0,compareToMain:!1,params:{index:0,period:14}},{processData:function(){var b=this.options.compareToMain,d=this.linkedParent;h.prototype.processData.apply(this,arguments);d&&d.compareValue&&b&&(this.compareValue=d.compareValue)},bindTo:{series:!0,eventName:"updatedData"},useCommonDataGrouping:!0,nameComponents:["period"],nameSuffixes:[],calculateOn:"init",requiredIndicators:[],requireIndicators:function(){var b={allLoaded:!0};
this.requiredIndicators.forEach(function(d){r[d]?r[d].prototype.requireIndicators():(b.allLoaded=!1,b.needed=d)});return b},init:function(b,d){function c(){var b=a.points||[],d=(a.xData||[]).length,c=a.getValues(a.linkedParent,a.options.params)||{values:[],xData:[],yData:[]},e=[],k=!0,f,g;if(d&&!a.hasGroupedData&&a.visible&&a.points)if(a.cropped){a.xAxis&&(f=a.xAxis.min,g=a.xAxis.max);d=a.cropData(c.xData,c.yData,f,g);for(f=0;f<d.xData.length;f++)e.push([d.xData[f],d.yData[f]]);d=c.xData.indexOf(a.xData[0]);
f=c.xData.indexOf(a.xData[a.xData.length-1]);-1===d&&f===c.xData.length-2&&e[0][0]===b[0].x&&e.shift();a.updateData(e)}else c.xData.length!==d-1&&c.xData.length!==d+1&&(k=!1,a.updateData(c.values));k&&(a.xData=c.xData,a.yData=c.yData,a.options.data=c.values);!1===a.bindTo.series&&(delete a.processedXData,a.isDirty=!0,a.redraw());a.isDirtyData=!1}var a=this,e=a.requireIndicators();if(!e.allLoaded)return m(u(a.type,e.needed));h.prototype.init.call(a,b,d);b.linkSeries();a.dataEventsToUnbind=[];if(!a.linkedParent)return m("Series "+
a.options.linkedTo+" not found! Check `linkedTo`.",!1,b);a.dataEventsToUnbind.push(l(a.bindTo.series?a.linkedParent:a.linkedParent.xAxis,a.bindTo.eventName,c));if("init"===a.calculateOn)c();else var g=l(a.chart,a.calculateOn,function(){c();g()});return a},getName:function(){var b=this.name,d=[];b||((this.nameComponents||[]).forEach(function(b,a){d.push(this.options.params[b]+q(this.nameSuffixes[a],""))},this),b=(this.nameBase||this.type.toUpperCase())+(this.nameComponents?" ("+d.join(", ")+")":""));
return b},getValues:function(b,d){var c=d.period,a=b.xData;b=b.yData;var e=b.length,g=0,h=0,l=[],m=[],n=[],k=-1,f;if(a.length<c)return!1;for(p(b[0])&&(k=d.index?d.index:0);g<c-1;)h+=0>k?b[g]:b[g][k],g++;for(d=g;d<e;d++)h+=0>k?b[d]:b[d][k],f=[a[d],h/c],l.push(f),m.push(f[0]),n.push(f[1]),h-=0>k?b[d-g]:b[d-g][k];return{values:l,xData:m,yData:n}},destroy:function(){this.dataEventsToUnbind.forEach(function(b){b()});h.prototype.destroy.call(this)}})})(e,q)});
//# sourceMappingURL=indicators.js.map
