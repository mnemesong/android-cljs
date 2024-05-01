(ns android-cljs.backend
    (:require androidjs
              [android-cljs.general :as general]))

(.on androidjs/back
  "hello from front"
  #(try (do (general/log-console)
         (.send androidjs/back "hello from back" "Hello from Android JS server!")
         0)
        (catch :default e (js/console.log e))))
