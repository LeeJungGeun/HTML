# form attribute
---------------------
\<input> 요소가 속하는 폼을 지정한다.

이 속성의 값은 속한 <form> 요소의 id 속성과 같아야한다.

```html
<form action="/action_page.php" id="form1">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
</form>

<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname" form="form1">
```
\<form>태그에서 나갔지만 id가 form1 이기 때문에 결국은 form1이다

# formaction
-------------------

폼 데이터가 제출될 때 처리할 파일의 URL을 지정하는 속성

action속성보다 우선권이 높다

type의 속성이 sumbit이나 image일 때만 사용 가능하다

```html
<form action="/action_page.php"> 
  <input type="submit" value="Submit">
  <input type="submit" formaction="/action_page2.php" value="Submit as Admin">
</form>
```

# formenctype
--------------

제출시 폼 데이터를 인코딩 하는 방법을 지정

form요소의 enctype값을 대체한다

type속성이 submit 이나 image이며 method값이 post일 때만 사용 가능하다

```html
<form action="/action_page_binary.asp" method="post">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formenctype="multipart/form-data"
  value="Submit as Multipart/form-data">
</form>
```

# formmethod
------------

폼데이터를 URL로 전송하기 위한 메소드를 정의한다

\<form>요소의 메소드속성을 대체한다

submit과 image에서만 사용 가능하다

속성 값으로 GET과 POST를 사용 가능하다

```html
<form action="/action_page.php" method="get">
  <input type="submit" value="Submit using GET">
  <input type="submit" formmethod="post" value="Submit using POST">
</form>
```

# formtarget
--------------
폼을 제출한 후 수신된 응답을 표시할 창을 나타낸다

\<form>속성보다 우선권이 높다

submit과 image와 함께 작동한다

```html
<form action="/action_page.php">
  <input type="submit" formtarget="_blank" value="Submit to a new window/tab">
</form>
```

# formnovalidate
-----------------
폼 제출시 \<input>요소의 유효성을 검사하지 않도록 한다

submit에서 작동한다

```html
<form action="/action_page.php">
  <input type="submit" formnovalidate="formnovalidate" value="Submit without validation">
</form>
```

# novalidate
--------------
\<form>속성이며

이 속성이 존재할 때 모든 폼 데이터는 유효성을 검사하지 않는다.

```html
<form action="/action_page.php" novalidate>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
</form>
```
