# HTML 자바스크립트
-------------
웹 브라우저에서 사용하는 객체 기반의 스크립트 언어

  * 스크립트언어 : 응용 소프트웨어를 제어하는 컴퓨터 프로그래밍 언어

자바스크립트 사용시 페이지를 보다 대화식으로 만들 수 있음

자바스크립트의 일반적인 용도는 이미지조작, 양식 유효성 검사, 동적 컨텐츠 변경

# \<script> 태그
---------------
\<script>태그는 클라이언트 측 스크립트를 정의함

HTML의 요소를 선택하기위해 대부분 \"document.getElementById()" 함수를 많이 사용

  * document.getElementById() : 해당 id의 요소에 접근하는 함수
  
```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
```

자바스크립트와 document.getElementById() 함수를 사용하면 id의 내용, 스타일, 속성을 변경할 수 있다
```html
<p id="demo">JavaScript can change the style of an HTML element.</p>

<script>
function myFunction() {
  document.getElementById("demo").style.fontSize = "25px"; 
  document.getElementById("demo").style.color = "red";
  document.getElementById("demo").style.backgroundColor = "yellow";        
}
</script>

<button type="button" onclick="myFunction()">Click Me!</button>
```
스타일 없는 id를 함수를 사용해 스타일을 첨가했다.

# \<noscript>
-----------------

자바스크립트를 비활성화하거나 지원하지 않는 브라우저의 경우 나오는 대체컨텐츠

```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>

<noscript>Sorry, your browser does not support JavaScript!</noscript>
```
일반적이라면 Hello JavaScript! 가 출력되겠지만

자바스크립트가 비활성이거나 자바스크립트를 지원하지 않으면 밑의 문장이 출력됨
