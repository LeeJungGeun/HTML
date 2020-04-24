# web storage
-----------------

웹 애플리케이션이 브라우저 내에 데이터를 저장하는 기능

쿠키랑 비슷하다

웹 스트로지는 쿠키보다 안전하고 성능에 영향을 주지 않으면서 데이터를 대량으로 저장할 수 있다 (최소 5MB)

웹 스트로지는 원본과 도메인 및 프로토콜별로 제공됩니다.  같은출처의 모든 페이지는 동일한 데이터를 저장하고 엑세스 할 수 있다

# objects

웹 스트로지는 두가지 오브젝트를 제공한다

window.localStorge - 유효기간이 없는 데이터저장

window.sessionStorage - 한 세션에 대한 데이터를 저장하며 브라우저 탭을 닫으면 데이터가 손실됨

```html
if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support..
}
```

# localStorage
-----------------

유효기간이 없는 데이터를 저장하며

브라우저를 닫아도 삭제되지 않으며 다음날, 다음주, 다음년도 등에도 사용 가능하다

```html
localStorage.setItem("lastname", "Smith");

document.getElementById("result").innerHTML = localStorage.getItem("lastname");
```

전역으로 할당되어 있는 localStorage의 메서드를 사용하며, 데이터는 key/value 쌍으로 구성된다.

주의할 것은 key와 value 모두 string 으로 저장된다는 것이다.

# sesstionStorage
--------------------

단 하나의 세션에 대한 데이터 만 저장한다는 점을 제외하고 로컬스트리지와 같다

사용자가 브라우저 탭을 닫으면 데이터가 삭제된다
