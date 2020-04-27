# WebWorker
---------------------
HTMl페이지에서 스크립트를 실행할 때 스크립트가 완료될 때까지 페이지가 응답하지 않는다.

WebWorker는 사용하면 성능에 영향을 주지 않으면서 독릭접으로 백그라운드에서 실행하는 자바스크립트

백그라운드에서 실행되기 때문에  WebWorker가 실행되는 동안에는 원하는 작업을 계속 수행 할 수 있다.

# 브라우저 지원 확인
-----------------

WebWorker를 만들기 전엔 브라우저가 지원하는지 확인이 필요하다

```html
if(!!window.Worker){
      alert("이 브라우저는 웹 워커를 지원합니다")
}
else{
      alert("이 브라우저는 웹 워커를 지원하지 않습니다")
}
```

# 파일 만들기
--------------------

외부 자바스크립트로 만들어진다

```js
var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();
```
postMessage()가 중요한 부분이다

HTML페이지에 메시지를 다시 게시하는 데 사용됩니다.

WebWorker는 보통 간단한 스크립트가 아닌 CPU를 많이먹는 작업에 사용한다

WebWorker를 만들었으니 호출한다

우선 워커가 사용중인지 확인한다 사용중이 아니라면 개체를 새로 만든다
```js
if (typeof(w) == "undefined") {
  w = new Worker("demo_workers.js");
}
```

그 다음 이벤트리스너를 워커에 추가한다

```js
w.onmessage = function(event){
  document.getElementById("result").innerHTML = event.data;
};
```
워커가 메시지를 게시하면 리스너 내의 코드가 실행된다

데이터는 event.data에 저장된다

워커를 종료할때는 terminate()를 사용한다

```js
w.terminate();
```

종료한 워커를 재사용 하려면 undefined설정하면 된다

```js
w = undefined;
```
