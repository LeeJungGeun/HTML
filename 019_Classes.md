# HTML Class
-------------

Class 속성은 클래스 이름이 동일한 요소에 동일한 스타일을 정의하는데 사용

즉 같은 이름의 class속성을 가진 요소는 모두 같은 스타일을 가진다.

클래스를 정의할 때는 .className{ }형태가 된다

```
<head>
<style>
.cities {
  background-color: black;
  color: white;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="cities">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="cities">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="cities">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

</body>
```
3개의 요소가 모두 cities 라는 클래스를 가지며 이 경우 3요소의 스타일은 모두 동일하다

class 속성은 모든 HTML요소에서 사용 할 수 있으며 클래스 이름은 대소문자를 구분한다

즉 Class와 class는 다른 클래스이다

HTML요소는 둘 이상의 클래스 이름을 가질 수 있고, 구분은 공백으로 한다

```
<h2 class="city main">London</h2>
```
city클래스와 main클래스에 모두 속한다

태그가 달라도 클래스를 공유할 수 있다.

```
<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France</p>
```
h2와 p로 태그가 다르지만 클래스는 공유가 가능하다


## Inline
---------------

class 태그는 인라인에서 사용 가능하다

```
<h1>My <span class="note">Important</span> Heading</h1>
```

h1 태그 안에서 일부분만 note클래스를 적용시킬 수 있다.
