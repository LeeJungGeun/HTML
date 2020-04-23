# HTML Vedio
---------------

예전엔 플래시 등 플러그인이 있어야만 비디오 재생이 가능했지만

HTML\<video> 요소는 웹 페이지에 비디오를 포함시키는 표준을 지정한다

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

\<control>속성은 재생,일시중지,볼륨같은 비디오 컨트롤을 추가한다

width와 height는 필수적으로 적도록 하자 아닌경우 크기 조절이 힘들고 브라우저가 깜빡거린다

\<source>요소를 사용하면 브라우저에서 대체비디오를 선택 할 수 있다
\<video>태그 내에 텍스트는 \<video>요소를 지원하지 않는 ㅂ라우저에만 표시된다

# autoplay
-----
비디오를 자동재생하는 속성

```html
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

# 브라우저별 지원
---------------

HTML5에선 MP4, WebM, Ogg의 3가지 형식이 지원되며

각 브라우저별로 지원되는 형식이 다르다

MP4의 경우 모든브라우저 지원되고

WebM, OGG는 IE와 사파리에서 지원하지 않는다


# event
--------------
HTML5는 \<video>요소에 대한 DOM메소드 특성 이벤트를 정의한다

이를통해 비디오를 로드,재생, 일지정지하고 지속시간,볼륨을 설정 할 수 있다
