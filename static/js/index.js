// import BluetoothDevice from "./bluetooth"
$(function () {
  // var vConsole = new VConsole();
  $.getScript("static/js/jweixin-1.0.0.js", function () {
    "use strict"
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
  })

  $(".devices ul").on("click", "button", function (ev) {
    var btn = $(ev.target)
    var dataType = btn.attr("dataType")
    var deviceInfo = btn.parent().parent().data("device")
    console.log("deviceinfo", deviceInfo)
    if (dataType == "connDevice") {
      bluetoothDeviceConnect(deviceInfo)
    } else if (dataType == "readData") {
      bluetoothDeviceReadData(deviceInfo)
    } else if (dataType == "writeData") {
      bluetoothDeviceWriteData(deviceInfo)
    } else if (dataType == "closeDevice") {
      bluetoothDeviceClose(deviceInfo)
    }
  })

  $(".wifi ul").on("click", "button", function (ev) {
    var btn = $(ev.target)
    var dataType = btn.attr("dataType")
    var deviceInfo = btn.parent().parent().data("device")
    console.log("deviceinfo", deviceInfo)
    if (deviceInfo.secure) {
      var pwd = window.prompt("请输入wifi密码", "")
      if (pwd != null && pwd != "") {
        deviceInfo.pwd = pwd
      } else {
        alert("请输入wifi密码")
        return
      }
    }
    if (dataType == "connDevice") {
      connectWifi(deviceInfo)
    }
  })

  $("#socketType").on("change", function (ev) {
    socketType = $("#socketType").val()
  })
  socketType = $("#socketType").val()

  $("#bluetoothdevicesdiscovery").on("click", "button", function (ev) {
    var target = $(ev.target)
    var type = target.data("type")
    var deviceId = target.parent("li").data("deviceId")
    if (type == "connect") {
      $(target).attr("disabled", "disabled")
      device.connectDevice(
        deviceId,
        function (res) {
          $(target).nextAll().removeAttr("disabled")
        },
        function (res) {
          console.log("连接低功耗蓝牙设备失败")
          $(target).removeAttr("disabled")
          $(target).nextAll().attr("disabled", "disabled")
        }
      )
    } else if (type == "close") {
      device.closeConnectedDevice(deviceId, function (res) {
        console.log("断开低功耗蓝牙设备成功")
        $(target).attr("disabled", "disabled")
        $(target).prev().removeAttr("disabled")
        $(target).nextAll().attr("disabled", "disabled")
      })
    } else if (type == "services") {
      if (device.devices && device.devices[deviceId]) {
        device.getDeviceServices(deviceId, function (res) {
          if (res && res.services && res.services.length > 0) {
            target.parent("li").data("services", res.services)
          }
        })
      }
    } else if (type == "characteristic") {
      if (target.parent("li").data("services")) {
        var services = target.parent("li").data("services")
        $.each(services, function (i, service) {
          device.getDeviceCharacteristics(
            deviceId,
            service.uuid,
            function (res) {
              service.characteristics = res.characteristics
              console.log("li data:", target.parent("li").data("services"))
            },
            function (res) {
              console.log("获取特征值出错：", res)
            }
          )
        })
      } else {
        alert("请先调用获取服务按钮")
        console.log("请先调用获取服务按钮")
      }
    } else if (type == "readCharacteristic") {
      if (target.parent("li").data("services")) {
        var services = target.parent("li").data("services")
        $.each(services, function (i, service) {
          var isExit = false
          if (service.characteristics) {
            $.each(service.characteristics, function (m, characteristic) {
              if (characteristic.properties.read) {
                isExit = true
                device.readCharacteristicValue(
                  deviceId,
                  service.uuid,
                  characteristic.uuid,
                  function (res) {
                    console.log("read characteristic success ", res)
                  },
                  function (res) {
                    console.log("read characteristic fail ", res)
                  }
                )
                return false
              }
            })
          }
          if (isExit) {
            return false
          }
        })
      }
    } else if (type == "writeCharacteristic") {
      if (target.parent("li").data("services")) {
        var services = target.parent("li").data("services")
        $.each(services, function (i, service) {
          var isExit = false
          if (service.characteristics) {
            $.each(service.characteristics, function (m, characteristic) {
              if (characteristic.properties.write) {
                isExit = true
                device.writeCharacteristicValue(
                  deviceId,
                  service.uuid,
                  characteristic.uuid,
                  "this is test",
                  function (res) {
                    console.log("write characteristic success ", res)
                  },
                  function (res) {
                    console.log("write characteristic fail ", res)
                  }
                )
                return false
              }
            })
          }
          if (isExit) {
            return false
          }
        })
      }
    }
  })
  $("#bluetoothdevicesdiscovery").on("click", "li", function (ev) {
    var target = $(ev.target)
    if (target.is("li")) {
      if (target.data("selected")) {
        target.removeData("selected")
        target.removeClass("selected")
      } else {
        target.data("selected", true)
        target.addClass("selected")
      }
    }
  })
})

function createNonceStr(len) {
  var e = len ? len : 16
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    a = t.length,
    n = ""
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
  return n
}

function openLog() {
  console.log("ext_wxlog_setLogOpen start")
  wx.invoke(
    "ext_wxlog_setLogOpen",
    {
      data: {
        open: 1,
      },
    },
    function (res) {
      console.log("ext_wxlog_setLogOpen end", res)
    }
  )
}

function getLog() {
  console.log("ext_wxlog_getLogFile start")
  wx.invoke("ext_wxlog_getLogFile", {}, function (res) {
    console.log("ext_wxlog_getLogFile end", res)
  })
}

function isIosOrAndroid() {
  var u = navigator.userAgent
  var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1 //android终端
  if (isAndroid) {
    return 1
  }
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
  if (isiOS) {
    return 2
  }
  return 0
}

function createDiretory() {
  console.log("getZipAppDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_Create start")
      wx.invoke(
        "ext_FileManager_Create",
        {
          data: {
            path: path,
            name: "create",
          },
        },
        function (res) {
          console.log("ext_FileManager_Create end", res)
        }
      )
    }
  )
}

function createSpecialDirectory() {
  var path = "/storage/emulated/0"
  wx.invoke(
    "ext_FileManager_Create",
    {
      data: {
        path: path,
        name: "videods",
      },
    },
    function (res) {
      console.log("ext_FileManager_Create end", res)
      console.log("callee", arguments.callee)
    }
  )
}

function removeDiretory() {
  console.log("ext_FileManager_RemoveDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_RemoveDirectory start")
      wx.invoke(
        "ext_FileManager_RemoveDirectory",
        {
          data: {
            path: path + "/create",
          },
        },
        function (res) {
          console.log("ext_FileManager_RemoveDirectory end", res)
        }
      )
    }
  )
}

function isExistFile() {
  console.log("ext_FileManager_Exist start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_Exist start")
      wx.invoke(
        "ext_FileManager_Exist",
        {
          data: {
            path: path + "123.txt",
          },
        },
        function (res) {
          console.log("ext_FileManager_Exist end", res)
        }
      )
    }
  )
}

function isDirectory() {
  console.log("getZipAppDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_IsDirectory start")
      wx.invoke(
        "ext_FileManager_IsDirectory",
        {
          data: {
            path: path + "123.txt",
          },
        },
        function (res) {
          console.log("ext_FileManager_IsDirectory end", res)
        }
      )
    }
  )
}

function queryMeta() {
  console.log("getZipAppDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_Information start")
      wx.invoke(
        "ext_FileManager_Information",
        {
          data: {
            path: path + "123.txt",
          },
        },
        function (res) {
          console.log("ext_FileManager_Information end", res)
        }
      )
    }
  )
}

function readEncryptFile() {
  console.log("getZipAppDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_Read Encrypt Base64 Start")
      wx.invoke(
        "ext_FileManager_Read",
        {
          data: {
            path: path + "124.txt",
            type: "BASE64",
          },
        },
        function (response) {
          console.log("ext_FileManager_Read Encrypt Base64 End", response)
        }
      )
    }
  )
}

function readTextFile() {
  console.log("getZipAppDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_Read Text File Start")
      wx.invoke(
        "ext_FileManager_Read",
        {
          data: {
            path: path + "123.txt",
            type: "TEXT",
          },
        },
        function (response) {
          console.log("ext_FileManager_Read Text File End", response)
        }
      )
    }
  )
}

function writeEncryptFile() {
  console.log("getZipAppDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_Write Encrypt Base64 File Start")
      wx.invoke(
        "ext_FileManager_Write",
        {
          data: {
            name: "124.txt",
            data: "5a+G56CB",
            type: "BASE64",
            path: path,
          },
        },
        function (response) {
          console.log("ext_FileManager_Write Encrypt Base64 File End", response)
        }
      )
    }
  )
}

function writeTextFile() {
  console.log("getZipAppDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_Write Text File Start")
      wx.invoke(
        "ext_FileManager_Write",
        {
          data: {
            name: "123.txt",
            data: "第一章看戏      “为什么，你为什么要这样对我！”一个长相清纯浑身是血的十五六岁少女趴在地上，拼命用已经被污泥污染的手向前爬，“夜陌！”      坐在石桌前的黑衣少年听到声音眉头一皱，拿起茶杯扔向少女。      “啊！”      少女的额头被茶杯砸出了一个大口子，鲜血立马流了出来，“为什么你不肯接受我，我明明为了你什么都可以做，为什么你心里永远只有蓝依非！”少女刚说完少年就突然出现在她面前，一把掐住她的脖子。      “你再多说一个字，我就让你灰飞烟灭！”      夜陌眼中透着凉意，而少女只是轻蔑一笑，一把抓住他的手，她要引爆自己的丹田，和夜陌同归于尽。“我得不到的东西，宁可毁掉也绝不会让给别人！”说罢洞内便发生了大爆炸。      洞口坍塌，而夜陌安然无恙的站在废墟之中：“一个绿玄境的炼丹师也想跟我同归于尽？”夜陌说完就跳上了飞来的大鹏背上离去了。      “嘶～好痛啊！”      少女从废墟中醒来，站起来时还有些跌跌撞撞。“我怎么穿这儿来了？我不是选择的宫斗剧吗？”蓥汐回忆着自己当时下载了一个穿越手游，只要交一百块就能选择任何一个模式、故事穿书体验。      起初她还不信，等做了几个基础任务（无需穿书）获得了几百块的报酬后，还是选择了一个最简单的宫斗剧，想去看看古代的美男子，但是，眼前这景象和脑海中的记忆明显不是吧！      蓥汐伸了伸懒腰，身上的伤口竟然全部开始愈合，身上的血迹和泥土也慢慢消失。      “宿主身份正在接入，请按时查收。”      一阵标准的女声语音播报在脑海中响起，下一刻蓥汐面前就出现了一块悬浮的电子屏。      “蓥汐，南襄别山南郢宗辈分第二大的浅沅峰峰主，因为喜欢上邪魔宫少主夜陌而以闭关为由，偷偷下山。发现夜陌与南郢宗宗主的内门弟子蓝依非有染，竟大打出手，最后被夜陌关在郊外的山洞内，挑断了脚筋，最后自爆丹田而亡。”      蓥汐读完人物介绍，像发现了新大陆似的瞪大双眼：好家伙，这女的不会是个“瓜”吧！好好的峰主不做去追男人，啧啧啧，爱情啊！      “请宿主选择修炼度与武器。”      电子音响起，面前的电子屏上右边是七个不同颜色的带字方框：赤玄境、橙玄境、黄玄境、绿玄境、青玄境、蓝玄境、紫玄境。右边出现了三个图片：寒铁做的铁扇、玉石做的笛子和一把剑柄青蓝相间的银剑。      “赤橙黄绿青蓝紫，那紫肯定是最厉害的！”蓥汐说着就点了“紫玄境”，电子屏没反应，蓥汐又点了几次，还是没反应。“嗯？坏掉了？”      “提示：宿主任务未完成，不能选择更高级别的修炼度，请重新选择。”      “……”      啊啊啊！蓥汐现在想把那一百块弄回来，这么多限制，还让不让人活了，自己又不会修仙，又不能选高档玩意儿，我！      “不选就不选！”      蓥汐选择了“蓝玄境—大成—后期”，确认后三把武器就沾满了整个屏幕。“可以多选吗？”蓥汐用乞求的语气说。“请宿主选择武器：十七件武器中您最多可以选两件，选择后不得重选，如有违规将接受系统惩罚。”电子音再次响起。      蓥汐气到爆炸：这是谁定的规矩！我他妈弄死他（她）！      因为配了解说，所以图片比较大，要一页一页的翻。      “玄阴扇，自带许多飞镖银针，是很好的暗器。这个不错这个不错！”蓥汐说着点了玄阴扇下面的小方框，一个小红勾出现在方框内，“让我看看还有些什么。”      蓥汐用手不停的滑动屏幕，许多奇形怪状的兵器出现在眼前。      “怨郄枪，长得好像方天画戟啊！”      蓥汐看着眼前的银柄、白穗、银色枪头的怨郄枪，觉得还不错就选了，最后点了一个确认。      “系统筹备中，请宿主做好准备，宿主任务：阻止女二黑化杀死女主。任务开启后系统将不再与宿主联系，完成任务即可随时离开。”      “啊？什么？！”      蓥汐还没说完就消失在了原地，再次睁眼自己居然侧躺在一棵树的粗树干上，左手上还拿着一个桃子，右手拿着一个苹果，还被啃了一口。      “？”      我变成猴子了？      蓥汐是农村出来的，没少爬树，所以面对这种情况也不怕，刚想起身，就听到树下的动静。蓥汐向下看去：一个嘴角渗血、头发凌乱的白衣少年被一个扎着丸子头的小萝莉搀扶着，而夜陌就站在二人面前。      “我去，好戏！”      蓥汐立马从躺的姿势变成了趴着，只为了更清楚的看戏。      “小师妹快走，我拦住他！”      白衣少年擦了擦嘴角的血，强撑着身体向前走了两步，将少女挡在身后。“二师兄！”少女眼泪一下就出来了，夜陌的眼神立马变得有些不自在。      “蓝依非，要么你今天跟本少主走，要么日后我天天来南襄别山找你。”夜陌开口说道。      蓝依非心头一震：要是被师尊（宗主）知道了，自己肯定会被逐出师门的，可是……      蓝依非急得落泪了。      见夜陌没有要走的意思，少年召唤出命剑又要冲上去，夜陌一挥袖就将少年打了回来。蓝依非见状立马跑过去挡在少年身前：“夜陌，有什么事冲着我来，别伤害其他人！”      蓥汐在树上看的津津有味：“大型深情男配与呆萌女主互撕现场，下一幕应该是男配哄女主了吧！”      看的小说太多，莫名其妙就会产生一些构思。      “师妹快走，他是冲着你来的，不会对我怎么样的！”少年站起来，摇摇晃晃的身体看起来很弱不禁风。      “你都说是来找她的，关你啥事？自作多情而已。”蓥汐吃完了苹果，拿出左手中的油桃，也不分洗没洗就一口咬了上去。 ------------  第二章意外让我措不及防      “你倒是很识相，可就不该多管闲事！”夜陌说着便扑向少年。“二师兄！”蓝依非吓得往旁边一躲，“嘭”的一声，蓝依非睁开眼，夜陌被击飞出去三尺远。      双眼紧闭、将剑挡在身前的少年睁开眼，发现自己安然无恙，而身后，一只手放下了。      “师、师尊？”      蓝依非惊讶的看着穿着一身青衣的蓥汐，少年也转过身，看着蓥汐慵懒的眼神，少年立马跪下抱拳道：“南襄别山旭孥峰二弟子萧伢拜见师尊！”      蓝依非见状也跟着跪下了，嘴里还含糊不清的说着：“南、南襄别山曲诏峰四弟子蓝依非拜见师尊！”蓝依非说话有些颤抖，蓥汐打了个哈欠，咬了一口油桃说：“起来吧，不想行礼就别行，有人会行，做作的像我打了你一样！”      蓥汐看着蓝依非脸色发白、慌张的语气，也想到了蓝依非应该是怕自己的，毕竟是千年难得一遇的浅沅峰峰主，是个弟子都是激动紧张吧！      蓥汐不自觉的自豪起来，蓝依非搀扶着萧伢站起来，夜陌也站起身来，一副瞧不起他人的样子说：“名门正派也会搞偷袭？”“偷你妹！”蓥汐一边咀嚼一边说，“你一个蓝玄境初期巅峰者跟两个加起来还没有一个绿玄境中期低级实力的小孩打，难怪你是魔！”      “你再说一遍！”      夜陌的眼神变得犀利，右拳紧紧握着：他最恨的就是别人说他是魔，因为这个词，从小他就没有母亲的疼爱、朋友的关怀，只有皇子间的勾心斗角。      “自己耳朵不好听不清楚就别听了，浪费我口水！”      蓥汐说着转身就要走。      “师尊小心！”      萧伢一下跑过去挡在蓥汐身前，忽然一下自己的腰不知道被谁单手抱住，往右边侧了一下，再次睁开眼，夜陌已经不见了，蓥汐只是对着空气皱了皱眉松开了手。      “师、师尊？”      萧伢从小到大都没被女孩子抱过，第一次被女孩子抱居然还是被小师尊抱。唰的一下，萧伢脸比蓥汐手中的桃子还红，差点站不稳，幸亏蓝依非接住了。      “二师兄，你这是怎么了？”蓝依非看着萧伢红透了的脸，有些疑惑：怎么回事？他不应该先关心我有没有事吗？难道被施了法？      蓝依非扭头看向缓缓走上山的蓥汐，眼神暗淡下来。      “阻止女二黑化杀了女主？连主角都不告诉我是哪些让我做个鬼的任务，想让我进来打酱油的吧！”蓥汐气喘吁吁的靠在树下休息，拿着玄阴扇扇风，“茫茫宗门，上哪儿去找女主女配啊？”      蓥汐看到蓝依非满头大汗但仍旧笑盈盈的扶着萧伢上来，就觉得不简单：那女的一看就是女主，那男的应该是女主的小迷粉！（别问，问就是我更有经验）      人在树下歇，狗粮路上撒。算了，不看了不看了，赶紧爬完赶紧干饭去！      蓥汐来的时候就只有一个苹果一个桃子，还不够她塞牙缝，现在肚子饿得咕咕叫。蓥汐看着深入云端的石梯，不由得一边走一边抱怨：“诶哟我的个天，这南郢宗设在哪儿不好，偏偏弄在山顶，是想给多少人减肥啊！”蓥汐说过：没一百一十斤绝不减肥，就算有也不会减肥，减肥是永远不可能的！      而现在，她却要通过爬楼梯减肥。      “爬完了，我一定要吃一桌子好菜，喝一壶桃花酿，诶呀，咋还没到嗫，累死我了，不行，得歇会儿。”蓥汐说话都是哑着嗓子，就这样，后面两人有说有笑的慢慢走，蓥汐一个人自言自语的拼命往上爬，甩了二人一大半。      烈日炎炎，地上的石头被晒得发烫，烫的蓥汐以为自己没穿鞋。      “我他妈终于爬完了！”      蓥汐看到宗门大门的时候，开心的像一个小孩儿一样，满身疲惫都忘却了，开心的往里面跑。刚跑到门前，一个穿着白色长袖衫的披发少年就挡住了她。      “我去，好帅！”      蓥汐一脸花痴呢看着少年：一张精致小巧的脸上，两撮长发垂在耳朵前，额心一朵红色莲花又小又生动，柳叶眉下一双葡萄一样大一样黑的眼睛正疑惑的看着她。      “咳咳。”      少年被蓥汐的眼神看的有些不自在，立马红着耳根子低头咳嗽两声。      蓥汐摇摇头，拍了拍自己的脸颊：蓥汐！你是他师尊！蓥汐深吸一口气问：“这位师侄有何事？”少年刚还没认出蓥汐，一听语气，立马弯腰作揖道：“榀剑峰大弟子书涟见过师尊。”      “不用行礼，没事的话我就进去了！”      蓥汐说着就抬起了脚，“宗主有令，任何人出入宗门必须要用符文验证身份，没有符文就不能外出进入宗门！”书涟伸出左臂挡住蓥汐。      蓥汐笑了笑放下了脚，见书涟放下了手连忙半蹲着从书涟身旁跑进去。      “诶，小师尊不能进去！你没有符文不可以进来的！”书涟在后面狂追着，蓥汐像参加八百米赛跑一样，拼了命的往前跑：“我就偷偷进来一次，以后都不会了，你就放过我吧！”      蓥汐跑出去老远却突然停住了，一回头就看见书涟快步跑过来：”别过来！”“啊？”书涟还没听清就被什么东西绊倒了，一下飞到蓥汐面前，蓥汐吓得往左边一闪。“扑通”，书涟掉进了池塘。      “噗！”      书涟从水里钻出来，嘴里吐着水，一边擦脸上的水一边叨叨着：“小师尊，你出关就不喜欢打招呼的吗！”      “啊这，我、我都说了别过来，是你自己……”冲过来的。“现在好了，等会参加新弟子入选仪式的衣服都湿了，师傅肯定会骂死我的！小师尊都怪你！”书涟委屈巴巴的嘟着小嘴，蓥汐刚想反驳却看到孩子委屈的样子，就没说出口。      而是歪着头跟他说：“要不你现在去换一身，我先帮你去前面看着？”书涟拧了拧潮湿的衣服，抿了抿嘴说：“那好吧，不过师尊你这一次可不要再捣乱了！” ------------  第三章入选仪式      以前每到新弟子上山，蓥汐都是最积极的，大清早起的比鸡都早，给那些新弟子送吃的、喝的、玩的，结果入选仪式上没一个报自己峰的，每一次都会大闹一场，哄都哄不好。      “放心吧！我肯定不会！”      蓥汐自信的拍拍胸脯，但是心里却不是这样想的：放心吧，我肯定会的！      书涟不放心的看了看蓥汐，蓥汐笑着对上他的眼神，书涟纠结的走开了。      “穿书连个系统、AI都不给，人物也不跟我说，甚至连故事情节大纲都没看我一下，这不典型的由于事故而穿越的穿越剧吗？还浪费我一百块钱！”      蓥汐一边走一边愤愤不平，她发誓，她出去了绝对要给差评，妥妥的差评，但是，没完成任务出不去咋办？      大殿上站着成功录取的学子，长老们都站在两旁，宗主扶庸坐在殿前。      “诶，你说小师尊怎么还没到？难不成还没出关？”一个站在梁柱后的白衣少年说。“谁知道，不来还好，不然，这些新学子要是哪个被看上，可不得遭殃？”身旁的少年回答。      “宗主，小师尊平日里是最积极做这些事的，现在还没来可能是还没出关，我们可以先开始了。”一个看起来瘦瘦弱弱的长胡子老者作揖道。      宗主听后，看了看空荡荡的门口，最终还是开口了：“入选仪式现在开始。”      话一说完，不少新弟子开始切切私语。蓥汐弯着腰偷偷从门口进来，站在右边一个香炉旁，左看右看的往人群里瞅着。      “古代的人都好帅好美啊！个个都像是从诗里走出来的一样，我要是长成那样还至于大二了都没人追吗！”      蓥汐看到面前的学子们貌美如花、风度翩翩，差点犯花痴。      “现在，由排名榜前十位学子自由选择师傅，也请各位长老准备好自己的学子印（自己门下弟子应该佩戴的东西）。”      站在宗主左边的三弟子执奉说。      第一名是一名女弟子，高昂着头一副骄傲自满的样子：“蚕涯慕家慕芗芸愿拜宗主为师，还望宗主成全！”说着就跪下作揖。      在场的长老弟子都十分惊讶，因为蓥汐喜欢闹脾气，所以宗主很早就说过自己除了门下早已收下的五个弟子，不再收徒弟了，而现在。      执奉皱着眉转身看向宗主，扶庸轻轻摇了摇头，执奉会意的点点头，转身面对学子说道：“宗主曾说过不再收徒，还请慕姑娘再择良师。”      慕芗芸霎时间就觉得耳朵很热：从小到大她都被所有人宠着，从没有人会拒绝她，还是这么多人面前。      慕芗芸脸色灰蒙蒙的，缓缓站起来，看向两边，选了之前提醒宗主开始仪式的长老为师。第二名是一名男弟子，选择了旭孥峰峰主为师；第三名、第四名……      到第十名时，一个长得瘦瘦小小、弱不禁风的小女孩从人群中走出来，女孩刚想说话，就有人嘲笑起来：“小孩子还是回家玩泥巴去吧，这可不是小孩子来的地方！”“就是就是，不会是靠关系进来的吧！”      人群议论纷纷，蓥汐看向人群中笑得最开心的那人，那人也感受到了一道令人瘆得慌的目光，四处张望却没有一个人看他。      女孩快被急哭了，一直用手揉着身上用浅粉色粗布做成的裙子，过了好大一会才颤抖着举起右手，用颤抖的声音说：“我、我选她！”      声音不大，但却让几位长老听清楚了，顺着小女孩的目光看去，蓥汐啃着苹果站在香炉旁，乍眼看去还以为是哪家的糯米团子被大人围住了。      “啊？我吗？”      蓥汐看着所有人的目光，一脸茫然的指了指自己。少女怯怯的点了点头，刚要放下手，一只手就抓住了她，抬头一看，蓥汐嘴里咬着苹果，右手抓着她的手，左手拿着一个绑着玉白色铃铛的红绳给她戴上。      “出门太急了，就带了一个这个，说了入我这个门可别后悔，摘下来你就不是我徒弟了！”      蓥汐想起自己看的穿越文和修仙文，大部分挑选弟子的时候都是这样子。      少女点点头，收回手，红着脸跟着蓥汐站到一旁。扶庸眼底有一丝丝笑意，却很快就消失了。      十名以后的弟子都要长老们自己去选，但是蓥汐不稀罕，好看都走了剩下的都像小孩子的少年郎，这是想让她带孩子吗？！      所有长老挑完以后，唯独剩下了三个男弟子，一个默默无语、像个木头，两个身高差不多穿着差不多的双胞胎。      扶庸看了看三人，又看了看蓥汐说道：“浅沅峰峰主已经三百年没有过新弟子，往日打扫的弟子都是别峰借过去的，蓥汐，你看这三个如何？”      蓥汐扭头看了看一脸期待的几位长老，又看了看把自己当成光的两个双胞胎，深吸一口气，心不甘情不愿的说：“行吧，我要了！”      “徒儿白何，见过师傅！”“徒儿白熙，见过师傅！”两人刚同时下跪，异口同声道。      “我去这口吻，不会是两个中二少年吧！”      蓥汐在心里暗叫不好，但是脸上还是笑容依旧：“起来吧。”我的好徒弟……      “谢师傅！”      白氏兄弟起身后，其中一个人拽着冰块脸走到蓥汐身后。三人经过蓥汐身旁时，蓥汐感到了深深的耻辱：我日，古代的男的都有一米七吗？！一米六八的我怎么活啊！      “入选仪式结束，请各位长老带新弟子回到各峰。”      执奉说完，所有人陆陆续续的出去了，蓥汐最先冲出去，但是走到一半就停下了。      “师傅怎么了？”      少女跟在蓥汐身后，有些疑惑。蓥汐皱着眉抿着嘴：完了完了，浅沅峰在哪儿来着？      这时，恰好一位抱着装着衣服的男弟子从面前经过，蓥汐一把抓住他上前询问：“那个，问个路。”      “问路？小师尊莫不是又忘了回峰的路了？”男弟子似乎有些习以为常。蓥汐听这语气，肯定的点了点头。 ------------  第四章你谁啊      男弟子指了指蓥汐右边的红色山峰：“在那边。”说完就离开了。      蓥汐看着深入云端的山峰，立马唉声叹气道：“我去，还要爬山啊！”蓥汐无奈的往那边走，刚走到一处断崖，，一只红色的大鸟飞了过来。      “朱雀？”      蓥汐一脸茫然的看着目不转睛盯着自己的大鸟。大鸟蹭了蹭蓥汐，蓥汐的人脸被羽毛弄得有些痒，脑中突然浮现出一个名字：沅儿。      “好了沅儿，该走了！”      蓥汐说完，大鸟就背对着几人，张开了翅膀。“唳！”大鸟叫了一声，示意让几人上去。      “我的天啊！是神兽朱雀啊！我第一次见诶！师傅你太牛了吧！”白熙好奇的跑过去扒拉沅儿，沅儿扑腾了一下翅膀，白熙直接飞了出去。      “咳咳，该走了，我还等着吃午饭呢！”      蓥汐咳嗽两声，止住了笑容，然后纵身一跳跳到鸟背上站着，四人也跟着上去了。      “南襄别山好漂亮啊！”      白何惊叹的看着下面的风景。“我早就听说这里美若仙境，只是没机会来而已！”白熙自豪的双手环胸站在白何身旁。“咦～你可别吹了！”白何嫌弃的看着他。      “本来就是，你个书呆子就知道看书，还没我消息灵通！”白熙不服气的说。“书中自有黄金屋！你自己不懂怪得了谁？”两人吵着吵着就动起了手。      “行了行了，多大点事，吵什么吵！”      蓥汐坐在鸟背上啃着苹果，看着两人。“师傅。”两人同时站好，不愧是两兄弟。“别喊我师傅，我资历比他们深，按规矩，你们得给我喊师尊，知道吗？”蓥汐打了个哈欠。      “知道了师傅！”两人同时开口说。      “……”      蓥汐想原地自爆：中二少年她都能接受，为什么还是话唠！！！      “师尊。”少女跟在羞答答的走过来，看着蓥汐。“怎么了？”蓥汐有些茫然的看着她。“我、我叫武缨，武功的武，红缨的缨。”少女说完脸就红了。      我是有多可怕还是有多帅？说个话都能害羞，你是第一次看见活人吧！      蓥汐嘴里念叨着：“武缨？名字挺霸气的，就是你这性格，怎么这么……”蓥汐话还没说完，武缨眼睛里就有泪水在打转转了。      ？！大哥你哭个屁，我又没骂你又没打你的，你这是，作什么妖！      “好好好我不说了，”蓥汐最烦的就是喜欢哭的女生，因为她闺密也喜欢哭，她不会安慰，所以才让她闺蜜有机会撩到了自己唯一一个追求者，“现在入秋了，我给你取个小名吧，就叫，落绎吧，落花的落，络绎不绝的绎，武落绎，怎么样？”      蓥汐很郑重的说。武缨点了点头，“谢师尊赐名！”      因为山很高，云比较多，虽然是正午，但是浅沅峰并不是很热，太阳也不大，整座山峰都被红色的枫叶包围，只有山顶上一片花田和几处稀稀落落的住房。      五人到了山顶，沅儿就飞走了。      “这里好美啊！”      白氏兄弟开心的穿梭在花田间，像两个孩子一般笑着。      披着长发的冰块脸拿着佩剑站在花田前，默默出神。“喂，发什么呆呢？喏！”蓥汐不知道从哪里拿来了跟武落绎（武缨）手腕上一样的铃铛手链给了冰块脸。      “弟子秦凌，谢过师尊！”      冰块脸开口，磁性的嗓音牵动着蓥汐的心脏：我去，这声音，妥妥的霸道总裁啊！      蓥汐抖抖身体，努力让自己保持清醒，然后又去给几人分配了房间。      “师尊，伙、伙房在何处？”      武落绎小跑过来，面色红润的看着她。“伙房应该在白熙他们寝殿旁边吧，刚才带他们去的时候他们还嚷嚷了两句。”蓥汐想了想回答。      “知道了师尊，师尊，膳后我可不可以出去？我绝对不会乱跑的，我发誓！”武落绎眨巴着大眼睛说。“别跑太远，不然我也管不了。”蓥汐看武落绎的表情，不是去找人还是干嘛？激动得跟个抢到糖的小孩子一样。      “谢师尊！”      武落绎说完开心的跑开了，蓥汐走到花田间的石桌前，拿起一个果子就背对着石桌坐在石凳上。      女主应该是蓝依非，萧伢、夜陌应该是痴情男二，武落绎这个模样，八成就是女二了吧！蓥汐想起自己看的小说里，大部分女二都和女主是朋友或者死敌，关键是女主没女二长的好看！不过，谁是男主？冰块脸长得挺好看的，不过武落绎好像不喜欢，那应该就看蓝依非的表现了吧。      蓥汐发呆想事，突然就把头往右边一偏，一根银针从她耳朵上方飞出去，直挺挺的插在桂树上。      “……”      蓥汐自己也挺蒙的：我居然能听声辨位！      “半月不见，小师妹武功见长啊！”宗主扶庸从身后的桃树下走出来。“你是？”蓥汐只记得他问自己要不要徒弟，也不认识他。      “什么？！”扶庸不敢相信自己的耳朵：小师妹居然把他忘了，而且只有半个月就忘了！      “我，我闭关修炼的时候出了点意外，虽然突破了绿玄境瓶颈，但是脑子好像不好使了。”      早知道不问了！      扶庸看蓥汐纯洁无暇的大眼睛，也没觉得她在撒谎，毕竟师兄妹这么多年，撒没撒谎他还看得出来的。      “我是南郢宗宗主扶庸，你是浅沅峰峰主、我的小师妹蓥汐。”扶庸走过去，坐在石桌前，倒了一杯茶。      “哦，这个我知道，我是问你南襄别山是干嘛的。”蓥汐一种渴望的眼神看着他。扶庸倒还被她的眼神看的不自在。      “南襄别山有十座峰，主峰暮雪峰是众弟子集会的地方，离主峰最近的是榀剑峰，榀剑峰内有剑法、心法秘籍，适合学武的弟子；其次是旭孥峰，旭孥峰是专门研究暗器的，光是山路上就机关重重。”说到这里，扶庸顿了一下，自己之前为了省修为，第一次走路上峰，一路上都是陷阱机关，差点就回不来。 ------------  第五章初见男主      “那其他峰呢？”蓥汐看着出神的扶庸，追问道。      “其他峰……”扶庸才开口武落绎就小跑了过来：“师尊吃饭啦！”蓥汐看了武落绎一眼再把头扭回来时扶庸已经不见了。      “！！！”我去，瞬移，绝对是瞬移！      “师尊。”武落绎气喘吁吁的跑过来，鬼知道为什么师尊的寝殿在山顶，他们的寝殿从山腰排到山顶，恰好她是山腰那个。      “怎么了看把你急得，坐下喝口茶吗？”      蓥汐把手里的茶杯递过去，武落绎撑着腰挥挥手道：“师尊吃饭了！”武落绎刚说完一阵狂风刮过，睁开眼时蓥汐就不见了。      “诶？师尊呢？”武落绎边走边回头的摸着脑袋下山了。      当武落绎和其他三个人到达膳房时，蓥汐已经把一半的菜都吃完了。正拿着一根鸡腿坐在那里啃，看到四人来了，连忙招手说：“你们怎么现在才来？菜还没凉，快过来吃啊！”      白何白熙目瞪结舌，想说什么但又开不了口：师尊胃口真好，一个人顶两个人的饭量！      白熙坐在桌前，看着依旧不停嘴的蓥汐，有些不知所措：如果我和白何加起来一顿要吃五碗，师妹应该最多吃两碗，大木头看上去应该只吃一碗吧，看师尊这样子一顿最少就得五碗吧！那这样子加起来就是十三碗，还是不加菜的，那这要是加菜那浅沅峰不是没几天就没粮了吗？！      一想到自己要没饭吃，白熙就有点嫌弃的看着蓥汐，一个女的吃那么多干嘛，长胖还可怕！      “看什么看，没见过闹饥荒的？”      蓥汐抬头对上白熙的目光，一脸不屑的撇了他一眼继续吃着。白熙耸了耸肩，重心放在吃饭上。      饭后蓥汐拿了几个桃子，边走边啃，白熙白何跟在她后面。      “你俩要干啥？”      蓥汐突然停住转身问道，白何白熙没刹住，差点撞到蓥汐。白何看着只有自己鼻尖高的蓥汐皱着眉啃着果子，莫名觉得有些可爱：“咳咳！”白何脸红的把头转过去，咳嗽两声走到白熙右边。      “？”蓥汐一脸茫然看着脸红的白何：我又说什么了我？不就是长得好看吗，有必要那么心动？      “师尊，你不是收了四个徒弟吗？”白熙看了一眼自己没用的哥哥，殷勤的给蓥汐捶着肩。“对啊，怎么了？”要不是扶庸说的，她带一个娃就够了，才不要带四个！      “别的峰都给弟子排了名，你看……”白熙的暗示在清楚不过。“说白了就是想让我编排你们呗！”蓥汐说到点上白熙内心一下就激动起来：我一定要当老大，我可是天生的领头人！      “嗯，让我想想。”      蓥汐站在原地出神愣着，此时武落绎和秦凌也走了过来。      “秦凌老大，白何老二，白熙老三，落绎老四，至于我嘛就算了！”      蓥汐想着反正是给弟子编排大小，又不关自己什么事。      “啊？为什么我要排第三大木头排第一！”      白熙气呼呼的走到秦凌身边，指着秦凌说。“很简单，”蓥汐咬了一口桃子肉，咀嚼了几口说，“你话太多！”      “哇呜呜呜……师尊你不爱我了，你们都嫌弃我，呜呜呜……”白熙一边跑一边装模作样的哭着，声音巨响。      “……”      四人看着少年飞奔而去的背影，都觉得极其幼稚和做作。      “你弟天生的？”蓥汐看着白何说。“绝对纯天然无污染！天生的！”说实话，要不是因为白熙嘴巴大，他真的想把暴打一顿，话多就算了脑子还跟缺一根筋似的。      “这不是天生的，这是野生的吧！”      蓥汐看到白何的正经又想到白熙的神经，要不是两人长得很像，谁会把他们想到一起去？果然，弟弟就是个累赘，还好她没有。      “师尊，这个大弟子……”      秦凌刚开口，蓥汐就走过去胸有成竹的拍了拍他的肩膀说道：“你担得起！”蓥汐一说，秦凌有些惊讶，一下忘记了自己刚刚的原话是什么，不过，好像不是这句。      “行了行了，该玩的玩去吧，我还要去散步呢！”俗话说饭后走一走，能活九十九。      蓥汐说完就转身离开了。      “桃花坞里桃花庵，桃花庵下桃花仙。难怪那些古装剧都喜欢用桃花做背景，是真的很好康啊！”      蓥汐坐在一个山崖边，崖下是满满一山谷的桃树，风一吹桃花就向空中飞去，再加上是山背后的位置，雾气还没散尽，乍一看还以为是CG动漫里的仙侠背景呢！      崖边有许多的蓝色花朵，虽然不知道名字，但是闻起来很香，看上去很美很幽。      一阵笛声从桃林深处传来，一群白色的长尾鸟在桃林上空盘旋着做出各种动作。      “一般会吹笛子的好像都是男二，不过好像也有男一。”      心动不如行动，蓥汐嘀咕着着站了起来，因为还在想着人是谁，没注意自己在崖边，直接一脚往前踏。“啊！”一阵尖叫声响彻云霄，把鸟儿吓得一下钻回树林。      “我去，我怎么在悬崖边？”      蓥汐一脸茫然的往上看，拍了拍身上和头上的桃花花瓣。      “师尊可有伤到何处？”      一个细如流水、温如暖阳的声音传来，蓥汐转身看去，一个白发少年赫然立在三米外的桃树下。灰白色长袍上点缀着银色纹绣，衬得少年气质有些成熟，白色的头发披在身后，几缕不安分的头发搭在肩上，柳叶眉下嵌着一双含情脉脉的狐狸眼，小巧的瓜子脸却又有些圆润。      “我去，好好看啊！好仙啊！”      蓥汐看得一愣一愣的，少年右手遮住嘴轻笑一声：“这么久了师尊为何看我还是这般呆呆的眼神？”听到美男说话，蓥汐这才回过头。      “啊，我最近脑子不好使，有点老年痴呆，你别介意哈。”蓥汐尴尬的想找个缝钻进去，犯花痴这个毛病得改改。      “对了，你是谁来着？”      蓥汐刚想走，又像想起了什么问道。“师尊您又忘了，我叫扶苏，您的内门弟子啊。”扶苏浅浅的笑着，一颦一笑都牵动着蓥汐的心。      “我、我……”      蓥汐脸红彤彤的立马转身，生怕被扶苏看到了更尴尬，而此时，桃林里传来了蓝依非的声音。      “师傅！”      蓝依非看见自己美若天仙的师傅，脸颊有些红的跑过去，“师傅您终于出关了！”扶苏回头时，蓥汐已经不见了，对着蓝依非说：“走吧。”“嗯。”等两个人走了，躲在桃树上的蓥汐才松了一口气：“还好！”被蓝依非看见以后还不得弄死我？ ------------  第六章寒泽门      蓥汐正准备跳下来，刚站起来，一个人倒着头出现在她面前。”啊！”蓥汐吓得脚往前面一滑，背向地的摔下去。刚要落地的瞬间，一个人横腰抱住了自己。      “这位姑娘可是被在下的美貌所惊叹到了？”一个约莫十七八岁的黑衣少年抱着她，蓥汐跳下来，剜了他一眼：没有惊叹，只有惊吓。      蓥汐拍拍袖子准备转身走，但是看着少年的衣着，又觉得奇怪，立马回过头看着欣赏桃花的少年说：“你是谁啊？怎么在这儿？”      “寒泽门少宫主云千绎见过南襄别山浅沅峰峰主——蓥汐！”      说完少年就变出一把长剑拿在右手中朝着蓥汐冲过来。“喂，不是吧，我还没说什么呢！”蓥汐左躲右闪，不知道怎么反击。      “南郢宗还真是以礼相待啊！”      云千绎趁蓥汐不注意，刺向蓥汐身后，蓥汐出于自保变出了怨郄枪，直接将云千绎打飞出去，云千绎抬起头时蓥汐已经把枪收起了。      “若云少主想比试，大可在众长老面前提议便是，私下比试可不太好，不过比起那些躲在一旁看戏坐收渔翁之利的人要好得多。”蓥汐走过去，伸出右手拉起云千绎。      云千绎听到后面几句话，有些疑惑：“坐收渔翁之利？”蓥汐右手一挥几只竹叶型的小飞镖飞了出去，身后不远处的一棵桃树迅速摇晃起来，一个黑影从树上窜出来。      蓥汐转身看去，除了夜陌还有谁这么无聊。      夜陌将左手上接住的几只飞镖扔在地上，看着蓥汐说：“浅沅峰峰主昨天还在山下嚷着与本宫主走，今日怎么就就与本宫主为敌？”      “关你鸟事！”      蓥汐白了他一眼，转身走向桃林深处。一支飞镖射向她，蓥汐直接停步蹲下，捡起地上的一块长方形玉佩，起身继续走。      “哟，这不是邪魔宫少宫主夜陌嘛！怎么有空来南襄别山做客？要知道，你可是魔！”      云千绎将最后两个字咬的极重，似乎在强调：你是魔，不应该出现在这里。夜陌怒火中烧，直接冲了上去。      他之所以愿意和蓝依非走在一块，是因为蓝依非不会说他是魔、介意他是魔一类的话，也不会像其他正道人士一样排斥他。      “打吧打吧，反正我要走了！”      蓥汐站在远处的时候看着精彩的“武打片”，但还是觉得有些无聊，就转身走向桃林深处。      “一寸土一年木，一花一树一贪图，情是种爱偏开在迷途，忘前路……”      忘词的蓥汐一路走一路哼着歌，走过去走过来，发现所有的树长得好像都是一个样。      “诶？我刚刚是不是来过这儿？”      蓥汐看着自己刚刚吐了一个桃核的地方，一时间摸不着头脑：但凡有个系统我也不至于到现在还没出去。      “蓝依非，你不是说好陪我逛桃林吗？怎么现在才来，还跟夜陌说了半天话！”      云千绎的声音在身后响起，蓥汐转过身，蓝依非和云千绎有说有笑的往这边走，情急之下，蓥汐直接躲到一棵最近的桃树上。      “这女主好花心，前边夜陌后边云千绎，怀里还抱着她师傅！啊呀呀呀，这要是同时相遇，该有多刺激啊！”      蓥汐不禁感叹道，不过还是挺好奇三个人相遇的情景。      两人走远了，蓥汐才从树上跳下来，“蓝依非是女主的话，他师傅应该和她是师徒恋，那夜陌应该就是那个反派深情男二，云千绎如果是男三的话，女二是武落绎，但是，武落绎如果不是女二，故事线路更说不通啊！”      蓥汐越说越懵：早知道这个系统这么坑就不来了，还浪费我一百块，一百块可以买那么多吃的！反正从现在起我打死不看人了，我就吃，我要把那一百块吃回来！      蓥汐一边走一边想，蓥汐越想越生气，停下脚步自言自语的说：“不跟我说故事线路好歹给我一本书吧！不然你让我哪儿去找人？WC吗？”      刚说完，脑瓜子就被一个重物狠狠砸了一下：“尼玛什么东西敢偷袭我！”蓥汐到处看没看到一个人，低头看着地上的一本合上的书。      蓥汐一脸疑惑的捡起书：“《快穿：女配只想当咸鱼》，什么鬼东西？”蓥汐翻了几页发现了自己的名字在第十二章出现。      “我淦！跟我现在的故事一模一样！”      书里写着自己对夜陌一见钟情最后自爆丹田而死的故事，就没了后续，相当于自己只是一个陪衬，就出场五章，还是时有时无的那种！      “我真的是服了这个作者！”      要不是这本书有用，蓥汐真想直接撕了。“这书怎么这么厚呢？”蓥汐看着手上起码八厘米厚的书，立马翻到最后一页，“两千多页，九百九十九章，这作者写表白文也不至于着这么多吧！”      蓥汐心里叫苦，拿着书继续往前走。      刚走出桃林，蓥汐就被阳光直射，蓥汐被迫拿着书挡在头上，这一幕恰好被赶来的武落绎看见，莫名觉得自家师傅好可爱啊！      “师尊！”      武落绎跑过去，将手中的苹果给了蓥汐。“怎么了？”蓥汐不客气的直接上口。“寒泽门的人来宗门做客，宗主让我们过去迎客！”武落绎兴高采烈的说。      “寒泽门？”蓥汐瞬间想起蓝依非那个老相好：真是有缘千里来相会啊！      “对，听大师兄说，是来邀请我们去参加仙门大赛的！”      说到仙门大赛武落绎就两眼放光：虽然没见过但是听到的不少，仙门大赛是许多宗门都可以参加的比赛，获胜的宗门可以获得“天下第一帮派”的名号。      “不感兴趣，走了。”      蓥汐一心只想着怎么把那一百块钱吃回来，根本没兴趣看着这些人打打杀杀的，说完就提起步子往前走。      “啊？师尊你不去啊？”武落绎很惊讶，仙门大赛不应该在长老们心中很重要吗？为什么师尊看起来一点也不在意？      武落绎追上去。 ------------  第七章武艺（一）      “在意那些一时间的嘘头还不如踏踏实实的在家混日子！”蓥汐走到花田边自己的寝殿门口说。      “但是，其他峰的弟子都会去吖！”武落绎跟在后面期待的说。“你想去就直说，我不会吃人。”蓥汐打开门走了进去。      “我想去没用啊，师尊您不去浅沅峰的人就都不能去的！”      武落绎知道这里的规矩：出门要长老同意，参加大赛仙会也要经过长老同意，不然是绝对不让出去的。      “有看戏的心思不去多想想怎么修行，免得走出去连气场都没有！”蓥汐坐在桌子前面啃着苹果，武落绎站在她旁边有些着急的说：“可是师尊我真的很想去！白何白熙也是！”      “秦凌不也不去嘛！”      蓥汐看了她一眼，“一个师傅出来的弟子走哪儿都要在一起，分头行头、丢三落四容易吃亏！”武落绎听起来觉得好像很有道理，但是又对这次仙门大赛极其好奇。      “你跟着白何白熙去主峰看看吧，回来再告诉我你该干什么！”      蓥汐刚说完，武落绎就高兴的抱住她说着：“师尊最好了！”说完就飞快跑出去了。“终于走了，我可以好好研究故事了！”蓥汐关上门，拿出厚厚的书放在窗户旁边的书案上认真看起来。      “人物介绍及故事解析？”蓥汐走马观花似的直接把书拿着，一下翻完了，一张卡纸掉了出来，蓥汐捡起来一看，上面写着人物介绍。      “直接给我这张卡纸不好吗？拿这么大一本书糊弄我，想让我看书，除非手机坏了！”蓥汐暗自高兴的看着卡纸：      女主蓝依非从小失去父母被曲诏峰峰主扶苏收进门内。十八岁时的仙门大赛上，她因为不自量力被对手残忍打死，恰好现代的黑帮女主穿越过来打败了对手，从此之后名扬万里，修为突飞猛进。与师傅扶苏心生爱恋，却不敢逾越，女配武落绎因为缺少扶苏的关注与弟子们的敬仰，从而投靠邪魔宫，黑化回来杀了女主，后来女主被男主复活，女二被男二废除武功。大结局心系苍生的男主一个人在南襄别山孤独终老，女主跟男二夜陌过上了没羞没臊的生活，女二武落绎没有武功沦落为市集乞丐，被男三江辕救下并嫁他为妻？！      “我去，我去去去去！这个剧情好狗血啊！这比女主跟男三跑了，男主跟男二在一起，女二独自一人寻找女三的故事还扯淡啊！”      要是自己在手机上看过这篇文，绝对会喷的作者不想写文了。      “不对啊，女二是武落绎，那女三是谁啊？”故事里连男三都有，怎么可能没有女三，再怎么也要配个对吧！      蓥汐又看了看卡纸的前后，没有其他的信息，没办法，蓥汐又要开始自己的“追书之旅”了。      “如果我有罪请让法律制裁我，而不是让小说折磨我！”或许以前的蓥汐特别喜欢看小说、写小说，但是过了许多年、经历了许多事，她也开始变得不再喜欢了，反而喜欢游戏里的打打杀杀。      主峰的三合院内，许多弟子站在一起讨论着，一些寒泽门的蓝衣弟子也混在其中。      “大哥，你爬上去了没？我快撑不住了！”      白熙站在墙前，肩膀上踩着白何的鞋，白何正在墙上奋力爬墙，试图混入其中。“诶呀还差一点，再往上顶点！”白何说着又试着往上面抬了抬腿。      “白何白熙师兄，你们两个看起来好搞笑啊！”      武落绎站在旁边看着二人“默契配合”着翻墙，捂着嘴笑着。      “你懂什么，这叫出其不意，不会引起太大的风波和关注。你再不来帮忙我们都进不去了！”白熙往上顶了顶。      “额，那儿不是有门吗？”      武落绎随手指了指墙边的一个狗洞。白熙一下愣住了，奋力拼搏的白何发现没了落脚点一下失去重心摔在了白熙身上。      “我觉得你是在侮辱我！”      三人站在狗洞前，白熙思考良久回答道。“有门就不错了，难道你还想翻墙？”白何拍了拍白熙的肩膀，白熙一想到刚刚的“泰山压顶”立马惊恐的摇摇头：“不不不，还是钻狗洞更方便，那谁先……”“呐，既然白熙师弟觉得这个方法甚好，不如先给我们二位做个示范？”      白何一脸笑意的看着白熙，白熙张开嘴却不知道说什么，对上武落绎吃瓜的表情，只能暗暗认栽的蹲下来钻狗洞。      因为臀部翘的太高，卡在了洞口。      “那个，你们谁踢我一脚，我卡住了，嘿嘿。”白熙尴尬的笑了笑，白何小心翼翼的踹了白熙一脚却没有用，武落绎看着他心里默默翻了一个白眼：“我来！”      白何看着瘦瘦小小的武落绎，刚想说“要不咱俩一块”就看见武落绎一脚踢在白熙臀部，直接把白熙踢到对面的树干上。      “！！！”      白何惊讶极了的捂住嘴巴没发出惊叹，而是看鬼一样看着武落绎：谁说长得可爱长得柔柔弱弱的小姑娘真肉体贴！这哪里温柔了，差点把人给温柔死了！      “你不进去吗？”      武落绎拍拍手转身看着他，白何放下手，颤抖着身体走过去说：“我自己来就行，我自己来……”白何一步一踱的往狗洞走，似乎狗洞里有什么可怕的东西。“磨磨唧唧的！”武落绎一过去就把刚蹲下去的白何一脚踢过去了，而自己却快速的从墙上翻过去。      “诶，不是说好钻狗洞你怎么……”白何还没说完，武落绎就白了他一眼：“我有说我要钻吗？”白何一回想，好像真没说过。      这时，喧闹的的人群一下安静下来，武落绎几人向前看去，一个黑衣少年（云千绎）与宗主、另外几位长老缓缓走出来。      “诶，那个男的我好像在哪儿见过！”      白熙这时候想起自己来的时候半路上好像看见云千绎和蓝依非混在一起，但记得不清楚，也想不起来多少。      “嘘，别说话！”      武落绎轻声提醒道。 ------------  第八章武艺（二）      “今日多谢云少主远道而来邀请本宗去参加仙门大赛。”      走到院落中心，宗主扶庸对着云千绎作揖，其他几位长老也纷纷作揖。      “没什么大事，来一趟也正好赶上贵宗门的诗赋节，不如让在下停留几日经略一下江湖人士的文采？”云千绎右手将折扇打开遮住嘴，看着扶庸说道。“既然云少主愿意，自然是可以的！”扶庸挺直腰杆，略有所思的说道。      诗赋节是南郢宗为了让弟子多学习江湖中人的心胸气概与心境文采的，寒泽门是出了名的武功为主的宗门，怎么会乖乖去看一场无聊的诗词比赛？      “那在下恭敬不如从命了！”      云千绎的话听起来像是扶庸邀请他参加似的，但这明显不是。      “听闻寒泽门弟子武功十分了得，不知可否今日在本宗门展露一番，好让本宗门弟子学习学习。”大长老上前一步说道。      “师兄，这就不必……”扶庸刚开口，云千绎就笑着收回折扇将手背在背上，左手放在胸前说：“既然如此，那今日就献丑了，颜易！”云千绎说完，一个长得文文弱弱的书生相的蓝衣少年走出人群，来到云千绎身旁作揖道：“大师兄。”      “帮帮贵宗门寻找缺点！”      云千绎说着就走进人群，场上自动让开了一个圆形场地。      “执奉，你去会会他！”      扶庸走到执奉身旁说。“是。”执奉是扶庸门下剑法、身法修行得最好的，除了派他，真的还找不出来什么人。      执奉上前对着颜易作揖，颜易出于礼貌也回了一个礼。礼毕，两人立马拔剑打在一块，执奉出剑又快有狠，明显占了上风。      “为什么我感觉这个寒泽门的弟子是故意让的？”      白熙看着颜易一步又一步后退与转身，似乎是提前就准备好的招数，步步为营。      “寒泽门的弟子怎么只会躲闪不会进攻啊？难不成是怕打不过丢面子？”人群中一些弟子看着处于劣势的颜易，立马起哄嘲笑。      颜易听后嘴角微微上扬，眼底透着笑意，反手拔剑转身到执奉身后将剑架在了执奉脖子上。      “他速度好快啊！”      白熙站在树下看的激动极了。“寒泽门果真是众仙门中武艺最强的门派，今日有劳各位了，不如让执奉先带各位安排住处，再做其他打算？”扶庸见颜易、执奉作揖退回来了，立马开口。      “也行，那就多谢宗主好意了！”      云千绎打开折扇扇着风，执奉在前面带路。      “速度快是快，不过要是人多的时候不容易全部击破。”秦凌不知道什么时候走到了武落绎身边。一开口就吓了白熙一跳：“你什么时候过来的？”      “比武的时候就来了。”秦凌本来不想过来的，是曲诏峰那个叫蓝依非的女弟子跟他说寒泽门与南郢宗有比武，他才来的。      看着缓缓离开的人群，白何摸了摸下巴往前走了两步说：“听他们说浅沅峰以前的弟子最多也就只有一个医仙和武神成功登天，其他的弟子都是懒懒散散的种种花、闲聊什么的，基本上什么都不做，好像之前小师尊经常不在峰里，忒喜欢闭关。”      “啊？不是吧，小师尊不会这么坑吧！”      白熙一听，立马惊讶的质疑道：他来这里就是专门修行的，好在百年后能够在天界某得一个位置，当个逍遥神仙，人人敬仰。      武落绎看着白熙的惊讶，有些疑惑的说：“你想学什么直接问师尊不就完了，自己揣摩什么？跟个小孩似的！”      武落绎说完就转身离开了，白熙看着武落绎离开的背影，感觉有些奇怪：“她早上不还是羞答答的不敢说话吗？怎么现在这么刚啊？”      “这还用说，还不是看师尊那气质学的，走了，师尊还等着我们回去汇报呢！”      白何说完就抬起脚往门口走，白熙刚想扭头叫秦凌，一扭头却发现没有人了。      “啊切！啊切！”      一边看书一边吃桃花酥的蓥汐莫名其妙的打了两个喷嚏，吸吸鼻子挺直了背杆，看了一眼接近山巅的太阳，将看到的地方折了一个小角，然后把书放进了床头柜里。      蓥汐看书喜欢一目十行，已经看了一半多了，预计明天就能看完。      蓥汐走到门口，打开门映着夕阳伸了伸懒腰，吃着桃花酥往门外的花田中心的石桌走。      “师尊！”      这时白熙的声音响起了，蓥汐扭头一看，白熙御剑从桂花树的方向飞过来，摇摇晃晃的飞得极快。“……”蓥汐停下脚步，将身体侧着站着，白熙没刹住，直接撞到桃花树上。      “别飞那么快，容易出人命！”      蓥汐坐在石桌前，大口大口吃着桃花酥：难怪女主那么喜欢男主，又美又暖谁不喜欢？还知道送吃的，爱了爱了！      “师尊！”      此时，后赶来的武落绎用少女甜甜的声音喊着蓥汐，蓥汐竟然觉得有那么一点点的喜欢听。“怎么了？”蓥汐有些不耐烦的说着：喜欢找我事！      武落绎和其他三人走到石桌前，围着石桌站着，看着吃的不亦乐乎的蓥汐。      “坐啊，怎么都愣着？又没撞树上。”      蓥汐说完，武落绎就抢先白熙一步开口：“师尊，我们想代表浅沅峰参加仙门大赛！”      蓥汐听到这句话，正往嘴里送吃的的手突然顿了一下，愣了一下继续吃着。      见蓥汐一直没回答，武落绎还以为蓥汐不允许，又打算开口蓥汐却先开口了：“打都打不过你去了还不是当垫背？”      蓥汐看了“剧本”，里面写着武落绎因为忍不下别人吐槽小师尊，硬着头皮上去打，结果被别人肆意蹂躏，出尽洋相。其他三个人就更别说了，一个不想上，两个不敢上。      “我……”武落绎一下被蓥汐的话噎住了，他们好像真的打不过。想起寒泽门弟子的速度就有点吓人，更别说其他宗门的弟子了！      “可是师尊你要教我们啊！你不教我们怎么知道行不行呢？”      白熙很坚定的说道，蓥汐抬头看了看少年自信发亮的双眼，心里叹了一口气，咽下最后一口桃花酥站起来拍拍手。      嘴里有些含糊不清的说道：“那你们可得自己好好努力，不然我教你们也是白教！”",
            type: "TEXT",
            path: path,
          },
        },
        function (response) {
          console.log("ext_FileManager_Write Text File End", response)
        }
      )
    }
  )
}

function removeFiles() {
  console.log("getZipAppDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_Remove File List Start")
      wx.invoke(
        "ext_FileManager_Remove",
        {
          data: {
            fileList: [path + "123.txt"],
          },
        },
        function (response) {
          console.log("ext_FileManager_Remove File List End", response)
        }
      )
    }
  )
}

function removeFile() {
  console.log("getZipAppDirectory start")
  var path = ""
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory end", res)
      path = res.directory

      console.log("ext_FileManager_Remove File List Start")
      wx.invoke(
        "ext_FileManager_Remove",
        {
          data: {
            fileList: [
              "/storage/emulated/0/Android/data/com.sgcc.sgitg.wxwork/files/ifaa.log",
            ],
          },
        },
        function (response) {
          console.log("ext_FileManager_Remove File single End", response)
        }
      )
    }
  )
}

var socketType = ""
function socketInit() {
  console.log("ext_Socket_Init start")
  wx.invoke("ext_Socket_Init", { data: {} }, function (response) {
    console.log("ext_Socket_Init end", response)
  })
}

var socketChannelId = null
function socketCreateChannel() {
  var socketip = $("#socketip").val()
  var socketport = $("#socketport").val()
  console.log("ext_Socket_CreateChannel start")
  wx.invoke(
    "multiWindows_subscribe",
    {
      channelId: "event_Socket_channel_19216843225",
    },
    function (res) {
      console.log("event_Socket_channel_19216843225", res)
      if (res.err_msg == "multiWindows_subscribe:ok") {
        socketChannelId = res.data.socketId
        console.log("receive data ", res.data.data)
      }
    }
  )
  wx.invoke(
    "ext_Socket_CreateChannel",
    {
      data: {
        ip: socketip,
        port: parseInt(socketport),
        type: parseInt(socketType),
        channelId: "event_Socket_channel_19216843225",
      },
    },
    function (response) {
      console.log("ext_Socket_CreateChannel end", response)
    }
  )
}

function socketCloseChannel() {
  console.log("ext_Socket_CloseChannel start")
  wx.invoke(
    "ext_Socket_CloseChannel",
    {
      data: {
        socketId: socketChannelId,
      },
    },
    function (response) {
      console.log("ext_Socket_CloseChannel end", response)
    }
  )
}

function socketSendData() {
  console.log("ext_Socket_SendData start")
  wx.invoke(
    "ext_Socket_SendData",
    {
      data: {
        socketId: socketChannelId,
        data: "this is a test",
      },
    },
    function (response) {
      console.log("ext_Socket_SendData end", response)
    }
  )
}

function socketUnInit() {
  console.log("ext_Socket_UnInit start")
  wx.invoke("ext_Socket_UnInit", { data: {} }, function (response) {
    console.log("ext_Socket_UnInit end", response)
  })
}

function dbOpen() {
  console.log("ext_Database_Open start")
  wx.invoke(
    "ext_Database_Open",
    {
      data: {
        name: "db_user002",
        id: "user2",
      },
    },
    function (res) {
      console.log("ext_Database_Open end", res)
    }
  )
}

function dbExecute() {
  console.log("ext_Database_Exec start")
  wx.invoke(
    "ext_Database_Exec",
    {
      data: {
        id: "user2",
        sql: "create table if not exists note(id integer primary key autoincrement,text text)",
      },
    },
    function (res) {
      console.log("ext_Database_Exec end", res)
      console.log("ext_Database_Exec innet start")
      wx.invoke(
        "ext_Database_Exec",
        {
          data: {
            id: "user2",
            sql: "insert into note(text)values('这是一个测试')",
          },
        },
        function (res) {
          console.log("ext_Database_Exec innet end", res)
        }
      )
    }
  )
}

function dbQuery() {
  console.log("ext_Database_Query start")
  wx.invoke(
    "ext_Database_Query",
    {
      data: {
        id: "user2",
        sql: "select * from note",
      },
    },
    function (res) {
      console.log("ext_Database_Query end", res)
    }
  )
}

function dbRemoveData() {
  console.log("ext_Database_Exec removeData start")
  wx.invoke(
    "ext_Database_Exec",
    {
      data: {
        id: "user2",
        sql: "delete from note where text='这是一个测试'",
      },
    },
    function (res) {
      console.log("ext_Database_Exec removeData end", res)
    }
  )
}

function dbClose() {
  console.log("ext_Database_Close start")
  wx.invoke(
    "ext_Database_Close",
    {
      data: {
        id: "user2",
      },
    },
    function (res) {
      console.log("ext_Database_Close start")
    }
  )
}

function bluetoothDeviceInit() {
  console.log("ext_rlble_initBluetoothAdapter start")
  wx.invoke(
    "ext_rlble_initBluetoothAdapter",
    {
      data: {},
    },
    function (res) {
      console.log("ext_rlble_initBluetoothAdapter end", res)
    }
  )
}
var isBluetoothScan = true
function bluetoothDeviceScan() {
  console.log("ext_rlble_scanBluetoothDev start")
  wx.invoke(
    "ext_rlble_scanBluetoothDev",
    {
      data: {},
    },
    function (res) {
      console.log("ext_rlble_scanBluetoothDev end", res)
      if (res.err_msg == "ext_rlble_scanBluetoothDev:ok") {
        if (isBluetoothScan) {
          // window.setTimeout(function(){
          // 	bluetoothDeviceScan();
          // },4000)
        }
        $(".devices ul").empty()
        console.log(res.devicelist)
        var devices = JSON.parse(res.devicelist)
        $.each(devices, function (index, device) {
          var deviceDom = $("<li></li>")
          if (device.name) {
            deviceDom.html(device.name)
          } else {
            deviceDom.html(device.address)
          }
          var btnContainer = $("<div></div>")
          var btnConn = $("<button>连接设备</button>")
          btnConn.attr("dataType", "connDevice")
          btnContainer.append(btnConn)
          var btnRead = $("<button>读取数据</button><br>")
          btnRead.attr("dataType", "readData")
          btnContainer.append(btnRead)
          var btnWrite = $("<button>发送数据</button>")
          btnWrite.attr("dataType", "writeData")
          btnContainer.append(btnWrite)
          var btnClose = $("<button>断开连接</button><br>")
          btnClose.attr("dataType", "closeDevice")
          btnContainer.append(btnClose)
          deviceDom.append(btnContainer)
          deviceDom.data("device", device)
          $(".devices ul").append(deviceDom)
        })
      }
    }
  )
}

function bluetoothDeviceStopScan() {
  console.log("ext_rlble_stopBluetoothDevScan start")
  wx.invoke("ext_rlble_stopBluetoothDevScan", {}, function (res) {
    console.log("ext_rlble_stopBluetoothDevScan end", res)
    if (bluetoothDeviceStopScan) {
      isBluetoothScan = false
    }
  })
}

var tmpDevice

function bluetoothDeviceConnect(device) {
  console.log("ext_rlble_startConnectBluetoothDev start")
  wx.invoke(
    "ext_rlble_startConnectBluetoothDev",
    {
      data: {
        devicename: device.name,
      },
    },
    function (res) {
      console.log("ext_rlble_startConnectBluetoothDev end", res)
      tmpDevice = device
    }
  )
}

function bluetoothDeviceReadData(device) {
  console.log("multiWindows_subscribe start")
  wx.invoke(
    "multiWindows_subscribe",
    {
      channelId: "bluetooth_" + device.address.replace(":", ""),
    },
    function (res) {
      console.log("multiWindows_subscribe end", res)
    }
  )
  console.log("ext_rlble_onBluetoothDevConnDataRecv start")
  wx.invoke(
    "ext_rlble_onBluetoothDevConnDataRecv",
    {
      data: {
        channelId: "bluetooth_" + device.address.replace(":", ""),
        devicename: device.name,
      },
    },
    function (res) {
      console.log("ext_rlble_onBluetoothDevConnDataRecv end", res)
    }
  )
}

function bluetoothDeviceWriteData(device) {
  console.log("ext_rlble_BluetoothDevSendData start")
  wx.invoke(
    "ext_rlble_BluetoothDevSendData",
    {
      data: {
        devicename: device.name,
        data: "Welcome to Microsoft! We are proud to announce that Microsoft has one of the largest Web Developers sites in the world.",
      },
    },
    function (res) {
      console.log("ext_rlble_BluetoothDevSendData end", res)
    }
  )
}

function bluetoothDeviceClose(device) {
  console.log("ext_rlble_closeBluetoothDevConnection start")
  wx.invoke(
    "ext_rlble_closeBluetoothDevConnection",
    {
      data: {
        devicename: device.name,
      },
    },
    function (res) {
      console.log("ext_rlble_closeBluetoothDevConnection end", res)
    }
  )
}

function netType() {
  console.log("网络类型 start")
  wx.getNetworkType({
    success: function (res) {
      var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
      console.log("网络类型 end", res)
    },
  })
}

function netListenter() {
  console.log("网络类型监听 start")
  wx.onNetworkStatusChange(function (res) {
    console.log("网络类型监听 end", res)
  })
}

function openPopWin() {
  console.log("ext_Popover_Open start")
  wx.invoke(
    "ext_Popover_Open",
    {
      data: {
        x: 20,
        y: 20,
        width: 600,
        height: 400,
        url: "https://m.baidu.com",
        name: "baidu",
      },
    },
    function (res) {
      console.log("ext_Popover_Open end", res)
    }
  )
}

function closePopWin() {
  console.log("ext_Popover_Close start")
  wx.invoke(
    "ext_Popover_Close",
    {
      data: {
        name: "baidu",
      },
    },
    function (res) {
      console.log("ext_Popover_Close end", res)
    }
  )
}

function sandBoxReg() {
  console.log("ext_SandBox_Reg start")
  wx.invoke(
    "ext_SandBox_Reg",
    {
      data: {
        userId: "testh1",
      },
    },
    function (res) {
      console.log("ext_SandBox_Reg end", res)
    }
  )
}

function sandBoxStartSubApp() {
  console.log("ext_SandBox_StartSubApp start")
  wx.invoke(
    "ext_SandBox_StartSubApp",
    {
      data: {
        subAppName: "",
        companyId: "",
      },
    },
    function (res) {
      console.log("ext_SandBox_StartSubApp end", res)
    }
  )
}

function sandBoxCloseSubApp() {
  console.log("ext_SandBox_CloseSubApp start")
  wx.invoke(
    "ext_SandBox_CloseSubApp",
    {
      data: {},
    },
    function (res) {
      console.log("ext_SandBox_CloseSubApp end", res)
    }
  )
}

function sandBoxIsRoot() {
  console.log("ext_SandBox_isRoot start")
  wx.invoke("ext_SandBox_isRoot", {}, function (res) {
    console.log("ext_SandBox_isRoot end", res)
  })
}

function sandBoxIsSimulator() {
  console.log("ext_SandBox_isSimulator start")
  wx.invoke("ext_SandBox_isSimulator", {}, function (res) {
    console.log("ext_SandBox_isSimulator end", res)
  })
}

function sandBoxWaterMark() {
  var osType = isIosOrAndroid()
  if (osType == 1) {
    console.log("sandBoxWaterMark start")
    wx.invoke(
      "ext_SandBox_WaterMark",
      {
        data: {
          wmSwitch: true,
          content: "水印内容",
        },
      },
      function (res) {
        console.log("ext_SandBox_WaterMark end", res)
        wx.invoke(
          "ext_SandBox_WaterMark",
          {
            data: {
              wmSwitch: false,
              content: "",
            },
          },
          function (res) {
            console.log("ext_SandBox_WaterMark clear", res)
          }
        )
      }
    )
  }
}

function sandBoxScrenPolicyWithAndroid() {
  var osType = isIosOrAndroid()
  if (osType == 1) {
    console.log("ext_SandBox_ScreenPolicy start")
    wx.invoke(
      "ext_SandBox_ScreenPolicy",
      {
        data: {
          urlList: [],
          activityList: [],
        },
      },
      function (res) {
        console.log("ext_SandBox_ScreenPolicy end", res)
      }
    )
  }
}

var sandboxscreenshotid = ""
function sandBoxScrenPolicyWithIOS() {
  var osType = isIosOrAndroid()
  if (osType == 2) {
    console.log("ext_SandBox_ScreenShot start")
    wx.invoke(
      "ext_SandBox_ScreenShot",
      {
        data: {
          title: "upload...",
          detail: "ios update screen picture",
        },
      },
      function (res) {
        console.log("ext_SandBox_ScreenShot end", res)
        sandboxscreenshotid = res.localID
      }
    )
  }
}

function sandBoxScrenUploadById() {
  var osType = isIosOrAndroid()
  if (osType == 2) {
    console.log("ext_SandBox_UploadShot start")
    wx.invoke(
      "ext_SandBox_UploadShot",
      {
        data: {
          urlList: [],
          activityList: [],
        },
      },
      function (res) {
        console.log("ext_SandBox_UploadShot end", res)
      }
    )
  }
}

function sandBoxScrenRemoveById() {
  var osType = isIosOrAndroid()
  if (osType == 2) {
    console.log("ext_SandBox_DelePhoto start")
    wx.invoke(
      "ext_SandBox_DelePhoto",
      {
        data: {
          localID: sandboxscreenshotid,
        },
      },
      function (res) {
        console.log("ext_SandBox_DelePhoto end", res)
      }
    )
  }
}

function removeWaterMark() {
  console.log("hideWatermark start")
  wx.invoke("hideWatermark", {}, function (res) {
    console.log("hideWatermark end", res)
  })
}

function downloadFiles() {
  wx.invoke(
    "multiWindows_subscribe",
    { channelId: "filechannel1" },
    function (res) {
      setTimeout(function () {
        console.log("filechannel1", res)
      }, 10)
    }
  )
  wx.invoke(
    "ext_Net_Download",
    {
      data: {
        cmd: "download",
        url: "http://192.168.43.150/weworklocal_2.5.30100.105_iphone.ipa",
        header: {},
        data: {},
        id: "filechannel1",
        timeout: 10,
        fileName: "weworklocal_2.5.30100.105_iphone.ipa",
      },
    },
    function (res) {
      console.log("filechannel1 download", res)
    }
  )

  wx.invoke(
    "multiWindows_subscribe",
    { channelId: "filechannel2" },
    function (res) {
      setTimeout(function () {
        console.log("filechannel2", res)
      }, 60)
    }
  )
  wx.invoke(
    "ext_Net_Download",
    {
      data: {
        cmd: "download",
        url: "http://192.168.43.150/weworklocal_2.5.30100.107_iphone.ipa",
        header: {},
        data: {},
        id: "filechannel2",
        timeout: 10,
        fileName: "weworklocal_2.5.30100.107_iphone.ipa",
      },
    },
    function (res) {
      console.log("filechannel2 download", res)
    }
  )

  wx.invoke(
    "multiWindows_subscribe",
    { channelId: "filechannel3" },
    function (res) {
      setTimeout(function () {
        console.log("filechannel3", res)
      }, 110)
    }
  )
  wx.invoke(
    "ext_Net_Download",
    {
      data: {
        cmd: "download",
        url: "http://192.168.43.150/weworklocal_2.5.30100.110_iphone.ipa",
        header: {},
        data: {},
        id: "filechannel3",
        timeout: 10,
        fileName: "weworklocal_2.5.30100.110_iphone.ipa",
      },
    },
    function (res) {
      console.log("filechannel3 download", res)
    }
  )
}

var ziporunzippath = ""
function currentOuterPath() {
  console.log("getZipAppDirectory STORAGE_ROOT_DIR start")
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "STORAGE_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory STORAGE_ROOT_DIR end", res)
      ziporunzippath = res.directory
    }
  )
}

function currentInterPath() {
  console.log("getZipAppDirectory APP_ROOT_DIR start")
  wx.invoke(
    "getZipAppDirectory",
    {
      type: "APP_ROOT_DIR",
    },
    function (res) {
      console.log("getZipAppDirectory APP_ROOT_DIR end", res)
      ziporunzippath = res.directory
    }
  )
}

function zipFiles() {
  console.log("ext_unzip_compression start")
  wx.invoke(
    "ext_FileManager_Create",
    {
      data: {
        path: ziporunzippath + "../",
        name: "zipdir",
      },
    },
    function (res) {
      var targetPath = ziporunzippath + "../zipdir/"
      var targetName = "test-zip"

      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        quality: 0.8, //压缩质量，范围0～1，数值越小，质量越低，压缩率越高（仅对jpg有效）
        success: function (res) {
          var localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          var localPaths = []

          localIds.forEach(function (localId, index) {
            wx.invoke(
              "getLocalResPath",
              {
                localId: localId,
              },
              function (res) {
                localPaths.push(res.localResPath)
                if (index == localIds.length - 1) {
                  wx.invoke(
                    "ext_unzip_compression",
                    {
                      data: {
                        sourcePaths: localPaths.join(","), //需要压缩的文件路径（需要包含文件名），支持多个文件一起压缩
                        passWord: "12345", //压缩包的密码
                        targetPath: targetPath, //压缩包的存放路径（注意带上文件名）
                        targetName: targetName, //压缩包的名字（注意：不需要.zip后缀）
                      },
                    },
                    function (res) {
                      console.log("压缩接口：", res)
                    }
                  )
                }
              }
            )
          })
        },
      })
    }
  )
}

function unZipFiles() {
  console.log("ext_unzip_untie start")
  wx.invoke(
    "ext_FileManager_Create",
    {
      data: {
        path: ziporunzippath + "../",
        name: "unzipdir",
      },
    },
    function (res) {
      wx.invoke(
        "ext_unzip_untie",
        {
          data: {
            password: "12345",
            unZipPath: ziporunzippath + "../zipdir/test-zip.zip",
            targetPath: ziporunzippath + "../unzipdir",
          },
        },
        function (res) {
          console.log("ext_unzip_untie end", res)
        }
      )
    }
  )
}

function startWifi() {
  console.log("wifi open start")
  wx.startWifi({
    success: function (res) {
      console.log("wifi open end", res)
    },
    fail: function (res) {
      console.log("wifi open fail", res)
    },
  })
}

function closeWifi() {
  console.log("wifi close start")
  wx.stopWifi({
    success: function (res) {
      console.log("wifi close end", res)
    },
    fail: function (res) {
      console.log("wifi close fail", res)
    },
  })
}

function connectWifi(param) {
  listenWifiConnect()
  console.log("wifi connect start")
  wx.connectWifi({
    SSID: param.SSID,
    BSSID: param.BSSID,
    password: param.pwd,
    success: function (res) {
      console.log("wifi connect end", res)
      listenWifiConnect()
    },
    fail: function (res) {
      console.log("wifi connect fail", res)
    },
  })
}

function getWifiList() {
  listenWifiList()
  console.log("wifi getList start")
  wx.getWifiList({
    success: function (res) {
      console.log("wifi getList end", res)
      listenWifiList()
    },
    fail: function (res) {
      console.log("wifi getList fail", res)
    },
  })
}

function listenWifiList() {
  console.log("wifi listen list start")
  wx.onGetWifiList(function (res) {
    console.log("wifi listen list end", res)
    if (res.wifiList && res.wifiList.length > 0) {
      $(".wifi ul").empty()
      var devices = res.wifiList
      $.each(devices, function (index, device) {
        var deviceDom = $("<li></li>")
        if (device.SSID) {
          deviceDom.html(device.SSID)
        } else {
          deviceDom.html(device.BSSID)
        }
        var btnContainer = $("<div></div>")
        var btnConn = $("<button>连接wifi</button>")
        btnConn.attr("dataType", "connDevice")
        btnContainer.append(btnConn)
        deviceDom.append(btnContainer)
        deviceDom.data("device", device)
        $(".wifi ul").append(deviceDom)
      })
    }
  })
}

function listenWifiConnect() {
  console.log("wifi listen connect start")
  wx.onWifiConnected(function (res) {
    console.log("wifi listen connect end", res)
  })
}

function getConnectedWifi() {
  console.log("wifi connected start")
  wx.getConnectedWifi({
    success: function (res) {
      console.log("wifi connected end", res)
    },
    fail: function (res) {
      console.log("wifi connected fail", res)
    },
  })
}

var userid = ""

function selectContact() {
  console.log("selectEnterpriseContact start")
  wx.invoke(
    "selectEnterpriseContact",
    {
      fromDepartmentId: -1,
      mode: "single",
      type: ["department", "user"],
      selectedDepartmentIds: [],
      selectedUserIds: [],
      includeExternalContact: 1,
    },
    function (res) {
      console.log("selectEnterpriseContact end", res)
      if (res.err_msg == "selectEnterpriseContact:ok") {
        $.each(res.result.userList, function (index, user) {
          userid += user.id + ";"
        })
      }
    }
  )
}

function openChatMsg() {
  console.log("openChatWithMsg start")
  wx.invoke(
    "openChatWithMsg",
    {
      userIds: userid,
      externalUserIds: "",
      groupName: "讨论组",
      chatId: "",
      msg: {
        title: "标题",
        desc: "这是一个测试",
        link: "https://www.baidu.com",
        imgUrl: "",
      },
    },
    function (res) {
      console.log("openChatWithMsg end", res)
    }
  )
}

function openUserProfile() {
  console.log("openUserProfile start")
  wx.invoke(
    "openUserProfile",
    {
      type: 1,
      userid: userid.substr(0, userid.length - 1),
    },
    function (res) {
      console.log("openUserProfile end")
    }
  )
}

function checkJsApi() {
  console.log("checkJsApi start")
  wx.checkJsApi({
    jsApiList: ["chooseImage"],
    success: function (res) {
      console.log("checkJsApi end", res)
    },
  })
}

function shareAppMessage() {
  console.log("shareAppMessage start")
  wx.invoke(
    "shareAppMessage",
    {
      title: "分享3",
      desc: "描述3",
      link: "https://www.baidu.com",
      imgUrl: "",
    },
    function (res) {
      console.log("shareAppMessage end", res)
    }
  )
}

function shareWechatMessage() {
  console.log("shareWechatMessage start")
  wx.invoke(
    "shareWechatMessage",
    {
      title: "分享4",
      desc: "描述4",
      link: "https://www.baidu.com",
      imgUrl: "",
    },
    function (res) {
      console.log("shareWechatMessage end", res)
    }
  )
}

var imgLocalId = ""

function chooseImage() {
  console.log("chooseImage start")
  wx.chooseImage({
    count: 2,
    sizeType: ["original", "compressed"],
    sourceType: ["album", "camera"],
    quality: 0.8,
    success: function (res) {
      console.log("chooseImage end", res)
      if (res.localIds) {
        imgLocalId = res.localIds[0]
      }
    },
  })
}

function getLocalImage() {
  console.log("getLocalImgData start")
  wx.getLocalImgData({
    localId: imgLocalId,
    success: function (res) {
      console.log("getLocalImgData end", res)
      if (res.localData) {
        $("#localimagedata").attr("src", res.localData)
      }
    },
  })
}

function previewImage() {
  console.log("previewImage start")
  wx.previewImage({
    current:
      "https://img0.baidu.com/it/u=3816404254,238458020&fm=11&fmt=auto&gp=0.jpg",
    urls: [
      "https://img2.baidu.com/it/u=2920685919,2017597770&fm=26&fmt=auto&gp=0.jpg",
      "https://img1.baidu.com/it/u=2346282507,2171850944&fm=26&fmt=auto&gp=0.jpg",
      "https://img1.baidu.com/it/u=1474266791,210202337&fm=26&fmt=auto&gp=0.jpg",
    ],
    hidePreviewMenuList: [],
  })
}

var imguploadserverid = ""
function uploadImage() {
  console.log("uploadImage start")
  wx.uploadImage({
    localId: imgLocalId,
    isShowProgressTips: 1,
    success: function (res) {
      console.log("uploadImage end", res)
      imguploadserverid = res.serverId
    },
  })
}

function downloadImage() {
  console.log("downloadImage start")
  wx.downloadImage({
    serverId: imguploadserverid,
    isShowProgressTips: 1,
    success: function (res) {
      console.log("downloadImage end", res)
      if (res.localId) {
        imgLocalId = res.localId
      }
    },
  })
}

function previewFile() {
  console.log("previewFile start")
  /* 执行不成功*/
  wx.previewFile({
    url: "./img/mmexport1625560743808.jpg",
    name: "mmexport1625560743808.jpg",
    size: 201199,
    hidePreviewMenuList: [],
  })
  console.log("previewFile end")
  /*wx.previewFile({
		url:"http://aotcloud.cn:28019/1.pdf",
		name:"1.pdf",
		size:1048576,
		hidePreviewMenuList:[]
	})*/
}

var videolocalid = ""
function chooseVideo() {
  console.log("chooseVideo start")
  wx.invoke(
    "chooseVideo",
    {
      sourceType: ["camera", "album"],
    },
    function (res) {
      console.log("chooseVideo end", res)
      videolocalid =
        typeof res.localIds == "object"
          ? res.localIds[0]
          : JSON.parse(res.localIds)[0]
      var thumbnail = res.thumbnail
      wx.getLocalImgData({
        localId: thumbnail,
        success: function (res) {
          if (res.localData) {
            $("#localvideodata").attr("src", res.localData)
          }
        },
      })
    }
  )
}

var videoserverid = ""
function uploadVideo() {
  console.log("uploadVideo start")
  wx.invoke(
    "uploadVideo",
    {
      localId: videolocalid,
      isShowProgressTips: 1,
    },
    function (res) {
      console.log("uploadVideo end", res)
      videoserverid = res.serverId
    }
  )
}

function downloadVideo() {
  console.log("downloadVideo start")
  wx.invoke(
    "downloadVideo",
    {
      serverId: videoserverid,
      isShowProgressTips: 1,
    },
    function (res) {
      console.log("downloadVideo end", res)
    }
  )
}

function startRecord() {
  console.log("startRecord start")
  wx.startRecord()
  wx.onVoiceRecordEnd({
    complete: function (res) {
      console.log("onVoiceRecordEnd complete", res)
    },
  })
}

var recordlocalid = ""
function stopRecord() {
  console.log("stopRecord start")
  wx.stopRecord({
    success: function (res) {
      console.log("stopRecord end", res)
      recordlocalid = res.localId
    },
  })
}

function playVoice() {
  console.log("playVoice start")
  wx.playVoice({
    localId: recordlocalid,
  })
  wx.onVoicePlayEnd({
    success: function (res) {
      console.log("onVoicePlayEnd end", res)
    },
  })
}

function pauseVoice() {
  console.log("pauseVoice start")
  wx.pauseVoice({
    localId: recordlocalid,
  })
}

function stopVoice() {
  console.log("stopVoice start")
  wx.stopVoice({
    localId: recordlocalid,
  })
}

function startInTimeVoice() {
  console.log("startRecordVoiceBuffer start")
  wx.startRecordVoiceBuffer({
    maxDuration: 200,
    sampleRate: 16000,
  })
  wx.onRecordBufferReceived(function (res) {
    console.log("onRecordBufferReceived end", res)
  })
}

function stopInTimeVoice() {
  console.log("stopRecordVoiceBuffer start")
  wx.stopRecordVoiceBuffer({})
}

var recordserverid = ""
function uploadVoice() {
  console.log("uploadVoice start")
  wx.uploadVoice({
    localId: recordlocalid,
    isShowProgressTips: 1,
    success: function (res) {
      console.log("uploadVoice end", res)
      recordserverid = res.serverId
    },
  })
}

function downloadVoice() {
  console.log("downloadVoice start")
  wx.downloadVoice({
    serverId: recordserverid,
    isShowProgressTips: 1,
    success: function (res) {
      console.log("downloadVoice end", res)
    },
  })
}

function translateVoice() {
  console.log("translateVoice start")
  wx.translateVoice({
    localId: recordlocalid,
    isShowProgressTips: 1,
    success: function (res) {
      console.log("translateVoice end", res)
    },
  })
}

function initLocation() {
  console.log("ext_gislocation_init start")
  var osType = isIosOrAndroid()
  console.log("osType", osType)
  if (osType == 1) {
    wx.invoke(
      "ext_SGMap_init",
      {
        data: {
          function: "init",
          data: {
            domain: "https://map.sgcc.com.cn",
            // "domain": "https://map.sgcc.com.cn",
            key: "8a7e046d86843c04aedb82d5b674df80",
            secret: "e607459fc8383c5cb8c88f482946d376",
          },
        },
      },
      function (res) {
        console.log("ext_SGMap_init end", res)
        wx.invoke("ext_gislocation_init", { data: {} }, function (res) {
          console.log("ext_gislocation_init end", res)
        })
      }
    )
  } else {
    console.log("ext_SGMap_init start")
    wx.invoke("ext_gislocation_init", { data: {} }, function (res) {
      console.log("ext_gislocation_init end", res)
    })
  }
}

var gisserviceid = ""

function startLocation() {
  console.log("ext_gislocation_start start")
  $.ajax({
    url: "https://dao1pw.ehome.ren:10443/repair/sysToken/logins",
    type: "post",
    dataType: "json",
    headers: {
      ticket: "111",
      system: "02",
    },
    success: function (res) {
      console.log("gettoken", res)
      if (res.status && res.status == "000000") {
        var token = res.result.token
        var randm = createNonceStr(8)
        console.log("service_id", "gis_" + randm + "_")
        wx.invoke(
          "ext_gislocation_start",
          {
            data: {
              service_id: "gis_" + randm + "_",
              url: "https://dao1pw.ehome.ren:10443/repair/SJPlaceCore/getLocate/add",
              token: token,
              interval: 10,
            },
          },
          function (res) {
            console.log("ext_gislocation_start end", res)
            gisserviceid = "gis_" + randm + "_"
          }
        )
      }
    },
  })
}

function stopLocation() {
  console.log("ext_gislocation_stop start")
  if (gisserviceid == "" || gisserviceid.length == 0) {
    alert("请先开始定位")
    return
  }
  wx.invoke(
    "ext_gislocation_stop",
    {
      data: {
        service_id: gisserviceid,
      },
    },
    function (res) {
      console.log("ext_gislocation_stop end", res)
    }
  )
}

function getCacheData() {
  console.log("ext_DataCache_Get start")
  wx.invoke("ext_DataCache_Get", {}, function (res) {
    console.log("ext_DataCache_Get end", res)
  })
}

function saveCacheData() {
  console.log("ext_DataCache_Save start")
  wx.invoke(
    "ext_DataCache_Save",
    {
      data: {
        message: "this is a test for cache",
      },
    },
    function (res) {
      console.log("ext_DataCache_Save end", res)
    }
  )
}

function saveDataToDisk() {
  console.log("ext_DataCache_SaveInfo start")
  wx.invoke(
    "ext_DataCache_SaveInfo",
    {
      data: {
        key: "dataDisk",
        message: "this is a test for Disk",
      },
    },
    function (res) {
      console.log("ext_DataCache_SaveInfo end", res)
    }
  )
}

function getDataFromDisk() {
  console.log("ext_DataCache_GetInfo start")
  wx.invoke(
    "ext_DataCache_GetInfo",
    {
      data: {
        key: "dataDisk",
      },
    },
    function (res) {
      console.log("ext_DataCache_GetInfo end", res)
    }
  )
}

function removeDataFromDisk() {
  console.log("ext_DataCache_RemoveInfo start")
  wx.invoke(
    "ext_DataCache_RemoveInfo",
    {
      data: {
        key: "dataDisk",
      },
    },
    function (res) {
      console.log("ext_DataCache_RemoveInfo end", res)
    }
  )
}

var device = new BluetoothDevice()

function openBluetoothAdapter() {
  device.init(null, function () {
    alert("请先打开蓝牙设备！")
  })
}

function closeBluetoothAdapter() {
  device.close()
}

function startBluetoothDevicesDiscovery() {
  device.startDiscovery(null, function (res) {
    window.deviceDiscoveryInterval = window.setInterval(function () {
      $("#bluetoothdevicesdiscovery").empty()
      $.each(device.devices, function (prop, dev) {
        var li = $("<li></li>")
        if (dev.name && dev.name.length > 0) {
          li.append(dev.name)
        } else {
          li.append(prop)
        }
        li.append("<br/>")
        var connectBluetooth = $("<button>连接蓝牙</button>")
        var closeBluetooth = $("<button>断开蓝牙</button>")
        var services = $("<button>获取服务</button>")
        var characteristics = $("<button>获取特征值</button>")
        var readCharacteristics = $("<button>接收消息</button>")
        var writeCharacteristics = $("<button>发送消息</button>")
        connectBluetooth.data("type", "connect")
        closeBluetooth.data("type", "close")
        closeBluetooth.attr("disabled", "disabled")
        services.data("type", "services")
        services.attr("disabled", "disabled")
        characteristics.data("type", "characteristic")
        characteristics.attr("disabled", "disabled")
        readCharacteristics.data("type", "readCharacteristic")
        readCharacteristics.attr("disabled", "disabled")
        writeCharacteristics.data("type", "writeCharacteristic")
        writeCharacteristics.attr("disabled", "disabled")
        li.append(connectBluetooth)
        li.append(closeBluetooth)
        li.append(services)
        li.append(characteristics)
        li.append(readCharacteristics)
        li.append(writeCharacteristics)
        li.data("deviceId", prop)
        $("#bluetoothdevicesdiscovery").append(li)
      })
    }, 2000)
  })
}

function stopBluetoothDevicesDiscovery() {
  device.stopDiscovery(
    function (res) {
      if (window.deviceDiscoveryInterval) {
        window.clearInterval(window.deviceDiscoveryInterval)
        delete window.deviceDiscoveryInterval
      }
    },
    function (res) {
      if (window.deviceDiscoveryInterval) {
        window.clearInterval(window.deviceDiscoveryInterval)
        delete window.deviceDiscoveryInterval
      }
    }
  )
}

function getConnectedBluetoothDevices() {
  $("#connectedDevices").empty()
  device.getConnectedDevices(function (res) {
    $.each(res.devices, function (i, dev) {
      $("#connectedDevices").append(
        dev.name ? "<li>" + dev.name + "</li>" : "<li>" + dev.deviceId + "</li>"
      )
    })
  })
}

function setClipboardData() {
  console.log("setClipboardData start")
  wx.setClipboardData({
    data: {
      name: "测试",
      title: "标题",
    },
    success: function (res) {
      console.log("setClipboardData end", res)
    },
  })
}

function getClipboardData() {
  console.log("getClipboardData start")
  wx.getClipboardData({
    success: function (res) {
      console.log("getClipboardData end", res)
    },
  })
}

function openInLocation() {
  console.log("openLocation start")
  wx.openLocation({
    latitude: 39.9432725,
    longitude: 116.3474879,
    name: "北京",
    address: "北京-测试地址",
    scale: 1,
  })
}

function getInLocation() {
  console.log("getLocation start")
  wx.getLocation({
    type: "wgs84",
    success: function (res) {
      console.log("getLocation end", res)
    },
  })
}

function startInAutoLBS() {
  console.log("startAutoLBS start")
  wx.invoke(
    "startAutoLBS",
    {
      type: "wgs84",
      continue: 1,
    },
    function (res) {
      console.log("startAutoLBS end", res)
      wx.onLocationChange(function (res) {
        console.log("onLocationChange end", res)
      })
    }
  )
}

function stopInAutoLBS() {
  console.log("stopInAutoLBS start")
  wx.invoke("stopInAutoLBS", {}, function (res) {
    console.log("stopInAutoLBS end", res)
  })
}

function listenHistoryBack() {
  console.log("onHistoryBack start")
  wx.onHistoryBack(function () {
    console.log("onHistoryBack end")
    return confirm("确定要放弃当前页面的修改?")
  })
}

function hideOptionMenu() {
  console.log("hideOptionMenu start")
  wx.hideOptionMenu()
  console.log("hideOptionMenu end")
}

function showOptionMenu() {
  console.log("showOptionMenu start")
  wx.showOptionMenu()
  console.log("showOptionMenu end")
}

function closeInWindow() {
  console.log("closeWindow start")
  wx.closeWindow()
  console.log("closeWindow end")
}

function hideMenuItems() {
  console.log("hideMenuItems start")
  wx.hideMenuItems({
    menuList: [
      "menuItem:setFont",
      "menuItem:refresh",
      "menuItem:FloatWindow",
      "menuItem:share:appMessage",
      "menuItem:share:wechat",
      "menuItem:share:wechat circle",
      "menuItem:favorite",
      "menuItem:copyUrl",
      "menuItem:openWithSafari",
      "menuItem:share:email",
    ],
  })
  console.log("hideMenuItems end")
}

function showMenuItems() {
  console.log("showMenuItems start")
  wx.showMenuItems({
    menuList: [
      "menuItem:setFont",
      "menuItem:refresh",
      "menuItem:FloatWindow",
      "menuItem:share:appMessage",
      "menuItem:share:wechat",
      "menuItem:share:wechat circle",
      "menuItem:favorite",
      "menuItem:copyUrl",
      "menuItem:openWithSafari",
      "menuItem:share:email",
    ],
  })
  console.log("showMenuItems end")
}

function hideAllNonBaseMenuItem() {
  console.log("hideAllNonBaseMenuItem start")
  wx.hideAllNonBaseMenuItem()
  console.log("hideAllNonBaseMenuItem end")
}

function showAllNonBaseMenuItem() {
  console.log("showAllNonBaseMenuItem start")
  wx.showAllNonBaseMenuItem()
  console.log("showAllNonBaseMenuItem end")
}

function listenUserCaptureScreen() {
  console.log("onUserCaptureScreen start")
  wx.onUserCaptureScreen(function (res) {
    console.log("用户截屏了")
    alert("用户截屏了")
    console.log("onUserCaptureScreen end")
  })
}

function openExtOpenUrl() {
  console.log("openUrl start")
  wx.invoke(
    "openUrl",
    {
      type: 0,
      url: "https://www.baidu.com",
    },
    function (res) {
      console.log("openUrl end", res)
    }
  )
}

function scanQRCode() {
  console.log("scanQRCode start")
  wx.scanQRCode({
    desc: "scanQRCode desc",
    needResult: 0,
    scanType: ["qrCode", "barCode"],
    success: function (res) {
      console.log("scanQRCode end", res)
    },
    error: function (res) {
      console.log("scanQRCode error", res)
    },
  })
}

function getStepCount() {
  console.log("getStepCount start")
  wx.invoke(
    "getStepCount",
    {
      preMode: false,
    },
    function (res) {
      console.log("getStepCount end", res)
    }
  )
}

function getAllPhoneContacts() {
  console.log("getAllPhoneContacts start")
  wx.invoke("getAllPhoneContacts", {}, function (res) {
    console.log("getAllPhoneContacts end", res)
  })
}

function addCalendarEvent() {
  console.log("addCalendarEvent start")
  wx.invoke(
    "addCalendarEvent",
    {
      allDayEvent: false,
      title: "日历事件测试",
      note: "这是一个测试",
      startTime: Date.parse(new Date()) / 1000,
      endTime: Date.parse(new Date((new Date() / 1000 + 86400) * 1000)),
      location: "",
      timezone: 8,
      alarm: 10,
      repeat: {
        until: Date.parse(new Date((new Date() / 1000 + 86400) * 1000)),
        type: 0,
      },
    },
    function (res) {
      console.log("addCalendarEvent end", res)
    }
  )
}

function showWatermark() {
  console.log("showWatermark start")
  wx.invoke("showWatermark", {}, function (res) {
    console.log("showWatermark end", res)
  })
}

function hideWatermark() {
  console.log("hideWatermark start")
  wx.invoke("hideWatermark", {}, function (res) {
    console.log("hideWatermark end", res)
  })
}

function authenticationList() {
  console.log("checkIsSupportSoterAuthentication start")
  wx.invoke("checkIsSupportSoterAuthentication", {}, function (res) {
    console.log("checkIsSupportSoterAuthentication end", res)
    if (res.err_msg == "checkIsSupportSoterAuthentication:ok") {
      var list = res.supportMode
      list.forEach(function (mode, index) {
        var option = $("<option value='" + mode + "'>" + mode + "</option>")
        if (index == 0) {
          option = $(
            "<option value='" + mode + "' selected>" + mode + "</option>"
          )
        }
        $(".soterlist").append(option)
      })
    }
  })
}

function checkSoterEnroll() {
  console.log("checkIsSoterEnrolledInDevice start")
  wx.invoke(
    "checkIsSoterEnrolledInDevice",
    {
      checkAuthMode: $(".soterlist").val(),
    },
    function (res) {
      console.log("checkIsSoterEnrolledInDevice end", res)
    }
  )
}

function startSoterAuthentication() {
  console.log("startSoterAuthentication start")
  var modes = []
  $(".soterlist option").each(function () {
    modes.push($(this).val())
  })
  wx.invoke(
    "startSoterAuthentication",
    {
      requestAuthModes: modes,
      challenge: "test_challenge",
      authContent: "对话框提示内容",
    },
    function (res) {
      console.log("startSoterAuthentication end", res)
    }
  )
}

function startBioaAuthentication() {
  console.log("bioassayAuthentication start")
  wx.invoke(
    "bioassayAuthentication",
    {
      name: $(".bioaname").val(),
      idcard: $(".bioaidcard").val(),
    },
    function (res) {
      console.log("bioassayAuthentication end", res)
    }
  )
}

function lauchOtherApp() {
  console.log("launch3rdApp start")
  wx.invoke(
    "launch3rdApp",
    {
      appName: "微信",
      appId: "webchat",
      messageExt: "from=weixin_webview",
      packageName: "com.tencent.mm",
      param: "webview",
    },
    function (res) {
      console.log("launch3rdApp end", res)
    }
  )
}

function lauchOtherAppWithParams() {
  console.log("request3rdApp start")
  var osType = isIosOrAndroid()
  wx.invoke(
    "request3rdApp",
    {
      scheme:
        (osType == 1 ? "androidsgmap" : " iossgmap") +
        "://wxworklocal?token=tekedee44dd&seq=req_dedt&param=dddeed",
      needToken: 0,
      param: window.atob({ action: "ocr", type: 1 }),
    },
    function (res) {
      console.log("request3rdApp end", res)
    }
  )
}

function getInstallState() {
  console.log("getInstallState start")
  wx.invoke(
    "getInstallState",
    {
      packageName: "com.tencent.weworklocal",
    },
    function (res) {
      console.log("getInstallState end", res)
    }
  )
}

function ocrScan() {
  console.log("ocr start")
  wx.invoke(
    "ocr",
    {
      sourceType: ["camera", "album"],
      ocrType: $("#ocrtype").val(),
      title: "OCR识别",
    },
    function (res) {
      console.log("ocr end", res)
    }
  )
}

function screenDirection() {
  console.log("ext_screenControl_direction start")
  wx.invoke(
    "ext_screenControl_direction",
    {
      data: {
        orientation: $(".screendirection").val(),
      },
    },
    function (res) {
      console.log("ext_screenControl_direction end", res)
    }
  )
}

function etasList() {
  console.log("ext_Etas_List start")
  wx.invoke(
    "ext_Etas_List",
    {
      data: {},
    },
    function (res) {
      console.log("ext_Etas_List end", res)
      if (res.err_msg == "ext_Etas_List:ok") {
        var result = JSON.parse(res.result)
        result.forEach(function (item, index) {
          var option = $("<option value='" + item + "'></option>")
          if (item == 1) {
            option.append("指纹")
          } else if (item == 2) {
            option.append("人脸")
          } else if (item == 3) {
            option.append("pin")
          } else if (item == 4) {
            option.append("手势")
          }
          if (index == 0) {
            option.attr("selected", "selected")
          }
          $(".etaslist").append(option)
        })
      }
    }
  )
}

function etasInit() {
  console.log("ext_Etas_Init start")
  wx.invoke(
    "ext_Etas_Init",
    {
      data: {
        ifaaUrl: "",
        userID: "",
        transID: createNonceStr(16),
        transPayload: "",
        transType: "Init",
        fallbackTitle: "",
        reasonTitle: "",
        authtype: $(".etaslist").val(),
      },
    },
    function (res) {
      console.log("ext_Etas_Init end", res)
    }
  )
}

function etasStatus() {
  console.log("ext_Etas_checkStatus start")
  wx.invoke(
    "ext_Etas_checkStatus",
    {
      data: {},
    },
    function (res) {
      console.log("ext_Etas_checkStatus end", res)
    }
  )
}

function etasReg() {
  console.log("ext_Etas_Reg start")
  if ($(".etaslist").val() == "3" || $(".etaslist").val() == "4") {
    wx.invoke(
      "ext_Etas_checkStatus",
      {
        data: {},
      },
      function (res) {
        console.log("ext_Etas_checkStatus end", res)
        wx.invoke(
          "ext_Etas_Reg",
          {
            data: {},
          },
          function (res) {
            console.log("ext_Etas_Reg end", res)
          }
        )
      }
    )
  } else {
    wx.invoke(
      "ext_Etas_Reg",
      {
        data: {},
      },
      function (res) {
        console.log("ext_Etas_Reg end", res)
      }
    )
  }
}

function etasUnReg() {
  console.log("ext_Etas_UnReg start")
  wx.invoke(
    "ext_Etas_UnReg",
    {
      data: {},
    },
    function (res) {
      console.log("ext_Etas_UnReg end", res)
    }
  )
}

function etasVerify() {
  console.log("ext_Etas_Verify start")
  wx.invoke(
    "ext_Etas_Verify",
    {
      data: {},
    },
    function (res) {
      console.log("ext_Etas_Verify end", res)
    }
  )
}

function etasOffLineVerify() {
  console.log("ext_Etas_OffLineVerify start")
  wx.invoke(
    "ext_Etas_OffLineVerify",
    {
      data: {},
    },
    function (res) {
      console.log("ext_Etas_OffLineVerify end", res)
    }
  )
}

function etasSaveData() {
  console.log("ext_Etas_SaveData start")
  wx.invoke(
    "ext_Etas_SaveData",
    {
      data: {
        key: "etas_save_key",
        message: "this is a test",
      },
    },
    function (res) {
      console.log("ext_Etas_SaveData end", res)
    }
  )
}

function etasGetData() {
  console.log("ext_Etas_GetData start")
  wx.invoke(
    "ext_Etas_GetData",
    {
      data: {
        key: "etas_save_key",
      },
    },
    function (res) {
      console.log("ext_Etas_GetData end", res)
    }
  )
}

function etasRemoveData() {
  console.log("ext_Etas_RemoveData start")
  wx.invoke(
    "ext_Etas_RemoveData",
    {
      data: {
        key: "etas_save_key",
      },
    },
    function (res) {
      console.log("ext_Etas_RemoveData end", res)
    }
  )
}

function etasRemoveAllData() {
  console.log("ext_Etas_Clear start")
  wx.invoke(
    "ext_Etas_Clear",
    {
      data: {},
    },
    function (res) {
      console.log("ext_Etas_Clear end", res)
    }
  )
}

function iscpInit() {
  console.log("ext_ISCP_Init start")
  wx.invoke(
    "ext_ISCP_Init",
    {
      data: {
        iscpIp: $("#iscp-iscpip").val(),
      },
    },
    function (res) {
      console.log("ext_ISCP_Init end", res)
    }
  )
}

function iscpConnect() {
  console.log("ext_ISCP_ConnectService start")
  wx.invoke(
    "ext_ISCP_ConnectService",
    {
      data: {
        iscpIp: $("#iscp-iscpip").val(),
        ip: $("#iscp-serverip").val(),
        port: $("#iscp-serverport").val(),
        user: $("#scp-serveruser").val(),
        appid: $("#iscp-serverappid").val(),
      },
    },
    function (res) {
      console.log("ext_ISCP_ConnectService end", res)
    }
  )
}

function iscpGetLocalPort() {
  console.log("ext_ISCP_GetLocalPort start")
  wx.invoke(
    "ext_ISCP_GetLocalPort",
    {
      data: {
        iscpIp: $("#iscp-iscpip").val(),
        ip: $("#iscp-localip").val(),
        port: $("iscp-localport").val(),
      },
    },
    function (res) {
      console.log("ext_ISCP_GetLocalPort end", res)
    }
  )
}

function iscpStatus() {
  console.log("ext_ISCP_Status start")
  wx.invoke(
    "ext_ISCP_Status",
    {
      iscpIp: $("#iscp-iscpip").val(),
    },
    function (res) {
      console.log("ext_ISCP_Status end", res)
    }
  )
}

function iscpClose() {
  console.log("ext_ISCP_Close start")
  wx.invoke(
    "ext_ISCP_Close",
    {
      data: {
        iscpIp: $("#iscp-iscpip").val(),
      },
    },
    function (res) {
      console.log("ext_ISCP_Close end", res)
    }
  )
}

var netuploadchannelid
function netUploadFile() {
  console.log("ext_Net_Upload start")
  var channelId = "net_upload_" + createNonceStr(8)
  netuploadchannelid = channelId

  wx.invoke(
    "multiWindows_subscribe",
    {
      channelId: channelId,
    },
    function (res) {
      console.log(channelId, res)
    }
  )
  wx.chooseImage({
    count: 1,
    sizeType: ["original", "compressed"],
    sourceType: ["album", "camera"],
    quality: 0.8,
    success: function (res) {
      var localIds = res.localIds
      localIds.forEach(function (id) {
        wx.invoke(
          "getLocalResPath",
          {
            localId: id,
          },
          function (res) {
            var uploadUrl = res.localResPath
            wx.invoke(
              "ext_Net_Upload",
              {
                data: {
                  url: $("#netuploadurl").val(),
                  header: {},
                  id: channelId,
                  timeout: 10,
                  files: {
                    keyA: uploadUrl,
                  },
                },
              },
              function (res) {
                console.log("ext_Net_Upload end", res)
              }
            )
          }
        )
      })
    },
  })
}

function netCancelUploadFile() {
  console.log("ext_Net_CancelUpload start")
  wx.invoke(
    "ext_Net_CancelUpload",
    {
      data: {
        id: netuploadchannelid,
      },
    },
    function (res) {
      console.log("ext_Net_CancelUpload end", res)
    }
  )
}

var netdownloadchannelid
function netdownloadFile() {
  console.log("ext_Net_Download start")
  var channelId = "net_download_" + createNonceStr(8)
  netdownloadchannelid = channelId
  wx.invoke(
    "multiWindows_subscribe",
    {
      channelId: channelId,
    },
    function (res) {
      console.log(channelId, res)
    }
  )
  wx.invoke(
    "ext_Net_Download",
    {
      data: {
        cmd: $(".netdownloadtype").val(),
        url: $("#downloadurl").val(),
        header: {},
        data: {},
        id: channelId,
        timeout: 10,
        fileName: createNonceStr(8) + "-" + createNonceStr(4) + ".apk",
      },
    },
    function (res) {
      console.log("ext_Net_Download end", res)
    }
  )
}

function wemeetInit() {
  console.log("ext_WeMeet_Init start")
  wx.invoke(
    "ext_WeMeet_Init",
    {
      data: {
        serverAddress: $("#wemeetserver").val(),
      },
    },
    function (res) {
      console.log("ext_WeMeet_Init end", res)
    }
  )
}

function wemeetLogin() {
  console.log("ext_WeMeet_Login start")
  wx.invoke(
    "ext_WeMeet_Login",
    {
      data: {
        PostLoginURL: $("#wemeetpostlogin").val(),
      },
    },
    function (res) {
      console.log("ext_WeMeet_Login end", res)
    }
  )
}

function wemeetLogout() {
  console.log("ext_WeMeet_Logout start")
  wx.invoke(
    "ext_WeMeet_Logout",
    {
      data: {
        PostLoginURL: $("#wemeetpostlogin").val(),
      },
    },
    function (res) {
      console.log("ext_WeMeet_Logout end", res)
    }
  )
}

function wemeetJoin() {
  console.log("ext_WeMeet_Join start")
  wx.invoke(
    "ext_WeMeet_Join",
    {
      data: {
        meetingCode: $("#wemeetroomcode").val(),
        nickname: "测试",
        MicOn: "false",
        camera: "false",
        inmeeting: "false",
      },
    },
    function (res) {
      console.log("ext_WeMeet_Join end", res)
    }
  )
}

function gisInit() {
  console.log("ext_SGMap_init start")
  wx.invoke(
    "ext_SGMap_init",
    {
      data: {
        function: "init",
        data: {
          domain: "https://map.sgcc.com.cn",
          key: "8a7e046d86843c04aedb82d5b674df80",
          secret: "e607459fc8383c5cb8c88f482946d376",
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_init end", res)
    }
  )
}

function gisCheckLocationPermission() {
  console.log("checkLocationPermission start")
  wx.invoke(
    "ext_SGMap_Location",
    {
      data: {
        function: "checkLocationPermission",
        data: {},
      },
    },
    function (res) {
      console.log("checkLocationPermission end", res)
    }
  )
}

function gisOpenLocationPermission() {
  console.log("openLocationPermissionSetting start")
  wx.invoke(
    "ext_SGMap_Location",
    {
      data: {
        function: "openLocationPermissionSetting",
        data: {},
      },
    },
    function (res) {
      console.log("openLocationPermissionSetting end", res)
    }
  )
}

function gisOpenMap() {
  console.log("ext_SGMap_Operation open")
  var heightSize = (document.documentElement.clientHeight * 2) / 3
  var widthSize = (document.documentElement.clientWidth * 2) / 3
  var left = 110
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "open",
        data: {
          left: left,
          top: 100,
          width: widthSize,
          height: heightSize,
          lng: 116.397228,
          lat: 39.909604,
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation open end", res)
    }
  )
}

function gisCloseMap() {
  console.log("ext_SGMap_Operation close")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "close",
        data: {},
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation close end", res)
    }
  )
}

function gisMapSetting() {
  console.log("ext_SGMap_Operation map_setting")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "setting",
        data: {
          lng: 116.413888,
          lat: 39.01924, //lng和lat 决定地图的中心点
          zoomLevel: 9, ///缩放级别（默认3-19）
          minZoomLevel: 3, //最小缩放级别  默认是0
          maxZoomLevel: 19, //最大缩放级别  默认是22，上限25
          showSatellite: false, //是否显示卫星图层
          showCompass: false, ///是否显示指南针, 默认YES
          logoViewMargins: {
            ///logo位置的偏移量
            x: 50,
            y: 15,
          },
          showTraffic: false, ///是否显示交通路况图层, 默认为NO(当showSatellite为false时生效)
          showRoadNet: false, ///是否显示路网信息, 默认为YES((当showSatellite为true时生效)
          enableScroll: false, ///是否支持旋转, 默认YES
          showUserLocation: false, /////是否显示用户位置
          showScale: false, //显示比例尺
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation map_setting end", res)
    }
  )
}

function gisMapTraffic() {
  console.log("ext_SGMap_Operation setting showTraffic")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "setting",
        data: {
          showTraffic: true, ///是否显示交通路况图层, 默认为NO(当showSatellite为false时生效)
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation setting showTraffic end", res)
    }
  )
}

function gisMapSatellite() {
  console.log("ext_SGMap_Operation showSatellite")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "setting",
        data: {
          showSatellite: true, //是否显示卫星图层
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation showSatellite end", res)
    }
  )
}

function gisMapCompass() {
  console.log("ext_SGMap_Operation showSatellite")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "setting",
        data: {
          showCompass: true, ///是否显示指南针, 默认YES
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation showSatellite end", res)
    }
  )
}

function gisMapRoadNet() {
  console.log("ext_SGMap_Operation showRoadNet")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "setting",
        data: {
          showRoadNet: true, ///是否显示路网信息, 默认为YES((当showSatellite为true时生效)
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation showRoadNet end", res)
    }
  )
}

function gisMapScroll() {
  console.log("ext_SGMap_Operation enableScroll")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "setting",
        data: {
          enableScroll: true, ///是否支持旋转, 默认YES
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation enableScroll end", res)
    }
  )
}

function gisMapUserLocation() {
  console.log("ext_SGMap_Operation showUserLocation")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "setting",
        data: {
          showUserLocation: true, /////是否显示用户位置
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation showUserLocation end", res)
    }
  )
}

function gisMapScale() {
  console.log("ext_SGMap_Operation showScale")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "setting",
        data: {
          showScale: true, //显示比例尺
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation showScale end", res)
    }
  )
}

function gisMapCenterPoint() {
  console.log("ext_SGMap_Operation setting map_center")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "setting",
        data: {
          lng: 116.413387,
          lat: 39.01924, //lng和lat 决定地图的中心点
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation setting map_center end", res)
    }
  )
}

function gisMapBackToLocation() {
  console.log("ext_SGMap_Operation backToLocation")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "backToLocation",
        data: {},
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation backToLocation end", res)
    }
  )
}

function gisMapDistanceWithLocation() {
  console.log("ext_SGMap_Operation distanceFromLocation")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "distanceFromLocation",
        data: {
          lat1: 36.65431,
          lng1: 116.65431,
          lat2: 36.66431,
          lng2: 116.66431,
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation distanceFromLocation end", res)
    }
  )
}

function gisMapZoomIn() {
  console.log("ext_SGMap_Operation zoomIn")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "zoomIn",
        data: {},
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation zoomIn end", res)
    }
  )
}

function gisMapZoomOut() {
  console.log("ext_SGMap_Operation zoomOut")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "zoomOut",
        data: {},
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation zoomOut end", res)
    }
  )
}

function gisMapMarkerStyle() {
  console.log("ext_SGMap_Operation callout")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "callout",
        data: {
          color: "#FF4500",
          fontSize: 20,
          borderRadius: 20,
          borderWidth: 5,
          borderColor: "#F4A460",
          bgColor: "#FFFFFF",
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation callout end", res)
    }
  )
}

function gisMapAddMarkers() {
  console.log("ext_SGMap_Operation addMarkers")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "addMarkers",
        data: {
          showAllMarkers: true,
          points: [
            {
              id: "1000000001",
              lng: 114.402965,
              lat: 30.475845,
              title: "标记1",
              image_id: "1",
              img: "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",
            },
            {
              id: "1000000002",
              lng: 114.409308,
              lat: 30.476229,
              title: "标记2",
              image_id: "1",
              img: "iVBORw0KGgoAAAANSUhEUgAAADwAAACgCAYAAABQWA9KAAAKN2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAeJydlndUU9kWh8+9N71QkhCKlNBraFICSA29SJEuKjEJEErAkAAiNkRUcERRkaYIMijggKNDkbEiioUBUbHrBBlE1HFwFBuWSWStGd+8ee/Nm98f935rn73P3Wfvfda6AJD8gwXCTFgJgAyhWBTh58WIjYtnYAcBDPAAA2wA4HCzs0IW+EYCmQJ82IxsmRP4F726DiD5+yrTP4zBAP+flLlZIjEAUJiM5/L42VwZF8k4PVecJbdPyZi2NE3OMErOIlmCMlaTc/IsW3z2mWUPOfMyhDwZy3PO4mXw5Nwn4405Er6MkWAZF+cI+LkyviZjg3RJhkDGb+SxGXxONgAoktwu5nNTZGwtY5IoMoIt43kA4EjJX/DSL1jMzxPLD8XOzFouEiSniBkmXFOGjZMTi+HPz03ni8XMMA43jSPiMdiZGVkc4XIAZs/8WRR5bRmyIjvYODk4MG0tbb4o1H9d/JuS93aWXoR/7hlEH/jD9ld+mQ0AsKZltdn6h21pFQBd6wFQu/2HzWAvAIqyvnUOfXEeunxeUsTiLGcrq9zcXEsBn2spL+jv+p8Of0NffM9Svt3v5WF485M4knQxQ143bmZ6pkTEyM7icPkM5p+H+B8H/nUeFhH8JL6IL5RFRMumTCBMlrVbyBOIBZlChkD4n5r4D8P+pNm5lona+BHQllgCpSEaQH4eACgqESAJe2Qr0O99C8ZHA/nNi9GZmJ37z4L+fVe4TP7IFiR/jmNHRDK4ElHO7Jr8WgI0IABFQAPqQBvoAxPABLbAEbgAD+ADAkEoiARxYDHgghSQAUQgFxSAtaAYlIKtYCeoBnWgETSDNnAYdIFj4DQ4By6By2AE3AFSMA6egCnwCsxAEISFyBAVUod0IEPIHLKFWJAb5AMFQxFQHJQIJUNCSAIVQOugUqgcqobqoWboW+godBq6AA1Dt6BRaBL6FXoHIzAJpsFasBFsBbNgTzgIjoQXwcnwMjgfLoK3wJVwA3wQ7oRPw5fgEVgKP4GnEYAQETqiizARFsJGQpF4JAkRIauQEqQCaUDakB6kH7mKSJGnyFsUBkVFMVBMlAvKHxWF4qKWoVahNqOqUQdQnag+1FXUKGoK9RFNRmuizdHO6AB0LDoZnYsuRlegm9Ad6LPoEfQ4+hUGg6FjjDGOGH9MHCYVswKzGbMb0445hRnGjGGmsVisOtYc64oNxXKwYmwxtgp7EHsSewU7jn2DI+J0cLY4X1w8TogrxFXgWnAncFdwE7gZvBLeEO+MD8Xz8MvxZfhGfA9+CD+OnyEoE4wJroRIQiphLaGS0EY4S7hLeEEkEvWITsRwooC4hlhJPEQ8TxwlviVRSGYkNimBJCFtIe0nnSLdIr0gk8lGZA9yPFlM3kJuJp8h3ye/UaAqWCoEKPAUVivUKHQqXFF4pohXNFT0VFysmK9YoXhEcUjxqRJeyUiJrcRRWqVUo3RU6YbStDJV2UY5VDlDebNyi/IF5UcULMWI4kPhUYoo+yhnKGNUhKpPZVO51HXURupZ6jgNQzOmBdBSaaW0b2iDtCkVioqdSrRKnkqNynEVKR2hG9ED6On0Mvph+nX6O1UtVU9Vvuom1TbVK6qv1eaoeajx1UrU2tVG1N6pM9R91NPUt6l3qd/TQGmYaYRr5Grs0Tir8XQObY7LHO6ckjmH59zWhDXNNCM0V2ju0xzQnNbS1vLTytKq0jqj9VSbru2hnaq9Q/uE9qQOVcdNR6CzQ+ekzmOGCsOTkc6oZPQxpnQ1df11Jbr1uoO6M3rGelF6hXrtevf0Cfos/ST9Hfq9+lMGOgYhBgUGrQa3DfGGLMMUw12G/YavjYyNYow2GHUZPTJWMw4wzjduNb5rQjZxN1lm0mByzRRjyjJNM91tetkMNrM3SzGrMRsyh80dzAXmu82HLdAWThZCiwaLG0wS05OZw2xljlrSLYMtCy27LJ9ZGVjFW22z6rf6aG1vnW7daH3HhmITaFNo02Pzq62ZLde2xvbaXPJc37mr53bPfW5nbse322N3055qH2K/wb7X/oODo4PIoc1h0tHAMdGx1vEGi8YKY21mnXdCO3k5rXY65vTW2cFZ7HzY+RcXpkuaS4vLo3nG8/jzGueNueq5clzrXaVuDLdEt71uUnddd457g/sDD30PnkeTx4SnqWeq50HPZ17WXiKvDq/XbGf2SvYpb8Tbz7vEe9CH4hPlU+1z31fPN9m31XfKz95vhd8pf7R/kP82/xsBWgHcgOaAqUDHwJWBfUGkoAVB1UEPgs2CRcE9IXBIYMj2kLvzDecL53eFgtCA0O2h98KMw5aFfR+OCQ8Lrwl/GGETURDRv4C6YMmClgWvIr0iyyLvRJlESaJ6oxWjE6Kbo1/HeMeUx0hjrWJXxl6K04gTxHXHY+Oj45vipxf6LNy5cDzBPqE44foi40V5iy4s1licvvj4EsUlnCVHEtGJMYktie85oZwGzvTSgKW1S6e4bO4u7hOeB28Hb5Lvyi/nTyS5JpUnPUp2Td6ePJninlKR8lTAFlQLnqf6p9alvk4LTduf9ik9Jr09A5eRmHFUSBGmCfsytTPzMoezzLOKs6TLnJftXDYlChI1ZUPZi7K7xTTZz9SAxESyXjKa45ZTk/MmNzr3SJ5ynjBvYLnZ8k3LJ/J9879egVrBXdFboFuwtmB0pefK+lXQqqWrelfrry5aPb7Gb82BtYS1aWt/KLQuLC98uS5mXU+RVtGaorH1futbixWKRcU3NrhsqNuI2ijYOLhp7qaqTR9LeCUXS61LK0rfb+ZuvviVzVeVX33akrRlsMyhbM9WzFbh1uvb3LcdKFcuzy8f2x6yvXMHY0fJjpc7l+y8UGFXUbeLsEuyS1oZXNldZVC1tep9dUr1SI1XTXutZu2m2te7ebuv7PHY01anVVda926vYO/Ner/6zgajhop9mH05+x42Rjf2f836urlJo6m06cN+4X7pgYgDfc2Ozc0tmi1lrXCrpHXyYMLBy994f9Pdxmyrb6e3lx4ChySHHn+b+O31w0GHe4+wjrR9Z/hdbQe1o6QT6lzeOdWV0iXtjusePhp4tLfHpafje8vv9x/TPVZzXOV42QnCiaITn07mn5w+lXXq6enk02O9S3rvnIk9c60vvG/wbNDZ8+d8z53p9+w/ed71/LELzheOXmRd7LrkcKlzwH6g4wf7HzoGHQY7hxyHui87Xe4Znjd84or7ldNXva+euxZw7dLI/JHh61HXb95IuCG9ybv56Fb6ree3c27P3FlzF3235J7SvYr7mvcbfjT9sV3qID0+6j068GDBgztj3LEnP2X/9H686CH5YcWEzkTzI9tHxyZ9Jy8/Xvh4/EnWk5mnxT8r/1z7zOTZd794/DIwFTs1/lz0/NOvm1+ov9j/0u5l73TY9P1XGa9mXpe8UX9z4C3rbf+7mHcTM7nvse8rP5h+6PkY9PHup4xPn34D94Tz+49wZioAAAAJcEhZcwAALiMAAC4jAXilP3YAAAojSURBVHic7ZwLcFXFGce/TW5AAoGMQcJDAxqQSHSCpEChdVpEwyAijuC7VuK0pRPsI4xS0ZahiDO1WmxlRGmL0lFmwKDtoCIopBqFDq2vIEqqpBICIpKgrZkkEnJP/9895ySXS+5zd6+w7n/m49zcu2fP9zt7zj6/JeA4DulQ3iOUg8Mk2DdgxbDzYENhA2FnwIKwNthnsEOwj2Dvw3bC/tE8n77Q4VdAZWaAHIzDdbCrYd+GZcVIngHL8awANjHstw7ktR3Hv8LWA/6wKh+VAMM5LskFsFkUGzJRcR7f9exB5P8cjg8B/HXZjKWA4cjFOPwGVibrSAwx/DVsuF41jncB/F+pZpYSMC6cSy7oD8l9NNOlS2E7cf0ncLwT4EeTzSBpYFzsOzg8CTsn2XMVScBug02HL7cC+uVkTk4YGJnzhRbC7oNlJuWiHg2BbYZfS3BcBvCEmpuEgJEpv0d/hM1N1TtN4tdpKawIPpYD+li8E+ICI6NeODxNbg18quomWH/4OgfQX8ZKGBMYGfCju5ZObVhfV8LWedCd0RLFK+HfweYodUuvuMPzB9jt0RJEBcadugWHn2lwSrfmw/e3Ucqre/qxR2CcMAqHlVrd0quHwbAD0HsifzgJGAm55lsD65cGx3QpG7YGLJMj3+eeSph7T5NVXj0H9fwUdFMmYGhRiD7awD7UmYlWvbmdMus/J3oTQ4O/NxI1tam8Kk2AzaOIJ/UEYNyR/jjcq+qK5w4gqiwlZ8755PTKcMK7oF0dF74RP7iIqNMRziYMEB96k8SuI6o8oKVgWotS/q//RWQJcyV1luxVMoG2cDzRz8dRMFOEQLmXRkKI6OeQI2ZixHzleYL+8h7R4h1ErR2ynlAerBK2xP+iCxh3og8OP5W9Qi6G9utn0LHSfIc7LBmxIMPVlc5xaG4x0SVni+OzN1LggPw0wO1g+y1KuZX/CC/h68mdjUhZ/XsTvXgNtY/KdXhGI2aJRhOfw7MwhQOcwEuzRUfZM5QlCc2lfCMs1EyFA5fL5Mpsa6+Qg+3Oyz13ULaTtWGm6JjyNGW1HZfxLjS66gZGkQ8jd0omZVWUUOekIfKwkRqZ62T9erIILqyRGndPAmMBHuv9fglfQRID+Ty8/fd8M9TeZaqE9R/v8gtJPL6bqC7p4X53VuQyPuYDT5Vx7Mcl9CWand4qYX2F8nQcUVkqOua9LDVfxrMlXcBSHY3yYuIGpLdMHvE0q5Ay7niV6Iu4I96oCjEG8GxzLZbydE0x6vXc3o72bmggw8m8ZJgg7pykqGFgHcglPFrGkfH5xPVnQMfj7Mt/l8cPpk4Ay0wvjWbgAhlnxuQResNy7XeiKjqTWnAYIJFFAQNLdSUxEIg5paJSZ54RfSYjQZ3FwFLvX9AJrRGlRUGSvlY/BpZaGvm0NX0T8U2t0lkEGFhqTLKrSeqdSkq7m0MDexkdZ2CprvlrB9xXgmtRXTW1v6Rbc0Aa+H8M/KlMDgdRbx5uFY352Y7WpZe246Lln59ITzsdYeD9ss6seJsyl31Lbyk/tYfaO4PSwA0MXCfrzOrdNHTRBHG4b5aTL5tXpPgmdgRF64NvKGnr/x3AkOlzdLk+xB+jUs2lA63jvK0knpqutpT9d3fJDmpvbpN+f/eC9TN/8MAr6ykDszZ/RIOqPhB1157vFKmA9mG3fywaV+1SsjT7Gv/jA79CkjMerIptVDSsn3h/8lBnjAy0D1t3VOy/7jm5rm+YXuV/fODnYTzw6iWTI/t51d9ozCNTxbvXj3YuhONxZytPPL97ibe6UdR/bxMVHpPtTLrivgYzusAcOoD3eCu5swLSmr+NLtpYL/b/qYwysgPO2eEgkfCRYVPHOsXRO2uofe0eKlThi6etYGzmD+GTeBw3oQSYtWUfFZz7Z6K5xaKuchwFB/d1LsDXIlpcWHO7+M9jtRR8tJZGtstN2PWkNf6HcGCOidoHG6HqKmg3afW7VASjvD6iY8o51HDxIGoZlE2dPHHDSy27jlBOdSMNP9QSClzToQbYs/4fXcC86ITHejk+PqzjqmhWsjZ8QCNh6dbvwdb1zEQutawid7lF5fvzVYonhB4N/+IEYA4KQSkvIjemwwQtioz5OGm5FAmqAL0RH69Km1t69DxY1kd+GS3kgddVMRwIzWiejuIm6Ec9/dAjMO7MJyjlm/HxBTo1gtCSEXdVvg+GQz39GDWoBSdsAfTd+Hi/Ls80id/bTdF+jBe29AC5j/bp8j5XAfaBWAliAnP8Ikr5BnL7oZeq9EyDNsNuiZcobughoNsAzZF4W0hxsItC8UhodrywQ1ZCwaXIqAXQM/BxG2ycpHOqxXskZvohDfGUcPiwNzMyjdyxc3FqvinXO7DpyWwISSpAHBk3AfpyfKyBjUzSOdXiKLsynrZJ5qSkI+K5fQM0L6DzlImq2YhkVQ+7DL4kHdGV0p4HjpXwoLmkh6SSh4R4WnkqfPg4lZNT3tWCC+71Hu9XKE3LpeRu6OKSbUg1A6ltPLjwe15FxrV3rkxeCagJdjmu+aFMJtIbteDAW16Txe20rtAHXnSfxjdYNiMlO9PgyA6vc8I9sj4q8gwTr/rP4BurIjNlew/hUDXvNyB3bkxqujdMHFA8i2+oovzUbrbkUQqgeYfJOgV58zw5b9iolvesW0qBWXDwGUBzbOMaSj26jyfdboo1zEtVyoFZcPRJQPPiF0+gJbvewnEct/GNU++ZJmAWHF4F6L7kbgVKVDxLX8E3TJNb+oBZcHy5B700wVPu4Bul0yetwCwA3Atobp8Xxkn6K75Buv3RDswCyC+8kp4fJcn9SLMsHb6kBdjTT8jtid0a8f06wN6VLifSBuzNj/GeqAPk7o3iEueaOOo+QR1KZwkzNC9M/9Kzr0RpBT4VlDZgx3E4apff45nUPT20F8b/ZcUKIYS6/WgxlBZgwPKggiMMIoePYz2rRJpyQG/Q7Yt2YIDMxqGKP7/UIGjlO0S1XlmWoMwrgFs2PLSFoIpvDKC1dCl9aQX2HmMuWbpvp+CNlCfo9YOuLSgVdPfEUOzH4zinRufjrbuE+Z3N2bLvZNhwLcdvpfmCpo1w+nvnLNblkG5grqBoZW38hJxm2oiuc05b4FCsSG0CD2hYGq3xJbYdVixeIRjLtfH2g7ETlnTvranX6ZBuYO5UjK0oiQ/MacLO0SbdwCtglah9+1WWRq+pF5RyhRVqllq8c7RJKzC3p9yDwseqeybyVrqoHQ//lHLdXUztlRZ3FwF9LT4+wT2qsuE9JuOSNaNryfKgOSzh6zF4YHlAi0ljpyIR2XbYdFlg02WBTZcFNl0W2HRZYNNlgU2XBTZdFth0WWDTZYFNlwU2XRbYdFlg02WBTZcFNl0W2HRZYNNlgU2XBTZdFth0WWDTZYFNlwU2XRbYdFlg02WBTZcFNl0W2HRZYNNlgU2XBTZdFth0WWDTZYFNlwU2Xf8HJ83gSIJfNTYAAAAASUVORK5CYII=",
            },
          ],
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation addMarkers end", res)
      wx.invoke(
        "ext_SGMap_Operation",
        {
          data: {
            function: "setting",
            data: {
              lng: 114.402965,
              lat: 30.475845,
              zoomLevel: 15,
            },
          },
        },
        function (res) {
          console.log("ext_SGMap_Operation addPolygon setting", res)
        }
      )
    }
  )
}

function gisMapRemoveMarkers() {
  console.log("ext_SGMap_Operation deleteMarkers")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "deleteMarkers",
        data: {
          id: "1000000001,1000000005",
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation deleteMarkers", res)
    }
  )
}

function gisMapAddPolygon() {
  console.log("ext_SGMap_Operation addPolygon")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "addPolygon",
        data: {
          id: "polygon_id_1", //必填，标记位 唯一值，标记添加的点线面唯一
          color: "#ff00ff", //颜色值#ff00ff
          alpha: 0.5, //透明度
          points: [
            {
              lng: 118.165699,
              lat: 24.522585,
            },
            {
              lng: 118.188873,
              lat: 24.534611,
            },
            {
              lng: 118.158833,
              lat: 24.530883,
            },
            {
              lng: 118.147503,
              lat: 24.547115,
            },
            {
              lng: 118.140121,
              lat: 24.530643,
            },
            {
              lng: 118.11626,
              lat: 24.533529,
            },
            {
              lng: 118.139091,
              lat: 24.521743,
            },
            {
              lng: 118.118792,
              lat: 24.510677,
            },
            {
              lng: 118.14407,
              lat: 24.515008,
            },
            {
              lng: 118.149048,
              lat: 24.502496,
            },
            {
              lng: 118.158489,
              lat: 24.515369,
            },
            {
              lng: 118.182007,
              lat: 24.506346,
            },
            {
              lng: 118.165699,
              lat: 24.510677,
            },
          ],

          fillcolor: "#ff00ff",
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation addPolygon", res)

      console.log("ext_SGMap_Operation addPolygon setting")
      wx.invoke(
        "ext_SGMap_Operation",
        {
          data: {
            function: "setting",
            data: {
              lng: 118.165699,
              lat: 24.49704,
              zoomLevel: 12,
            },
          },
        },
        function (res) {
          console.log("ext_SGMap_Operation addPolygon setting", res)
        }
      )
    }
  )
}

function gisMapAddPolyLine() {
  console.log("ext_SGMap_Operation addPolyLine")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "addPolyLine",
        data: {
          id: "polyline_id_1", //必填，标记位 唯一值，标记添加的点线面唯一
          color: "#ff00ff", //颜色值#ff00ff
          alpha: 0.5,
          width: 10.0,
          points: [
            {
              lng: 116.402965,
              lat: 30.475845,
            },
            {
              lng: 114.409308,
              lat: 30.476229,
            },
          ],
          dashDot: {
            //虚线点宽高。isDashline=true时有效
            width: 2.0,
            height: 2.0,
          },

          isDashline: false, //是否是虚线，默认false实线，true虚线
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation addPolyLine end", res)

      console.log("ext_SGMap_Operation addPolyLine setting")
      wx.invoke(
        "ext_SGMap_Operation",
        {
          data: {
            function: "setting",
            data: {
              lng: 114.409308,
              lat: 30.476229,
            },
          },
        },
        function (res) {
          console.log("ext_SGMap_Operation addPolyLine setting", res)
        }
      )
    }
  )
}

function gisMapRemovePolyMark() {
  console.log("ext_SGMap_Operation removePolyMark")
  wx.invoke(
    "ext_SGMap_Operation",
    {
      data: {
        function: "removePolyMark",
        data: {
          //    id: "10001"//可选，标记位 删除指定的线，面。为空值删除所有线，面
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Operation removePolyMark", res)
    }
  )
}

function gisMapLink() {
  console.log("ext_SGMap_Link routePlanning start")
  wx.invoke(
    "ext_SGMap_Link",
    {
      data: {
        function: "routePlanning",
        data: {
          fromName: "中华城",
          fromCoordinate: {
            lng: 118.089552,
            lat: 24.458657,
          },
          toName: "思极位置",
          toCoordinate: {
            lng: 118.191348,
            lat: 24.489852,
          },
          routeType: 3,
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Link routePlanning end", res)
    }
  )
}

function gisMapOnceLocation() {
  console.log("ext_SGMap_Location onceLocation Start")
  wx.invoke(
    "multiWindows_subscribe",
    {
      channelId: "updateLocation",
    },
    function (res) {
      console.log(
        "ext_SGMap_Location startUpdatingLocation multiWindows_subscribe",
        res
      )
    }
  )
  wx.invoke(
    "ext_SGMap_Location",
    {
      data: {
        function: "onceLocation",
        data: {
          locationWithReGeocode: true, ///是否带有逆地理信息
          locationTimeout: 2, ///指定单次定位逆地理超时时间,默认为5s。最小值是2s。注意单次定位请求前设置。
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Location onceLocation completion", res)
    }
  )
}

function gisMapMoreLocation() {
  console.log("ext_SGMap_Location startUpdatingLocation Start")
  wx.invoke(
    "ext_SGMap_Location",
    {
      data: {
        function: "startUpdatingLocation",
        data: {
          locationWithReGeocode: true, //连续定位是否返回逆地理信息，默认NO。
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Location startUpdatingLocation completion", res)
    }
  )

  console.log("ext_SGMap_Location startUpdatingLocation multiWindows_subscribe")
  wx.invoke(
    "multiWindows_subscribe",
    {
      channelId: "updateLocation",
    },
    function (res) {
      console.log(
        "ext_SGMap_Location startUpdatingLocation multiWindows_subscribe",
        res
      )
    }
  )
}

function gisMapStopLocation() {
  console.log("ext_SGMap_Location stopUpdatingLocation Start")
  wx.invoke(
    "ext_SGMap_Location",
    {
      data: {
        function: "stopUpdatingLocation",
        data: {},
      },
    },
    function (res) {
      console.log("ext_SGMap_Location stopUpdatingLocation completion", res)
    }
  )
}

function gisMapPoiIDSearch() {
  console.log("ext_SGMap_Search Start poiIDSearch")
  wx.invoke(
    "ext_SGMap_Search",
    {
      data: {
        function: "poiIDSearch",
        data: {
          uid: "B025003WHE", //POI全局唯一ID
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Search poiIDSearch completion", res)
    }
  )
}

function gisMapPoiAroundSearch() {
  console.log("ext_SGMap_Search Start poiAroundSearch")
  wx.invoke(
    "ext_SGMap_Search",
    {
      data: {
        function: "poiAroundSearch",
        data: {
          offset: 1, //非必选,每页记录数, 范围1-25, [default = 20],
          page: 1, //非必选,当前页数, 范围1-100, [default = 1]
          requireExtension: false, //非必选,是否返回扩展信息，默认NO。
          requireSubPOIs: false, //非必选，是否返回子POI，默认为 NO。
          keywords: "公园", //查询关键字，多个关键字用“|”分割
          types: "010000", //POI类型
          city: "厦门市", //查询城市，可选值：cityname（中文或中文全拼）、citycode、adcode.(注：台湾省的城市一律设置为【台湾】，不具体到市。)
          lng: 118.15116226285, //必选，经度，
          lat: 24.750248269875, //必选，纬度
          radius: 5000, //查询半径，范围：0-50000，单位：米 [default = 3000]
          sortrule: 0, //排序规则, 0-距离排序；1-综合排序, 默认0
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Search  poiAroundSearch completion", res)
    }
  )
}

function gisMapPoiPolygonSearch() {
  console.log("ext_SGMap_Search Start poiPolygonSearch")
  wx.invoke(
    "ext_SGMap_Search",
    {
      data: {
        function: "poiPolygonSearch",
        data: {
          offset: 1, //非必选,每页记录数, 范围1-25, [default = 20],
          page: 1, //非必选,当前页数, 范围1-100, [default = 1]
          requireExtension: false, //非必选,是否返回扩展信息，默认NO。
          requireSubPOIs: false, //非必选，是否返回子POI，默认为 NO。

          keywords: "公园", //查询关键字，多个关键字用“|”分割
          types: "010000", //POI类型
          polygon: [
            /////多边形, 当传入两个点的时候，当做矩形处理:左下-右上两个顶点；其他情况视为多边形，几个点即为几边型。
            {
              lng: 115.402965,
              lat: 31.475845,
            },
            {
              lng: 114.402965,
              lat: 30.475845,
            },
          ],
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Search poiPolygonSearch completion", res)
    }
  )
}

function gisMapPoiKeywordSearch() {
  console.log("ext_SGMap_Search Start poiKeywordSearch")
  wx.invoke(
    "ext_SGMap_Search",
    {
      data: {
        function: "poiKeywordSearch",
        data: {
          offset: 1, //非必选,每页记录数, 范围1-25, [default = 20],
          page: 1, //非必选,当前页数, 范围1-100, [default = 1]
          requireExtension: true, //非必选,是否返回扩展信息，默认NO。
          requireSubPOIs: true, //非必选，是否返回子POI，默认为 NO。

          keywords: "同安区", //查询关键字，多个关键字用“|”分割
          types: "010000", //POI类型
          city: "厦门市", //查询城市，可选值：cityname（中文或中文全拼）、citycode、adcode.(注：台湾省的城市一律设置为【台湾】，不具体到市。)
          cityLimit: false, //强制城市限制功能 默认false，例如：在上海搜索天安门，如果citylimit为true，将不返回北京的天安门相关的POI
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Search poiKeywordSearch completion", res)
    }
  )
}

function gisMapInputTipsSearch() {
  console.log("ext_SGMap_Search Start inputTipsSearch")
  wx.invoke(
    "ext_SGMap_Search",
    {
      data: {
        function: "inputTipsSearch",
        data: {
          keywords: "公园", //查询关键字，多个关键字用“|”分割
          types: "010000", //POI类型
          city: "北京市", //查询城市，可选值：cityname（中文或中文全拼）、citycode、adcode.(注：台湾省的城市一律设置为【台湾】，不具体到市。)
          cityLimit: false, //强制城市限制功能 默认false，例如：在上海搜索天安门，如果citylimit为true，将不返回北京的天安门相关的POI
          lng: 118.15116226285,
          lat: 24.750248269875,
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Search inputTipsSearch completion", res)
    }
  )
}

function gisMapGeocodeSearch() {
  console.log("ext_SGMap_Search Start  geocodeSearch")
  wx.invoke(
    "ext_SGMap_Search",
    {
      data: {
        function: "geocodeSearch",
        data: {
          address: "北京大学", //地址
          city: "北京市", //查询城市，可选值：cityname（中文或中文全拼）、citycode、adcode.(注：台湾省的城市一律设置为【台湾】，不具体到市。)
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Search geocodeSearch completion", res)
    }
  )
}

function gisMapReGeocodeSearch() {
  console.log("ext_SGMap_Search Start reGeocodeSearch")
  wx.invoke(
    "ext_SGMap_Search",
    {
      data: {
        function: "reGeocodeSearch",
        data: {
          radius: 5000, //查询半径，范围：0-50000，单位：米 [default = 3000]
          requireExtension: false, //非必选,是否返回扩展信息，默认NO。
          lng: 114.402965,
          lat: 30.475845,
          poitype: "190108", //指定返回结果poi数组中的POI类型，在requireExtension=YES时生效。输入为typecode, 支持传入多个typecode, 多值时用“|”分割,例如 “商场|购物中心”等
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Search reGeocodeSearch completion", res)
    }
  )
}

function gisMapDistrictSearch() {
  console.log("ext_SGMap_Search Start  districtSearch")
  wx.invoke(
    "ext_SGMap_Search",
    {
      data: {
        function: "districtSearch",
        data: {
          keyword: "北京市", //查询关键字，只支持单关键字搜索，全国范围
          requireExtension: false, //非必选,是否返回扩展信息，默认NO。
          offset: 1, //非必选,每页记录数, 范围1-25, [default = 20],
          page: 1, //非必选,当前页数, 范围1-100, [default = 1]
          subdistrict: 1, //子区域层级，默认1。规则：设置显示下级行政区级数（行政区级别包括：国家、省/直辖市、市、区/县、乡镇/街道多级数据）可选值：0、1、2、3等数字，0-不返回下级行政区；1-返回下一级行政区；2-返回下两级行政区；3-返回下三级行政区
        },
      },
    },
    function (res) {
      console.log("ext_SGMap_Search districtSearch completion", res)
    }
  )
}

function multiWindowsOpen() {
  console.log("multiWindows_open start")
  wx.invoke(
    "multiWindows_open",
    {
      window: {
        windowId: "baidu",
        url: "index.html?queyr=120", //url:"../1000153/index.html",
        openType: 1, //0:url,1:本地路径
        showAppBar: "false",
      },
      data: {
        param1: "param1",
        param2: "param2",
        list: [1, 2, 3],
      },
    },
    function (response) {
      console.log("multiWindows_open end", response, new Date().valueOf())
    }
  )
}

function multiWindowsClose() {
  console.log("multiWindows_close start")
  wx.invoke("multiWindows_close", {}, function (response) {
    console.log("multiWindows_close end", response, new Date().valueOf())
  })
}

function multiWindowsStartWidget() {
  console.log("multiWindows_startWidget start")
  wx.invoke(
    "multiWindows_startWidget",
    {
      agentId: $(".multiwindowwidget").val(),
      window: {
        windowId: "baidu",
        url: "second.html?query=index3",
        openType: 1,
        showAppBar: "false",
      },
      data: {
        param1: "param1",
        param2: "param2",
        list: [1, 2, 3],
      },
    },
    function (response) {
      console.log(
        "multiWindows_startWidget end",
        response,
        new Date().valueOf()
      )
    }
  )
}

function multiWindowsCloseWidget() {
  console.log("multiWindows_finishWidget start")
  wx.invoke(
    "multiWindows_finishWidget",
    {
      agentId: $(".multiwindowwidget").val(),
    },
    function (response) {
      console.log(
        "multiWindows_finishWidget end",
        response,
        new Date().valueOf()
      )
    }
  )
}

var multiwindowsubscribechannel = "baidu-" + createNonceStr(8)
function multiWindowsSubscribe() {
  console.log("multiWindows_subscribe start")
  wx.invoke(
    "multiWindows_subscribe",
    {
      channelId: multiwindowsubscribechannel,
    },
    function (response) {
      console.log("multiWindows_subscribe end", response)
    }
  )
}

function multiWindowsPublish() {
  console.log("multiWindows_publish start")
  wx.invoke(
    "multiWindows_publish",
    {
      channelId: multiwindowsubscribechannel,
      message: "message info",
      data: {
        param1: "param1",
        param2: "param2",
        list: [],
      },
    },
    function (response) {
      console.log("multiWindows_publish end", response)
    }
  )
}

function listenMenuShareAppMessage() {
  console.log("onMenuShareAppMessage start")
  wx.onMenuShareAppMessage({
    title: "分享",
    desc: "描述",
    link: "https://www.baidu.com",
    imgUrl: "",
    success: function (res) {
      console.log("onMenuShareAppMessage success", res)
      console.log("onMenuShareAppMessage end", res)
    },
    cancel: function (res) {
      console.log("onMenuShareAppMessage cancel", res)
      console.log("onMenuShareAppMessage end", res)
    },
  })
}

function listenMenuShareWechat() {
  console.log("onMenuShareWechat start")
  wx.onMenuShareWechat({
    title: "分享2",
    desc: "描述2",
    link: "https://www.baidu.com",
    imgUrl: "",
    success: function (res) {
      console.log("onMenuShareWechat success", res)
    },
    cancel: function (res) {
      console.log("onMenuShareWechat cancel", res)
    },
  })
}

function listenMenuShareTimeline() {
  console.log("onMenuShareTimeline start")
  wx.onMenuShareTimeline({
    title: "分享20",
    desc: "描述20",
    link: "https://www.baidu.com",
    imgUrl: "",
    success: function (res) {
      console.log("onMenuShareTimeline success", res)
    },
    cancel: function (res) {
      console.log("onMenuShareTimeline cancel", res)
    },
  })
}
