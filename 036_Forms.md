# \<form>
------------------
사용자의 입력을 모으는데 사용하는 양식을 정의한다

```html
<form>
.
form elements
.
</form>
```
HTML Form은 \<form>요소를 포함한다

\<form>은 텍스트 필드, 확인란, 라디오 버튼, 제출 버튼 등과 같은 다양한 유형의 입력 요소입니다

#\<input>
--------------------
폼 요소중 가장 중요한 요소

속성에 따라 여러가지 방법으로 표시된다

text, radio, submit 등

```html
<form>
<input type="text" id="lname" name="lname">
</form>
```

# \<label>
----------------
\<label> 태그는 입력 양식창(input, button, textarea 등)을 설명하는 이름표
    
\<label> 태그에 적힌 텍스트를 선택하면, label과 연결된 입력 양식창이 선택됨

for 속성과 같이사용됨

for를 사용하면 체크박스가 아닌 텍스트를 클릭해도 체크가됨

# radio button
--------------------

\<input type="radio>로 정의한다

라디오버튼은 목록에서 1개만 선택 가능하다

```html
<form>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label><br>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label><br>
  <input type="radio" id="other" name="gender" value="other">
  <label for="other">Other</label>
</form>
```

# submit button
---------------
\<input type="submit">으로 정의한다

입력받은 데이터를 서버로 전송하는 기능을 하며 흔히 생각하는 버튼이다.

type을 부여하지 않은 \<button>과 다른점은 없다

# action
-----------------
폼 데이터를 전송할 URL을 정의한다.

```html
<form action="/action_page.php">
```

# target
---------------
폼 데이터를 서버로 제출한 후 응답받는 창을 명시한다

기본값은 -self 현재 창에 응답받는다

새 창을 원한다면 _blank를사용한다

```html
<form action="/action_page.php" target="_blank">
```

# method
---------------
폼데이터를 제출할 때 사용할 HTTP메소드를 지정하며 GET과 POST가 있다

GET 방식은 URL에 폼 데이터를 추가하여 서버로 전달하는 방식 길이제한이 있으며 캐시가 남고 보안에 약하다

POST 방식은 폼 데이터를 별도로 첨부하여 서버로 전달하는 방식 길이제한이 없으며 캐시되지 않으므로 히스토리에도 남지 않고 보안이 강하다

# name
---------------
해당 폼에 이름을 정의

name 속성이 생략되면 해당 입력 필드의 데이터가 전혀 전송되지 않는다

자바스크립트 등 참조할 때 사용한다
