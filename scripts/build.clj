(require '[cljs.build.api :as b])

(println "Building ...")

(let [start (System/nanoTime)]
  (b/build "src"
    {:main 'android-cljs.frontend
     :output-to "android-cljs/assets/frontend.js"
     :output-dir "android-cljs/assets/frontend"
     :asset-path "../assets/frontend"
     :target :browser
     :verbose true})
  (b/build "src"
    {:main 'android-cljs.backend
     :output-to "android-cljs/main.js"
     :output-dir "android-cljs/assets/backend"
     :asset-path "assets/backend"
     :target :nodejs
     :npm-deps {:androidjs "2.0.2"}
     :verbose true})
  (println "... done. Elapsed" (/ (- (System/nanoTime) start) 1e9) "seconds"))


