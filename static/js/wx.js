// import { getAccess_token, getTicket, getAgentTicket } from "@/api/wx"
import axios from "axios";

// 获取微应用列表
export const getAccess_token = (params) => {
  return axios.get('/test/cgi-bin/gettoken', { params })
}
// 获取config ticket
export const getTicket = (params) => {
  return axios.get("/test/cgi-bin/get_jsapi_ticket", { params })
}
// 获取agent ticket
export const getAgentTicket = (params) => {
  return axios.get("/test/cgi-bin/ticket/get", { params })
}

function sha1(str) {
  var hash = CryptoJS.SHA1(str)
  return hash.toString()
}

function createTimestamp() {
  return parseInt(new Date().getTime() / 1000) + ""
}

function createNonceStr() {
  var e = 16
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = ""
  for (var i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
  return n
}

function sortParams(params) {
  var keys = Object.keys(params)
  keys = keys.sort()
  var newArgs = {}
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = params[key]
  })

  var string = ""
  for (var k in newArgs) {
    string += "&" + k + "=" + newArgs[k]
  }
  string = string.substr(1)
  return string
}

export default async function init() {
  const tokenRes = await getAccess_token({corpid: "ww445f8033443a14aa", corpsecret: "EQeKn7maalJLkR70r_RQ-BgCLecymoOy96e52gYVi78"})
    console.log(tokenRes,"tokenRestokenRes")
  const tikectRes = await getTicket({access_token: tokenRes.data.access_token})
  console.log(tikectRes, "tikectRestikectRes")
  const noncestr = createNonceStr()
  const timestamp = parseInt(createTimestamp())
  console.log(window.location.origin + window.location.pathname, "window.location.origin + window.location.pathname")
  const signature = sha1(
    sortParams({
        noncestr: noncestr,
        timestamp: parseInt(timestamp),
        jsapi_ticket: tikectRes.data.ticket,
        url: window.location.origin 
    })
  )

  // const agentTokenRes = await getAccess_token({corpid: "ww445f8033443a14aa", corpsecret: "q9y1tk6qe8oXMI98__2GS3barpR_ThkNxazRQqzyibM"})
  const agentTikectRes = await getAgentTicket({access_token: tokenRes.data.access_token, type: "agent_config"})
  const agentNoncestr = createNonceStr()
  const agentTimestamp = createTimestamp()
  const agentSignature = sha1(
    sortParams({
        noncestr: noncestr,
        timestamp: timestamp,
        jsapi_ticket: agentTikectRes.data.ticket,
        url: window.location.origin 
    })
  )
  console.log(agentSignature,"agentSignatureagentSignatureagentSignature")
  return new Promise((resolve, reject) => {
    function loadJS(src, callback) {
      var script = document.createElement("script")
      var head = document.getElementsByTagName("head")[0]
      script.src = src
      head.appendChild(script)
      if (typeof callback === "function") {
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            callback()
          }
        }
      }
    }

    loadJS("static/js/jweixin-1.0.0.js", function () {
      const env = true
      const params = {
        appId: env ? "1000029" : "1000527",
        corpid: env ? "ww445f8033443a14aa" : "ww4d11a39991ebffdc",
        timestamp: 1626832073,
        signature: env
          ? "70A2CDCE96A199F9173EAD51EF8F97D2FEBC04829A0E9B379927FDF20C188971"
          : "00C8F45752E602201BB55BFA80D64FA613193DCBF3F1EB7DD9AFC47A98C2A73B11",
        nonceStr: env
          ? "04E516C3A8DCA140F73EB9A3750D070366BB7543917FEFCC32E151B20F31EEA8563D7A52046A8CD37E3EB904271330BF94DCB805C6667DD2E985C5DEBCE7FC15EE"
          : "ae6c5329bd96405194e559a3103bd23c",
      }
      const agentParams = {
        agentid: params.appId, // 必填，企业应用的agentid
        corpid: params.corpid, // 必填，企业微信的corpid
        timestamp: parseInt(timestamp), // 必填，生成签名的时间戳,int类型, 如 1539100800
        nonceStr: noncestr, // 必填，生成签名的随机串
        signature: agentSignature, // 必填，签名，见附录5
      }
      console.log()
      window.wx.ready(function () {
        console.log("wx.config: ready")
        // window.setTimeout(function () {
        wx.error(function (res) {
          console.log(res, "wx+++++error")
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        })
        window.wx.invoke("agentConfig", agentParams, function (res) {
          console.log("wx.agent config: over", res)
          resolve(res)
        })
        // console.log(timestamp,noncestr,signature,"signaturesignaturesignature")
        window.wx.config({
          beta: true, // 调用wx.invoke形式的接口值时，该值必须为true。
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: params.corpid, // 必填，政务微信的cropID
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: noncestr, // 必填，生成签名的随机串
          signature: signature, // 必填，签名，见附录1
          jsApiList: [
            "ext_LocalServer_BootServer",
            "ext_LocalServer_LocalUrl",
            "ext_LocalServer_StopServer",

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
            "getZipAppDirectory",
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
            "ext_facialLandmarkDetection_getFaceData",
          ], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
        // }, 2000)
      })
    })
  })
}
