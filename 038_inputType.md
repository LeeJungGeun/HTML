# text
---------------- 
텍스트 한줄을 넣을 수 있는 필드

```html
<input type="text" id="lname" name="lname">
```

# password
---------------
비밀번호를 넣을 수 있는 필드

별로 원이나 별등 모양이 다름

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
입력하는 데이터에 날자를 포함시켜야하한다

브라우저에 따라선 선택을위한 달력이 나온다

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

# file
---------------
파일 업로드를 위한 찾아보기 버튼을 정의

```html
<form>
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile">
</form>
```

# month
------------------
유저가 월,연도를 선택할 수 있는 칸을 만든다

브라우저 지원에 따라 선택기가 필드에 표시될 수 있다.

```html
<form>
  <label for="bdaymonth">Birthday (month and year):</label>
  <input type="month" id="bdaymonth" name="bdaymonth">
</form>
```

# number
-------------
숫자를 입력받는 필드

min,max등 여러가지 속성을 이용해 숫자를 제한할 수 있다

```html
<form>
  <label for="quantity">Quantity:</label>
  <input type="number" id="quantity" name="quantity" min="0" max="100" step="10" value="30">
</form>
```
0부터 100사이의 값을 10단위로 표현하며 기본값이 30이다

# range
---------------
 슬라이드 바를 조정하여 범위 내의 숫자를 선택할 수 있는 입력 필드를 정의
 
 디폴트로는 0부터 100이지만  max min으로 범위설정이 가능하며 step으로 최소간격 value로 시작값을 정의 할 수 있다
 
 ```html
 <form>
  <label for="vol">Volume (between 0 and 50):</label>
  <input type="range" id="vol" name="vol" min="0" max="50">
</form>
 ```
 
 # search
 ---------------
  검색어를 입력할 수 있는 텍스트 필드를 정의
  
  추가 설정이 없다면 일반 텍스트 필드와 다를것이 없다
  
```html
<form>
  <label for="gsearch">Search Google:</label>
  <input type="search" id="gsearch" name="gsearch">
</form>
  ```
  
# tel
-----------
전화번호를 입력하는 필드를 정의

브라우저가 지원하지 않으면 일반 텍스트필드이다.

```html
<form>
  <label for="appt">Select a time:</label>
  <input type="time" id="appt" name="appt">
</form>
```

# URL
---------------

URL주소를 입력받을 필드를 정의한다

브라우저에 따라 데이터를 제출하기 전 데이터가 URL값이 맞는지 검증한다

```html
<form>
  <label for="homepage">Add your homepage:</label>
  <input type="url" id="homepage" name="homepage">
</form>
```

# week
------------
 날짜를 입력하는 필드를 정의한다
 
 브라우저에 따라 입력기가 제공되며
 
 입력한값은 yyyy년 ww번째 주 형식으로 표기된다
```html
<form>
  <label for="week">Select a week:</label>
  <input type="week" id="week" name="week">
</form>
```
