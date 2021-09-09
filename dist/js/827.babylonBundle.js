(self.webpackChunkbabylonjs_typescript_webpack_simple_scene=self.webpackChunkbabylonjs_typescript_webpack_simple_scene||[]).push([[827],{827:(e,a,s)=>{"use strict";s.r(a),s.d(a,{OceanGUI:()=>_});var i=s(6506),d=s(2281),_=function(){function e(e,a,s,i,d){this._scene=a,this._visible=!0,this._onKeyObserver=null,this._paramRead=i,this._paramChanged=d;var _=document.getElementById("datGUI");null!==_&&_.remove(),this._gui=new dat.GUI,this._gui.domElement.style.marginTop="60px",this._gui.domElement.id="datGUI",this._setupKeyboard(),this._initialize(e)}return e.LoadDAT=function(){return d.w1.LoadScriptAsync("https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js")},Object.defineProperty(e.prototype,"visible",{set:function(e){e!==this._visible&&(this._visible=e,this._gui.domElement.style.display=e?"":"none")},enumerable:!1,configurable:!0}),e.prototype.dispose=function(){var e=document.getElementById("datGUI");null!==e&&e.remove(),this._scene.onKeyboardObservable.remove(this._onKeyObserver)},e.prototype._setupKeyboard=function(){var e=this;this._onKeyObserver=this._scene.onKeyboardObservable.add((function(a){switch(a.type){case i.KeyboardEventTypes.KEYDOWN:break;case i.KeyboardEventTypes.KEYUP:switch(a.event.key){case"F8":e.visible=!e._visible}}}))},e.prototype._initialize=function(e){this._makeMenuGeneral(),e?this._makeMenuProceduralSky():this._makeMenuSkybox(),this._makeMenuWavesGenerator(),this._makeMenuOceanGeometry(),this._makeMenuOceanShader(),this._makeMenuBuoyancy()},e.prototype._addList=function(e,a,s,i,d){var _=this;e.add(a,s,d).name(i).onChange((function(e){_._paramChanged(s,e)}))},e.prototype._addCheckbox=function(e,a,s,i){var d=this;e.add(a,s).name(i).onChange((function(e){d._paramChanged(s,e)}))},e.prototype._addSlider=function(e,a,s,i,d,_,t){var o=this;e.add(a,s,d,_,t).name(i).onChange((function(e){o._paramChanged(s,e)}))},e.prototype._addColor=function(e,a,s,i){var d=this;e.addColor(a,s).name(i).onChange((function(e){d._paramChanged(s,e)}))},e.prototype._makeMenuGeneral=function(){var e={size:this._paramRead("size"),envIntensity:this._paramRead("envIntensity"),lightIntensity:this._paramRead("lightIntensity"),enableShadows:this._paramRead("enableShadows"),enableGlow:this._paramRead("enableGlow"),useZQSD:this._paramRead("useZQSD"),showDebugRTT:this._paramRead("showDebugRTT")},a=this._gui.addFolder("General");this._addList(a,e,"size","Resolution",[256,128,64,32]),this._addSlider(a,e,"envIntensity","Env intensity",0,4,.05),this._addSlider(a,e,"lightIntensity","Light intensity",0,5,.05),this._addCheckbox(a,e,"enableShadows","Enable shadows"),this._addCheckbox(a,e,"enableGlow","Enable Glow layer"),this._addCheckbox(a,e,"useZQSD","Use ZQSD"),this._addCheckbox(a,e,"showDebugRTT","Show debug RTT"),a.open()},e.prototype._makeMenuProceduralSky=function(){var e={procSky_inclination:this._paramRead("procSky_inclination"),procSky_azimuth:this._paramRead("procSky_azimuth"),procSky_luminance:this._paramRead("procSky_luminance"),procSky_turbidity:this._paramRead("procSky_turbidity"),procSky_rayleigh:this._paramRead("procSky_rayleigh"),procSky_mieCoefficient:this._paramRead("procSky_mieCoefficient"),procSky_mieDirectionalG:this._paramRead("procSky_mieDirectionalG")},a=this._gui.addFolder("Sky");this._addSlider(a,e,"procSky_inclination","Inclination",-.5,.5,.001),this._addSlider(a,e,"procSky_azimuth","Azimuth",0,1,.001),this._addSlider(a,e,"procSky_luminance","Luminance",.001,1,.001),this._addSlider(a,e,"procSky_turbidity","Turbidity",.1,100,.1),this._addSlider(a,e,"procSky_rayleigh","Rayleigh",.1,10,.1),this._addSlider(a,e,"procSky_mieCoefficient","Mie Coefficient",0,.1,1e-4),this._addSlider(a,e,"procSky_mieDirectionalG","Mie DirectionalG",0,1,.01),a.open()},e.prototype._makeMenuSkybox=function(){var e={skybox_lightColor:this._paramRead("skybox_lightColor"),skybox_directionX:this._paramRead("skybox_directionX"),skybox_directionY:this._paramRead("skybox_directionY"),skybox_directionZ:this._paramRead("skybox_directionZ")},a=this._gui.addFolder("Sky");this._addColor(a,e,"skybox_lightColor","Light color"),this._addSlider(a,e,"skybox_directionX","Light dir X",-10,10,.001),this._addSlider(a,e,"skybox_directionY","Light dir Y",-10,-.01,.001),this._addSlider(a,e,"skybox_directionZ","Light dir Z",-10,10,.001)},e.prototype._makeMenuWavesGenerator=function(){var e={waves_g:this._paramRead("waves_g"),waves_depth:this._paramRead("waves_depth"),waves_lambda:this._paramRead("waves_lambda"),waves_local_scale:this._paramRead("waves_local_scale"),waves_local_windSpeed:this._paramRead("waves_local_windSpeed"),waves_local_windDirection:this._paramRead("waves_local_windDirection"),waves_local_fetch:this._paramRead("waves_local_fetch"),waves_local_spreadBlend:this._paramRead("waves_local_spreadBlend"),waves_local_swell:this._paramRead("waves_local_swell"),waves_local_peakEnhancement:this._paramRead("waves_local_peakEnhancement"),waves_local_shortWavesFade:this._paramRead("waves_local_shortWavesFade"),waves_swell_scale:this._paramRead("waves_swell_scale"),waves_swell_windSpeed:this._paramRead("waves_swell_windSpeed"),waves_swell_windDirection:this._paramRead("waves_swell_windDirection"),waves_swell_fetch:this._paramRead("waves_swell_fetch"),waves_swell_spreadBlend:this._paramRead("waves_swell_spreadBlend"),waves_swell_swell:this._paramRead("waves_swell_swell"),waves_swell_peakEnhancement:this._paramRead("waves_swell_peakEnhancement"),waves_swell_shortWavesFade:this._paramRead("waves_swell_shortWavesFade")},a=this._gui.addFolder("Waves Generator");this._addSlider(a,e,"waves_g","Gravity",.01,30,.01),this._addSlider(a,e,"waves_depth","Ocean depth",.001,3,.001),this._addSlider(a,e,"waves_lambda","Lambda",0,1,.001);var s=a.addFolder("Local");this._addSlider(s,e,"waves_local_scale","Scale",0,1,.001),this._addSlider(s,e,"waves_local_windSpeed","Wind speed",.001,100,.001),this._addSlider(s,e,"waves_local_windDirection","Wind direction",-100,100,.1),this._addSlider(s,e,"waves_local_fetch","Fetch",100,1e6,100),this._addSlider(s,e,"waves_local_spreadBlend","Spread blend",0,1,.01),this._addSlider(s,e,"waves_local_swell","Swell",0,1,.01),this._addSlider(s,e,"waves_local_peakEnhancement","Peak enhanc.",.01,100,.01),this._addSlider(s,e,"waves_local_shortWavesFade","Short waves fade",.001,1,.001),s.open();var i=a.addFolder("Swell");this._addSlider(i,e,"waves_swell_scale","Scale",0,1,.001),this._addSlider(i,e,"waves_swell_windSpeed","Wind speed",.001,100,.001),this._addSlider(i,e,"waves_swell_windDirection","Wind direction",-100,100,.1),this._addSlider(i,e,"waves_swell_fetch","Fetch",100,1e6,100),this._addSlider(i,e,"waves_swell_spreadBlend","Spread blend",0,1,.01),this._addSlider(i,e,"waves_swell_swell","Swell",0,1,.01),this._addSlider(i,e,"waves_swell_peakEnhancement","Peak enhanc.",.01,100,.01),this._addSlider(i,e,"waves_swell_shortWavesFade","Short waves fade",.001,1,.001),i.open(),a.open()},e.prototype._makeMenuOceanGeometry=function(){var e={oceangeom_lengthScale:this._paramRead("oceangeom_lengthScale"),oceangeom_vertexDensity:this._paramRead("oceangeom_vertexDensity"),oceangeom_clipLevels:this._paramRead("oceangeom_clipLevels"),oceangeom_skirtSize:this._paramRead("oceangeom_skirtSize"),oceangeom_wireframe:this._paramRead("oceangeom_wireframe"),oceangeom_noMaterialLod:this._paramRead("oceangeom_noMaterialLod")},a=this._gui.addFolder("Ocean Geometry");this._addSlider(a,e,"oceangeom_lengthScale","Length scale",1,100,.1),this._addSlider(a,e,"oceangeom_vertexDensity","Vertex density",1,40,1),this._addSlider(a,e,"oceangeom_clipLevels","Clip levels",1,8,1),this._addSlider(a,e,"oceangeom_skirtSize","Skirt size",0,100,.1),this._addCheckbox(a,e,"oceangeom_wireframe","Wireframe"),this._addCheckbox(a,e,"oceangeom_noMaterialLod","No material LOD")},e.prototype._makeMenuOceanShader=function(){var e={oceanshader__Color:this._paramRead("oceanshader__Color"),oceanshader__MaxGloss:this._paramRead("oceanshader__MaxGloss"),oceanshader__RoughnessScale:this._paramRead("oceanshader__RoughnessScale"),oceanshader__LOD_scale:this._paramRead("oceanshader__LOD_scale"),oceanshader__FoamColor:this._paramRead("oceanshader__FoamColor"),oceanshader__FoamScale:this._paramRead("oceanshader__FoamScale"),oceanshader__ContactFoam:this._paramRead("oceanshader__ContactFoam"),oceanshader__FoamBiasLOD2:this._paramRead("oceanshader__FoamBiasLOD2"),oceanshader__SSSColor:this._paramRead("oceanshader__SSSColor"),oceanshader__SSSStrength:this._paramRead("oceanshader__SSSStrength"),oceanshader__SSSBase:this._paramRead("oceanshader__SSSBase"),oceanshader__SSSScale:this._paramRead("oceanshader__SSSScale")},a=this._gui.addFolder("Ocean Shader");this._addColor(a,e,"oceanshader__Color","Color"),this._addSlider(a,e,"oceanshader__MaxGloss","Max gloss",0,1,.01),this._addSlider(a,e,"oceanshader__RoughnessScale","Roughness scale",0,1,1e-4),this._addSlider(a,e,"oceanshader__LOD_scale","LOD scale",.01,20,.01),this._addColor(a,e,"oceanshader__FoamColor","Foam color"),this._addSlider(a,e,"oceanshader__FoamScale","Foam scale",.001,8,.001),this._addSlider(a,e,"oceanshader__ContactFoam","Foam contact",.001,3,.001),this._addSlider(a,e,"oceanshader__FoamBiasLOD2","Foam bias",.001,4,.001),this._addColor(a,e,"oceanshader__SSSColor","SSS color"),this._addSlider(a,e,"oceanshader__SSSStrength","SSS strength",.001,2,.001),this._addSlider(a,e,"oceanshader__SSSBase","SSS base",-2,1,.001),this._addSlider(a,e,"oceanshader__SSSScale","SSS scale",.001,10,.001)},e.prototype._makeMenuBuoyancy=function(){var e={buoy_enabled:this._paramRead("buoy_enabled"),buoy_attenuation:this._paramRead("buoy_attenuation"),buoy_numSteps:this._paramRead("buoy_numSteps")},a=this._gui.addFolder("Buoyancy");this._addCheckbox(a,e,"buoy_enabled","Enabled"),this._addSlider(a,e,"buoy_attenuation","Damping factor",0,1,.001),this._addSlider(a,e,"buoy_numSteps","Num steps",1,20,1)},e}()}}]);
//# sourceMappingURL=827.babylonBundle.js.map