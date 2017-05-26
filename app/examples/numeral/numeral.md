# Numeral.js
Numbers can be formatted to look like currency, percentages, times, or even plain old numbers with decimal places, thousands, and abbreviations. And you can always create a custom format.

## Usage
```
var STRING = numeral( NUMBER ).format( FORMAT );
```
<table class="table striped bordered">
    <thead>
        <tr>
            <th>ITEM</th>
            <th>DESCRIPTION</th>
        </tr>
    </thead>
    <tbody>
      <tr><td>NUMBER</td><td>표기법을 변경하려는 숫자</td></tr>
      <tr><td>FORMAT</td><td>숫자를 나타낼 표기법</td></tr>
      <tr><td>STRING</td><td>표기법이 변경된 숫자의 최종 문자열</td></tr>
</table> 

## Format
<table class="table striped bordered">
    <thead>
        <tr>
            <th>NUMBER</th>
            <th>FORMAT</th>
            <th>STRING</th>
        </tr>
    </thead>
    <tbody>
      <tr><td>10000.23</td><td>0,0</td><td>10,000</td></tr>
      <tr><td>10</td><td>0.00</td><td>10.00</td></tr>
      <!--tr><td>10000</td><td>0,0.0000</td><td>10,000.0000</td></tr>
      <tr><td>10000.23</td><td>+0,0</td><td>+10,000</td></tr>
      <tr><td>-10000</td><td>0,0.0</td><td>-10,000.0</td></tr>
      <tr><td>10000.1234</td><td>0.000</td><td>10000.123</td></tr>
      <tr><td>100.1234</td><td>00000</td><td>00100</td></tr>
      <tr><td>1000.1234</td><td>000000,0</td><td>001,000</td></tr>
      <tr><td>10</td><td>000.00</td><td>010.00</td></tr>
      <tr><td>10000.1234</td><td>0[.]00000</td><td>10000.12340</td></tr>
      <tr><td>-10000</td><td>(0,0.0000)</td><td>(10,000.0000)</td></tr>
      <tr><td>0.23</td><td>0.00000</td><td>0.23000</td></tr>
      <tr><td>0.23</td><td>0.0[0000]</td><td>0.23</td></tr-->
    </tbody>
</table>