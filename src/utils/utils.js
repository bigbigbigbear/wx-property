// 工具函数
/**
 * 参数date,fmt(格式，如'yyyy-MM-dd hh:mm')
 */
function formateDate(date, fmt){
  let cDate = new Date(date)   
  var o = {     
      "M+" : cDate.getMonth()+1, //月份     
      "d+" : cDate.getDate(), //日     
      "h+" : cDate.getHours()%12 == 0 ? 12 : cDate.getHours()%12, //小时     
      "H+" : cDate.getHours(), //小时     
      "m+" : cDate.getMinutes(), //分     
      "s+" : cDate.getSeconds(), //秒     
      "q+" : Math.floor((cDate.getMonth()+3)/3), //季度     
      "S" : cDate.getMilliseconds() //毫秒     
  };     
  var week = {     
      "0" : "\u65e5",     
      "1" : "\u4e00",     
      "2" : "\u4e8c",     
      "3" : "\u4e09",     
      "4" : "\u56db",     
      "5" : "\u4e94",     
      "6" : "\u516d"    
  };     
  if(/(y+)/.test(fmt)){     
      fmt = fmt.replace(RegExp.$1, (cDate.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  if(/(E+)/.test(fmt)){
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[cDate.getDay()+""]);
  }     
  for(let k in o){     
      if(new RegExp("("+ k +")").test(fmt)){     
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
  }
  return fmt;
}

export {
  formateDate
}