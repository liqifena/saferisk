/*
	点击具体步骤如下：
	获取微信code==>通过微信code获取isc Ticket==>业务系统实现单点
	
	相关参数说明：
	appid：wwd1a8c8a667af7efd（亦庄环境写这个即可）
	redirect_uri：企信认证后重定向地址
	---离线包应用填写：zipapp://local.host/ 为项目根目录+具体html页面
	---现在H5应用：直接填写完整的地址即可

	agentid：应用ID（向管理员获取，每个应用都有自己的ID）


*/




//显示提示信息
function LogMAMInfo(sInfo, sType) {
  //DebugInfo(sInfo,sType);
  mui('#ticket')[0].innerHTML = sInfo

  //jt('#divMAMLogin .LoginTip .LoginTipName').html(sInfo);
}


var wx_agentid = '1000111';
var wx_code = getParam('code');
var wx_secret = 'abLqwogx2Oy_ocG-Z3Swc4Tf4R28NpUc1-CymBseNTU'
var st = ""
var user_id = ""


function getParam(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return '';
}



//获取微信code
function getWxCode(t) {
  var sURL = 'https://igw.isgcc.net:18081/connect/oauth2/authorize?';

  //var sURL ='https://wechtpoc.ehome.ren:10443/connect/oauth2/authorize?';
  //sURL+='appid=ww30af00ab78840f9f';
  sURL += 'appid=ww445f8033443a14aa';
  //sURL+='&redirect_uri='+encodeURIComponent('zipapp://local.host/index.html');
  sURL += '&redirect_uri=' + encodeURIComponent('zipapp://local.host/common/oauth.html');
  sURL += '&response_type=code';
  sURL += '&scope=SCOPE';
  sURL += '&state=STATE';
  sURL += '&agentid=' + wx_agentid;
  sURL += '#wechat_redirect';
  console.log(sURL);
  if (t == true) startOAuthNew(sURL);
  else location.href = sURL;
}




//通过微信code获取isc Ticket

var getIscToken_idx = 0;

function getIscToken(callback) {
  function funError(errJson) {
    getIscToken_idx++;
    if (getIscToken_idx < 5) {
      setTimeout(function () {
        console.log('一次性令牌异常，正在重新获取...')
        getIscToken(callback);
      }, 500);
      return;
    }
    return LogMAMInfo('获取ISC一次性令牌异常[' + errJson.code + ']...');
  }


  var sURL = 'https://igw.isgcc.net:18443/identity/getAuthTicketByWechatCode';

 

  var param = {
    CODE: wx_code,
    appId: wx_agentid
  }
  param = JSON.stringify(param);

  jQuery.ajax({
    type: "post",
    data: param,
    contentType: "application/json;charset=utf-8",
    url: sURL,
    async: true,
    dataType: "json",
    cache: false,
    success: function (json) {

      if (json.code != '100001') return funError(json);
      isc_ticket = json.data.ticket;
 
      mui('#IscToken')[0].innerHTML = isc_ticket;

      //jQuery('#output2').html(json.data.ticket)
      console.log('isc信息', isc_ticket)
    }
  });
}

var getUserInfo_idx = 0;

function getuserinfo(callback) {


  var sURL = 'http://192.168.43.214:19999/proxy/getUserByTicket?st='+isc_ticket;

 

  var param = {
    st: isc_ticket
  }
  param = JSON.stringify(param);

  jQuery.ajax({
	type: "get",
	contentType: "application/json;charset=utf-8",
    url: sURL,
  
	async: true,
    dataType: "json",
    cache: false,
    success: function (json) {

      user_id = json.UserId;
      mui('#userInfo')[0].innerHTML = user_id;
      //jQuery('#output2').html(json.data.ticket)
      console.log('用户信息', json)
		  console.log('user_id信息', user_id)
    }
  });
}

 

function init() {
  if (!wx_code) {
    return getWxCode();
  }

  getAccesToken();
}