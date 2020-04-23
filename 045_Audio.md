# Web Audio
--------------
HTML5 이전에는 플래시등 플러그인이 있는 브라우저에서만 재생 가능했으나

HTML5는 \<audio>요소로 웹 페이지에 오디오를 포함시키는 표준을 지정한다

HTML로 오디오 파일을 재생하려면 \<audio>요소를 사용하면된다

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

\<control>속성을 통해 재생,일시중지,볼륨같은 컨트롤을 추가할 수 있따

\<source>요소를 사용하면 브라우저에서 선택할 수 있는 대체 파일을 지정할 수 있따

\<audio>태그 안에 있는 텍스느는 \<audio>를 지원하지 않는 브라우저에만 표시된다

# 브라우저별 Audio
--------------------

HTML5에서 지원하는 오디오 형식은 MP3, WAV, OGG 3가지다

MP3는 모든브라우저 지원하며 WAV는 IE에서만 사용이 불가능

OGG는 IE와 사파리에서 사용이 불가능하다

크롬, 파이어폭스, 오페라는 3가지 전부 사용 가능하다

# event
-----------------------
HTML5는 \<audio>요소에 대한 DOM 메소드,특성,에븐트를 정의한다

오디오를 로드,재생, 일시정지, 지속시고나가 볼륨을 설정할 수 있따
