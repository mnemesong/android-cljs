goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.Uri', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../process/env.js", ['process.env'], ['cljs.core']);
goog.addDependency("../android_cljs/general.js", ['android_cljs.general'], ['cljs.core']);
goog.addDependency("../android_cljs/backend.js", ['android_cljs.backend'], ['android_cljs.general', 'cljs.core', 'androidjs']);
goog.addDependency("../android_cljs/frontend.js", ['android_cljs.frontend'], ['android_cljs.general', 'cljs.core']);
