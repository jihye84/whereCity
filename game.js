let cities=[];
const cities0 = [
  { name: "서울", lat: 37.5665, lng: 126.9780, description: "대한민국의 수도이자 최대 도시" },
  { name: "부산", lat: 35.1796, lng: 129.0756, description: "한국의 남쪽에 위치한 항구 도시" },
  { name: "인천", lat: 37.4563, lng: 126.7052, description: "서울 인근 대도시로 인천국제공항이 위치함" },
  { name: "런던", lat: 51.5074, lng: -0.1278, description: "영국의 수도이자 금융 및 문화 중심지" },
  { name: "파리", lat: 48.8566, lng: 2.3522, description: "프랑스의 수도로 에펠탑과 루브르 박물관이 유명" },
  { name: "도쿄", lat: 35.6895, lng: 139.6917, description: "일본의 수도로 거대한 도시와 현대 건축물이 특징" },
  { name: "오사카", lat: 34.6937, lng: 135.5022, description: "일본의 서부에 위치한 대도시로 먹거리가 유명" },
  { name: "트리폴리", lat: 32.8872, lng: 13.1913, description: "리비아의 수도로 아프리카 북부에 위치함" },
  { name: "뉴욕", lat: 40.7128, lng: -74.0060, description: "미국의 대표 도시로 세계적인 금융 중심지" },
  { name: "시카고", lat: 41.8781, lng: -87.6298, description: "미국 중부의 대도시로 건축물과 시내가 인상적" },
  { name: "부에노스아이레스", lat: -34.6037, lng: -58.3816, description: "아르헨티나의 수도로 아름다운 건축물이 유명" },
  { name: "홍콩", lat: 22.3193, lng: 114.1694, description: "중화인민공화국 특별행정구로 금융 중심지" },
  { name: "다낭", lat: 16.0544, lng: 108.2022, description: "베트남 중부 해안에 위치한 아름다운 도시" },
  { name: "타이페이", lat: 25.0324, lng: 121.5654, description: "대만의 수도로 타이페이 101이 유명한 명소" },
  { name: "모스크바", lat: 55.7558, lng: 37.6173, description: "러시아의 수도로 세계적인 문화유산이 풍부" },
  { name: "베를린", lat: 52.5200, lng: 13.4050, description: "독일의 수도로 역사와 현대가 공존하는 도시" },
  { name: "리우 데 자네이루", lat: -22.9068, lng: -43.1729, description: "브라질의 대표 도시로 해변과 산이 인접함" },
  { name: "카사블랑카", lat: 33.5731, lng: -7.5898, description: "모로코의 대도시로 아프리카 북서부에 위치" },
  { name: "카이로", lat: 30.0444, lng: 31.2357, description: "이집트의 수도로 고대 이집트 유적이 유명" },
  { name: "시라즈", lat: 29.5918, lng: 52.5837, description: "이란의 역사와 문화가 공존하는 아름다운 도시" },
  { name: "뉴욕", lat: 40.7128, lng: -74.0060, description: "미국의 대표 도시로 세계적인 금융 중심지" },
  { name: "로스앤젤레스", lat: 34.0522, lng: -118.2437, description: "미국의 서부 도시로 할리우드와 엔터테인먼트 명소" },
  { name: "시카고", lat: 41.8781, lng: -87.6298, description: "미국 중부의 대도시로 건축물과 시내가 인상적" },
  { name: "휴스턴", lat: 29.7604, lng: -95.3698, description: "미국 텍사스 주에 위치한 석유 및 항공우주 산업 중심지" },
  { name: "피닉스", lat: 33.4484, lng: -112.0740, description: "미국 아리조나 주의 수도로 강렬한 태양과 사막이 특징" },
  { name: "필라델피아", lat: 39.9526, lng: -75.1652, description: "미국의 역사와 문화가 어우러진 도시" },
  { name: "샌프란시스코", lat: 37.7749, lng: -122.4194, description: "미국 서부의 대표 도시로 골든 게이트 다리와 케이블카가 유명" },
  { name: "멜버른", lat: -37.8136, lng: 144.9631, description: "호주의 문화 중심지로 다양한 예술 분야가 발전" },
  { name: "시드니", lat: -33.8688, lng: 151.2093, description: "호주의 대표 도시로 시드니 오페라 하우스가 유명" },
  { name: "토론토", lat: 43.6532, lng: -79.3832, description: "캐나다의 대도시로 다문화가 공존하는 글로벌 도시" },
  { name: "방콕", lat: 13.7563, lng: 100.5018, description: "태국의 수도로 동남아시아의 여행 명소" },
  { name: "리마", lat: -12.0464, lng: -77.0428, description: "페루의 수도로 남미 대륙의 문화와 역사가 풍부함" },
  { name: "리스본", lat: 38.7223, lng: -9.1393, description: "포르투갈의 수도로 아름다운 도시와 해안선" },
  { name: "마드리드", lat: 40.4168, lng: -3.7038, description: "스페인의 수도로 역사와 문화가 어우러진 아름다운 도시" },
  { name: "로마", lat: 41.9028, lng: 12.4964, description: "이탈리아의 수도로 고대 로마의 유적이 유명" },
  { name: "아테네", lat: 37.9838, lng: 23.7275, description: "그리스의 수도로 역사적인 유적지와 아름다운 해안" },
  { name: "델리", lat: 28.6139, lng: 77.2090, description: "인도의 수도로 인도 문화와 역사가 어우러진 도시" }
];








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


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}



function initMap() {
  score = 0;
  totalQuestions = 0;

  cities = cities0;


  shuffleArray(cities);



  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.7783, lng: 180 },
    zoom: 2,
    styles: [
      {
        featureType: 'administrative.country',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'administrative.locality',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'administrative.province',
        stylers: [{ visibility: 'off' }]
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
    position: { lat: 37.5665, lng: 180 },
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



  map.addListener("click", (event) => {
    playerMarker.setMap(map);
    playerMarker.setPosition(event.latLng);
    document.getElementById("submitGuess").style.display = "inline";
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
  document.getElementById("submitGuess").style.display = "inline";
  document.getElementById("info-Container").style.display = "none";


  map.setZoom(2);

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
    document.getElementById("alarm").innerHTML = distance.toFixed(0) + "km 밖에 차이가 안납니다!정확한 위치! +5점";
  } else if (distance < 200000) {
    score += 4;
    targetZoom = 7;
    document.getElementById("alarm").innerHTML = roundedDistance.toFixed(0) + "km 밖에 차이가 안납니다! 아주 근접했어요! +4점";
  } else if (distance < 400000) {
    score += 3;
    targetZoom = 6;
    document.getElementById("alarm").innerHTML = roundedDistance.toFixed(0) + "km 밖에 차이가 안납니다! 꽤 가깝네요~! +3점";
  } else if (distance < 500000) {
    score += 2;
    targetZoom = 6;
    document.getElementById("alarm").innerHTML = roundedDistance.toFixed(0) + "km 정도 차이가 나네요~! 좀 더 정확히 알아봐요~! +2점";
  } else {
    score += 2;
    document.getElementById("alarm").innerHTML = roundedDistance.toFixed(0) + "km 정도 차이가 나네요~! 위치를 확인해보세요~! +1점";



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


  /*setTimeout(function() {
    // 3초 후 실행될 코드 작성
    nextQuestion();
  }, 3000);
  */


  pauseGame();

}
function pauseGame() {
  if (totalQuestions >= 2) {
    if (score >= 4) {
      level++;

      setTimeout(function () {
        showMessage("축하합니다! " + score + "점을 얻었습니다!");   
           
        document.getElementById('nextLevel').style.display = 'block';
        document.getElementById('exitGame').style.display = 'block';
      }, 3000);



    } else {
      setTimeout(function () {
        showMessage("아쉽네요! " + score + "점을 얻었습니다. 다시 시도해주세요!");
        document.getElementById('tryAgain').style.display = 'block';
        document.getElementById('exitGame').style.display = 'block';
      }, 3000);

    }
  }

  document.getElementById('nextLevel').addEventListener('click', function () {
    document.getElementById('nextLevel').style.display = 'none';
    document.getElementById('exitGame').style.display = 'none';

    showMessage("레벨이 올랐습니다! 현재 레벨:" + level);


    setTimeout(function () {
      // 3초 후 실행될 코드 작성
      hideMessage();
      initMap();
      //nextQuestion();      
    }, 3000);
  });

  document.getElementById('exitGame').addEventListener('click', function () {

    hideMessage();

    window.close();


  });

  document.getElementById('tryAgain').addEventListener('click', function () {
    setTimeout(function () {
      // 3초 후 실행될 코드 작성
      hideMessage();
      initMap();
      nextQuestion();
      cNumber = 0;
    }, 3000);
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


