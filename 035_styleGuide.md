# HTML 스타일 가이드 및 코딩규칙
------------------------

문서의 유형을 첫번째줄로 선언할것

```html
<!DOCTYPE html>
```

요소 이름은 소문자로 사용할것
```html
<Section>
  <p>This is a paragraph.</p>
</SECTION>
```
섞어서 사용하는것이 제일 안좋다

```html
<section>
  <p>This is a paragraph.</p>
</section>
```

요소를 열었으면 사용 후엔 닫을것

HTML은 요소를 닫지 않아도 어느정도 묵인해주는편이지만 그래도 닫는것이 안정적이다

속성도 마찬가지로 소문자를 사용할것

```html
<div class="menu">
```

속성값은 따옴표를 사용할것

특히 공백이 있으면 따옴표는 필수적이다

이미지엔 alt와 width height를 같이 사용할것

너비와 높이는 미리 정해둬야 브라우저가 깜빡이는현상이 줄어든다

가로로 너무 길면 읽기 불편함

이유없이 빈줄과 들여쓰기를 추가하지 말것

\<html>과 \<body>는 생략해도 돌아는간다

```html
<!DOCTYPE html>
<head>
  <title>Page Title</title>
</head>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>
```

생랴하면 구형브라우저에선 오류가 발생할 수 있으니 생략하지 않는것이 좋다

빈요소는 HTML에선 닫을 필요가 없으나 XML에선 닫아야한다
```html
<meta charset="utf-8" />
```

메타데이터는 최대한 빨리 정의할것

모든 웹페이지에 아래의 \<mata>뷰포트 요소를 포함해야한다

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

width=device-width = 디바이스 넓이에따른 페이지 넓이

initial-scale=1.0 페이지가 처음 로드될때 줌 레벨

주석은 \<-!-- --> 로 생성 가능

css파일에 링크할땐 간단한 구문을 사용

```html
<link rel="stylesheet" href="styles.css">
```

일부 웹서버는 파일이름에 대소문자를 구분한다

파일이름은 소문자를 사용하는게 좋음

확장자는 .html 또는 .htm을 사용한다

css파일은 .css이며 자바스크립트파일은 .js이다

.htm과 .html은 같은 확장자

ms-dos시절 확장자는 반드시 3글자여야해서 htm을 사용하던것이 남아있는것

하지만 기술적으로는 서버가 index.html을 기본 파일명으로 구성한 경우 index.htm이 아닌 index.html이어야 한다

