# Outback.js

## 정리 

- namespace
    - $.outback
- jquery 사용
- lodash 사용
- jQuery Mobile의 Page 기반
- SPA 확장 가능할까?
- 화면처리
    - server-side rendering : JSTL, EL 사용하여 성능 향상
    - Ajax로 받아오는 데이터 : ejs 사용
- Utility
    - 금액 변환 API(numeric.js)
        - 숫자를 3자리마다 , 를 표시하는 문자열로 변환 ((-)음수 및 소수점 포함)
        - 금액이 표시된 숫자 문자열을 숫자로 변환 
    - 날짜 변환 API(moment.js)
        - 단순 변환
            - YYYYMMDD -> YY.MM.DD
            - YYYYMMDD -> YYYY.MM.DD
        - 날짜 계산
            - 기준일부터 몇개월, 몇일 전/후
    - Form Validation 자동화
        - jQuery-Form-Validator 사용
- Sample
    - Popup
        - static popup 생성
        - url에 content가 있는 popup 생성
        - popup 중첩
        - popup event
            - popup open시 처리
            - popup close시 처리
    - Ajax
        - $.outback.post
        - $.outback.submit
    - Utility
        - 숫자 <-> 3자리마다 , 찍는 처리
        - 날짜처리
            - YYYYMMDD -> YYYY.MM.DD
            - YYYYMMDD -> YY.MM.DD
            - YYYY.MM.DD -> YYYYMMDD
        - Validation
            - 입력 없음
            - 범위 벗어남
    - Widget
        - $.outback.swiper 위젯 만들기
            - swiper.jquery.js 로 만든다.
        - $.outback.collapsible 위젯 만들기
    

