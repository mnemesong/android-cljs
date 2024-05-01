(ns android-cljs.frontend
  (:require [android-cljs.general :as general]))

(js/front.send "hello from front")

(js/front.on
  "hello from back"
  (fn [msg] (do (general/log-console)
            (.log js/console msg) 
            (set! (. (js/document.getElementById "msg") -innerHTML) msg))))
