# HTML table
-----------------------

table은 \<table> 태그로 정의된다

테이블 행은\<tr>로 정의되며 테이블 헤더는 \<th> 테이블 열은 \<td>로 정의된다

```
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

# table border
---------------
CSS의 border속성을 사용하여 테두리 추가 가능
```
table, th, td {
  border: 1px solid black;
}
```

#table padding
------------
CSS의 Padding 속성을 넣어서 내용과 테두리간 간격 지정 가능

```
th, td {
  padding: 15px;
}
```

# table text-align
-------------
CSS 의 text-align속성을 넣어서 가로 텍스트 정렬 사요 ㅇ가능

```
th {
  text-align: left;
}
```
# 행.열 병합
---------------
여러개의 셀을 하나로 병합이 가능

여러개의 행을 병합할 땐 rowspan 여러개의 열을 병합할 땐 colspan사용

```
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td>Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
</table>

```

```
<table style="width:100%">
  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>
```
# table style
-----------------
id를 사용하면 하나의 테이블에만 스타일 정의 가능

```
table#t01 {
  width: 100%;
  background-color: #f1f1c1;
}

<table id="t01">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```
