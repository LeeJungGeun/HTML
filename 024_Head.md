# \<head>
-------------

메타데이터에 대한 컨테이너이며 \<html>과 \<body> 사이에 위치해있다

  * 메타데이터 :  다른 데이터에 대해 주어지는 어떤 정보이며, 문서 제목, 문자 세트, 스타일, 스크립트 및 기타 메타 정보를 정의함
  

# \<tltle>
---------------

문서의 제목을 정의하는 태그

```
<head>
  <title>Page Title</title>
</head>

```

# \<style>
----------------
\<head>에서 스타일을 정의한 경우 단일 페이지에 정의됨

```
<head>
  <style>
    body {background-color: powderblue;}
    h1 {color: red;}
    p {color: blue;}
  </style>
</head>  
```

# \<link>
------------
외부 스타일시트에 연결하는데 사용

```
<link rel="stylesheet" href="style.css">
```

  * 스타일 시트는 글꼴의 크기나 모양, 컬러 그리고 문단 설정을 미리 정의해 스타일로 만들었다가 
  웹 문서의 본문에서 미리 정의해 둔 스타일을 참조하여 사용하는 기능이다.
  
# \<meta>
-----------------

사용된 문자, 페이지설명, 키워드, 작성자 등 메타데이터를 지정하는데 사용되며

메타데이터는 브라우저, 검색엔진 등에 사용됨

```
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML,CSS,XML,JavaScript">
<meta name="author" content="John Doe">
```

# 뷰포트
----------------
웹 페이지에서 사용자가 볼 수 있는 영역

모니터보다 휴대전화가 더 작음

그래서 모든 웹페이지는 다음 \<meta>뷰포트 요소를 추가해야함

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

 width=device-width 는 장치의 넓이에 따라 페이지 넓이를 조정해준다
 
 initial-scale=1.0은 페이지가 처음 로드될 때 초기 줌 레벨 설정
 
# \<script>
----------------

\<script>는 자바스크립트를 정의하는데 사용됨

```
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
</script>
```

# \<base>
------------

페이지 내에서 기준이되는 URL을 \<base>를 사용해 절대경로로 한번 지정하면 해당 페이지에선 연결되는 URL은 상대경로로 지정해도 되도록 하는 요소

연결되는 링크페이지를 하나하나 절대경로로 지정하는 번거로움이 없어짐

# 생략
----------------
html에선 \<html>태그, \<head>태그, \<body>태그를 생략 가능함

```
<!DOCTYPE html>
<title>Page Title</title>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>
```
위의 태그는 HTML에서 유효함

하지만 XML에선 오류가 발생할 수 있다
