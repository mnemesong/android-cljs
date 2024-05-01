goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__527__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__528__i = 0, G__528__a = new Array(arguments.length -  0);
while (G__528__i < G__528__a.length) {G__528__a[G__528__i] = arguments[G__528__i + 0]; ++G__528__i;}
  args = new cljs.core.IndexedSeq(G__528__a,0,null);
} 
return G__527__delegate.call(this,args);};
G__527.cljs$lang$maxFixedArity = 0;
G__527.cljs$lang$applyTo = (function (arglist__529){
var args = cljs.core.seq(arglist__529);
return G__527__delegate(args);
});
G__527.cljs$core$IFn$_invoke$arity$variadic = G__527__delegate;
return G__527;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__530__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__531__i = 0, G__531__a = new Array(arguments.length -  0);
while (G__531__i < G__531__a.length) {G__531__a[G__531__i] = arguments[G__531__i + 0]; ++G__531__i;}
  args = new cljs.core.IndexedSeq(G__531__a,0,null);
} 
return G__530__delegate.call(this,args);};
G__530.cljs$lang$maxFixedArity = 0;
G__530.cljs$lang$applyTo = (function (arglist__532){
var args = cljs.core.seq(arglist__532);
return G__530__delegate(args);
});
G__530.cljs$core$IFn$_invoke$arity$variadic = G__530__delegate;
return G__530;
})()
);

return null;
});
