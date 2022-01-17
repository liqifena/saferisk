function BluetoothDevice(){
	this.hasInit=false;
	this.hasDiscovery=false;
	this.enableLog=true;
	this.devices={};
};

BluetoothDevice.prototype={
	intiDefaultParam:function(){
		this.hasInit=false;
		if(this.hasDiscovery){
			this.stopDiscovery();
		}
		this.hasDiscovery=false;
		this.enableLog=true;
		this.devices={};
	},
	init:function(success,fail){
		var that=this;
		if(!this.hasInit){
			wx.openBluetoothAdapter({
				success:function(res){
					if(that.enableLog){
						console.log("openBluetoothAdapter success",res);
					}
					if(success){
						success(res);
					}
					that.intiDefaultParam();
					that.hasInit=true;
					that.listenAdapterState(function(res){
						console.log("adapterState changed, now is ",res);
					});
					that.listenDeviceFound(function(devices){
						if(devices&&devices.length>0){
							$.each(devices,function(index,dev){
								if(!that.devices.hasOwnProperty(dev.deviceId)){
									that.devices[dev.deviceId]=dev;
								}
							});
						}
					});
					that.listenConnectionState(function(res){
						console.log("bleconnectionStateChange changed,now is ",res);
					});
					that.listenCharacteristicValue(function(res){
						console.log("blecharacteristicValueChange changed,now is ",res);
						if(res.value){
							console.log("blecharacteristicValueChange changed value is:",that.arrayBufferToString({data:res.value}))
						}
					});
				},
				fail:function(res){
					if(that.enableLog){
						console.log("openBluetoothAdapter fail",res);
					}
					if(fail){
						fail(res);
					}
				}
			});
		}
	},
	close:function(success,fail){
		var that=this;
		if(this.hasDiscovery){
			this.stopDiscovery();
		}
		wx.closeBluetoothAdapter({
			success:function(res){
				if(that.enableLog){
					console.log("closeBluetoothAdapter success",res);
				}
				that.intiDefaultParam();
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("closeBluetoothAdapter fail",res);
				}
				if(fail){
					fail(res);
				}
			}
		});
	},
	listenAdapterState:function(callback){
		var that=this;
		wx.onBluetoothAdapterStateChange(function(res){
			if(that.enableLog){
				console.log("onBluetoothAdapterStateChange ",res);
			}
			if(callback){
				callback(res);
			}
		});
	},
	listenDeviceFound:function(callback){
		var that=this;
		wx.onBluetoothDeviceFound(function(devices){
			if(that.enableLog){
				console.log("onBluetoothDeviceFound ",devices);
			}
			if(callback){
				callback(devices);
			}
		})
	},
	startDiscovery:function(options,success,fail){
		var that=this;
		options=$.extend({},options);
		options.success=function(res){
			if(that.enableLog){
				console.log("startBluetoothDevicesDiscovery success",res);
			}
			that.hasDiscovery=true;
			that.deviceDiscoveryInterval=window.setInterval(function(){
				that.getDevices(function(res){
					if(res&&res.devices){
						var tmp={};
						$.each(res.devices,function(index,dev){
							if(!that.devices.hasOwnProperty(dev.deviceId)){
								that.devices[dev.deviceId]=dev;
							}
							tmp[dev.deviceId]=0;
						});
						$.each(that.devices,function(prop,value){
							if(!tmp.hasOwnProperty(prop)){
								delete that.devices[prop];
							}
						});
					}
				},function(res){
				});
			},2000);
			/*that.listenDeviceFound(function(devices){
				if(devices&&devices.length>0){
					$.each(devices,function(index,dev){
						if(!that.devices.hasOwnProperty(dev.deviceId)){
							that.devices[dev.deviceId]=dev;
						}
					});
				}
			});*/
			if(success){
				success(res);
			}
		};
		options.fail=function(res){
			if(that.enableLog){
				console.log("startBluetoothDevicesDiscovery fail",res);
			}
			if(fail){
				fail(res);
			}
		};
		wx.startBluetoothDevicesDiscovery(options);
	},
	stopDiscovery:function(success,fail){
		var that=this;
		wx.stopBluetoothDevicesDiscovery({
			success:function(res){
				if(that.enableLog){
					console.log("stopBluetoothDevicesDiscovery success",res);
				}
				that.hasDiscovery=false;
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("stopBluetoothDevicesDiscovery fail",res);
				}
				if(fail){
					fail(res);
				}
			},
			complete:function(res){
				if(that.deviceDiscoveryInterval){
					window.clearInterval(that.deviceDiscoveryInterval);
				}
			}
		});
	},
	getDevices:function(success,fail){
		var that=this;
		wx.getBluetoothDevices({
			success:function(res){
				if(that.enableLog){
					console.log("getBluetoothDevices success",res);
				}
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("getBluetoothDevices fail",res);
				}
				if(fail){
					fail(res);
				}
			}
		});
	},
	getConnectedDevices:function(success,fail){
		var that=this;
		wx.getConnectedBluetoothDevices({
			success:function(res){
				if(that.enableLog){
					console.log("getConnectedBluetoothDevices success",res);
				}
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("getConnectedBluetoothDevices fail",res);
				}
				if(fail){
					fail(res);
				}
			}
		});
	},
	connectDevice:function(deviceId,success,fail){
		var that=this;
		if(that.hasDiscovery){
			that.stopDiscovery(function(res){
				console.log('连接设备前，先停止搜索周边设备:',res);
			});
		}
		wx.createBLEConnection({
			deviceId:deviceId,
			success:function(res){
				if(that.enableLog){
					console.log("createBLEConnection success",res);
				}
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("createBLEConnection fail",res);
				}
				if(fail){
					fail(res);
				}
			}
		})
	},
	closeConnectedDevice:function(deviceId,success,fail){
		var that=this;
		wx.closeBLEConnection({
			deviceId:deviceId,
			success:function(res){
				if(that.enableLog){
					console.log("closeBLEConnection success",res);
				}
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("closeBLEConnection fail",res);
				}
				if(fail){
					fail(res);
				}
			}
		});
	},
	listenConnectionState:function(callback){
		var that=this;
		wx.onBLEConnectionStateChange(function(res) {
			if(that.enableLog){
				console.log("onBLEConnectionStateChange ",res);
			}
			if(callback){
				callback(res);
			}
		});
	},
	getDeviceServices:function(deviceId,success,fail){
		var that=this;
		wx.getBLEDeviceServices({
			deviceId:deviceId,
			success:function(res){
				if(that.enableLog){
					console.log("getBLEDeviceServices success",res);
				}
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("getBLEDeviceServices fail",res);
				}
				if(fail){
					fail(res);
				}
			}
		})
	},
	getDeviceCharacteristics:function(deviceId,serviceId,success,fail){
		var that=this;
		wx.getBLEDeviceCharacteristics({
			deviceId:deviceId,
			serviceId:serviceId,
			success:function(res){
				if(that.enableLog){
					console.log("getBLEDeviceCharacteristics success",res);
				}
				if(res&&res.characteristics&&res.characteristics.length>0){
					$.each(res.characteristics,function(index,characteristic){
						if(characteristic&&characteristic.properties&&characteristic.properties.notify){
							that.listenNotifyCharacteristicValue(deviceId,serviceId,characteristic.uuid,function(res){
								console.log('notifyBLECharacteristicValueChange success', res);
								that.listenConnectionState();
							});
						}
					});
				}
				/*if(!that.hasListenCharacterist){
					that.hasListenCharacterist=true;
					that.listenCharacteristicValue(function(characteristic){
						console.log('characteristic value comed:', characteristic.value)
					});
				}*/
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("getBLEDeviceCharacteristics fail",res);
				}
				if(fail){
					fail(res);
				}
			}
		})
	},
	readCharacteristicValue:function(deviceId,serviceId,characteristicId,success,fail){
		var that=this;
		this.listenCharacteristicValue();
		wx.readBLECharacteristicValue({
			deviceId:deviceId,
			serviceId:serviceId,
			characteristicId:characteristicId,
			success:function(res){
				if(that.enableLog){
					console.log("readBLECharacteristicValue success",res);
				}
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("readBLECharacteristicValue fail",res);
				}
				if(fail){
					fail(res);
				}
			}
		})
	},
	writeCharacteristicValue:function(deviceId,serviceId,characteristicId,value,success,fail){
		var buffer=this.stringToArrayBuffer(value);
		const maxChunk=20;
		var that=this;
		for(var i=0,j=0,length=buffer.byteLength;i<length;i+=maxChunk,j++){
			var chunkBody=buffer.slice(i,i+maxChunk<=length?(i+maxChunk):length);
			setTimeout(function(buffer){
				wx.writeBLECharacteristicValue({
					deviceId:deviceId,
					serviceId:serviceId,
					characteristicId:characteristicId,
					value:buffer,
					success:function(res){
						if(that.enableLog){
							console.log("writeBLECharacteristicValue success",res);
						}
						if(success){
							success(res);
						}
					},
					fail:function(res){
						if(that.enableLog){
							console.log("writeBLECharacteristicValue fail",res);
						}
						if(fail){
							fail(res);
						}
					}
				});
			},j*maxChunk,chunkBody);
		}
	},
	listenNotifyCharacteristicValue:function(deviceId,serviceId,characteristicId,success,fail){
		var that=this;
		wx.notifyBLECharacteristicValueChange({
			state:true,
			deviceId:deviceId,
			serviceId:serviceId,
			characteristicId:characteristicId,
			success:function(res){
				if(that.enableLog){
					console.log("notifyBLECharacteristicValueChange success",res);
				}
				if(success){
					success(res);
				}
			},
			fail:function(res){
				if(that.enableLog){
					console.log("notifyBLECharacteristicValueChange fail",res);
				}
				if(fail){
					fail(res);
				}
			}
		});
	},
	listenCharacteristicValue:function(callback){
		var that=this;
		wx.onBLECharacteristicValueChange(function(res){
			if(that.enableLog){
				console.log("onBLECharacteristicValueChange ",res);
				if(res.value){
					console.log("onBLECharacteristicValueChange value:",that.arrayBufferToString({data:res.value}));
				}
			}
			if(callback){
				callback(res);
			}
		});
	},
	stringToArrayBuffer:function(str){
		var bytes = new Array();
		var len,c;
		len = str.length;
		for(var i = 0; i < len; i++){
			c = str.charCodeAt(i);
			if(c >= 0x010000 && c <= 0x10FFFF){
				bytes.push(((c >> 18) & 0x07) | 0xF0);
				bytes.push(((c >> 12) & 0x3F) | 0x80);
				bytes.push(((c >> 6) & 0x3F) | 0x80);
				bytes.push((c & 0x3F) | 0x80);
			}else if(c >= 0x000800 && c <= 0x00FFFF){
				bytes.push(((c >> 12) & 0x0F) | 0xE0);
				bytes.push(((c >> 6) & 0x3F) | 0x80);
				bytes.push((c & 0x3F) | 0x80);
			}else if(c >= 0x000080 && c <= 0x0007FF){
				bytes.push(((c >> 6) & 0x1F) | 0xC0);
				bytes.push((c & 0x3F) | 0x80);
			}else{
				bytes.push(c & 0xFF);
			}
		}
		var array = new Int8Array(bytes.length);
		for(var i in bytes){
			array[i] =bytes[i];
		}
		return array.buffer;
	},
	arrayBufferToString(arr){
		if(typeof arr === 'string') {
			return arr;  
		}  
		var dataview=new DataView(arr.data);
		var ints=new Uint8Array(arr.data.byteLength);
		for(var i=0;i<ints.length;i++){
		  ints[i]=dataview.getUint8(i);
		}
		arr=ints;
		var str = '',  
			_arr = arr;  
		for(var i = 0; i < _arr.length; i++) {  
			var one = _arr[i].toString(2),  
				v = one.match(/^1+?(?=0)/);  
			if(v && one.length == 8) {  
				var bytesLength = v[0].length;  
				var store = _arr[i].toString(2).slice(7 - bytesLength);  
				for(var st = 1; st < bytesLength; st++) {  
					store += _arr[st + i].toString(2).slice(2);  
				}  
				str += String.fromCharCode(parseInt(store, 2));  
				i += bytesLength - 1;  
			} else {  
				str += String.fromCharCode(_arr[i]);  
			}  
		}  
		return str;
	}
};

// export default BluetoothDevice