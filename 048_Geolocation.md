# Locate User
-----------------
Geolocation API는 사용자의 위치를 파악 할 수 있다

개인정보가 노출 될 수 있으므로 유저가 승인해야한다

getCurrntPostion() 방법은 유저의위치를 반환하는데 사용된다

```html
<script>
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>
```
사용자 위치정보 사용을 허용해야한다

허용된 경우 getCurrentPostion() 메소드를 실행한다 거부될경우 메시지를 표시한다

메도스가 성공하면 매게변수에 좌표를 리턴한다

showPosition()은 위도와 경도를 표시한다

getCurrentPostion()의 두번째 매개변수는 오류처리에 사용된다

```html
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

```

# getCurrentPostion()메소드 데이터 리턴값
----------------------
|특성|리턴값|
|:-:|:-:|
|coords.latitude |위도를 10 진수로 나타냅니다 (항상 반환 됨)|
|coords.longitude |10 진수로 표현 된 경도 (항상 리턴 됨)|
|coords.accuracy|위치의 정확성 (항상 반환)|
|coords.altitude |평균 해수면 위의 고도 (미터) (사용 가능한 경우 반환)|
|coords.altitudeAccuracy |위치의 고도 정확도 (사용 가능한 경우 반환)|
|coords.heading| 북쪽에서 시계 방향으로도 단위의 제목 (사용 가능한 경우 반환)|
|coords.speed |초당 미터 속도 (가능한 경우 반환)|
|timestamp| 응답 날짜 / 시간 (사용 가능한 경우 반환)|

# 실시간 GPS
----------------

watchPostion() :  사용자가 이동할 때 업데이트된 위치를 계속 반환 GPS장치가 필요함

clearWatch() : watchPosition()을 중지한다
