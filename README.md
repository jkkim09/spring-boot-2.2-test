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
$ npm run start     // webpack.config.js
`````
## Front-end(React) Build
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