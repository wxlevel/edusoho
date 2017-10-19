webpackJsonp(["app/js/settings/profile-avatar-crop-modal/index"],{cc3274d7f94eca8f853b:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),o=n("12695715cd021610570e"),u=a(o),s=n("b334fd7e4c5a19234db2"),c=a(s),l=function(){function t(e){i(this,t),this.cropImg=e.cropImg,this.saveBtn=e.saveBtn,this.selectBtn=e.selectBtn,this.imgs=e.imgs,this.group=e.group,this.uploadInput=e.uploadInput||".js-upload-input",this.sourceImg=e.sourceImg||".js-source-img",this.modal=e.modal||"#modal",this.init()}return r(t,[{key:"init",value:function(){var t=$(this.sourceImg);this.initImage(t);var e=this.imageCrop();this.initEvent(e)}},{key:"initImage",value:function(t){$(this.cropImg).attr({src:t.attr("src"),width:t.attr("width"),height:t.attr("height"),"data-natural-width":t.data("natural-width"),"data-natural-height":t.data("natural-height")}),t.remove()}},{key:"initEvent",value:function(t){var e=this;$(this.saveBtn).on("click",function(n){return e.saveEvent(n,t)}),$(this.selectBtn).on("click",function(t){return e.selectEvent(t)})}},{key:"saveEvent",value:function(t,e){t.stopPropagation();var n=$(t.currentTarget);e.crop({imgs:this.imgs,post:!1}),n.button("loading")}},{key:"selectEvent",value:function(t){$(this.uploadInput).click()}},{key:"imageCrop",value:function t(){var e=this,t=new u.default({element:this.cropImg,cropedWidth:this.imgs.large[0],cropedHeight:this.imgs.large[1],group:this.group});return t.afterCrop=function(t){e.afterCrop(t)},t}},{key:"afterCrop",value:function(t){var e=new FormData,n=$(this.modal),a=$(this.uploadInput);e.append("token",a.data("token")),e.append("file",a[0].files[0]);var i=function(){return new Promise(function(t,n){$.ajax({url:a.data("fileUpload"),type:"POST",cache:!1,data:e,processData:!1,contentType:!1}).done(function(e){t(e)})})},r=function(e){return new Promise(function(e,n){$.post(a.data("crop"),t,function(t){e(t)})})},o=function(t){return new Promise(function(e,i){$.post(a.data("saveUrl"),{images:t},function(t){t.image&&($(a.data("targeImg")).attr("src",t.image),(0,c.default)("success",Translator.trans("site.upload_success_hint")))}).error(function(){(0,c.default)("danger",Translator.trans("site.upload_fail_retry_hint"))}).always(function(){a.val(""),n.modal("hide")})})};i().then(function(t){return r(t)}).then(function(t){return o(t)}).catch(function(t){})}}]),t}();e.default=l},0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n("cc3274d7f94eca8f853b"),r=a(i);new r.default({cropImg:"#avatar-crop",saveBtn:"#save-btn",selectBtn:"#select-btn",group:"user",imgs:{large:[200,200],medium:[120,120],small:[48,48]}})}});