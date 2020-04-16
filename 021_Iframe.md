# Iframe
-----------------
웹 페이지 내에 웹 페이지를 표시할 때 사용

\<iframe> 태그로 정의됨

```
<iframe src="URL"></iframe>
```

height와 width속성으로 각각 높이와 넓이 설정 기본적으로 픽셀단위 사용됨

## border
---------------
기본적으로는 테두리가 있으나 border속성을 추가해서 없애거나 변경하는것이 가능

```
<iframe src="demo_iframe.htm" style="border:none;"></iframe>
```
border:none 은 테두리를 없앤다

```
<iframe src="demo_iframe.htm" style="border:2px solid red;"></iframe>
```
테두리를 빨간 2픽셀로 변경

## link
---------------
링크를 사용해 iframe의 페이지를 변경할 수 있다

target속성을 사용하며 name으로 iframe을 명명해야함

```
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```
링크의 타겟이 iframe의 name으로 지정되어 있기 때문에

링크를 클릭하면 iframe의 페이지가 변경된다
