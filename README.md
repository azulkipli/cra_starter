# CRA Semantic UI

This is ReactJS starter template with some cool features such as hot-reload, async import for code splitting, browser history router with react-router-dom, and custom webpack config without eject using react-app-rewired.

This template was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br/>
Other libraries used;

* [Mobx](https://mobx.js.org)
* [Axios](https://github.com/mzabriskie/axios)
* [Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React)
* etc

## Table Of Contens

<!-- TOC -->

* [CRA Semantic UI](#cra-semantic-ui)
  * [Table Of Contens](#table-of-contens)
  * [Demo](#demo)
  * [Requirements](#requirements)
  * [Development](#development)
    * [Start developing](#start-developing)
    * [Routes](#routes)
    * [Mobx stores](#mobx-stores)
  * [Testing](#testing)
  * [Production](#production)

<!-- /TOC -->

## Demo

You can see demo CRA Semantic UI here: [DEMO CRA Semantic UI](https://cra_sui.surge.sh)

Lighthouse audit result

![Lighthouse](Lighthouse_audit.png)

## Requirements

Make sure you have these software on your operating system, follow each instruction so that each program can be run within command line.

* [Git (v2.x)](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git#Installing-on-Mac)
* [NodeJS (v7.x)](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)
* [Yarn (v0.2x.x)](https://yarnpkg.com/en/docs/install)

## Development

### Start developing

```BASH
git clone https://github.com/azulkipli/cra_starter.git cra_starter_sui
```

Change to directory where main **package.json** exist then install node_modules.

```BASH
# execute 'yarn' on your commandline to install node_modules
azul:cra_starter_sui/ (cra_starter_sui✗) $ pwd
/Users/azul/Sites/cra_starter_sui
azul:cra_starter_sui/ (cra_starter_sui✗) $ yarn
yarn install v0.23.4
[1/4] 🔍  Resolving packages...
```

If there are no issue after execute `yarn / yarn install` , we can start developing the app `yarn start`. Please check example components available on directory: src/components

### Routes

All routes & components splitting defined in each file on directory: src/routes

### Mobx stores

All mobx store include in one index file then you can inject it later on each components, check directory: src/stores

```
# show list files on current directory including hidden files
azul@aZ: ~/Sites/cra_starter_sui master!
$ ls -lah                                                                            total 1128
-rw-r--r--     1 azul  staff    1061 Dec 28 18:07 LICENSE
-rw-r--r--     1 azul  staff    4162 Jan  8 14:52 README.md
drwxr-xr-x    18 azul  staff     612 Jan  7 19:40 build
-rw-r--r--     1 azul  staff     999 Jan  7 19:18 config-overrides.js
-rw-r--r--@    1 azul  staff  268535 Jan  8 14:49 lighthouse_audit.png
drwxr-xr-x  1068 azul  staff   36312 Jan  8 14:49 node_modules
-rw-r--r--     1 azul  staff     932 Jan  7 19:17 package.json
drwxr-xr-x    15 azul  staff     510 Jan  5 19:50 public
drwxr-xr-x    19 azul  staff     646 Jan  7 19:04 src
-rw-r--r--     1 azul  staff     163 Jan  7 19:20 tsconfig.json
-rw-r--r--     1 azul  staff  279439 Jan  7 19:25 yarn.lock
```

## Testing

To build scripts for **_testing_**, Edit **.env** file so that it pointed to correct environment variables.
<br/>Execute `yarn build` in your project directory then rsync 'build' or upload it to web directory for **Testing**

## Production

To build scripts for **production**, Edit **.env** file so that it pointed to correct environment variables.
<br/>Execute `yarn build` in your project directory then rsync 'build' or upload it to web directory for **Production**

After build, scripts & assets will be available at `build` directory. <br/>
To check the scripts running well we can test it using `pushstate-server`.<br />

Install `pushstate-server`

```
npm install -g pushstate-server
```

Run _pushstate-server [build_output_directory]_

```
# /Users/azul/Sites/cra_starter_sui

pushstate-server build
Listening on port 9000 (http://0.0.0.0:9000)
```
