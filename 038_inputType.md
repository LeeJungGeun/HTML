# text
---------------- 
텍스트 한줄을 넣을 수 있는 필드

```html
<input type="text" id="lname" name="lname">
```

# password
---------------
비밀번호를 넣을 수 있는 필드

브라우저별로 원이나 별등 모양이 다름

```html
  <input type="password" id="pwd" name="pwd">
```

# submit
----------------
입력한 폼 데이터를 제출하기 위한 버튼을 정의

```html
<input type="submit" value="Submit">
```

value 속성을 빼면 버튼에 기본 텍스트가 표시됨

# reset
-------------
리셋 버튼을 정의한다

리셋버튼은 입력한 내용을 초기화한다

```html
<input type="reset">
```

# radio
-----------------
라디오버튼을 정의한다

라디오버튼은 1개까지만 선택이 가능하다

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

# Checkbox
---------------
체크박스를 정의한다

체크박스는 0부터 그 이상까지 제한을 설정할 수 있다

```html
<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>

# button
---------------
버튼을 정의한다

속성을 정의하지 않은 submit과 유사하다
```html
<input type="button" onclick="alert('Hello World!')" value="Click Me!">
```

# Date
----------------
입력하는 데이터에 날자를 포함시켜야하며 브라우저에 따라선 선택을위한 달력이 나온다

min과 max를 이용해 최대,최소값을 정할 수 있다

```html
<form>
  <label for="datemax">Enter a date before 1980-01-01:</label>
  <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
  <label for="datemin">Enter a date after 2000-01-01:</label>
  <input type="date" id="datemin" name="datemin" min="2000-01-02">
</form>
```

# Email
--------------
e-mail을 입력해야하는 입력창을 만든다

브라우저 지원에 따라 자동으로 검증할 수 있다

```html
<form>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email">
</form>
```
