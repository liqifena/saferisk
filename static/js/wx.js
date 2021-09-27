export default function() {
wx.ready(function () {
  console.log("wx.config: ready")
  window.setTimeout(function () {
    wx.invoke(
      "agentConfig",
      {
        agentid: "1000416", // 必填，企业应用的agentid
        corpid: "wwf386457be7bb72ea", // 必填，企业微信的corpid
        timestamp: 1626832073, // 必填，生成签名的时间戳,int类型, 如 1539100800
        nonceStr: "AMQGnmTMzhJetshY", // 必填，生成签名的随机串
        signature: "e9ce82262c2ee6c7f62f4e690883927d460a79fd", // 必填，签名，见附录5
      },
      function (res) {
        console.log("wx.agent config: over", res)
      }
    )
  }, 2000)
})
wx.config({
  beta: true, // 调用wx.invoke形式的接口值时，该值必须为true。
  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: "wwf386457be7bb72ea", // 必填，政务微信的cropID
  timestamp: "1626832073", // 必填，生成签名的时间戳
  nonceStr: "AMQGnmTMzhJetshY", // 必填，生成签名的随机串
  signature: "fb9f560a9b4824f7db3525926994010de74ea055", // 必填，签名，见附录1
  jsApiList: [
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

    "ext_ISCP_Init",
    "ext_ISCP_ConnectService",
    "ext_ISCP_GetLocalPort",
    "ext_ISCP_Close",
    "ext_ISCP_Status",

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
  ], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
})
}