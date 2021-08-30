(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(8),i=a.n(s),c=(a(13),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),s(e),i(e)}))}),o=a(3),h=a(4),u=a(2),d=a(6),l=a(5),m=a(0),b=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).RECOMMENDATION_MAP=new Map([[[16,Number.POSITIVE_INFINITY],"Consider wearing: A half sleeved t-shirt or blouse paired with cropped bottoms such as shorts or a skirt, or opt for a dress instead"],[[11,15],"Consider wearing: A thick sweater, hoodie or full sleeved shirt with long bottoms(i.e. leggings, jeans or trousers)"],[[1,10],"Consider wearing: A light coat(i.e. a denim jacket, leather jacket) over a hoodie, t-shirt or dress and pair it with some long trousers, jeans or leggings"],[[Number.NEGATIVE_INFINITY,0],"Consider wearing: A heavy jacket(i.e. a winter coat, parka) over a thick hoodie/sweater or full sleeved shirt paired with winter boots and a hat and gloves"]]),r.state={weather:e.weather},r}return Object(h.a)(a,[{key:"setWeather",value:function(e){this.setState({weather:e})}},{key:"getCurrentRecommendation",value:function(){for(var e=this.state.weather.main.temp,t=0,a=Array.from(this.RECOMMENDATION_MAP.keys());t<a.length;t++){var r=a[t];if(r[0]<=e&&e<=r[1])return this.RECOMMENDATION_MAP.get(r)}}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"clothing-recommendation",children:this.getCurrentRecommendation()})}}]),a}(n.a.Component),j={coord:{lon:-79.4163,lat:43.7001},weather:[{id:801,main:"Clouds",description:"few clouds",icon:"02n"}],base:"stations",main:{temp:40,feels_like:29.79,temp_min:22.54,temp_max:29.06,pressure:1012,humidity:74},visibility:1e4,wind:{speed:2.24,deg:225,gust:7.15},clouds:{all:20},dt:1630283513,sys:{type:1,id:718,country:"CA",sunrise:1630233502,sunset:1630281546},timezone:-14400,id:6167865,name:"Toronto",cod:200},w="9651681a74f791de18e4098653e01dae",v="https://api.openweathermap.org/data/2.5/",p=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={query:"",weather:j},r.search=r.search.bind(Object(u.a)(r)),r.searchHandler=r.searchHandler.bind(Object(u.a)(r)),r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.search("Toronto").then((function(t){e.setState({weather:t})}))}},{key:"searchHandler",value:function(e){var t=this;"Enter"===e.key&&this.search(this.state.query).then((function(e){t.setState({query:"",weather:e}),console.log(e)}))}},{key:"search",value:function(e){return fetch("".concat(v,"weather?q=").concat(e,"&units=metric&APPID=").concat(w)).then((function(e){return e.json()}))}},{key:"constructDate",value:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),r=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(r," ").concat(n)}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:this.state.weather.main&&this.state.weather.main.temp>16?"app warm":"app",children:Object(m.jsxs)("main",{children:[Object(m.jsx)("div",{className:"search-box",children:Object(m.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})},onKeyPress:this.searchHandler})}),(this.state.weather.main,Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"location-box",children:[Object(m.jsxs)("div",{className:"location",children:[this.state.weather.name,","," ",this.state.weather.sys.country]}),Object(m.jsx)("div",{className:"date",children:this.constructDate(new Date)})]}),Object(m.jsxs)("div",{className:"weather-box",children:[Object(m.jsxs)("div",{className:"temp",children:[Math.round(this.state.weather.main.temp),"\xb0c"]}),Object(m.jsx)("div",{className:"weather",children:this.state.weather.weather[0].main})]}),Object(m.jsx)(b,{weather:this.state.weather})]}))]})})}}]),a}(n.a.Component);i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),c()}},[[15,1,2]]]);
//# sourceMappingURL=main.361577da.chunk.js.map