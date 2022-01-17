/*! uap v1.1.0  |  from 3g2win.com */ /* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */
//document.write('<script language=javascript src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>');
//document.write('<script language=javascript src="js/vconsole.min.js"></script>');
function loadJS(src, callback) {
  var script = document.createElement('script');
  var head = document.getElementsByTagName('head')[0];
  script.src = src;
  head.appendChild(script);
  if (typeof callback === 'function') {
    script.onload = script.onreadystatechange = function () {
      if (!script.readyState || /loaded|complete/.test(script.readyState)) {
        callback();
      }
    }
  }
}

loadJS("static/js/jweixin-1.0.0.js", function () {
  'use strict';

  function empty() {}

  let uexISCP = {}

  uexISCP = {
    Init: function (param, cb) {
      console.log(param,cb,"sssssss",wx.invoke)
      wx.invoke("ext_ISCP_Init", {
        data: {
          'iscpIP': param.iscpIP
        }
      }, function (res) {
        console.log("ext_ISCP_Init", res);
        cb(res.err_msg == "ext_ISCP_Init:ok" ? 0 : 1, res.result);
      });
    },
    ConnectIscpServer: function (param, cb) {
      console.log("ext_ISCP_ConnectService param", {
        "ip": param.ip,
        "port": param.iscpPort,
        "user": param.user,
        "appid": param.appId,
        'iscpIP': param.iscpIP
      });
      wx.invoke("ext_ISCP_ConnectService", {
        data: {
          "ip": param.ip,
          "port": param.iscpPort,
          "user": param.user,
          "appid": param.appId,
          'iscpIP': param.iscpIP
        }
      }, function (res) {
        console.log("ext_ISCP_ConnectService", res);
        cb(res.err_msg == "ext_ISCP_ConnectService:ok" ? 0 : 1, res.result);
      });
    },
    getLocalPort: function (param, cb) {
      wx.invoke("ext_ISCP_GetLocalPort", {
        data: {
          "ip": param.ip,
          "port": param.port,
          'iscpIP': param.iscpIP
        }
      }, function (res) {
        console.log("ext_ISCP_GetLocalPort ", res);
        cb(res.err_msg == "ext_ISCP_GetLocalPort:ok" ? 0 : 1, res.result);
      })
    },
    GetStatus: function (param, cb) {
      wx.invoke("ext_ISCP_Status", {
        data: {
          'iscpIP': param.iscpIP
        }
      }, function (res) {
        console.log("ext_ISCP_Status ", res);
        cb(res.err_msg == "ext_ISCP_Status:ok" ? 0 : 1, res.result);
      })
    },
    CloseISCP: function (param) {
      wx.invoke("ext_ISCP_Close", {
          data: {}
        },
        function (res) {
          console.log("ext_ISCP_Close ", res);
        })
    },
    AnalyseUrlByISCP: function (param, cb) {
      console.log("AnalyseUrlByISCP ");
      wx.invoke("ext_ISCP_AnalyseUrl", {
        data: {
          "ip": param.ip,
          "port": param.port,
          'iscpIP': param.iscpIP
        }
      }, function (res) {
        console.log("ext_ISCP_AnalyseUrl ", res);
        cb(res.err_msg == "ext_ISCP_AnalyseUrl:ok" ? 0 : 1, res.result);
      })
    },
    moniterAppStatus: empty,
    startActivity: empty
  }

  window.uexISCP = uexISCP;

  // 调用配置
  const env = true
  const params = {
    appId: env?"1000774":"1000282",
    corpid: env?"ww445f8033443a14aa":"ww4d11a39991ebffdc",
    timestamp: 1626832073,
    signature: env?"70A2CDCE96A199F9173EAD51EF8F97D2FEBC04829A0E9B379927FDF20C188971":"4633AED8F10368518D34574C21C25B11F37D0D7B0E1F342B364557A947B6E827",
    nonceStr: env?"04E516C3A8DCA140F73EB9A3750D070366BB7543917FEFCC32E151B20F31EEA8563D7A52046A8CD37E3EB904271330BF94DCB805C6667DD2E985C5DEBCE7FC15EE":"ae6c5329bd96405194e559a3103bd23c"
  }
  console.log(window.wx.ready,"window.wx.ready")
  window.wx.ready(function () {
  console.log("wx.config: ready")
  // window.setTimeout(function () {
    window.wx.invoke(
      "agentConfig",
      {
        agentid: params.appId, // 必填，企业应用的agentid
        corpid: params.corpid, // 必填，企业微信的corpid
        timestamp: params.timestamp, // 必填，生成签名的时间戳,int类型, 如 1539100800
        nonceStr: params.nonceStr, // 必填，生成签名的随机串
        signature: params.signature, // 必填，签名，见附录5
      },
      function (res) {
        console.log("wx.agent config: over", res)
      }
    )
  // }, 2000)
})
window.wx.config({
  beta: true, // 调用wx.invoke形式的接口值时，该值必须为true。
  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: params.corpid, // 必填，政务微信的cropID
  timestamp: params.timestamp, // 必填，生成签名的时间戳
  nonceStr: params.nonceStr, // 必填，生成签名的随机串
  signature: params.signature, // 必填，签名，见附录1
  jsApiList: [
    'ext_LocalServer_BootServer',
    'ext_LocalServer_LocalUrl',
    'ext_LocalServer_StopServer',
    
    "getZipAppDirectory",
    "ext_VoiceRecord_Start",
    "ext_VoiceRecord_Stop",
    "ext_VoiceRecord_Pause",
    "ext_VoiceRecord_Continue",
    "ext_VoiceRecord_Delete",
    "ext_VoiceRecord_ShowRecords",
    
    "ext_FileManager_Write",
    "ext_FileManager_Read",
    "ext_FileManager_Remove",
    "ext_FileManager_Create",
    "ext_FileManager_RemoveDirectory",
    "ext_FileManager_Exist",
    "ext_FileManager_IsDirectory",
    "ext_FileManager_Information",

    "ext_Socket_Init",
    "ext_Socket_UnInit",
    "ext_Socket_CreateChannel",
    "ext_Socket_CloseChannel",
    "ext_Socket_SendData",
    "changeNaviColor",
    "multiWindows_subscribe",

    "ext_SGMap_init",
    "ext_SGMap_Operation",
    "ext_SGMap_Search",
    "ext_SGMap_Location",

    "ext_Etas_List",
    "ext_Etas_Init",
    "ext_Etas_Reg",
    "ext_Etas_UnReg",
    "ext_Etas_checkStatus",
    "ext_Etas_Verify",
    "ext_Etas_SaveData",
    "ext_Etas_GetData",
    "ext_Etas_RemoveData",
    "ext_Etas_Clear",
    "ext_Etas_OffLineVerify",

    // "ext_ISCP_Init",
    // "ext_ISCP_ConnectService",
    // "ext_ISCP_GetLocalPort",
    // "ext_ISCP_Close",
    // "ext_ISCP_Status",

    "ext_Database_Open",
    "ext_Database_Exec",
    "ext_Database_Query",
    "ext_Database_Close",

    "ext_rlble_initBluetoothAdapter",
    "ext_rlble_scanBluetoothDev",
    "ext_rlble_startConnectBluetoothDev",
    "ext_rlble_onBluetoothDevConnDataRecv",
    "ext_rlble_BluetoothDevSendData",
    "ext_rlble_closeBluetoothDevConnection",
    "ext_rlble_stopBluetoothDevScan",

    "ext_Popover_Open",
    "ext_Popover_Close",

    "ext_Net_Download",

    "multiWindows_open",
    "multiWindows_close",
    "multiWindows_startWidget",
    "multiWindows_finishWidget",
    "multiWindows_subscribe",
    "multiWindows_publish",

    "selectEnterpriseContact",
    "openChatWithMsg",
    "openUserProfile",

    "onMenuShareAppMessage",
    "onMenuShareWechat",
    "shareAppMessage",
    "shareWechatMessage",
    "onMenuShareTimeline",

    "chooseImage",
    "getLocalImgData",
    "previewImage",
    "uploadImage",
    "downloadImage",
    "previewFile",

    "chooseVideo",
    "uploadVideo",
    "downloadVideo",

    "startRecord",
    "stopRecord",
    "onVoiceRecordEnd",
    "playVoice",
    "playVoice",
    "stopVoice",
    "onVoicePlayEnd",
    "startRecordVoiceBuffer",
    "onRecordBufferReceived",
    "stopRecordVoiceBuffer",
    "uploadVoice",
    "downloadVoice",
    "translateVoice",

    "startWifi",
    "stopWifi",
    "connectWifi",
    "getWifiList",
    "onGetWifiList",
    "onWifiConnected",
    "getConnectedWifi",

    "openBluetoothAdapter",
    "closeBluetoothAdapter",
    "getBluetoothAdapterState",
    "onBluetoothAdapterStateChange",
    "startBluetoothDevicesDiscovery",
    "stopBluetoothDevicesDiscovery",
    "getBluetoothDevices",
    "onBluetoothDeviceFound",
    "getConnectedBluetoothDevices",
    "createBLEConnection",
    "closeBLEConnection",
    "onBLEConnectionStateChange",
    "getBLEDeviceServices",
    "getBLEDeviceCharacteristics",
    "readBLECharacteristicValue",
    "writeBLECharacteristicValue",
    "notifyBLECharacteristicValueChange",
    "onBLECharacteristicValueChange",

    "setClipboardData",
    "getClipboardData",

    "getNetworkType",
    "onNetworkStatusChange",

    "openLocation",
    "getLocation",
    "startAutoLBS",
    "stopAutoLBS",
    "onLocationChange",

    "onHistoryBack",
    "hideOptionMenu",
    "showOptionMenu",
    "closeWindow",
    "hideMenuItems",
    "showMenuItems",
    "hideAllNonBaseMenuItem",
    "showAllNonBaseMenuItem",
    "onUserCaptureScreen",
    "openUrl",

    "scanQRCode",

    "getStepCount",
    "getAllPhoneContacts",
    "addCalendarEvent",

    "showWatermark",
    "hideWatermark",

    "checkIsSupportSoterAuthentication",
    "checkIsSoterEnrolledInDevice",
    "startSoterAuthentication",
    "bioassayAuthentication",

    "launch3rdApp",
    "request3rdApp",
    "getInstallState",

    "ocr",
    "getLocalResPath",
    
    "checkJsApi",

    "ext_gislocation_init",
    "ext_gislocation_start",
    "ext_gislocation_stop",

    "ext_SandBox_Reg",
    "ext_SandBox_StartSubApp",
    "ext_SandBox_CloseSubApp",
    "ext_SandBox_ScreenPolicy",
    "ext_SandBox_isRoot",
    "ext_SandBox_isSimulator",
    "ext_SandBox_WaterMark",
    "ext_SandBox_ScreenShot",
    "ext_SandBox_DelePhoto",
    "ext_SandBox_UploadShot",

    "ext_wxlog_setLogOpen",
    "ext_wxlog_getLogFile",
    "ext_SGMap_init",
    "ext_SGMap_Location",

    "ext_DataCache_Get",
    "ext_DataCache_Save",
    "ext_DataCache_SaveInfo",
    "ext_DataCache_GetInfo",
    "ext_DataCache_RemoveInfo",

    "ext_Net_Upload",
    "ext_Net_CancelUpload",
    "ext_Net_Download",

    "ext_screenControl_direction",

    "ext_WeMeet_Init",
    "ext_WeMeet_Login",
    "ext_WeMeet_Logout",
    "ext_WeMeet_Join",

    "ext_facialLandmarkDetection_init",
    "ext_facialLandmarkDetection_getFaceData"
  ], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
})
})