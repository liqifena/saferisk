/*
	点击具体步骤如下：
	获取微信code==>通过微信code获取isc Ticket==>业务系统实现单点
	
	相关参数说明：
	appid：ww445f8033443a14aa（亦庄环境写这个即可）
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

// 测试
var wx_agentid = '1000774';
var wx_code = getParam('code');
var isc_appId = 'ed4855a985cf4e53a832d64f1e0e5ad1'
var isc_ticket = ""
var appId = 'ww445f8033443a14aa'

// 生产
// var wx_agentid = '1000282';
// var wx_code = getParam('code');
// var isc_appId = '8a84a22c7aeaedcd017b9b59b614215d'
// var isc_ticket = ""
// var appId = 'ww4d11a39991ebffdc'

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
  var sURL = 'https://igw.sgcc.com.cn/connect/oauth2/authorize?';
  // var sURL = 'https://igw.isgcc.net:18081/connect/oauth2/authorize?';

  // var sURL ='https://wechtpoc.ehome.ren:10443/connect/oauth2/authorize?';
  sURL+='appid='+appId;
  // sURL+='appid=ww4d11a39991ebffdc';
  // sURL += 'appid=ww445f8033443a14aa';
  // sURL += 'appid=ww4d11a39991ebffdc';
  // sURL+='&redirect_uri='+encodeURIComponent('zipapp://local.host/common/login.html');
  sURL += '&redirect_uri=' + encodeURIComponent('http://10.20.0.40:11080/h5/igwsgccweb/');
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


  // var sURL = 'https://igw.isgcc.net:18443/identity/getAuthTicketByWechatCode';
  var sURL = 'http://id.sgcc.com.cn:18088/eeee/identity/getAuthTicketByWechatCode';
  // var sURL = 'https://iscpoc.ehome.ren:10443/identity/getAuthTicketByWechatCode';

 

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
	  location.href = "http://10.20.1.134:8080?ticket=" +isc_ticket
    }
  });
}


function getAccessToken() {
  var sURL = 'https://igw.isgcc.net:18443/zuul/sgid-provider-console/res/iscMincroService/getAccessToken';
  // var sURL = 'https://iscpoc.ehome.ren:10443/zuul/sgid-provider-console/res/iscMincroService/getAccessToken';

 

  var param = {
    appId: "8a84a22c7aeaedcd017b9b59b614215d",
    clientSecret: "ae6c5329bd96405194e559a3103bd23c"
  }
  param = JSON.stringify(param);
  const sign = sm3Encrypt(param)
  console.log(sign, "signsignsign")
  jQuery.ajax({
    type: "post",
    data: param,
    contentType: "application/json;charset=utf-8",
    url: sURL,
    async: true,
    dataType: "json",
    cache: false,
    headers: {
      "X-Clientid": "ae6c5329bd96405194e559a3103bd23c",
      "X-Acloud-Data-Sign": sign
    },
    success: function (json) {
      console.log(json,"getAccessToken")
      // if (json.code != '100001') return funError(json);
      accessToken = json.data.accessToken;
 
      mui('#getAccessToken')[0].innerHTML = accessToken;

      //jQuery('#output2').html(json.data.ticket)
      console.log('accessToken信息', accessToken)
      localStorage.setItem("token", accessToken)
      // location.href = "http://10.20.1.134:8080?token="+accessToken
    }
  });
}

var getUserInfo_idx = 0;

function getUserInfo(callback) {
  function funError(errJson) {
    getUserInfo_idx++;
    if (getUserInfo_idx < 5) {
      setTimeout(function () {
        console.log('一次性令牌异常，正在重新获取...')
        getUserInfo(callback);
      }, 500);
      return;
    }
    return LogMAMInfo('获取ISC一次性令牌异常[' + errJson.code + ']...');
  }


 var sURL = 'https://iscpoc.ehome.ren:10443/proxy/getUserInfoByTicket';
  // var sURL = 'http://192.168.43.214:19999/proxy/getUserByTicket?st='+isc_ticket;
  

  var param = {
	st: isc_ticket
  }
  param = JSON.stringify(param);

  jQuery.ajax({
    type: "get",
	contentType: "application/json;charset=utf-8",
    url: sURL,
 //   data: param,
	async: true,
    dataType: "json",
    cache: false,
    success: function (json) {

      if (json.code != '100001') return funError(json);

      mui('#userInfo')[0].innerHTML = JSON.stringify(json.data, null, 4);

      //jQuery('#output2').html(json.data.ticket)
      console.log('用户信息', json)
    }
  });
}


function init() {
  if (!wx_code) {
    return getWxCode();
  }

  getIscToken();
}