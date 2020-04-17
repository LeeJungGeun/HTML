# Semantic Element
------------------
의미가 있는 요소

개발자와 브라우저에 의미를 확실하게 묘사하는 요소들

non-semantic요소에는 \<div>나 \<span>등 아무것도 알려주지 않는 요소가있고

semantic요소에는 \<form> \<table>emd 등 내용을 확실하게 정의하는 요소가 있다

# HTML에서의 시멘틱요소
----------------

nav, header, footer등 웹페이지의 일정 부분을 정의하는 시멘틱 요소들이 있다

# HTML \<section> 요소
----------------

문서의 섹션을 정의한다.

홈 페이지는 소개나 컨텐츠 등 여러 섹션으로 분할된다

```
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>
```

# HTML \<article> 요소
----------------------

독립적인 컨텐츠를 지정한다.

\<article>은 독자적으로 해석되고 웹사이트의 나머지부분과는 독립적인 해석을 해야한다

\<article>과 \<section>은 중첩될 수 없다

\<article>내에 \<article>, \<section>안에 \<section>등은 가능하다

# HTML \<header>요소
-------------

문서 또는 섹션의 제목을 지정한다

한 문서에 여러개의 헤더가 사용될 수 있다.

```
<header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
```

# HTML \<footer>
-----------------
문서 또는 섹션의 바닥글을 지정한다

일반적으로 작성자,저작권 등이 입력된다

\<footer>는 한 문서에 여러개 사용 가능하다.

```
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
</footer>
```

# \<nav> 요소
-------------
주요 탐색 링크 블록에 사용되는 요소

```
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
</nav>
```

# \<aside> 요소
-----------------

 페이지의 다른 콘텐츠들과 약간의 연관성을 가지고 있지만
 
 해당 콘텐츠들로부터 분리시킬 수 있는 콘텐츠로 구성된 페이지 영역
 
 ```
 <aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
 ```
 
 # \<figure>와 \<figcaption>
 ----------------------
 
 \<figure>태그는 삽화나 다이어그램, 사진 등과 같이 문서의 주요 흐름과는 독립적인 콘텐츠를 정의할 때 사용합니다.
 
  \<figcaption> 요소는 \<figure> 요소의 캡션(caption)을 정의할 때 사용합니다.
  
  ```
  <figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
  ```
  
  \<img>는 이미지를 정의하며 \<figcaption>은 캡션을 정의한다.
  
