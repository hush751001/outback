# Moment.js

## Usage
```
var STRING = moment( DATE ).format( FORMAT );
```
<table class="table striped bordered">
    <thead>
        <tr>
            <th>ITEM</th>
            <th>DESCRIPTION</th>
        </tr>
    </thead>
    <tbody>
      <tr><td>DATE</td><td>표기법을 변경하려는 날짜</td></tr>
      <tr><td>FORMAT</td><td>날짜를 나타낼 표기법</td></tr>
      <tr><td>STRING</td><td>표기법이 변경된 날짜의 최종 문자열</td></tr>
</table> 

## Format
<table class="table striped bordered">
    <thead>
        <tr>
            <th>DATE</th>
            <th>FORMAT</th>
            <th>STRING</th>
        </tr>
    </thead>
    <tbody>
      <tr><td>20170525</td><td>YYYY.MM.DD</td><td>2017.05.25</td></tr>
      <tr><td>20170525</td><td>YY-MM-DD</td><td>17-05-25</td></tr>
      <tr><td>2017-05-25</td><td>YYMMDD</td><td>170525</td></tr>
      <tr><td>2017/05/25</td><td>YY/MM/DD</td><td>17/05/25</td></tr>
    </tbody>
</table>