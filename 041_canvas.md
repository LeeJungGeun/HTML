# \<canvas>
-------------------

HTML요소중 하나로 자바스크립트에서 즉석해서 그림을 그리는 요소

\<canvas>는 그저 컨테이너일 뿐이고 그림 그리는것은 자바스크립트를 이용해야함

선,박스,원,텍스트,이미지를 추가하는 기능이 있다

캔버스는 HTML에서 직사각형 영역이다

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

height와 width는 반드시 지정해야한다 style속성으로 테두리등을 변경 가능하다

선그리기

```js
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
```

원그리기

```js
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
```

텍스트 그리기

```js
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
```

이미지 그리기

```js
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 10, 10);
```
