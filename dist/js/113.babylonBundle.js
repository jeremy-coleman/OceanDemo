(self.webpackChunkbabylonjs_typescript_webpack_simple_scene=self.webpackChunkbabylonjs_typescript_webpack_simple_scene||[]).push([[113],{6113:(e,t,a)=>{"use strict";a.r(t),a.d(t,{WavesSettings:()=>n});var s=a(1146),n=function(){function e(){this.g=9.81,this.depth=500,this.lambda=1,this.local={scale:1,windSpeed:.5,windDirection:-29.81,fetch:1e5,spreadBlend:1,swell:.198,peakEnhancement:3.3,shortWavesFade:.01},this.swell={scale:0,windSpeed:1,windDirection:0,fetch:3e5,spreadBlend:1,swell:1,peakEnhancement:3.3,shortWavesFade:.01},this.spectrums=[{scale:0,angle:0,spreadBlend:0,swell:0,alpha:0,peakOmega:0,gamma:0,shortWavesFade:0},{scale:0,angle:0,spreadBlend:0,swell:0,alpha:0,peakOmega:0,gamma:0,shortWavesFade:0}]}return e.prototype.setParametersToShader=function(e,t){e.updateFloat("GravityAcceleration",this.g),e.updateFloat("Depth",this.depth),this._fillSettingsStruct(this.local,this.spectrums[0]),this._fillSettingsStruct(this.swell,this.spectrums[1]);var a=[];this._linearizeSpectrumSetting(this.spectrums[0],a),this._linearizeSpectrumSetting(this.spectrums[1],a),t.update(a)},e.prototype._linearizeSpectrumSetting=function(e,t){t.push(e.scale,e.angle,e.spreadBlend,e.swell,e.alpha,e.peakOmega,e.gamma,e.shortWavesFade)},e.prototype._fillSettingsStruct=function(e,t){t.scale=e.scale,t.angle=e.windDirection/180*Math.PI,t.spreadBlend=e.spreadBlend,t.swell=s.Rus.Clamp(e.swell,.01,1),t.alpha=this._JonswapAlpha(this.g,e.fetch,e.windSpeed),t.peakOmega=this._JonswapPeakFrequency(this.g,e.fetch,e.windSpeed),t.gamma=e.peakEnhancement,t.shortWavesFade=e.shortWavesFade},e.prototype._JonswapAlpha=function(e,t,a){return.076*Math.pow(e*t/a/a,-.22)},e.prototype._JonswapPeakFrequency=function(e,t,a){return 22*Math.pow(a*t/e/e,-.33)},e}()}}]);
//# sourceMappingURL=113.babylonBundle.js.map