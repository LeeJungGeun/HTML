# value
------------

초기 값을 지정하는 속성

```html
<label for="fname">First name:</label><br>
<input type="text" id="fname" name="fname" value="John"><br>
```

# readOnly
--------------
읽기 전용임을 나타내는 속성

읽기전용 필드는 수정할 수 없다

```html
<label for="fname">First name:</label><br>
<input type="text" id="fname" name="fname" value="John" readonly><br>
```

# disabled
-----------------
필드가 비활성화 되도록 하는 속성

비활성화되면 사용할 수 없고 클릭도 할 수 없으며 데이터가 전송되지도 않는다

```html
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" disabled><br>
```

# size
-------------
필드의 폭을 설정하는 속성

기본값은 20이다

text, search, tel. url, email, password같은 입력유형에서 작동한다

```html
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
```

# maxlength
---------------
필드에 입력할 수 있는 최대 문자 수

경고창을 따로 출력해주지는 않음 필요시 자바스크립트로 따로 만들것

```html
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" maxlength="4" size="4">
```

# mix, max
----------------
각각 입력 필드의 최소,최대값을 지정

number, range, date, datetime-local, month, time, week에서 사용 가능하다

```html
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
```

# multiple
------------------
사용자가 둘 이상의 값을 입력할 수 있도록 하는 속성

email, file 등에서 유용함

```html
  <label for="files">Select files:</label>
  <input type="file" id="files" name="files" multiple>
```

# pattern
--------------
폼 제출시 입력 필드 값을 검사하는 정규식을 명시

title을 사용하면 유저가 알아보기 편해진다

text, date, search, url, tel email, password등에서 작동한다
```html
  <label for="country_code">Country code:</label>
  <input type="text" id="country_code" name="country_code"
  pattern="[A-Za-z]{3}" title="Three letter country code">
```

# placeholder
--------------------
입력필드의 정규식에 맞는 예시값을 미리보기로 표시하는 속성

값을 입력시 예시값은 사라진다

text, search. url. tel, email, password 등에서 작동한다

```html
  <input type="tel" id="phone" name="phone"
  placeholder="123-45-678"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
```

# required
------------------

폼을 제출받기 전 값을 필수로 채워야 하는 입력필드를 지정하는 속성


```html
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
```

# step
----------------
숫자의 간격을 지정

number, range등 숫자와 관련된 타입과 사용 가능

```html
  <label for="points">Points:</label>
  <input type="number" id="points" name="points" step="3">
```

# autofocus
-----------------
페이지가 로드 될 때 자동으로 커서를 위치해주는 속성

```html
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" autofocus><br>
```

# height, width
----------------
이미지 타입의 높이와 넓이를 지정

이미지는 크기를 지정하지 않으면 브라우저가 적절한 공간을 예약할 수 없기 때문에 반드시 지정하는게 좋음

```html
  <input type="text" id="lname" name="lname"><br><br>
  <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48">
```

# list
------------
<input> 요소에서 사용하기 위해 미리 정의해 놓은 옵션들을 포함하고 있는 <datalist> 요소를 명시

```html
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
```

# autocomplete
-----------------
폼 또는 입력필드가 자동완성을 설정해야하는지 여부를 지정

필요없는 부분만 따로 적용하지 않는 것도 가능
```html
<form action="/action_page.php" autocomplete="on">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="email" id="email" name="email" autocomplete="off"><br><br>
  <input type="submit" value="Submit">
</form>
```

일부 브라우저는 자동완성 기능을 수동으로 
