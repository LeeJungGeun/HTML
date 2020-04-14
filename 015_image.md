# HTML image
-------------

HTML을 이용하여 웹 페이지에 이미지 추가 가능

```
<img src="pic_trulli.jpg" alt="Italian Trulli">
```

\<img>태그는 속성만 포함하고 닫는 태그가 없는 빈 태그

src속성은 이미지의 URL을 지정

alt속성은 이미지를 볼 수 없는경우 대신 나오는 텍스트

성공적으로 로딩이되면 src의 이미지, 이미지 로드를 실패하면 alt이 나오는 구조이며

alt이 없을 경우 웹페이지 유효성 검사가 올바르게 되지 않는다. 

# 이미지 크기
----------------

style 속성의 width와 height로 너비와 높이 지정 가능

style없이 바로 width와 height도 사용 가능

```
<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">

<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
```

스타일 속성이 이미지의 크기를 변경하지 못하게 하기때문에 스타일 속성을 사용하는 것이 좋다.

# 이미지 플로팅

CSS의 float속성을 이용하여 왼쪽,오른쪽 등에 이미지를 띄울 수 있다

```
<p><img src="smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
The image will float to the right of the text.</p>

<p><img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
The image will float to the left of the text.</p>
```
