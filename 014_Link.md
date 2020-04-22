# HTML Link
--------------

하이퍼링크, 클릭시 다른 문서로 이동 가능

텍스트뿐 아니라 이미지나 다른 HTML요소도 링크로 사용 가능

# HTML Link-Syntax
---------------
\<a>태그를 사용한다

```html
<a href="www.google.com">google</a>
```

# 링크  target 속성
---------------
target 속성은 링크된 문서를 열 위치를 지정
  * _blank 새 창이나 새 탭
  * _self 클릭한것과 동일한 창/ 탭 (default)
  * _parent 부모프레임에서 링크된 문서
  * _top 창 전체
  
  ```html
  <a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
  ```
  
# 이미지 링크
---------------

이미지를 링크로 사용 가능
```html
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0;">
</a>
```

# 링크 색상
--------------
기본적으로 링크는 파란 밑줄이며 방문한 링크는 자주색 밑줄임

CSS를 사용하여 색상 변경 가능

```html
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
```
link - 기본상태

visited - 한번 갔던 링크

hover - 마우스 올려둔상태

active - 클릭중인상태

color - 색상

text-decoration - 텍스트 데코레이션 (밑줄 등)
