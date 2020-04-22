# \<input>
-------------

가장 많이사용되는 폼중 하나

\<type>을 이용해 여러가지 속성으로 나타낼 수 있다

```
<input type="text" id="firstname" name="firstname">
```
다음장에서 자세히 다룬다

# \<select>
----------------
드롭다운 리스트를 정리하는 요소

디폴트값으로는 드롭다운 리스트의 첫번재값이 선택됨

```
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

한번에 표시할 수 있는 리스트의 크기는 size 속성으로 조정한다

```
<select name="cars" size="3">
```

multiple 속성을 넣으면 둘 이상의 값을 선택할 수 있다

```
<select name="cars" size="4" multiple>
```

# \<textarea>
---------------

텍스트 입력 필드를 정의하는 요소

rows속성으로 줄수를 지정 cols속성으로 너비를 지정한다

CSS로 크기를 정의하는 것도 가능하다

```
<textarea name="message" style="width:200px; height:600px;">
The cat was playing in the garden.
</textarea>

<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

# \<button>
--------------
클릭할 수 있는 버튼을 정의한다

```
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```

# \<fieldset> 및 \<legend>
-----------------------
\<fieldset> 태그는 \<form> 요소에서 연관된 요소들을 하나의 그룹으로 묶을 때 사용.

하나로 묶은 그룹 주변으로 선으로 상자를 만든다

\<legend>태그를 사용하면 \<filedset>의 머릿말을 정의할 수 있다.

```
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```

# \<datalist>
------------------

<input> 요소에서 사용하기 위한 옵션들의 리스트를 미리 정의할 때 사용합니다.

데이터를 입력할 때 사전의 정의된 옵션의 드롭다운 목록을 볼 수 있으며

흔히말하는 자동완성 기능이다.

```
<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>

# output
-------------
스크립트나 사용자의 액션에 대한 결과를 나타낸다
```
