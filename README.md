# Spring-Boot + React (WEB)

![springboot](https://t1.daumcdn.net/cfile/tistory/99AACC335BE0F3792B "springboot")
![](https://images.velog.io/post-images/npcode9194/e5d48b80-7f6f-11e9-a6a4-0bc65ee71cb1/react.png)
![](https://t1.daumcdn.net/cfile/tistory/9948863C5A57111825)

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
### - war build

처음 jar 형식으로 배포하여 spring boot 내부 tomacat 으로 구동 시키려고 하였으나 jsp 랜더링을 하기위해 설정들이 필요하였고 삽질을 하다 일단 war 형식으로 배포하여 jsp 형식을 지원 하기로 하였다 차 후 설정을 조정하여 jar 형식으로 변경할 것 이다.

`````
FROM tomcat:8.0.51-jre8-alpine     // tomcat 이미지
RUN rm -rf /usr/local/tomcat/webapps/*  // tomcat에 포함되어있는 기본 내용 초기화
COPY ./target/spring-boot-2.2-test-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war  // war 파일을 tomcat에 webapps 폴더에 복사
CMD ["catalina.sh","run"] // war 실행
`````
### - jar build

view 파일을 .html 을 쓰게되면서 jar 형식으로 배포가 가능하게 되었다 그래서 Spring Boot 내장 서버를 사용가능하여 아래와 같이 Dockerfile 을 정의 하였다.

``````
FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]

``````


## Project 배포

`````bash
$ docker run -d -p {외부포트}:{내부포트} {tagname:version}
`````

# React

## 내가 생각하는 Vuejs vs React

Vuejs 기본 template

`````html
<template>
     {{title}}
</template>

<script>
export default {
  data () {
    return {
         title: 'test'
    }
  },
  methods: {
    testFunction () {
         console.log(this.title)
         this.title = 'test 2'
    }
  }
}
</script>
``````

React 기본 template

````javascript
import React, { Component } from 'react';
import'../../css/App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: 'test data 1', check: true}
    }

    testClick(value) {
        console.log(this, value);
        this.setState({data: 'test data 3', check: false})
    }

    render() {
        return (
            <div>
               {this.state.data}
            </div>  
        );
    }
}
export default App;
``````

위 코드는 Vuejs, React 가장 기본적인 형테이다. 저는 처음 Vuejs 를 공부한다음 나중에 React 를 공부하게 되었는다 둘 이 가장 다른점이라고 생각 되는것은 Vuejs 는 html 형식에 코드 script 코드가 분리되어있는 모양이였고 React 는 script 로만 이루어진 코드처럼 느껴졌다. 그래서 개인적으로는 Vuejs가 더 눈에 잘 들어온다고 생각한다. 그 외에 차이점은 다음과 같다.

1. data 접근 <br>
vuejs 는 data () 함수를 통해서 정의를 하고 React constructor () 를 통해서 정의한다 둘다 어떡게 보면 같다고 볼 수 있으나 data 를 접근하거나 업데이트를 하는 부분을 보면 조금 차이를 보인다. vuejs 같은 경우 정의된 값을 template 에서는 {{ data name }} 으로 접근 하거나 script 에서 this.'data name' (ex : this.titke) 으로 접근 or 업데이트 가능하다. <br>
반면 React 의 경우 this.state 를 정의하고 {this.state.data} 형식으로 접근 할 수 있다 이것은 vuejs 와 동일하다고 볼 수 있다 하지만 옵데이트경우 vuejs 처럼 직접 접근하여 수정하는 것이아니라 
this.setState({data: 'test data 3', check: false}) 처럼 setter을 통해서 업데이트 하는방식을 취하고 있다.<br><br>
data 접근 하는 방식에는 큰차이는 없다고 생각한다. 하지만 React 쪽의 setter(this.setState)를 사용하는 쪽에 더 코드적으로 명시적이고 가독성이 좋다고 생각한다.

2. event<br>
vuejs 의 경우 함수를 생성은 methods 에 정의하고 template 에서는 tag event option 에서 이름으로 접근가능하며 (resetBtn) script 에서는 this."함수 이름" (this.resetBtn) 접근가능하다.<br>
React 는 vuejs 처럼 methods 부분에 따로 정의하지안고 Es6처럼 함수를 정의하여 this."함수 이름" 으로 접근한다.

3. 초기화 
     ```javascript
     import React, { Component } from 'react';
     class App extends Component {}
     ```
     reat는 컴포넌트를 만들때마다. react 를 import 해서 Component 상속 받아야하는 중복적인 코드가 발생한다.



# Spring

## 어노테이션(@)

| 애노테이션   |      설명      |  사용 |
|:--------:|:-------------:|:-----:|
| @Controller | 스프링 mvc의 컨트롤러 객체임을 명시하는 애노테이션| 클래스 |
| @requestmapping | 특정 uri에 매칭되는 클래스나 메소드임을 명시하는 애노테이션 | 클래스, 메소드 |
| @requestparam | 요청에서 특정한 파라미터의 값을 찾아낼 때 사용하는 애노테이션 | 파라미터 |
| @requestheader| 요청에 특정 http 헤더 정보를 추출할 때 사용 | 파라미터 |
| @pathvariable| 현재의 uri에서 원하는 정보를 추출할 때 사용하는 애노테이션 | 파라미터  |
| @cookievalue| 현재 사용자의 쿠키가 존재하는 경우 쿠키의 이름을 이용해서 쿠키의 값을 추출 | 파라미터 |
| @modelattribute| 자동으로 해당 객체를 뷰까지 전달하도록 만드는 애노테이션 | 메소드, 파라미터 |
| @sessionattribute| 세션상에서 모델의 정보를 유지하고 싶은 경우에 사용 | 클래스 |
| @initbinder| 파라미터를 수집해서 객체로 만들 경우에 커스터마이징 | 메소드 |
| @responsebody| 리턴 타입이 http의 응답 메시지로 전송 | 메소드, 리턴타입 |
| @requestbody| 요청 문자열이 그대로 파라미터로 전달 | 파라미터 |
| @repository| Dao 객체 | 클래스 |
| @service| 서비스 객체 | 클래스 |
