# Naver Maps API
1. **주소 검색**
2. **좌표 검색**
3. **지역(지명/전화번호) 검색**

## 주소 검색
#### Usage
```
naver.maps.Service.geocode({
    address: ADDRESS
}, function(status, response) {
    if (status === naver.maps.Service.Status.ERROR) {
        return alert('Something Wrong!');
    }

    console.log( response.result.items );
});
```
#### Request Parameter
<table class="table striped bordered">
    <thead>
        <tr>
            <th>ITEM</th>
            <th>DESCRIPTION</th>
        </tr>
    </thead>
    <tbody>
      <tr><td>ADDRESS</td><td>검색하려는 주소</td></tr>
</table> 

#### Response JSON
```
response: Object
  result : Object
    items : Array(1)
      0 : Object
        addrdetail : Object
          country : "대한민국"
          dongmyun : "의사당대로"
          rest : " 18 아시아원빌딩"
          sido : "서울특별시"
          sigugun : "영등포구"
          __proto__ : Object
        address : "서울특별시 영등포구 의사당대로  18 아시아원빌딩"
        isRoadAddress : true
        point : Object
          x : 126.9176277
          y : 37.5271541
          __proto__ : Object
        __proto__ : Object
      length : 1
      __proto__ : Array(0)
    total : 1
    userquery : "의사당대로 18"
    __proto__ : Object
  __proto__ : Object
```

## 좌표로 주소 검색
#### Usage
```
naver.maps.Service.reverseGeocode({
    location: naver.maps.TransCoord.fromLatLngToTM128(LAT_LNG),
    coordType: naver.maps.Service.CoordType.TM128
}, function(status, response) {
    if (status === naver.maps.Service.Status.ERROR) {
        return alert('Something Wrong!');
    }

    console.log( response.result.items );
});
```
#### Request Parameter
<table class="table striped bordered">
    <thead>
        <tr>
            <th>ITEM</th>
            <th>DESCRIPTION</th>
        </tr>
    </thead>
    <tbody>
      <tr><td>LAT_LNG</td><td>검색하려는 좌표<br />new naver.maps.LatLng(latitude, longitude)</td></tr>
</table> 

#### Response JSON
```
response: Object
  result : Object
    items : Array(3)
      0 : Object
        addrdetail : Object
          country : "대한민국"
          dongmyun : "여의도동"
          rest : "17-7"
          sido : "서울특별시"
          sigugun : "영등포구"
          __proto__ : Object
        address : "서울특별시 영등포구 여의도동 17-7"
        isAdmAddress : false
        isRoadAddress : false
        point : Object
          x : 304524
          y : 547767
          __proto__ : Object
        __proto__ : Object
      1 : Object
      2 : Object
      length : 3
      __proto__ : Array(0)
    total : 3
    userquery : "304526,547766"
    __proto__ : Object
  __proto__ : Object
```

## 지역(지명/전화번호) 검색
#### Usage
```
$.ajax({
  type: 'get',
  url: 'https://openapi.naver.com/v1/search/local.json',
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-Naver-Client-Id', 'API_KEY');
    xhr.setRequestHeader('X-Naver-Client-Secret', 'API_KEY_PASSWORD');
  },
  dataType:'json',
  data: {
    query : QUERY,
    display : DISPLAY_COUNT,
    start : REQUEST_INDEX,
    sort : "random"
  },
  success: function(data) {
    console.log( data );
  }
});
```
#### Request Parameter
<table class="table striped bordered">
    <thead>
        <tr>
            <th>ITEM</th>
            <th>DESCRIPTION</th>
        </tr>
    </thead>
    <tbody>
      <tr><td>API_KEY</td><td>네이버 오픈 API Key</td></tr>
      <tr><td>API_KEY_PASSWORD</td><td>네이버 오픈 API Secret Key</td></tr>
      <tr><td>QUERY</td><td>검색할 지명<br />검색할 전화번호</td></tr>
      <tr><td>DISPLAY_COUNT</td><td>검색결과의 최대 개수</td></tr>
      <tr><td>REQUEST_INDEX</td><td>검색 시작 번호</td></tr>
</table> 

#### Response JSON
```
data: Object
  display : 5
  items : Array(5)
    0 : Object
      address : "서울특별시 종로구 가회동 129-1 "
      category : "교육,학문>도서관"
      description : "DOMUS 컬렉션 및 디자인 전문 라이브러리."
      link : "http://library.hyundaicard.com/design"
      mapx : "310449"
      mapy : "553543"
      roadAddress : "서울특별시 종로구 북촌로 31-18 "
      telephone : ""
      title : "<b>현대카드</b> 디자인 라이브러리"
      __proto__ : Object
    1 : Object
    2 : Object
    3 : Object
    4 : Object
    length : 5
    __proto__ : Array(0)
  lastBuildDate : "Fri, 26 May 2017 18:10:29 +0900"
  start : 1
  total : 111
  __proto__ : Object
```