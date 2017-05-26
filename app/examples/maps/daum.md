# Daum Maps 사용 설명
1. **주소 검색**
2. **좌표 검색**
3. **지역(지명/전화번호) 검색**

## 주소 검색
#### Usage
```
geocoder.addr2coord(ADDRESS, function(status, result) {
    if (status === daum.maps.services.Status.OK) {
        var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);

        console.log(result);
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
      <tr><td>ADDRESS</td><td>검색하려는 주소</td></tr>
</table> 

#### Response JSON
```
result: Object
  addr : Array(1)
    0 : Object
      buildingAddress : "아시아원빌딩"
      id : "N30081023"
      isNewAddress : "Y"
      lat : 37.5271155515
      lng : 126.9175414172
      localName_1 : "서울"
      localName_2 : "영등포구"
      localName_3 : "의사당대로"
      mainAddress : "18"
      mountain : ""
      newAddress : "여의도동 17-7"
      placeName : "Not avaliable"
      point_wx : "481778"
      point_wy : "1118792"
      point_x : 126.9175414172
      point_y : 37.5271155515
      subAddress : "0"
      title : "서울 영등포구 의사당대로 18"
      zipcode : "150874"
      zone_no : "07236"
      __proto__ : Object
    length : 1
    __proto__ : Array(0)
  __proto__ : Object
```

## 좌표로 주소 검색
#### Usage
```
geocoder.coord2addr(LAT_LNG, function(status, result) {
    if (status === daum.maps.services.Status.OK) {
      if ( result[0].fullName == undefined ) {
        infoDiv.innerHTML = result[0].jibunAddress.name;
      } else {
        infoDiv.innerHTML = result[0].fullName;
      }
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
      <tr><td>LAT_LNG</td><td>검색하려는 좌표<br />new naver.maps.LatLng(latitude, longitude)</td></tr>
</table> 

#### Response JSON
```
result = Array(1);
result[0] = {
  code : "1119054"
  code1 : "11"
  code2 : "11190"
  code3 : "1119054"
  fullName : "서울특별시 영등포구 여의동"
  name : "여의동"
  name0 : "대한민국"
  name1 : "서울특별시"
  name2 : "영등포구"
  name3 : "여의동"
  regionId : "I10190701"
  type : "H"
  x : 126.93457360348873
  y : 37.51760442011227
  __proto__ : Object
}
```

## 지역(지명/전화번호) 검색
#### Usage
```
var ps = new daum.maps.services.Places(); 
ps.keywordSearch( QUERY, function(status, data, pagination) {
    if (status === daum.maps.services.Status.OK) {
        /*
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new daum.maps.LatLngBounds();

        for (var i=0; i<data.places.length; i++) {
            addMarker(data.places[i]);    
            bounds.extend(new daum.maps.LatLng(data.places[i].latitude, data.places[i].longitude));
        }       

        console.log( data );
        console.log( pagination );
    } 
} );
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
      <tr><td>QUERY</td><td>검색할 지명<br />검색할 전화번호</td></tr>
</table> 

#### Response JSON
```
data: Object
  places : Array(15)
    0 : Object
      address : "경기 수원시 팔달구 우만동 562-6"
      addressBCode : "4111514000"
      category : "금융,보험 > 금융서비스 > 신용카드 > 현대카드"
      categoryCode : "8 114 870 1509"
      direction : ""
      distance : ""
      id : "14529766"
      imageUrl : ""
      latitude : "37.27871063619001"
      longitude : "127.03154195819447"
      newAddress : "경기 수원시 팔달구 중부대로 141"
      phone : "031-290-8600"
      placeUrl : "http://place.map.daum.net/14529766"
      related_place : ""
      related_place_count : 0
      title : "현대카드 수원Pro센터"
      zipcode : "442819"
      __proto__ : Object
    1 : Object
    2 : Object
    3 : Object
    4 : Object
    5 : Object
    6 : Object
    7 : Object
    8 : Object
    9 : Object
    10 : Object
    11 : Object
    12 : Object
    13 : Object
    14 : Object
    length : 15
    __proto__ : Array(0)
  __proto__ : Object
```
```
pagination: A
  current : 1
  first : 1
  gotoFirst : function (a)
  gotoLast : function (a)
  gotoPage : function (a)
  hasNextPage : true
  hasPrevPage : false
  last : 3
  nextPage : function ()
  perPage : 15
  prevPage : function ()
  __proto__ : Object
```