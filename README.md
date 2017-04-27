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
- Component
    - Popup
        - 중첩 가능해야함
    - DatePicker
        - 필요할까?
    - Button
        - Button, Radio, CheckBox, Select, Collapsible
    - Swipe
        - slick.js 사용
    - Toast
        - jquery toast plugin
    - Grid
        - ?
    - Tab
        - ?