# 문서 샘플 (GFM + Sequence Diagram)

## Token 발급 절차

Token 발급에 관한 내용임.

<script src="../mermaid/www/javascripts/lib/mermaid.js"></script>
<div class="mermaid">sequenceDiagram
  participant Client
  participant Server
  Client->>Server: Token 요청
  Server->>Server: Token 생성
  Server-->>Client: Token 리턴
  Note over Client,Server: Token 요청이 정상적으로 되었다.
</div>

## 테이블

### 회원

| Name          | Phone         | Money  |
| ------------- |:-------------:| ------:|
| hush75        | 010-X888-1234 |  $1600 |
| hush751001    | 010-X234-8888 |    $12 |
| xficnivad     | 017-X678-9989 |     $1 |
| raksun        | 011-X989-1004 | $10001 |


# 코드

## 코드 설명

이 코드에 대해 설명을 할 수 있다.

> 어렵다.

여기를 누르면 [네이버](https://www.google.com) 로 이동합니다.

## 샘플코드

```javascript
var i = 0;
for(i=0;i<100;i++) {
  console.log(i);
}
```

