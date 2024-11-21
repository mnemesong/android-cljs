# android-cljs
Mies clojurescript integration into android-js framework

## REPOSITORY IS DEPRECATED!
Repository is deprecated! Actual repository at: https://gitflic.ru/project/pantagruel74/android-cljs


## Android-js API
https://android-js.github.io/docs/https://android-js.github.io/docs/


## Build and debug

### 1. install npm modules
run `npm install`

### 2. Compiling clojurescript
Compile your project once in dev mode with the following script `./scripts/build`

### 3. Debug app in browser
1. move to andorid-cljs app folder `cd android-cljs`
2. update dependencies `npm i`
3. run `node .` for start backend emulator
4. open `./views/index.html` in your browser
5. client will socket-connect with node backend, and you will may to test your program

### 4. Building android apk
1. move to andorid-cljs app folder `cd android-cljs`
2. update dependencies `npm i`
3. Check your permissions in `package.json` (for extra functional: usage filestore, camera or some other phone native functions will needs special permission. Check androidjs examples here https://github.com/android-js/sample-app)
4. run `npm run build`
5. target apk will be builded in ./dist directory


## Directories structure
- `android-cljs` - directory for android-js app
- `android-cljs/assets` - directory with assets and generated scripts
- `android-cljs/dist` - directory for target APK files
- `android-cljs/views` - directory with html views
- `/scripts` - directories with building scripts. Correct them for configuring building
- `/src` - directory with source paths
- `/target` - directory fot temp settings, mies-clojurescript needs


## Recreating app directory
Is possible to create new application directory and configure building there. For this:
1. Remove current app directory `android-cljs`
2. From root of project run `npm run init`
3. Select name and type of your new app in console dialogue
4. Reconfigure `views/index.html` file in new project and reconfigure build scripts in `scripts` dir
5. Test and make a pleasure!


## Bugs
Androidjs is a rather capricious tool. If at some point the application stops launching on android, then the most likely cause of the problem may be:
- You trying to connect shadow-cljs tool, or some other tools, thats conflict with android-js dependencies, especial linked with streams redefinitions, etc..
- You had add extra dependencies to app-project. Not every package used in nodejs may be used in androidjs. Incomparable with androidjs runtime packages will drop the app. Maximal try to avoid install compilers, builders, linters, minimificators, browserficators, etc tools into app directory. This reason source-directory separated from app-directory and placed one level up. Try to build all your files and call extra processing in source-directory, and place into app-directory only ready js files!
- You try to call some system functional, permissions required. Unlike nodejs in android, any interaction with the system other than transferring data over the network requires asking the user for permission for the application. Specify the required permissions in package.json app-directory and Androidjs will take care of the job. Examples of apps thats use different permissions and all kinds of permissions you may find at  https://github.com/android-js/sample-app
- Cljs mistake or mistyping. Check and test your cljs code before compilation.


## License
MIT


## Author
Anatoly Starodubtsev
tostar74@mail.ru
