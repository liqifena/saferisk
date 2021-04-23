cordova.define("org.apache.cordova.faceid", function(require, exports, module) {

    var exec = require('cordova/exec'),
    argscheck = require('cordova/argscheck');

    module.exports = {
        /** 
		 * 人脸上传
		 * 一共5个参数必填
		   第一个 :用户名 String
		   第二个 :区域ID String
		   第三个 :是否使用后置摄像头 Boolean
		   第四个 :成功回调
		   第五个 :错误回调
		 */ 
        uploadFace: function(nameCode,areaId,isback,successCallback,errorCallback) {
            argscheck.checkArgs('ss*ff','face.uploadFace',arguments)
            exec(successCallback, errorCallback, "face", "uploadFace", [nameCode,areaId,isback]);
        },
        /** 
		 * 人脸检测
		 * 一共5个参数必填
		   第一个 :用户名 String
		   第二个 :区域ID String
		   第三个 :是否使用后置摄像头 Boolean
		   第四个 :成功回调
		   第五个 :错误回调
		 */ 
        checkFace: function(nameCode,areaId,isback,successCallback,errorCallback) {
            argscheck.checkArgs('ss*ff','face.checkFace',arguments)
            exec(successCallback, errorCallback, "face", "checkFace",[nameCode,areaId,isback]);
        }
    };
});
