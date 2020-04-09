# HTML 문서
----------------

HTML 문서는 \<!DOCTYPE html> 선언으로 시작해야한다 

HTML문서는 \<html>로 시작해서 \</html>로 끝난다

눈에 보이는 내용은 \<body>와 \</body>사이에 있다

ex)
```
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

# HTML 제목
------------

HTML에서 제목은 \<h1>부터 \<h6>태그로 정의된다

\<h1>일수록 중요도가 높고 \<h6>일수록 중요도가 떨어진다

# HTML 단락
--------------

HTML에서 단락은 \<p>태그로 정의된다

```
<p>This is a paragraph.</p>
```

# HTML 링크
--------------

HTML에서 링크는 \<a>태그로 정의된다

```
<a href="https://www.google.com">This is a link</a>
```

링크대상은 href속성이 지정되어 있다.

# HTML 이미지
-----------------

HTML에서 이미지는 \<img>태그로 정의된다

소스파일(src), 대체텍스트(alt), 너비(width)와 높이(height) 속성으로 사용된다

```
<img src="google.jpg" alt="google.com" width="200" height="200">
```

# HTML 버튼
----------------

HTML에서 버튼은 \<button>태그로 정의된다

```
<button>Click</button>
```

# 요약
-----------------

| 태그| 태그내용 |
|:---:|:---:|
|<!DOUTYPE> | 모든 HTML문서가 문서 시작시 선언하는것 |
| \<HTML> | HTML문서의 내용은 <HTML>로 시작해 </HTML>로 끝난다|
| \<body> | HTML문서의 유저 눈에 보이는 내용은 <body>와 </body>사이에 있다|
| \<h1> | HTML 제목을 정의한다 글자 크기에따라 \<h1>부터 \<h6>까지 있다|
|\<p> | HTML의 단락이다|
|\<a>| HTML에서 링크를 걸 때 사용한다 링크대상은 href에 지정되어있다.|
|\<img>|HTML에서 이미지를 걸때 사용한다 소스파일인 src 대체 텍스트 alt 넓이와 높이인 width, height가 같이 사용된다|
|\<button>| 버튼을 만들 때 사용한다|
