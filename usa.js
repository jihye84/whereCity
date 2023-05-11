

let cities = [
    { name: "뉴욕", lat: 40.7128, lng: -74.0060, description: "미국의 대표 도시로 세계적인 금융 및 문화 중심지" },
    { name: "로스앤젤레스", lat: 34.0522, lng: -118.2437, description: "미국의 서부 도시로 할리우드와 엔터테인먼트 명소" },
    { name: "시카고", lat: 41.8781, lng: -87.6298, description: "미국 중부의 대도시로 건축물과 시내가 인상적" },
    { name: "휴스턴", lat: 29.7604, lng: -95.3698, description: "미국 텍사스 주에 위치한 석유 및 항공우주 산업 중심지" },
    { name: "피닉스", lat: 33.4484, lng: -112.0740, description: "미국 아리조나 주의 수도로 강렬한 태양과 사막이 특징" },
    { name: "필라델피아", lat: 39.9526, lng: -75.1652, description: "미국의 역사와 문화가 어우러진 도시" },
    { name: "샌안토니오", lat: 29.4241, lng: -98.4936, description: "미국 텍사스 주에 위치한 역사적인 도시와 관광 명소" },
    { name: "샌디에고", lat: 32.7157, lng: -117.1611, description: "미국 남부 캘리포니아 주에 위치한 해변 도시와 항구" },
    { name: "다라스", lat: 32.7767, lng: -96.7970, description: "미국 텍사스 주에 위치한 금융 및 기술 산업 중심지" },
    { name: "샌호세", lat: 37.3382, lng: -121.8863, description: "미국 캘리포니아 주 실리콘밸리의 대표 도시로 기술 산업 거점" },
    { name: "오스틴", lat: 30.2672, lng: -97.7431, description: "미국 텍사스 주의 수도로 음악 및 기술 산업 중심지" },
    { name: "잭슨빌", lat: 30.3322, lng: -81.6557, description: "미국 플로리다 주에 위치한 큰 도시로 해변과 날씨가 매력적" },
    { name: "샌프란시스코", lat: 37.7749, lng: -122.4194, description: "미국 캘리포니아 주에 위치한 관광지로 황금문교와 케이블카가 유명" },
    { name: "인디애나폴리스", lat: 39.7684, lng: -86.1581, description: "미국 인디애나 주의 수도로 자동차 경주가 유명한 도시" },
    { name: "콜럼버스", lat: 39.9612, lng: -82.9988, description: "미국 오하이오 주의 수도로 대학과 문화 시설이 발달" },
    { name: "샤를럿", lat: 35.2271, lng: -80.8431, description: "미국 북캐롤라이나 주의 대도시로 금융 산업이 발달" },
    { name: "포트워스", lat: 32.7555, lng: -97.3308, description: "미국 텍사스 주에 위치한 도시로 문화와 역사가 풍부" },
    { name: "디트로이트", lat: 42.3314, lng: -83.0458, description: "미국 미시간 주에 위치한 자동차 산업의 중심지" },
    { name: "엘파소", lat: 31.7619, lng: -106.4850, description: "미국 텍사스 주에 위치한 멕시코와 접한 국경 도시" },
    { name: "멤피스", lat: 35.1495, lng: -90.0490, description: "미국 테네시 주에 위치한 블루스와 록앤롤의 발상지" },
    { name: "보스턴", lat: 42.3601, lng: -71.0589, description: "미국 매사추세츠 주에 위치한 교육과 역사가 풍부한 도시" },
    { name: "시애틀", lat: 47.6062, lng: -122.3321, description: "미국 워싱턴 주에 위치한 아름다운 해안선과 산을 갖춘 도시" },
    { name: "덴버", lat: 39.7392, lng: -104.9903, description: "미국 콜로라도 주의 수도로 록키 산맥이 있는 도시" },
    { name: "워싱턴 D.C.", lat: 38.9072, lng: -77.0369, description: "미국의 수도로 백악관과 미국 의회가 위치한 정치 중심지" },
    { name: "나쉬빌", lat: 36.1627, lng: -86.7816, description: "미국 테네시 주에 위치한 음악의 도시로 컨트리 음악이 유명" },
    { name: "포틀랜드", lat: 45.5051, lng: -122.6750, description: "미국 오리건 주에 위치한 자연과 예술이 어우러진 도시" },
    { name: "오클라호마 시티", lat: 35.4676, lng: -97.5164, description: "미국 오클라호마 주의 수도로 남부 특색이 두드러진 도시" },
    { name: "라스베이거스", lat: 36.1699, lng: -115.1398, description: "미국 네바다 주에 위치한 도박과 엔터테인먼트의 중심지" },
    { name: "발티모어", lat: 39.2904, lng: -76.6122, description: "미국 메릴랜드 주에 위치한 역사와 문화가 어우러진 도시" },
    { name: "루이스빌", lat: 38.2527, lng: -85.7585, description: "미국 켄터키 주에 위치한 도시로 켄터키 다비 경마가 유명" },
    { name: "앨버커키", lat: 35.0844, lng: -106.6504, description: "미국 뉴멕시코 주에 위치한 사막과 산이 어우러진 도시" }
]






let map;
let playerMarker;
let answerMarker;
let currentCity;
let currentCityPosition;
let score;
let totalQuestions;
let cityDescription = null;
let infoWindow;
let cNumber = 0;
let level = 1;
let checkingAnswer = false;



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}



function initMap() {
  score = 0;
  totalQuestions = 0;




  shuffleArray(cities);



  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.5, lng: -100},
    zoom: 3,
    styles: [
      {
        featureType: 'administrative.country',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'administrative.locality',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'administrative.province',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'administrative.land_parcel',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'administrative.neighborhood',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'landscape',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        stylers: [{ visibility: 'on' }]
      }
    ],
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    mapTypeId: "satellite"

  });



  document.getElementById("nextQuestion").style.display = "none";
  document.getElementById("submitGuess").style.display = "none";
  document.getElementById("info-Container").style.display = "none";





  playerMarker = new google.maps.Marker({
    position: {lat: 41.5, lng: -100},
    map: map,
    title: "Guess",
    icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
  });



  answerMarker = new google.maps.Marker({
    position: null,
    map: null,
    title: "Answer",
    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  });

  infoWindow = new google.maps.InfoWindow();

 /*
google.maps.event.addListener(map, 'click', function(event) {
  // checkingAnswer가 false일 때만 playerMarker의 위치 변경 허용
  if (!checkingAnswer) {
    if (playerMarker.getMap() === null) {
      // playerMarker가 없으면 새로 생성
      playerMarker = new google.maps.Marker({
        position: event.latLng,
        map: map,
      });
      document.getElementById("submitGuess").style.display = "inline";
    } else {
      // playerMarker의 위치 변경
      playerMarker.setPosition(event.latLng);
      document.getElementById("submitGuess").style.display = "inline";
    }
  } else {
    console.log('Cannot move player marker while checking the answer.');
  }
});
*/

  map.addListener("click", (event) => {
    if (document.getElementById("info-Container").style.display == "none"){
      playerMarker.setMap(map);
      playerMarker.setPosition(event.latLng);
      document.getElementById("submitGuess").style.display = "inline";
    }
  }); 

  document.getElementById("submitGuess").addEventListener("click", checkAnswer);
  document.getElementById("nextQuestion").addEventListener("click", nextQuestion);

  //nextQuestion();
  currentCity = getNextCity();
  document.getElementById("cityName").innerText = currentCity.name;
  if (cityDescription) {
    cityDescription.innerText = ""; // 도시 설명칸 비우기
  }

  document.getElementById("alarm").innerHTML = "어디에 있을까요? <br>지도에서 도시의 위치를 클릭해보고  <br> 실제 어디에 있는지 정답을 확인해봅시다.";


  updateScoreboard();


}

function showMessage(text) {
  document.getElementById('messageText').innerHTML = text;
  document.getElementById('messageBox').style.display = 'block';
}

function hideMessage() {
  document.getElementById('messageBox').style.display = 'none';
}



function nextQuestion() {

  document.getElementById("nextQuestion").style.display = "none";
  document.getElementById("submitGuess").style.display = "none";
  document.getElementById("info-Container").style.display = "none";


  map.setZoom(3);

  answerMarker.setMap(null);
  playerMarker.setMap(null);

  currentCity = getNextCity();
  document.getElementById("cityName").innerText = currentCity.name;
  if (cityDescription) {
    cityDescription.innerText = ""; // 도시 설명칸 비우기
  }

  document.getElementById("alarm").innerHTML = "어디에 있을까요? <br>지도에서 도시의 위치를 클릭해보고  <br> 실제 어디에 있는지 정답을 확인해봅시다.";


  updateScoreboard();

}

function getNextCity() {
  const nextCity = cities[totalQuestions % cities.length];
  totalQuestions++;
  return nextCity;
}


function checkAnswer() {
  checkingAnswer = true;
  cNumber++;

  document.getElementById("submitGuess").style.display = "none";
  document.getElementById("nextQuestion").style.display = "inline";
  document.getElementById("info-Container").style.display = "block";



  infoWindow.setContent(currentCity.name);


  // 정답 마커에 말풍선을 연결하고 표시합니다.
  infoWindow.open(map, answerMarker);
  infoWindow.close();
  //infoWindow.close();


  // playerMarker와 currentCity의 위치를 가져옵니다.
  const playerPosition = playerMarker.getPosition();
  currentCityPosition = new google.maps.LatLng(currentCity.lat, currentCity.lng);

  // 두 지점의 위도와 경도를 평균 내어 중간 지점을 계산합니다.
  const midLat = (playerPosition.lat() + currentCityPosition.lat()) / 2;
  const midLng = (playerPosition.lng() + currentCityPosition.lng()) / 2;
  const midPoint = new google.maps.LatLng(midLat, midLng);


  const distance = google.maps.geometry.spherical.computeDistanceBetween(
    playerMarker.getPosition(),
    new google.maps.LatLng(currentCity.lat, currentCity.lng)
  );



  let targetZoom;
  const roundedDistance = Math.round(distance * 1000) / 1000;

  if (distance < 50000) {
    score += 5;
    targetZoom = 8;
    document.getElementById("alarm").innerHTML = distance.toFixed(0) + "km 밖에 차이가 안납니다!<br>정확한 위치! +5점";
  } else if (distance < 200000) {
    score += 4;
    targetZoom = 7;
    document.getElementById("alarm").innerHTML = roundedDistance.toFixed(0) + "km 밖에 차이가 안납니다!<br>아주 근접했어요! +4점";
  } else if (distance < 400000) {
    score += 3;
    targetZoom = 6;
    document.getElementById("alarm").innerHTML = roundedDistance.toFixed(0) + "km 밖에 차이가 안납니다!<br>꽤 가깝네요~! +3점";
  } else if (distance < 500000) {
    score += 2;
    targetZoom = 6;
    document.getElementById("alarm").innerHTML = roundedDistance.toFixed(0) + "km 정도 차이가 나네요~!<br> 좀 더 정확히 알아봐요~! +2점";
  } else {
    score += 1;
    document.getElementById("alarm").innerHTML = roundedDistance.toFixed(0) + "km 정도 차이가 나네요~!<br>위치를 확인해보세요~! +1점";



    if (distance > 3000000) {
      targetZoom = 2;
    } else if (distance > 2000000) {
      targetZoom = 3;
    } else if (distance > 1000000) {
      targetZoom = 4;
    } else if (distance > 500000) {
      targetZoom = 5;
    } else {
      targetZoom = 6;
    }

  }





  //점수판 작업


  document.getElementById("score").innerText = "점수" + score;


  //정답마커 표시
  answerMarker.setMap(map);
  answerMarker.setPosition(new google.maps.LatLng(currentCity.lat, currentCity.lng));

  updateScoreboard();

  // 도시 설명을 표시
  cityDescription = document.createElement('p');
  cityDescription.innerText = currentCity.description;
  const descriptionContainer = document.getElementById('descriptionContainer');
  descriptionContainer.innerHTML = ''; // 기존 설명 제거
  descriptionContainer.appendChild(cityDescription);


  if (playerMarker.getMap() === null) {
    animatePanAndZoom(map, currentCityPosition, 4, 1000)

  } else {
    animatePanAndZoom(map, midPoint, targetZoom, 1000)
  }

  /*
  setTimeout(function() {
    // 3초 후 실행될 코드 작성
    nextQuestion();
  }, 5000);
  */


  pauseGame();

  checkingAnswer = false;

}
function pauseGame() {
  
  if (totalQuestions >= 3) {
    document.getElementById("nextQuestion").style.display = "none";
    if (score >= 6) {
      level++;

      setTimeout(function () {
        showMessage("축하합니다!<br>" + score + "점을 얻었습니다!");   
           
        document.getElementById('nextLevel').style.display = 'block';
        document.getElementById('exitGame').style.display = 'block';
      }, 5000);



    } else {
      setTimeout(function () {
        showMessage("아쉽네요!<br> 총 " + score + "점을 얻었습니다.<br>다시 시도해주세요!");
        document.getElementById('tryAgain').style.display = 'block';
        document.getElementById('exitGame').style.display = 'block';
      }, 3000);

    }
  }

  document.getElementById('nextLevel').addEventListener('click', function () {
    document.getElementById('nextLevel').style.display = 'none';
    document.getElementById('exitGame').style.display = 'none';
    document.getElementById('tryAgain').style.display = 'none';

    showMessage("레벨이 올랐습니다! <br> 현재 레벨:" + level);


    setTimeout(function () {
      // 3초 후 실행될 코드 작성
      hideMessage();
      initMap();
      //nextQuestion();      
    }, 3000);
  });

  document.getElementById('exitGame').addEventListener('click', function () {

    hideMessage();

    window.location.href = 'index.html';


  });

  document.getElementById('tryAgain').addEventListener('click', function () {
    setTimeout(function () {
      // 3초 후 실행될 코드 작성
      hideMessage();
      initMap();
      
      cNumber = 0;
    }, 50);
  });
}


function updateScoreboard() {

  const currentScoreElement = document.getElementById('current-score');
  const totalScoreElement = document.getElementById('total-score');
  const percentageElement = document.getElementById('percentage');
  const totalQuestionElement = document.getElementById('total-question');
  const levelElement = document.getElementById('level');

  totalQuestionElement.textContent = cNumber;
  currentScoreElement.textContent = score;
  totalScoreElement.textContent = totalQuestions * 5;
  percentageElement.textContent = ((score / (totalQuestions * 5)) * 100).toFixed(2);
  levelElement.textContent = level;
}

function animatePanAndZoom(map, targetLatLng, targetZoom, duration) {
  const startTime = new Date().getTime();
  const startLatLng = map.getCenter();
  const startZoom = map.getZoom();
  const zoomDiff = targetZoom - startZoom;
  const animate = () => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      const currentLatLng = new google.maps.LatLng(
        startLatLng.lat() + (targetLatLng.lat() - startLatLng.lat()) * progress,
        startLatLng.lng() + (targetLatLng.lng() - startLatLng.lng()) * progress
      );
      const currentZoom = startZoom + zoomDiff * progress;

      map.setCenter(currentLatLng);
      map.setZoom(currentZoom);

      requestAnimationFrame(animate);
    } else {
      map.setCenter(targetLatLng);
      map.setZoom(targetZoom);
    }
  };

  requestAnimationFrame(animate);
}


