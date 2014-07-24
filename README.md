# node-webkit-testapp

My first app using node-webkit and [node-webkit-builder][1].


# Building the application

#### 1. Clone this repository or download it as zip

    git clone https://github.com/markogresak/node-webkit-testapp.git

#### 2. `cd` to cloned repository

    cd node-webkit-testapp

#### 3. Install `npm` dependencies

    npm install

#### 4. Build project with `gulp`

    gulp build

*Note: if* `gulp` *command doesn't work, make sure to install gulp globally:*

    npm install -g gulp

*You might need to add * `sudo` *at beginning.*

# Running the application

The `gulp build` command downloads all required files inside `cache` folder.

When build finishes, built applications appear in `build/node-webkit-testapp/`.


### Running the application on different platforms:

  - **OS X**:
    - open `osx/node-webkit.app`

  - **Windows**:
    - open `win/nw.exe`

  - **Linux**:
    - open `linux32/nw` or `linux64/nw`, respective to your platform




  [1]: https://github.com/mllrsohn/node-webkit-builder
