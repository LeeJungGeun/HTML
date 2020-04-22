# HTML 파일 경로
---------------
웹 사이트에의 폴더 구조에서 파일의 위치

이미지, 웹페이지, 스타일, 자바스크립트 에 연결할 때 사용


## 절대경로
---------------
인터넷 파일 전체의 URL

```html
<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain">
```

## 상대경로
---------------

현재 페이지를 기준으로 파일을 가르킴

동일한 페이지의 경우 바로 파일 명을 입력하면 된다.

경로가 파일명으로 시작할 경우 html이 있는 디렉터리가 기준이며

경로가 역슬래시(\)로 시작할 경우 루트디렉터리가 기준이다.

한 단계 위에 있는 폴더의 경우 ../으로 표시한다
```html
<img src="picture.jpg" alt="Mountain">

<img src="images/picture.jpg" alt="Mountain">

<img src="images/picture.jpg" alt="Mountain">

<img src="images/picture.jpg" alt="Mountain">
```
