goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__525__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__526__i = 0, G__526__a = new Array(arguments.length -  0);
while (G__526__i < G__526__a.length) {G__526__a[G__526__i] = arguments[G__526__i + 0]; ++G__526__i;}
  args = new cljs.core.IndexedSeq(G__526__a,0,null);
} 
return G__525__delegate.call(this,args);};
G__525.cljs$lang$maxFixedArity = 0;
G__525.cljs$lang$applyTo = (function (arglist__527){
var args = cljs.core.seq(arglist__527);
return G__525__delegate(args);
});
G__525.cljs$core$IFn$_invoke$arity$variadic = G__525__delegate;
return G__525;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__528__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__529__i = 0, G__529__a = new Array(arguments.length -  0);
while (G__529__i < G__529__a.length) {G__529__a[G__529__i] = arguments[G__529__i + 0]; ++G__529__i;}
  args = new cljs.core.IndexedSeq(G__529__a,0,null);
} 
return G__528__delegate.call(this,args);};
G__528.cljs$lang$maxFixedArity = 0;
G__528.cljs$lang$applyTo = (function (arglist__530){
var args = cljs.core.seq(arglist__530);
return G__528__delegate(args);
});
G__528.cljs$core$IFn$_invoke$arity$variadic = G__528__delegate;
return G__528;
})()
);

return null;
});
