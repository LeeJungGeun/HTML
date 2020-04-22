# HTML색상
-------------------

HTML은 지정된 색상이름 또는 RGB값,HEX값, HSML값 등을 사용하여 저장가능

# hTML Color name
----------------------

HTML에선 지정된 새상은 이름만으로 지정할 수 있다

이름이 저장되지 않는 값도 값을 직접 입력하여 표시할 수 있다

# HTML Background-color
---------------------

HTML 요소의 배경색을 설정할 수 있다.

```html
<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>
```

# HTML Font-Color
--------------------
텍스트 색상 설정을 할 수 있다.

```html
<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>
```

# HTML boder-color
---------------------

테두리의 색상을 설정 할 수 있다.

```html
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>
```

# RGB
---------------------

HTML에서 RGB로 색상을 표현

rgb( r,g,b)공식을 사용한다.
```html
<h1 style="background-color:rgb(255, 0, 0);">rgb(255, 0, 0)</h1>
<h1 style="background-color:rgb(0, 0, 255);">rgb(0, 0, 255)</h1>
<h1 style="background-color:rgb(60, 179, 113);">rgb(60, 179, 113)</h1>
```

# HEX
-------------------
HTML에서 16진수 값을 사용하여 색상을 지정

#rrggbb 공식을 사용한다

```html
<h1 style="background-color:#ff0000;">#ff0000</h1>
<h1 style="background-color:#0000ff;">#0000ff</h1>
<h1 style="background-color:#3cb371;">#3cb371</h1>
```

# HSLA
---------------
HTML에서 색조,채도,명도를 사용하여 색상을 지정

hsl(색조, 채도, 밝기) 형식을 사용하며

hsal(색조. 채도, 밝기. 알파)형식을 사용하면 투명도 까지 조정 가능하다

```html
<h1 style="background-color:hsla(9, 100%, 64%, 0);">hsla(9, 100%, 64%, 0)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.2);">hsla(9, 100%, 64%, 0.2)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.4);">hsla(9, 100%, 64%, 0.4)</h1>
```
