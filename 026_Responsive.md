# HTML Responsive web Design
----------------------

HTML 및 CSS를 사용하여 웹사이트의 크기를 자동으로 조정하고 숨기는 등 스마트폰 및 데스크톱에서 보기좋게 만드는것

# view port
--------------

\<meta>요소를 추가하면 된다

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

메타요소를 추가하면 페이지의 크기를 제어하는 방법에 대한 브라우저 지침이 제공된다

# Responsive Image
---------------------
브라우저 크기에 맞게 확장 할 수 있는 이미지

CSS의 width 속성을 100%로 설정하면 브라우저 크기에맞게 확대/축소된다

```
<img src="img_girl.jpg" style="width:100%;">
```

max-width 를 사용하면 축소는 되지만 원래크기보다 크게 확대되지는 않는다.

```
<img src="img_girl.jpg" style="max-width:100%;height:auto;">
```

# 브라우저 넓이에 따라 다른 이미지 출력
-------------------

\<picture> 요소를 사용하면 브라우저 넓이에 따라 다른 이미지를 정의할 수 있다

```
<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
  <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
  <source srcset="flowers.jpg">
  <img src="img_smallflower.jpg" alt="Flowers">
</picture>
```

# Responsive text size
--------------------
텍스트 크기는 vw로 설정 뷰포트 넓이를 의미한다

브라우저 크기에따라 달라지는 텍스트 크기를 정의한다
```
<h1 style="font-size:10vw">Hello World</h1>
```

# media queries
------------
브라우저별로 완전히 다른 스타일을 정의할 때 사용하는 방법

```
<style>
.left, .right {
  float: left;
  width: 20%; /* The width is 20%, by default */
}

.main {
  float: left;
  width: 60%; /* The width is 60%, by default */
}

/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 800px) {
  .left, .main, .right {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>
```


Responsive HTML은 W3.CSS이나 부트스트랩을 사용하는것이 좋다
