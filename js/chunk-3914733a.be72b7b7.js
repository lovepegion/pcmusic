(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3914733a"],{"0e9d":function(t,e,n){"use strict";var i=n("1922"),o=n.n(i);o.a},1922:function(t,e,n){},"245c":function(t,e,n){"use strict";var i=n("6580"),o=n.n(i);o.a},6580:function(t,e,n){},"6ebc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-list"},[n("h3",[t._v(t._s(t.title))]),n("ul",t._l(t.commentList,(function(e){return n("li",{key:e.commentId,staticClass:"item"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.user.avatarUrl+"?param=150y150",alt:e.user.nickname,title:e.user.nickname}})]),n("div",{staticClass:"info"},[n("h2",{staticClass:"flex-between"},[n("span",[t._v(" "+t._s(e.user.nickname)+" "),n("small",[t._v(" · "+t._s(t.utils.formatMsgTime(e.time)))])]),n("div",{staticClass:"tool flex-row"},[n("i",{staticClass:"iconfont nicezan1 icon-zan",class:e.liked?"active":"",on:{click:function(n){return t.commentLike(e.commentId,e.liked)}}}),n("span",[t._v("("+t._s(e.likedCount)+")")]),n("i",{staticClass:"iconfont nicevoice icon-comment",on:{click:function(n){return t.commentHandle(e.commentId)}}})])]),n("div",{staticClass:"content"},[t._v(" "+t._s(e.content)+" "),t._l(e.beReplied,(function(e){return n("div",{key:e.beRepliedCommentId,staticClass:"beReqlied"},[n("small",[t._v("@"+t._s(e.user.nickname)+"：")]),t._v(t._s(e.content)+" ")])}))],2),e.commentId==t.currentCommentId?n("comment-box",{on:{cancelComment:t.cancelComment,commentSubmit:t.commentSubmit}}):t._e()],1)])})),0)])},o=[],a=n("9523"),c=n.n(a),r=n("e9ea"),s=n("2f62");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={data:function(){return{commentContent:""}},props:{title:{type:String},commentList:{type:Array},currentCommentId:{type:[String,Number]}},components:{CommentBox:r["a"]},computed:l({},Object(s["c"])(["userInfo","loginStatu"])),watch:{},methods:{commentHandle:function(t){this.$emit("commentHandle",t)},commentSubmit:function(t){this.$emit("commentSubmit",t)},commentLike:function(t,e){this.$emit("commentLike",t,e)},cancelComment:function(){this.$emit("cancelComment")}},created:function(){},mounted:function(){}},d=u,f=(n("0e9d"),n("2877")),v=Object(f["a"])(d,i,o,!1,null,"18a8e7e2",null);e["a"]=v.exports},a5b6:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-detail container"},[n("div",{staticClass:"left shadow"},[n("div",{staticClass:"video-container"},[n("video",{attrs:{src:t.videoUrl,controls:"controls",autoplay:"",controlslist:"nodownload"}})]),n("div",{staticClass:"video-foot"},[n("h2",{staticClass:"title flex-row"},[t._v(" "+t._s(t.detail.title)+" ")]),n("div",{staticClass:"tag"},t._l(t.detail.videoGroup,(function(e){return n("a",{key:e.id},[t._v("#"+t._s(e.name))])})),0),n("p",{staticClass:"flex-row"},[n("span",[t._v("发布："+t._s(t.utils.dateFormat(t.detail.publishTime,"YYYY-MM-DD")))]),t.detail.playTime?n("span",[t._v("播放次数："+t._s(t.utils.tranNumber(t.detail.playTime,1)))]):t._e()]),n("div",{staticClass:"follow"},[n("div",{staticClass:"box",class:t.videoDetailInfo.isLike?"active":"",on:{click:t.likeResource}},[n("i",{staticClass:"iconfont nicexihuan3 icon-like"}),t._v(" "+t._s(t.videoDetailInfo.likeCount)+" ")]),n("div",{staticClass:"box"},[n("i",{staticClass:"iconfont niceshoucang2 icon-collection"}),t._v(" "+t._s(t.detail.subscribeCount)+" ")]),n("div",{staticClass:"box"},[n("i",{staticClass:"iconfont nicefenxiang2 icon-share"}),t._v(" "+t._s(t.videoDetailInfo.shareCount)+" ")])])]),n("div",{staticClass:"comments"},[n("div",{staticClass:"title flex-row"},[n("i",{staticClass:"iconfont nicepinglun"}),t._v("Comments | "),n("span",{staticClass:"noticom"},[n("a",[t._v(t._s(t.videoDetailInfo.commentCount)+" 条评论")])])]),""==t.currentCommentId?n("comment-box",{attrs:{currentCommentId:t.currentCommentId,clearContent:t.clearContent},on:{commentSubmit:t.commentSubmit}}):t._e(),t.hotComments.length>0?n("comment-list",{attrs:{title:"精彩评论",commentList:t.hotComments,currentCommentId:t.currentCommentId},on:{commentHandle:t.commentHandle,cancelComment:t.cancelComment,commentSubmit:t.commentSubmit,commentLike:t.commentLike}}):t._e(),n("comment-list",{attrs:{title:"最新评论",commentList:t.comments,currentCommentId:t.currentCommentId},on:{commentHandle:t.commentHandle,cancelComment:t.cancelComment,commentSubmit:t.commentSubmit,commentLike:t.commentLike}}),n("div",{staticClass:"page-wrap"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.limit,background:"","hide-on-single-page":"",layout:"total, prev, pager, next",total:t.commentTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)]),n("div",{staticClass:"right"},[n("div",{staticClass:"profile module shadow"},[t._m(0),n("div",{staticClass:"content"},[n("div",{staticClass:"author"},[n("div",{staticClass:"avatar",on:{click:function(e){return t.toUser(t.creator.userId)}}},[n("img",{attrs:{src:t.creator.avatarUrl,alt:""}})]),n("p",{staticClass:"name",on:{click:function(e){return t.toUser(t.creator.userId)}}},[t._v(t._s(t.creator.nickname))])]),t.detail.description?n("p",[t._v(t._s(t.detail.description))]):n("p",[t._v("视频暂无简介")])])]),n("div",{staticClass:"related module shadow"},[t._m(1),n("ul",t._l(t.relatedList,(function(e){return n("li",{key:e.vid},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.coverUrl+"?param=320y180",alt:e.title,title:e.title}}),n("div",{staticClass:"action"},[e.isLive?t._e():n("button",{staticClass:"play flex-center",attrs:{title:"播放"},on:{click:function(n){return t.toDetail(e.vid)}}},[n("i",{staticClass:"iconfont nicebofang1"})])])]),n("div",{staticClass:"info"},[n("h2",{staticClass:"ellipsis"},[t._v(t._s(e.title))]),t._l(e.creator,(function(e){return n("span",{key:e.userId},[t._v("By. "),n("small",[t._v(" "+t._s(e.userName))])])}))],2)])})),0)])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header flex-row"},[n("span",[t._v("视频简介")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header flex-row"},[n("span",[t._v("相关推荐")])])}],a=n("a34a"),c=n.n(a),r=n("c973"),s=n.n(r),m=n("9523"),l=n.n(m),u=n("6ebc"),d=n("e9ea"),f=n("2f62");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C={data:function(){return{detail:{},creator:{},relatedList:[],hotComments:[],comments:[],currentCommentId:"",videoUrl:"",currentPage:0,limit:20,offset:0,videoId:"",commentTotal:0,clearContent:!1,videoDetailInfo:{}}},components:{CommentList:u["a"],CommentBox:d["a"]},computed:p({},Object(f["c"])(["userInfo","loginStatu"])),watch:{$route:function(){var t=this.$route.query.id||this.videoId;t&&this._initialize(t)}},methods:{handleSizeChange:function(t){this.limit=t,this.offset=this.limit*this.currentPage,this.getVideoComments(this.videoId)},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.getVideoComments(this.videoId)},commentHandle:function(t){this.currentCommentId=t},commentSubmit:function(t){var e=this;return s()(c.a.mark((function n(){var i,o,a;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t){n.next=5;break}return e.$message.error("什么都没写，你点毛"),n.abrupt("return");case 5:return i=(new Date).getTime(),o={type:5,id:e.videoId,content:t,timestamp:i},""==e.currentCommentId?o.t=1:(o.t=2,o.commentId=e.currentCommentId),n.next=10,e.$api.sendComment(o);case 10:a=n.sent,200===a.code&&(e.$message({message:"提交成功",type:"success"}),e.cancelComment(),e.clearContent=!0,e.getVideoComments(e.videoId));case 12:case"end":return n.stop()}}),n)})))()},cancelComment:function(){this.currentCommentId=""},commentLike:function(t,e){var n=this;return s()(c.a.mark((function i(){var o,a,r;return c.a.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return o=(new Date).getTime(),a={id:n.videoId,cid:t,type:5,timestamp:o},a.t=e?0:1,i.prev=3,i.next=6,n.$api.likeComment(a);case 6:r=i.sent,200===r.code&&n.getVideoComments(n.videoId),i.next=13;break;case 10:i.prev=10,i.t0=i["catch"](3),console.log(i.t0);case 13:case"end":return i.stop()}}),i,null,[[3,10]])})))()},likeResource:function(){var t=this;return s()(c.a.mark((function e(){var n,i,o,a;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=5,i=1,i=t.videoDetailInfo.isLike?2:1,o=t.videoId,e.prev=4,e.next=7,t.$api.likeResource(n,i,o);case 7:a=e.sent,200===a.code&&t.getVideoDetailInfo(t.videoId),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))()},getVideoUrl:function(t){var e=this;return s()(c.a.mark((function n(){var i;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$api.getVideoUrl(t);case 3:i=n.sent,200===i.code&&(e.videoUrl=i.urls[0].url),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getVideoDetail:function(t){var e=this;return s()(c.a.mark((function n(){var i;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$api.getVideoDetail(t);case 3:i=n.sent,200===i.code&&(i.data.videoGroup.map((function(t){-1!=t.name.indexOf("#")&&(t.name=t.name.replace(/#/g,""))})),e.detail=i.data,e.creator=i.data.creator),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getVideoDetailInfo:function(t){var e=this;return s()(c.a.mark((function n(){var i,o;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$api.getVideoDetailInfo(t,(new Date).getTime());case 3:i=n.sent,200===i.code&&(o={isLike:i.liked,likeCount:i.likedCount,shareCount:i.shareCount,commentCount:i.commentCount},e.videoDetailInfo=o),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getVideoRelated:function(t){var e=this;return s()(c.a.mark((function n(){var i;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$api.getVideoRelated(t);case 3:i=n.sent,200===i.code&&(e.relatedList=i.data),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getVideoComments:function(t){var e=this;return s()(c.a.mark((function n(){var i,o,a;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=(new Date).getTime(),o={id:t,limit:e.limit,offset:e.offset,timestamp:i},n.prev=2,n.next=5,e.$api.getVideoComments(o);case 5:a=n.sent,200===a.code&&(e.commentTotal=a.total,a.hotComments?e.hotComments=a.hotComments:e.hotComments=[],e.comments=a.comments),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},toDetail:function(t){this.$router.push({name:"videoDetail",query:{id:t}})},toUser:function(t){this.$router.push({name:"personal",query:{id:t}})},_initialize:function(t){this.getVideoUrl(t),this.getVideoDetail(t),this.getVideoRelated(t),this.getVideoDetailInfo(t),this.getVideoComments(t)}},created:function(){},mounted:function(){var t=this.$route.query.id;t&&(this.videoId=t,this._initialize(t))}},h=C,b=(n("245c"),n("2877")),g=Object(b["a"])(h,i,o,!1,null,"08db20b6",null);e["default"]=g.exports},e7be:function(t,e,n){"use strict";var i=n("f3ce"),o=n.n(i);o.a},e9ea:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-box"},[n("p",{staticClass:"flex-row"},[n("span",[n("i",{staticClass:"iconfont niceuser"}),t._v(" "+t._s(t.userInfo.nickname)+"，你好 ")]),""!=t.currentCommentId?n("button",{staticClass:"cancel-comment",on:{click:t.cancelComment}},[t._v(" 取消回复 ")]):t._e()]),n("div",{staticClass:"comment-form"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.userInfo.avatarUrl,title:t.userInfo.nickname}})]),n("div",{staticClass:"comarea"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],attrs:{name:"comment",placeholder:"你看什么看！",tabindex:"4",cols:"50",rows:"5"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}})])]),n("div",{staticClass:"comment-foot flex-between"},[n("div",{staticClass:"smile"}),n("button",{staticClass:"comment-btn transition",attrs:{type:"button"},on:{click:t.commentSubmit}},[t._v(" 评论 ")])])])},o=[],a=n("9523"),c=n.n(a),r=n("2f62");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={data:function(){return{commentContent:""}},props:{currentCommentId:{type:[String,Number]},clearContent:{type:Boolean}},components:{},computed:m({},Object(r["c"])(["userInfo","loginStatu"])),watch:{clearContent:function(t){t&&(this.commentContent="")}},methods:{commentSubmit:function(){this.$emit("commentSubmit",this.commentContent)},cancelComment:function(){this.$emit("cancelComment")}},created:function(){},mounted:function(){}},u=l,d=(n("e7be"),n("2877")),f=Object(d["a"])(u,i,o,!1,null,"5e0c4297",null);e["a"]=f.exports},f3ce:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3914733a.be72b7b7.js.map