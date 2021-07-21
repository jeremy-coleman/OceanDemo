(self.webpackChunkbabylonjs_typescript_webpack_simple_scene=self.webpackChunkbabylonjs_typescript_webpack_simple_scene||[]).push([[973,734,50,853,113],{2734:(e,t,i)=>{"use strict";i.r(t),i.d(t,{RTTDebug:()=>s});var n=i(1146),a=i(6584),r=i(5454),s=function(){function e(e,t,i){void 0===i&&(i=5),this._engine=t,this._scene=e,this._debugPlaneList=[],this._guiBackgrounds=[],this._guiTexts=[],this._camera=new n.YfP("debug",-Math.PI/2,Math.PI/2,10,new n.Pa4(0,0,0),this._scene),this._camera.mode=n.V1s.ORTHOGRAPHIC_CAMERA,this._camera.layerMask=268435456,this._gui=a.in.CreateFullscreenUI("debugGUI",!0,e),this._gui.layer.layerMask=268435456,this._makePlanes(i)}return Object.defineProperty(e.prototype,"camera",{get:function(){return this._camera},enumerable:!1,configurable:!0}),e.prototype.setTexture=function(e,t,i,n){var a,r=this;void 0===n&&(n=1),this._debugPlaneList[e].material.emissiveTexture=i,1!==n&&(null===(a=this._debugPlaneList[e].material)||void 0===a||a.onBindObservable.add((function(){var t;null===(t=r._debugPlaneList[e].material.getEffect())||void 0===t||t.setFloat("multiplier",n)}))),this._debugPlaneList[e].name=t,this._debugPlaneList[e].material.name=t,this._guiTexts[e].text=t},e.prototype._makePlanes=function(e){var t=new a.rj("grid");t.addRowDefinition(1),this._gui.addControl(t);for(var i=0;i<e;++i){for(var s=n.VO7.CreatePlane("plane"+i,{size:1},this._scene),o=s.getVerticesData("uv"),l=0;l<o.length;l+=2)o[l+1]=1-o[l+1];s.setVerticesData("uv",o),s.layerMask=268435456,s.position.x+=.5,s.position.y-=.5,s.bakeCurrentTransformIntoVertices(),this._debugPlaneList.push(s);var u=new r.tk("planemat"+i,this._scene);s.material=u,u.AddUniform("multiplier","float","1.0"),u.Fragment_Before_FragColor("\n                color.rgba *= vec4(multiplier);\n            "),u.disableLighting=!0,t.addColumnDefinition(.05);var c=new a.Ae("text");c.background="green",c.color="white",c.thickness=2,c.width=.95,c.horizontalAlignment=a.oT.HORIZONTAL_ALIGNMENT_CENTER,c.verticalAlignment=a.oT.VERTICAL_ALIGNMENT_TOP,this._guiBackgrounds.push(c);var p=new a.al("title","");p.color="white",p.horizontalAlignment=a.oT.HORIZONTAL_ALIGNMENT_CENTER,p.verticalAlignment=a.oT.VERTICAL_ALIGNMENT_TOP,p.textHorizontalAlignment=a.oT.HORIZONTAL_ALIGNMENT_CENTER,p.textVerticalAlignment=a.oT.VERTICAL_ALIGNMENT_CENTER,this._guiTexts.push(p),t.addControl(c,0,i),t.addControl(p,0,i)}for(i=e;i<20;++i)t.addColumnDefinition(.05);this._resize(),this._engine.onResizeObservable.add(this._resize.bind(this))},e.prototype._resize=function(){var e=this._engine.getRenderWidth(),t=this._engine.getRenderHeight(),i=e/t;this._camera.orthoLeft=-5*i,this._camera.orthoRight=5*i,this._camera.orthoTop=5,this._camera.orthoBottom=-5,this._camera.getProjectionMatrix(!0);var a=this._camera.getTransformationMatrix().invert(),r=new n.Pa4(-1,1,.001),s=new n.Pa4(-1,1,.001);r.x+=.005,s.x+=.005;var o=Math.floor(.09*t*i/2+5);this._guiBackgrounds[0].parent.paddingTop=o+"px";for(var l=0;l<this._debugPlaneList.length;++l){var u=this._debugPlaneList[l];s.x+=.09;var c=n.Pa4.TransformCoordinates(r,a),p=n.Pa4.TransformCoordinates(s,a).x-c.x;u.scaling.set(p,p,1),u.position.set(c.x,c.y,c.z),s.x+=.01,r.x=s.x,this._guiBackgrounds[l].height=20*e/1920+"px",this._guiTexts[l].height=20*e/1920+"px",this._guiTexts[l].fontSize=8*e/1920+"px"}},e}()},9754:(e,t,i)=>{"use strict";i.r(t),i.d(t,{FFT:()=>r});var n=i(1146),a=i(8220),r=function(){function e(e,t,i,r,s){this._engine=e,this._rttDebug=i,this._debugFirstIndex=r,this._size=s;var o=new n.UJu("computeTwiddleFactors",this._engine,{computeSource:"let PI: f32 = 3.1415926;\r\n\r\n[[group(0), binding(0)]] var PrecomputeBuffer : texture_storage_2d<rgba32float, write>;\r\n\r\n[[block]] struct Params {\r\n    PingPong: u32;\r\n    Step : u32;\r\n    Size : i32;\r\n};\r\n\r\n[[group(0), binding(1)]] var<uniform> params : Params;\r\n\r\nfn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>\r\n{\r\n\treturn vec2<f32>(a.r * b.r - a.g * b.g, a.r * b.g + a.g * b.r);\r\n}\r\n\r\nfn complexExp(a: vec2<f32>) -> vec2<f32>\r\n{\r\n\treturn vec2<f32>(cos(a.y), sin(a.y)) * exp(a.x);\r\n}\r\n\r\n[[stage(compute), workgroup_size(1,8,1)]]\r\nfn precomputeTwiddleFactorsAndInputIndices([[builtin(global_invocation_id)]] id : vec3<u32>)\r\n{\r\n    let iid = vec3<i32>(id);\r\n\tlet b = params.Size >> (id.x + 1u);\r\n\tlet mult = 2.0 * PI * vec2<f32>(0.0, -1.0) / f32(params.Size);\r\n\tlet i = (2 * b * (iid.y / b) + (iid.y % b)) % params.Size;\r\n\tlet twiddle = complexExp(mult * vec2<f32>(f32((iid.y / b) * b)));\r\n\t\r\n    textureStore(PrecomputeBuffer, iid.xy, vec4<f32>(twiddle.x, twiddle.y, f32(i), f32(i + b)));\r\n\ttextureStore(PrecomputeBuffer, vec2<i32>(iid.x, iid.y + params.Size / 2), vec4<f32>(-twiddle.x, -twiddle.y, f32(i), f32(i + b)));\r\n}\r\n"},{bindingsMapping:{PrecomputeBuffer:{group:0,binding:0},params:{group:0,binding:1}},entryPoint:"precomputeTwiddleFactorsAndInputIndices"}),l=0|Math.log2(s);this._precomputedData=a.ComputeHelper.CreateStorageTexture("precomputeTwiddle",this._engine,l,this._size,n.gTE.TEXTUREFORMAT_RGBA),this._rttDebug.setTexture(this._debugFirstIndex,"precomputeTwiddle",this._precomputedData),this._params=new n.Ms4(this._engine),this._params.addUniform("PingPong",1),this._params.addUniform("Step",1),this._params.addUniform("Size",1),o.setStorageTexture("PrecomputeBuffer",this._precomputedData),o.setUniformBuffer("params",this._params),this._params.updateInt("Size",this._size),this._params.update(),a.ComputeHelper.Dispatch(o,l,s/2,1)}return e.prototype.dispose=function(){this._precomputedData.dispose(),this._params.dispose()},e}()},7973:(e,t,i)=>{"use strict";i.r(t),i.d(t,{Ocean:()=>s,default:()=>o});var n=i(1146),a=i(2734),r=i(6853),s=function(){function e(){this._engine=null,this._scene=null,this._camera=null,this._rttDebug=null}return e.prototype.createScene=function(e,t){return i=this,s=void 0,l=function(){var i,s;return function(e,t){var i,n,a,r,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,n&&(a=2&r[0]?n.return:r[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,r[1])).done)return a;switch(n=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!((a=(a=s.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){s.label=r[1];break}if(6===r[0]&&s.label<a[1]){s.label=a[1],a=r;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(r);break}a[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],n=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}}(this,(function(o){return window.convf=function(e){var t=new Uint8Array([255&e,(65280&e)>>8,(16711680&e)>>16,(4278190080&e)>>24]);return new Float32Array(t.buffer)[0]},i=new n.xsS(e),this._engine=e,this._scene=i,this._rttDebug=new a.RTTDebug(i,e,10),this._camera=new n.YfP("main",-Math.PI/2,Math.PI/3,10,new n.Pa4(0,0,0),i),this._camera.setTarget(n.Pa4.Zero()),this._camera.attachControl(t,!0),i.activeCameras=[this._camera,this._rttDebug.camera],new n.ezm("light",new n.Pa4(0,1,0),i).intensity=.7,n.vU0.CreateGround("ground",{width:6,height:6},i),s=new r.WavesGenerator(256,i,this._rttDebug),i.onBeforeRenderObservable.add((function(){s.update()})),[2,i]}))},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(l.next(e))}catch(e){t(e)}}function a(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}r((l=l.apply(i,s||[])).next())}));var i,s,o,l},e}();const o=new s},8050:(e,t,i)=>{"use strict";i.r(t),i.d(t,{WavesCascade:()=>s});var n=i(1146),a=i(494),r=i(8220),s=function(){function e(e,t,i,s,o){this._engine=o,this._size=e,this._initialSpectrum=new a.InitialSpectrum(o,i,s,e,t),this._timeDependentSpectrum=new n.UJu("timeDependentSpectrumCS",this._engine,{computeSource:"[[group(0), binding(0)]] var H0Sampler : sampler;\r\n[[group(0), binding(1)]] var H0 : texture_2d<f32>;\r\n[[group(0), binding(2)]] var WavesDataSampler : sampler;\r\n[[group(0), binding(3)]] var WavesData : texture_2d<f32>;\r\n\r\n[[block]] struct Params {\r\n    Time : f32;\r\n};\r\n\r\n[[group(0), binding(4)]] var<uniform> params : Params;\r\n\r\n[[group(0), binding(5)]] var DxDz_DyDxz : texture_storage_2d<rgba32float, write>;\r\n[[group(0), binding(6)]] var DyxDyz_DxxDzz : texture_storage_2d<rgba32float, write>;\r\n\r\nfn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>\r\n{\r\n\treturn vec2<f32>(a.r * b.r - a.g * b.g, a.r * b.g + a.g * b.r);\r\n}\r\n\r\n[[stage(compute), workgroup_size(8,8,1)]]\r\nfn calculateAmplitudes([[builtin(global_invocation_id)]] id : vec3<u32>)\r\n{\r\n    ignore(H0Sampler);\r\n    ignore(WavesDataSampler);\r\n\r\n    let iid = vec3<i32>(id);\r\n\tlet wave = textureLoad(WavesData, iid.xy, 0);\r\n\tlet phase = wave.w * params.Time;\r\n\tlet exponent = vec2<f32>(cos(phase), sin(phase));\r\n    let h0 = textureLoad(H0, iid.xy, 0);\r\n\tlet h = complexMult(h0.xy, exponent) + complexMult(h0.zw, vec2<f32>(exponent.x, -exponent.y));\r\n\tlet ih = vec2<f32>(-h.y, h.x);\r\n\t\r\n\tlet displacementX = ih * wave.x * wave.y;\r\n\tlet displacementY = h;\r\n\tlet displacementZ = ih * wave.z * wave.y;\r\n\t\t \r\n\tlet displacementX_dx = -h * wave.x * wave.x * wave.y;\r\n\tlet displacementY_dx = ih * wave.x;\r\n\tlet displacementZ_dx = -h * wave.x * wave.z * wave.y;\r\n\t\t \r\n\tlet displacementY_dz = ih * wave.z;\r\n\tlet displacementZ_dz = -h * wave.z * wave.z * wave.y;\r\n\t\r\n\ttextureStore(DxDz_DyDxz, iid.xy,   vec4<f32>(displacementX.x - displacementZ.y, displacementX.y + displacementZ.x, displacementY.x - displacementZ_dx.y, displacementY.y + displacementZ_dx.x));\r\n\ttextureStore(DyxDyz_DxxDzz, iid.xy, vec4<f32>(displacementY_dx.x - displacementY_dz.y, displacementY_dx.y + displacementY_dz.x, displacementX_dx.x - displacementZ_dz.y, displacementX_dx.y + displacementZ_dz.x));\r\n}\r\n"},{bindingsMapping:{H0:{group:0,binding:1},WavesData:{group:0,binding:3},params:{group:0,binding:4},DxDz_DyDxz:{group:0,binding:5},DyxDyz_DxxDzz:{group:0,binding:6}},entryPoint:"calculateAmplitudes"}),this._DxDz_DyDxz=r.ComputeHelper.CreateStorageTexture("DxDz_DyDxz",this._engine,this._size,this._size,n.gTE.TEXTUREFORMAT_RGBA),this._DyxDyz_DxxDzz=r.ComputeHelper.CreateStorageTexture("DyxDyz_DxxDzz",this._engine,this._size,this._size,n.gTE.TEXTUREFORMAT_RGBA),this._params=new n.Ms4(this._engine),this._params.addUniform("Time",1),this._timeDependentSpectrum.setTexture("H0",this._initialSpectrum.initialSpectrum),this._timeDependentSpectrum.setTexture("WavesData",this._initialSpectrum.wavesData),this._timeDependentSpectrum.setUniformBuffer("params",this._params),this._timeDependentSpectrum.setStorageTexture("DxDz_DyDxz",this._DxDz_DyDxz),this._timeDependentSpectrum.setStorageTexture("DyxDyz_DxxDzz",this._DyxDyz_DxxDzz),i.setTexture(s+3,"DxDz / DyDxz",this._DxDz_DyDxz,1e3),i.setTexture(s+4,"DyxDyz / DxxDzz",this._DyxDyz_DxxDzz,1e3)}return e.prototype.calculateInitials=function(e,t,i,n){this._initialSpectrum.generate(e,t,i,n)},e.prototype.calculateWavesAtTime=function(e){this._params.updateFloat("Time",e),this._params.update(),r.ComputeHelper.Dispatch(this._timeDependentSpectrum,this._size,this._size,1)},e.prototype.dispose=function(){this._initialSpectrum.dispose(),this._DxDz_DyDxz.dispose(),this._DyxDyz_DxxDzz.dispose()},e}()},6853:(e,t,i)=>{"use strict";i.r(t),i.d(t,{WavesGenerator:()=>o});var n=i(1146),a=i(9754),r=i(8050),s=i(6113),o=function(){function e(e,t,i){this._engine=t.getEngine(),this._size=e,this._rttDebug=i,this._startTime=(new Date).getTime()/1e3,this._fft=new a.FFT(t.getEngine(),t,this._rttDebug,1,e),this._noise=this._generateNoiseTexture(e),this._rttDebug.setTexture(0,"noise",this._noise),this.lengthScale=[250],this.wavesSettings=new s.WavesSettings,this._cascades=[new r.WavesCascade(e,this._noise,this._rttDebug,2,this._engine)],this.initializeCascades()}return e.prototype.initializeCascades=function(){for(var e=1e-4,t=0;t<this.lengthScale.length;++t){var i=t<this.lengthScale.length-1?2*Math.PI/this.lengthScale[t+1]*6:9999;this._cascades[t].calculateInitials(this.wavesSettings,this.lengthScale[t],e,i),e=i}},e.prototype.update=function(){for(var e=(new Date).getTime()/1e3-this._startTime,t=0;t<this._cascades.length;++t)this._cascades[t].calculateWavesAtTime(e)},e.prototype.dispose=function(){for(var e=0;e<this._cascades.length;++e)this._cascades[e].dispose();this._noise.dispose(),this._fft.dispose()},e.prototype._normalRandom=function(){return Math.cos(2*Math.PI*Math.random())*Math.sqrt(-2*Math.log(Math.random()))},e.prototype._generateNoiseTexture=function(e){for(var t=new Float32Array(e*e*4),i=0;i<e;++i)for(var a=0;a<e;++a)t[a*e*2+2*i+0]=this._normalRandom(),t[a*e*2+2*i+1]=this._normalRandom();var r=new n.lMF(t,e,e,n.gTE.TEXTUREFORMAT_RG,this._engine,!1,!1,n.gTE.TEXTURE_NEAREST_SAMPLINGMODE,n.gTE.TEXTURETYPE_FLOAT);return r.name="noise",r},e}()},6113:(e,t,i)=>{"use strict";i.r(t),i.d(t,{WavesSettings:()=>a});var n=i(1146),a=function(){function e(){this.g=9.81,this.depth=500,this.lambda=1,this.local={scale:1,windSpeed:.5,windDirection:-29.81,fetch:1e5,spreadBlend:1,swell:.198,peakEnhancement:3.3,shortWavesFade:.01},this.swell={scale:0,windSpeed:1,windDirection:0,fetch:3e5,spreadBlend:1,swell:1,peakEnhancement:3.3,shortWavesFade:.01},this.spectrums=[{scale:0,angle:0,spreadBlend:0,swell:0,alpha:0,peakOmega:0,gamma:0,shortWavesFade:0},{scale:0,angle:0,spreadBlend:0,swell:0,alpha:0,peakOmega:0,gamma:0,shortWavesFade:0}]}return e.prototype.setParametersToShader=function(e,t){e.updateFloat("GravityAcceleration",this.g),e.updateFloat("Depth",this.depth),this._fillSettingsStruct(this.local,this.spectrums[0]),this._fillSettingsStruct(this.swell,this.spectrums[1]);var i=[];this._linearizeSpectrumSetting(this.spectrums[0],i),this._linearizeSpectrumSetting(this.spectrums[1],i),t.update(i)},e.prototype._linearizeSpectrumSetting=function(e,t){t.push(e.scale,e.angle,e.spreadBlend,e.swell,e.alpha,e.peakOmega,e.gamma,e.shortWavesFade)},e.prototype._fillSettingsStruct=function(e,t){t.scale=e.scale,t.angle=e.windDirection/180*Math.PI,t.spreadBlend=e.spreadBlend,t.swell=n.Rus.Clamp(e.swell,.01,1),t.alpha=this._JonswapAlpha(this.g,e.fetch,e.windSpeed),t.peakOmega=this._JonswapPeakFrequency(this.g,e.fetch,e.windSpeed),t.gamma=e.peakEnhancement,t.shortWavesFade=e.shortWavesFade},e.prototype._JonswapAlpha=function(e,t,i){return.076*Math.pow(e*t/i/i,-.22)},e.prototype._JonswapPeakFrequency=function(e,t,i){return 22*Math.pow(i*t/e/e,-.33)},e}()}}]);
//# sourceMappingURL=973.babylonBundle.js.map