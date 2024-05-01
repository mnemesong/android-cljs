// Compiled by ClojureScript 1.10.339 {:target :browser}
goog.provide('android_cljs.backend');
goog.require('cljs.core');
goog.require('androidjs');
goog.require('android_cljs.general');
android_cljs.backend.node$module$androidjs.back.on("hello from front",(function (){
try{android_cljs.general.log_console.call(null);

android_cljs.backend.node$module$androidjs.back.send("hello from back","Hello from Android JS server!");

return (0);
}catch (e509){var e = e509;
return console.log(e);
}}));

//# sourceMappingURL=backend.js.map
