# Craft Kit - PHP
This is the official [craft kit](http://codemason.io/docs/craft-kits) for PHP by [Codemason](http://codemason.io). 

```
$ mason craft php
```

Craft kits let you Dockerize your application with one command. They are an excellent way to ease into building Docker powered apps without having to learn the ins and outs of Docker.

Then with [Codemason](http://codemason.io), you can deploy your app to a server in a matter of minutes!

## Requirements 
> This guide assumes you have:
> - Installed the [Mason CLI](http://codemason.io/docs/installation)

## Quickstart
Craft your PHP app with Docker 
```
$ mason craft php
```

Add your Docker files to source control.
```
$ git add .
$ git commit -m "Docker"
```

Spin up your development environment with Docker (add the `-d` flag to the command to run in detached mode). Your PHP files will be served from the `public/` directory.
``` 
$ docker-compose up
```

That's all! You're now running your PHP application with Docker!

## Craft `--with`
You can even swap out the default services the Craft Kit uses by using the `--with` parameter. 
```
$ mason craft php --with="php, postgres"
```
- Default: php, mysql
- Available: php, mysql, mariadb, mongodb, postgres, postgis

## Deployment
Deploying is just as easy with [Codemason](http://codemason.io). For more detailed instructions, see our [documentation](http://codemason.io/docs/quickstart#deploy-dreams).

Create an application on Codemason for your app
```
$ mason create --application php-app
```

Push your code to your Codemason Git remote to build it into a Docker image
```
$ git push codemason master 
```

Deploy
```
$ mason deploy --to php-app
```
