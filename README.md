# Spring-Boot + React (WEB)

![springboot](https://t1.daumcdn.net/cfile/tistory/99AACC335BE0F3792B "springboot")
![](https://images.velog.io/post-images/npcode9194/e5d48b80-7f6f-11e9-a6a4-0bc65ee71cb1/react.png)

# 환경
Spring-Boot(Spring) + React (webpack) 으로 Web 환경을 구성하였다. <br>
Front-end 폴더에 webpack.config.js, webpack.config.build.js 파일이 두개가 존제하는데 그이유는 local 환경에서 Front-end 단 작업을 할때 webpack.config.js 설정파일을 써야 정상작의로 동작하며 webpack.config.build.js 배포전 build 파여 Spring 환경에서 배포 되게 하기 위해서이다.

# 설치

## Front-end(React) 설치

`````bash
$ cd ./frontend
`````

`````bash
$ npm install
`````
## Front-end(React) 실행

`````bash
$ cd ./frontend
`````

`````bash
$ npm run start     // webpack.config.js
`````
## Front-end(React) Build

`````bash
$ cd ./frontend
`````

`````bash
$ npm run build     // webpack.config.build.js
`````
## Back-end(Spring Boot) start
 
```
└── src 
     └── main
          └── java
                └── com
                      └── example
                              └── demo
                                   └── Application.java

```

Application.java 파일을 Run Application 하여 Server 을 실행 한다.

## Project Build

project 폴더에서 실행<br>
-t : tag name option<br>
. : Dockerfile 위치

`````bash
$ docker build -t {tagname:version} .
`````

처음 jar 형식으로 배포하여 spring boot 내부 tomacat 으로 구동 시키려고 하였으나 jsp 랜더링을 하기위해 설정들이 필요하였고 삽질을 하다 일단 war 형식으로 배포하여 jsp 형식을 지원 하기로 하였다 차 후 설정을 조정하여 jar 형식으로 변경할 것 이다.

`````
FROM tomcat:8.0.51-jre8-alpine     // tomcat 이미지
RUN rm -rf /usr/local/tomcat/webapps/*  // tomcat에 포함되어있는 기본 내용 초기화
COPY ./target/spring-boot-2.2-test-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war  // war 파일을 tomcat에 webapps 폴더에 복사
CMD ["catalina.sh","run"] // war 실행
`````

## Project 배포

`````bash
$ docker run -d -p {외부포트}:{내부포트} {tagname:version}
`````