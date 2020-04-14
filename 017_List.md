# HTML List
--------------
HTML을 사용해 리스트를 나타낼 수 있다.

# 정렬되지 않은 List
------------------
정렬되지 않은 리스트는 \<ul>로 시작하며 \<li>로 항목을 추가한다

```
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

\<ul>에 list-style-type을 주면 마커를 바꿀 수 있다

|이름|모양|
|:-:|:-:|
|disc|검은원|
|circle|흰원|
|square|검은네모|
|none|없음|

# 정렬된 List
----------------
정렬된 리스트는 \<ol>로 시작하며 \<li>로 항목을 추가한다

```
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

\<ul>에 type 속성을 추가하여 마커 변경 가능

|이름|모양|
|:-:|:-:|
|type="1"|숫자|
|type="A"|영대문자|
|type-"a"|영소문자|
|type="I"|로마대문자|
|type="i"|로마소문자|

list 내에 추가로 list를 사용하여 중첩시키는것이 가능하다

# counting
----------------

정렬된 list는 기본적으로 1부터 시작하지만 start속성을 사용해서 시작 숫자를 지정할 수 있다

```
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```
