// Compiled by ClojureScript 1.10.339 {:target :nodejs}
goog.provide('android_cljs.frontend');
goog.require('cljs.core');
goog.require('android_cljs.general');
front.send("hello from front");
front.on("hello from back",(function (msg){
android_cljs.general.log_console.call(null);

console.log(msg);

return document.getElementById("msg").innerHTML = msg;
}));

//# sourceMappingURL=frontend.js.map
