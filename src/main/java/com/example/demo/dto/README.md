# DTO(Data Transfer Object) == VO(Value Object)

데이터 교환을 위한 객체(해당 값을 GET,SET 할때 사용한다.)

### 1. getter setter 명시
````java
@Data
public class testVO {
	private int number;

    public void setNumber(int number) {
        this.number = number;
    }

    public int getNumber() {
        return this.number;
    }
}
````
### 2. lombok 이용한 자동 생성(명시)

````java

import lombok.Data;

@Data
public class testVO {
	private int number;
}
````

1번 같은경우는 DTO 를 직접 setter,getter를 생성하여 명시해준것이고 2번은 lombok이라는 라이브러리를 이용하여 setter,getter를 생성하지 안고 자동으로 명시 해준것이다. 

DTO는 Controller단에서 복수 의 값을 받거나 DB에서 컬럼과 같은이름으로 사용하여 값을 받아오는 역할로 사용한다.



