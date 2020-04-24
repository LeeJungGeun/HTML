# HTML youtube
---------------------
HTML로 비디오를 재생하는 가장 쉬운방법

비디오를 다른 형식으로 변환할 필요 없이 youtube에 업로드된 비디오를 가져온다

youtube에 비디오를 업로드하고

\<iframe>요소를 정의한다음

src로 비디오 URL을 지정하고

width와 height로 크기를 주면 된다
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```

# autoplay
----------------------
youtube를 자동재생 시킬 수 있다

URL뒤에 ?autoplay=1 을 추가하면 된다

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
</iframe>
```

# loop
---------------
URL의 끝에 &loop=1을 추가하면 비디오가 반복 재생된다

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>
```

# control
-----------------
URL의 끝에 ?control=0을 추가하면 컨트롤바가 표시되지 않는다

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe>
```
