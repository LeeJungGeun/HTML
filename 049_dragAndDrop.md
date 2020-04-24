# drag and drop
-------------------
개체를 잡아 다른위치로 끌어놓는 기능

모든 요소를 드래그 할 수 있다

```html
<!DOCTYPE HTML>
<html>
<head>
<script>
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69">

</body>
</html>
```

요소에 draggable 속성을 true로 설정하면 드래그가 가능해진다

```html
<img draggable="true">
```

# setData()
---------------
드래그를 할 때 수행될 작업 지정

ondragstart속성은 드래그 할 데이터를 지정하는 함수를 호출한다

dataTransfer.setData()메소드는 드래그된 데이터의 값과 유형을 설정한다

```html
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
```
이때 데이터 유형은 text이며 값은 해당 요소의 id다.

# drop
-------------------

ondragover는 드래그한 데이터를 드롭할 위치를 지정한다

데이터나 요소는 다른 요소에서 삭제할 수 없기 때문에 드롭할 때는 기본값으로 처리되는걸 방지해야 한다

preventDefault() 메소드를 호출하여 실행된다

드래그한 데이터가 삭제되면 이벤트가 발생

```html
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
```

브라우저의 기본값은 드롭시 링크 열기 이 값을 초기화 하려면 preventDefault() 호출

dataTransfer.getData() 메소드로 드래그한 데이터를 가져온다. 이 메소드는 setData()에서 동일 유형으로 설정된 모든 데이터를 리턴한다

드래그한 데이터는 드래그한 데이터 요소의 ID다
