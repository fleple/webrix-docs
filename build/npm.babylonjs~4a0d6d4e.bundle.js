(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{CFrw:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var s=r("mrSG"),n=r("Xeau"),i=r("y4Ty"),o=r("wAMR"),a=r("/SR9"),u=r("uyO6"),c=r("ikaq"),h=r("Dc3z"),f=r("qVgn");o.a._instancedMeshFactory=function(e,t){var r=new d(e,t);if(t.instancedBuffers)for(var s in r.instancedBuffers={},t.instancedBuffers)r.instancedBuffers[s]=t.instancedBuffers[s];return r};var d=function(e){function t(t,r){var s=e.call(this,t,r.getScene())||this;s._indexInSourceMeshInstanceArray=-1,r.addInstance(s),s._sourceMesh=r,s._unIndexed=r._unIndexed,s.position.copyFrom(r.position),s.rotation.copyFrom(r.rotation),s.scaling.copyFrom(r.scaling),r.rotationQuaternion&&(s.rotationQuaternion=r.rotationQuaternion.clone()),s.animations=r.animations;for(var n=0,i=r.getAnimationRanges();n<i.length;n++){var o=i[n];null!=o&&s.createAnimationRange(o.name,o.from,o.to)}return s.infiniteDistance=r.infiniteDistance,s.setPivotMatrix(r.getPivotMatrix()),s.refreshBoundingInfo(),s._syncSubMeshes(),s}return Object(s.c)(t,e),t.prototype.getClassName=function(){return"InstancedMesh"},Object.defineProperty(t.prototype,"lightSources",{get:function(){return this._sourceMesh._lightSources},enumerable:!0,configurable:!0}),t.prototype._resyncLightSources=function(){},t.prototype._resyncLightSource=function(e){},t.prototype._removeLightSource=function(e,t){},Object.defineProperty(t.prototype,"receiveShadows",{get:function(){return this._sourceMesh.receiveShadows},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"material",{get:function(){return this._sourceMesh.material},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibility",{get:function(){return this._sourceMesh.visibility},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"skeleton",{get:function(){return this._sourceMesh.skeleton},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderingGroupId",{get:function(){return this._sourceMesh.renderingGroupId},set:function(e){this._sourceMesh&&e!==this._sourceMesh.renderingGroupId&&u.a.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")},enumerable:!0,configurable:!0}),t.prototype.getTotalVertices=function(){return this._sourceMesh?this._sourceMesh.getTotalVertices():0},t.prototype.getTotalIndices=function(){return this._sourceMesh.getTotalIndices()},Object.defineProperty(t.prototype,"sourceMesh",{get:function(){return this._sourceMesh},enumerable:!0,configurable:!0}),t.prototype.isReady=function(e){return void 0===e&&(e=!1),this._sourceMesh.isReady(e,!0)},t.prototype.getVerticesData=function(e,t){return this._sourceMesh.getVerticesData(e,t)},t.prototype.setVerticesData=function(e,t,r,s){return this.sourceMesh&&this.sourceMesh.setVerticesData(e,t,r,s),this.sourceMesh},t.prototype.updateVerticesData=function(e,t,r,s){return this.sourceMesh&&this.sourceMesh.updateVerticesData(e,t,r,s),this.sourceMesh},t.prototype.setIndices=function(e,t){return void 0===t&&(t=null),this.sourceMesh&&this.sourceMesh.setIndices(e,t),this.sourceMesh},t.prototype.isVerticesDataPresent=function(e){return this._sourceMesh.isVerticesDataPresent(e)},t.prototype.getIndices=function(){return this._sourceMesh.getIndices()},Object.defineProperty(t.prototype,"_positions",{get:function(){return this._sourceMesh._positions},enumerable:!0,configurable:!0}),t.prototype.refreshBoundingInfo=function(e){if(void 0===e&&(e=!1),this._boundingInfo&&this._boundingInfo.isLocked)return this;var t=this._sourceMesh.geometry?this._sourceMesh.geometry.boundingBias:null;return this._refreshBoundingInfo(this._sourceMesh._getPositionData(e),t),this},t.prototype._preActivate=function(){return this._currentLOD&&this._currentLOD._preActivate(),this},t.prototype._activate=function(e,t){if(this._sourceMesh.subMeshes||u.a.Warn("Instances should only be created for meshes with geometry."),this._currentLOD){if(this._currentLOD._getWorldMatrixDeterminant()>0!=this._getWorldMatrixDeterminant()>0)return this._internalAbstractMeshDataInfo._actAsRegularMesh=!0,!0;if(this._internalAbstractMeshDataInfo._actAsRegularMesh=!1,this._currentLOD._registerInstanceForRenderId(this,e),t){if(!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate)return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate=!0,!0}else if(!this._currentLOD._internalAbstractMeshDataInfo._isActive)return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances=!0,!0}return!1},t.prototype._postActivate=function(){this._edgesRenderer&&this._edgesRenderer.isEnabled&&this._sourceMesh._renderingGroup&&this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)},t.prototype.getWorldMatrix=function(){if(this._currentLOD&&this._currentLOD.billboardMode!==f.a.BILLBOARDMODE_NONE&&this._currentLOD._masterMesh!==this){var t=this._currentLOD._masterMesh;return this._currentLOD._masterMesh=this,a.c.Vector3[7].copyFrom(this._currentLOD.position),this._currentLOD.position.set(0,0,0),a.c.Matrix[0].copyFrom(this._currentLOD.computeWorldMatrix(!0)),this._currentLOD.position.copyFrom(a.c.Vector3[7]),this._currentLOD._masterMesh=t,a.c.Matrix[0]}return e.prototype.getWorldMatrix.call(this)},Object.defineProperty(t.prototype,"isAnInstance",{get:function(){return!0},enumerable:!0,configurable:!0}),t.prototype.getLOD=function(e){if(!e)return this;var t=this.getBoundingInfo();return this._currentLOD=this.sourceMesh.getLOD(e,t.boundingSphere),this._currentLOD===this.sourceMesh?this.sourceMesh:this._currentLOD},t.prototype._preActivateForIntermediateRendering=function(e){return this.sourceMesh._preActivateForIntermediateRendering(e)},t.prototype._syncSubMeshes=function(){if(this.releaseSubMeshes(),this._sourceMesh.subMeshes)for(var e=0;e<this._sourceMesh.subMeshes.length;e++)this._sourceMesh.subMeshes[e].clone(this,this._sourceMesh);return this},t.prototype._generatePointsArray=function(){return this._sourceMesh._generatePointsArray()},t.prototype.clone=function(e,t,r){void 0===t&&(t=null);var s=this._sourceMesh.createInstance(e);if(h.a.DeepCopy(this,s,["name","subMeshes","uniqueId","parent"],[]),this.refreshBoundingInfo(),t&&(s.parent=t),!r)for(var n=0;n<this.getScene().meshes.length;n++){var i=this.getScene().meshes[n];i.parent===this&&i.clone(i.name,s)}return s.computeWorldMatrix(!0),s},t.prototype.dispose=function(t,r){void 0===r&&(r=!1),this._sourceMesh.removeInstance(this),e.prototype.dispose.call(this,t,r)},t}(c.a);o.a.prototype.registerInstancedBuffer=function(e,t){if(this.removeVerticesData(e),!this.instancedBuffers){this.instancedBuffers={};for(var r=0,s=this.instances;r<s.length;r++){s[r].instancedBuffers={}}this._userInstancedBuffersStorage={data:{},vertexBuffers:{},strides:{},sizes:{}}}this.instancedBuffers[e]=null,this._userInstancedBuffersStorage.strides[e]=t,this._userInstancedBuffersStorage.sizes[e]=32*t,this._userInstancedBuffersStorage.data[e]=new Float32Array(this._userInstancedBuffersStorage.sizes[e]),this._userInstancedBuffersStorage.vertexBuffers[e]=new i.b(this.getEngine(),this._userInstancedBuffersStorage.data[e],e,!0,!1,t,!0),this.setVerticesBuffer(this._userInstancedBuffersStorage.vertexBuffers[e]);for(var n=0,o=this.instances;n<o.length;n++){o[n].instancedBuffers[e]=null}},o.a.prototype._processInstancedBuffers=function(e,t){var r=e.length;for(var s in this.instancedBuffers){for(var n=this._userInstancedBuffersStorage.sizes[s],o=this._userInstancedBuffersStorage.strides[s],a=(r+1)*o;n<a;)n*=2;this._userInstancedBuffersStorage.data[s].length!=n&&(this._userInstancedBuffersStorage.data[s]=new Float32Array(n),this._userInstancedBuffersStorage.sizes[s]=n,this._userInstancedBuffersStorage.vertexBuffers[s]&&(this._userInstancedBuffersStorage.vertexBuffers[s].dispose(),this._userInstancedBuffersStorage.vertexBuffers[s]=null));var u=this._userInstancedBuffersStorage.data[s],c=0;if(t)c+=o,(f=this.instancedBuffers[s]).toArray?f.toArray(u,c):f.copyToArray(u,c);for(var h=0;h<r;h++){var f;(f=e[h].instancedBuffers[s]).toArray?f.toArray(u,c):f.copyToArray(u,c),c+=o}this._userInstancedBuffersStorage.vertexBuffers[s]?this._userInstancedBuffersStorage.vertexBuffers[s].updateDirectly(u,0):(this._userInstancedBuffersStorage.vertexBuffers[s]=new i.b(this.getEngine(),this._userInstancedBuffersStorage.data[s],s,!0,!1,o,!0),this.setVerticesBuffer(this._userInstancedBuffersStorage.vertexBuffers[s]))}},o.a.prototype._disposeInstanceSpecificData=function(){for(this._instanceDataStorage.instancesBuffer&&(this._instanceDataStorage.instancesBuffer.dispose(),this._instanceDataStorage.instancesBuffer=null);this.instances.length;)this.instances[0].dispose();for(var e in this.instancedBuffers)this._userInstancedBuffersStorage.vertexBuffers[e]&&this._userInstancedBuffersStorage.vertexBuffers[e].dispose();this.instancedBuffers={}};var l=r("cdI9"),p=r("NDL1"),_=r("/eyM"),g=(r("go3B"),r("c403"),function(e){function t(t,r,s,o,a,u,c){void 0===r&&(r=null),void 0===s&&(s=null),void 0===o&&(o=null);var h=e.call(this,t,r,s,o,a)||this;h.useVertexColor=u,h.useVertexAlpha=c,h.color=new n.a(1,1,1),h.alpha=1,o&&(h.color=o.color.clone(),h.alpha=o.alpha,h.useVertexColor=o.useVertexColor,h.useVertexAlpha=o.useVertexAlpha),h.intersectionThreshold=.1;var f={attributes:[i.b.PositionKind,"world0","world1","world2","world3"],uniforms:["vClipPlane","vClipPlane2","vClipPlane3","vClipPlane4","vClipPlane5","vClipPlane6","world","viewProjection"],needAlphaBlending:!0,defines:[]};return!1===c&&(f.needAlphaBlending=!1),u?(f.defines.push("#define VERTEXCOLOR"),f.attributes.push(i.b.ColorKind)):(f.uniforms.push("color"),h.color4=new n.b),h._colorShader=new p.a("colorShader",h.getScene(),"color",f),h}return Object(s.c)(t,e),t.prototype._addClipPlaneDefine=function(e){var t="#define "+e;-1===this._colorShader.options.defines.indexOf(t)&&this._colorShader.options.defines.push(t)},t.prototype._removeClipPlaneDefine=function(e){var t="#define "+e,r=this._colorShader.options.defines.indexOf(t);-1!==r&&this._colorShader.options.defines.splice(r,1)},t.prototype.isReady=function(){var t=this.getScene();return t.clipPlane?this._addClipPlaneDefine("CLIPPLANE"):this._removeClipPlaneDefine("CLIPPLANE"),t.clipPlane2?this._addClipPlaneDefine("CLIPPLANE2"):this._removeClipPlaneDefine("CLIPPLANE2"),t.clipPlane3?this._addClipPlaneDefine("CLIPPLANE3"):this._removeClipPlaneDefine("CLIPPLANE3"),t.clipPlane4?this._addClipPlaneDefine("CLIPPLANE4"):this._removeClipPlaneDefine("CLIPPLANE4"),t.clipPlane5?this._addClipPlaneDefine("CLIPPLANE5"):this._removeClipPlaneDefine("CLIPPLANE5"),t.clipPlane6?this._addClipPlaneDefine("CLIPPLANE6"):this._removeClipPlaneDefine("CLIPPLANE6"),!!this._colorShader.isReady()&&e.prototype.isReady.call(this)},t.prototype.getClassName=function(){return"LinesMesh"},Object.defineProperty(t.prototype,"material",{get:function(){return this._colorShader},set:function(e){},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"checkCollisions",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype._bind=function(e,t,r){if(!this._geometry)return this;var s=this._colorShader.getEffect(),n=this.isUnIndexed?null:this._geometry.getIndexBuffer();if(this._geometry._bind(s,n),!this.useVertexColor){var i=this.color,o=i.r,a=i.g,u=i.b;this.color4.set(o,a,u,this.alpha),this._colorShader.setColor4("color",this.color4)}return _.a.BindClipPlane(s,this.getScene()),this},t.prototype._draw=function(e,t,r){if(!this._geometry||!this._geometry.getVertexBuffers()||!this._unIndexed&&!this._geometry.getIndexBuffer())return this;var s=this.getScene().getEngine();return this._unIndexed?s.drawArraysType(l.a.LineListDrawMode,e.verticesStart,e.verticesCount,r):s.drawElementsType(l.a.LineListDrawMode,e.indexStart,e.indexCount,r),this},t.prototype.dispose=function(t){this._colorShader.dispose(!1,!1,!0),e.prototype.dispose.call(this,t)},t.prototype.clone=function(e,r,s){return void 0===r&&(r=null),new t(e,this.getScene(),r,this,s)},t.prototype.createInstance=function(e){return new y(e,this)},t}(o.a)),y=function(e){function t(t,r){var s=e.call(this,t,r)||this;return s.intersectionThreshold=r.intersectionThreshold,s}return Object(s.c)(t,e),t.prototype.getClassName=function(){return"InstancedLinesMesh"},t}(d)}}]);