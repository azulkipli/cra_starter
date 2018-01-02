# CRA Starter

ReactJS starter template with cool features such as hot-reload using react-hot-reload, async import with react-loadable, browser history router with react-router-dom.

CRA Starter was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br/>
Other libraries used;

* [Mobx](https://mobx.js.org)
* [Axios](https://github.com/mzabriskie/axios)
* [Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React)
* [Animate.css](https://github.com/daneden/animate.css)
* etc

## Table Of Content

<!-- TOC -->

* [CRA Starter](#cra-starter)
  * [Table Of Content](#table-of-content)
  * [Requirements](#requirements)
  * [Development](#development)
* [Devevelopment Port, Use any port number allowed](#devevelopment-port-use-any-port-number-allowed)
* [BUILD CONFIGURATION](#build-configuration)
  * [Testing](#testing)
  * [Production](#production)

<!-- /TOC -->

## Requirements

Make sure you have these software on your operating system, follow each instruction so that each program can be run within command line.

* [Git (v2.x)](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git#Installing-on-Mac)
* [NodeJS (v7.x)](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)
* [Yarn (v0.2x.x)](https://yarnpkg.com/en/docs/install)

## Development

* Clone repository<br/>

```BASH
git clone https://github.com/sepulsa/frigate.git cra_starter
```

* Checkout to branch: **cra_starter** <br/>

```BASH
cd cra_starter
git checkout cra_starter
```

* Change to directory where main **package.json** exist then install node_modules.

```BASH
# execute 'yarn' on your commandline to install node_modules
azul:cra_starter/ (cra_starter✗) $ pwd
/Users/azul/Sites/cra_starter
azul:cra_starter/ (cra_starter✗) $ yarn
yarn install v0.23.4
[1/4] 🔍  Resolving packages...
```

* Save _development.env_ as **_.env_** <br/><br/>
  This is hidden configuration file to store variable depend on current environment: **development** or **_production_**.<br/><br/>
  Your **_.env_** must be in directory where _package.json_ exist.

  ```BASH
  # copy or rename development.env to .env

  azul:cra_starter/ (cra_starter✗) $ pwd
  /Users/azul/Sites/cra_starter

  azul:cra_starter/ (cra_starter✗) $ cp development.env .env

  # show list files on current directory including hidden files
  azul@aZ: ~/Sites/cra_starter master!
  $ ls -lah                                                                              [18:13:48]
  total 528
  drwxr-xr-x   13 azul  staff   442B Dec 28 18:07 .
  drwxr-xr-x+ 100 azul  staff   3.3K Dec 28 18:07 ..
  -rw-r--r--@   1 azul  staff   6.0K Dec 28 18:08 .DS_Store
  -rw-r--r--    1 azul  staff    10B Dec 28 00:26 .env
  drwxr-xr-x   13 azul  staff   442B Dec 28 18:13 .git
  -rw-r--r--    1 azul  staff   290B Dec 28 17:25 .gitignore
  -rw-r--r--    1 azul  staff   1.0K Dec 28 18:07 LICENSE
  -rw-r--r--    1 azul  staff   5.9K Dec 28 18:13 README.md
  drwxr-xr-x  937 azul  staff    31K Dec 28 18:00 node_modules
  -rw-r--r--    1 azul  staff   449B Dec 28 17:28 package.json
  drwxr-xr-x    5 azul  staff   170B Dec 28 00:17 public
  drwxr-xr-x   13 azul  staff   442B Dec 28 11:24 src
  -rw-r--r--    1 azul  staff   231K Dec 28 17:28 yarn.lock
  ```

azul@aZ: ~/Sites/cra_starter master!

````
* To see more just open development.env file.<br/>
In this .env file we are using using Pronghorn Development as base URL web services and disabled mixpanel, hotline, & home promo (image slider) section.

```BASH
# Devevelopment Port, Use any port number allowed
PORT=3000

# BUILD CONFIGURATION
````

# Veritrans script

REACT_APP_VERITRANS_URL='https://api.sandbox.midtrans.com/v2'
REACT_APP_VERITRANS_JS='https://api.sandbox.midtrans.com/v2/assets/js/veritrans.min.js'

```
- To begin development mode just execute this command on your project directory
```

yarn start

````
## Testing

To build scripts for ***testing***, Edit **.env** file so that it pointed to correct environment variables.
<br/>Execute ``` yarn build ``` in your project directory then rsync 'build' or upload it to web directory for **Testing**


## Production
To build scripts for **production**, Edit **.env** file so that it pointed to correct environment variables.
<br/>Execute ``` yarn build ``` in your project directory then rsync 'build' or upload it to web directory for **Production**

After build, scripts & assets will be available at ```build``` directory. <br/>
To check the scripts running well we can test it using ```pushstate-server```.<br />


Install ```pushstate-server```
````

npm install -g pushstate-server

```
Run *pushstate-server [directory_name]*
```

# /Users/azul/Sites/cra_starter

pushstate-server build
Listening on port 9000 (http://0.0.0.0:9000)

```
Access to pronghorn API server restricted to certain domain defined. <br />
Just point fake domain to 127.0.0.1, here example for Unix, OSX;
```

# Edit hosts file

sudo nano /etc/hosts

# add these

127.0.0.1 p.sepulsa.id
127.0.0.1 f.sepulsa.id

```
Save it then, you can access http://f.sepulsa.id:9000

If all good we can upload the scripts to web directory for production.
```
