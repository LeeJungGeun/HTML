# SSE
---------------
서버가 보낸 메세지를 통해 웹페이지를 업데이트 할 수 있다

SSE는 웹페이지가 서버로부터 업데이트를 자동으로 받는것이다

원래도 가능은 했던 기능이지만 과거엔 웹페이지측에서 사용 가능한 업데이트가 있는지 물어봤어야 했다

SSE는 자동으로 업데이트를 보내준다

IE와 엣지에선 지원하지 않는다

# SSE수신
------------------

EventSource object는 SSE 공지를받는데 사용된다

```js
var source = new EventSource("demo_sse.php");
source.onmessage = function(event) {
  document.getElementById("result").innerHTML += event.data + "<br>";
};
```
EventSource를 만들고 업데이트를 보내는 URL을 지정한다

업데이트를 받을 때 마다 onmessage이벤트가 발생한다

onmessage이벤트가 발생할 때

수신된 데이터를 result에 넣는다

```js
if(typeof(EventSource) !== "undefined") {
  alert("사용가능");
} else {
  alert("사용불가능");
}
```
위 코드를 사용하면 브라우저가 SSE를 지원하는지 알 수 있다
