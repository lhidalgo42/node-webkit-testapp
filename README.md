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

# Running the application

The build command downloads all required files inside `cache` folder.

When `build` command finishes, the application will be put into `build/node-webkit-testapp`. Applications are separated by target platform.

### Running the application on different platforms:

  - **OS X**:
    - open `osx/node-webkit`

  - **Windows**:
    - open `win/nw.exe`

  - **Linux**:
    - open `linux32/nw` or `linux64/nw`, respective to your platform




  [1]: https://github.com/mllrsohn/node-webkit-builder
