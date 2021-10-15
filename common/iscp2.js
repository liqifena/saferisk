/*
	连接具体步骤如下：
	1.iscp初始化
	2.建立安全连接
	3.获取本地监听端口
*/

//显示提示信息
function LogMAMInfo(sInfo, sType) {
  //DebugInfo(sInfo,sType);
  mui('#iscp')[0].innerHTML = sInfo

  //jt('#divMAMLogin .LoginTip .LoginTipName').html(sInfo);
}



/////////////////////////// ISCP[Begin] ///////////////////////////
//****i国网调用安全交互平台
//返回值 0：成功，1000：安全链接失败，1001：方法报错，1002：进程退出请重新连接


//var UAPCFG2 = {
//  ISCP_IP: '218.76.15.34',
//  ISCP_PORT: '30082',
//  ISCP_USER: 'user',
//  ISCP_APPID: 'com.hndl.mh',
//  XTBG_IP: '172.31.193.139',
//  XTBG_PORT: '18080'
//};
//var UAPCFG2 = {
//  ISCP_IP:'118.112.17.86',
//	ISCP_PORT:'20080',
//	ISCP_USER:'user',
//	ISCP_APPID:'hunan',
//  XTBG_IP: '25.212.250.223',
//  XTBG_PORT: '80'
//};
//var UAPCFG2 = {
//  ISCP_IP: '218.76.15.34',
//  ISCP_PORT: '20082',
//  ISCP_USER: 'user',
//  ISCP_APPID: 'HnDdkb',
//  XTBG_IP: '172.31.193.216',
//  XTBG_PORT:  '18080'
//};
  var UAPCFG2 = { 
    ISCP_IP:'218.76.15.34',
    ISCP_PORT:'20082',
    ISCP_USER:'user',
    ISCP_APPID:'HnEjj',
    XTBG_IP:'47.107.187.159',
    XTBG_PORT:'80'
};

var contextPath2="";
function ISCP_GetParam(idx) {
  if (typeof (UAPCFG2) == 'string') UAPCFG2 = funSM4Str2Json(UAPCFG2);

  var arr = [{
      iscpIP: UAPCFG2.ISCP_IP+""+UAPCFG2.ISCP_APPID,
      ip: UAPCFG2.ISCP_IP,
      iscpPort: UAPCFG2.ISCP_PORT,
      user: UAPCFG2.ISCP_USER,
      appId: UAPCFG2.ISCP_APPID
    },
    {
      iscpIP: UAPCFG2.ISCP_IP+""+UAPCFG2.ISCP_APPID,
      iscpPort: UAPCFG2.ISCP_PORT,
      ip: UAPCFG2.XTBG_IP,
      port: UAPCFG2.XTBG_PORT
    },
    {
      iscpIP: UAPCFG2.ISCP_IP+""+UAPCFG2.ISCP_APPID,
      iscpPort: UAPCFG2.ISCP_PORT,
      ip: "http://" + UAPCFG2.XTBG_IP,
      port: UAPCFG2.XTBG_PORT
    }
  ]
  return arr[idx]
}

//ISCP初始化
function ISCP_Init(callback, callbackError) {
  LogMAMInfo('正在建立安全连接.', 'ISCP');
  top.uexISCP.Init(ISCP_GetParam(0), function (state, log) {
    //LogMAMInfo('安全交互平台初始化:'+state+':'+log,'ISCP');
    console.log('状态:' + state, 'log:' + log);
    if (state == 0) { //初始化成功
      //	LogMAMInfo('安全交互平台初始化[成功]'+log,'ISCP');
      if (typeof (callback) == 'function') callback();
    }
    if (state == 1) { //断线
      LogMAMInfo('安全交互平台初始化[失败]' + log, 'ISCP');

    }

  });
}

//建立安全链接
function ISCP_ConnectServer(callback, callbackError) {
  //LogMAMInfo('正在建立安全链接','ISCP');
  LogMAMInfo('正在建立安全连接..', 'ISCP');
  top.uexISCP.ConnectIscpServer(ISCP_GetParam(0), function (state, msg) {
    if (state == 0) {
      //	LogMAMInfo('安全链接建立[成功]'+msg,'ISCP');
      if (typeof (callback) == 'function') callback();
    } else {
      LogMAMInfo('安全链接建立[失败]' + msg, 'ISCP');
      if (typeof (callbackError) == 'function') callbackError();
    }
  });
}

//获取本地监听端口 funGetLocalPort
function ISCP_GetLocalPort(callback, callbackError) {
  //LogMAMInfo('获取本地安全监听端口','ISCP');
  LogMAMInfo('正在建立安全连接...', 'ISCP');
  top.uexISCP.getLocalPort(ISCP_GetParam(1), function (state, result) {
    if (state != -1) {
      LogMAMInfo('获取本地安全监听端口[成功]' + result, 'ISCP');
      if (typeof (callback) == 'function') callback();
    } else {
      LogMAMInfo('获取本地安全监听端口[失败]' + result, 'ISCP');
      if (typeof (callbackError) == 'function') callbackError();
    }
  });
}

//地址转换
function ISCP_AnalyseUrl(callback, callbackError) {
  //LogMAMInfo('安全交互平台地址转换','ISCP');
  LogMAMInfo('正在建立安全连接....', 'ISCP');
  top.uexISCP.AnalyseUrlByISCP(ISCP_GetParam(2), function (error, result) {

    LogMAMInfo('安全交互平台地址转换:' + result, 'ISCP');

    contextPath2 = result;

    if (typeof (callback) == 'function') callback(result);
  });
}

//获取ISCP连接状态
function ISCP_GetStatus(callback) {
  top.uexISCP.GetStatus(ISCP_GetParam(1), function (error, state) {
    if (error != 0) {
      console.log('ISCP_GetStatus:0');
      return;
    }
    if (typeof (callback) == 'function') callback(state);
  });
}



//关闭安全链接
function ISCP_Close(callback) {
  try {
    //if(k!=0) LogMAMInfo('准备重新建立安全连接','ISCP');
    top.uexISCP.CloseISCP(ISCP_GetParam(0));
  } catch (e) {};
}

//加载ISCP
function ISCP_Load(callback, key, callbackError) {



  if (key == 'close') {
    ISCP_Close(); //关闭安全链接
  } else if (key == 'init') {
    ISCP_Init(function () {
      ISCP_AnalyseUrl(function () {
        if (typeof (callback) == 'function') callback();
      });
    });
  } else if (key == 'server') {
    ISCP_ConnectServer(function () {
      if (typeof (callback) == 'function') callback();
    });
  } else {
    ISCP_Init(function () { //初始化
      ISCP_ConnectServer(function () { //建立安全链接
        ISCP_GetLocalPort(function () { //获取本地监听端口
          ISCP_AnalyseUrl(function () { //地址转换
            if (typeof (callback) == 'function') callback();
          }, callbackError)
        }, callbackError)
      }, callbackError)
    }, callbackError)
  }
}


/////////////////////////// ISCP[End  ] ///////////////////////////