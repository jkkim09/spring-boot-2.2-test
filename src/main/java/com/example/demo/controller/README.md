# Cntroller

## 컨트롤러 처리 순서

![Alt text](https://github.com/jkkim09/spring-boot-react-web/blob/master/img/mvc.png?raw=true)

위 이미지 처럼  Controller는 사용자 혹은 요청자가 정보를 요청 하였을때 HandlerMapping을 통해 처음 거치게 되는 역역이다

Spring boot에서 컨트롤러를 처리하는 어노테이션은(@)다음 과 같다.

| 애노테이션   |      설명      |  사용 |
|:--------:|:-------------:|:-----:|
| @Controller | 스프링 mvc의 컨트롤러 객체임을 명시하는 애노테이션| 클래스 |
| @RestController |@Controller 어노테이션과 @ResponseBody 이 합쳐져있는 형태 | 클래스 |
| @RequestMapping |요청 URL을 어떤 메서드가 처리할지 여부를 결정 | 클래스, 메소드 |

- @Controller 는 보통 View를 반활 할때 사용하고
- @RestController API 형태로 RestApi를 사용할때 사용 할 수 있다.
- @RequestMapping 해당 컨테이너의 어떤 URL과 메핑 할 것인지를 명시 한다. 클래서를 상위 메서드는 하위경로다.

```````java

@RestController
@RequestMapping("/api/v1/test")
public class testController {

    @RequestMapping("/add")
    public void test1() {
    }

    @RequestMapping("/delete")
    public void test2() {
    }
}


````````
위 컨트롤러의 test()1, test2()메소드를 호출하려면 {URL}/api/v1/test/add, {URL}/api/v1/test/delete  로 API로 요청 할 수 있다.
