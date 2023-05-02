let cities=[];
const cities0 = [
  { name: "서울", lat: 37.5665, lng: 126.9780, description: "대한민국의 수도이자 최대 도시로, 경복궁, 남산타워, 명동 등 다양한 관광 명소가 있습니다." },
  { name: "부산", lat: 35.1796, lng: 129.0756, description: "한국의 남쪽에 위치한 항구 도시로, 해운대, 광안리 해수욕장 등 아름다운 해변과 먹거리가 유명합니다." },
  { name: "인천", lat: 37.4563, lng: 126.7052, description: "서울 인근 대도시로 인천국제공항이 위치하며, 차이나타운, 월미도 등 다양한 관광 명소를 갖추고 있습니다." },
  { name: "런던", lat: 51.5074, lng: -0.1278, description: "영국의 수도이자 금융 및 문화 중심지로, 런던아이, 빅 벤, 버킹엄 궁전 등 세계적인 명소가 있습니다." },
  { name: "파리", lat: 48.8566, lng: 2.3522, description: "프랑스의 수도로 에펠탑, 루브르 박물관, 샹젤리제 거리 등 매력적인 명소와 유럽 최고의 미식이 인상적입니다." },
  { name: "도쿄", lat: 35.6895, lng: 139.6917, description: "일본의 수도로 거대한 도시와 현대 건축물, 전통 문화가 어우러진 독특한 곳으로, 신주쿠, 아사쿠사, 오다이바 등이 유명합니다." },
  { name: "오사카", lat: 34.6937, lng: 135.5022, description: "일본의 서부에 위치한 대도시로 먹거리가 유명하며, 도톤보리, 유니버설 스튜디오 재팬, 오사카성 등이 인기 명소입니다." },
  { name: "트리폴리", lat: 32.8872, lng: 13.1913, description: "리비아의 수도로 아프리카 북부에 위치해 있으며, 이탈리아식 건축물과 고대 로마 유적지가 현대적인 도시와 어우러져 있습니다." },
  { name: "뉴욕", lat: 40.7128, lng: -74.0060, description: "미국의 대표 도시로 세계적인 금융 중심지로, 타임스 스퀘어, 센트럴 파크, 자유의 여신상 등 다양한 명소가 인기입니다." },
  { name: "시카고", lat: 41.8781, lng: -87.6298, description: "미국 중부의 대도시로 건축물과 시내가 인상적이며, 윌리스 타워, 밀레니엄 파크, 시카고 아트 인스티튜트 등이 유명합니다." },
  { name: "부에노스아이레스", lat: -34.6037, lng: -58.3816, description: "아르헨티나의 수도로 아름다운 건축물이 유명하며, 카사 로사다, 플로리다 거리, 산텔모 시장 등이 인기 명소입니다." },
  { name: "홍콩", lat: 22.3193, lng: 114.1694, description: "중화인민공화국 특별행정구로 금융 중심지이며, 빅토리아 피크, 레펄스 베이, 시계탑 등 현대적이고 전통적인 명소가 존재합니다." },
  { name: "다낭", lat: 16.0544, lng: 108.2022, description: "베트남 중부 해안에 위치한 아름다운 도시로, 무이네 해변, 마블 마운틴, 손 트라 페닌슐라 등 천혜의 자연 경관이 매력적입니다." },
  { name: "타이페이", lat: 25.0324, lng: 121.5654, description: "대만의 수도로 타이페이 101이 유명한 명소이며, 기린 야시장, 청기 온천, 기슭 공원 등 다양한 관광지와 먹거리가 인기입니다." },
  { name: "모스크바", lat: 55.7558, lng: 37.6173, description: "러시아의 수도로 세계적인 문화유산이 풍부하며, 크렘린궁, 세인트 바실리 대성당, 볼쇼이 극장 등 다양한 명소가 있습니다." },
  { name: "베를린", lat: 52.5200, lng: 13.4050, description: "독일의 수도로 역사와 현대가 공존하는 도시이며 , 브랜덴부르크 문, 베를린 성벽, 프리드리히슈트라세 쇼핑 거리 등 많은 관광 명소가 존재합니다." },
  { name: "리우 데 자네이루", lat: -22.9068, lng: -43.1729, description: "브라질의 대표 도시로 해변과 산이 인접해 있으며, 코파카바나 해변, 리오의 상징인 개선문 같은 슈가로프 산, 레알 궁전 등이 인기 명소입니다." },
  { name: "카사블랑카", lat: 33.5731, lng: -7.5898, description: "모로코의 대도시로 아프리카 북서부에 위치해 있으며, 하산 2세 모스크, 아인 디아브 해변, 로얄 팰리스 등 유명한 관광지가 있습니다." },
  { name: "카이로", lat: 30.0444, lng: 31.2357, description: "이집트의 수도로 고대 이집트 유적이 유명하며, 기자의 피라미드, 스핑크스, 카이로 박물관 등 다양한 역사와 문화적 명소가 존재합니다." },
  { name: "시라즈", lat: 29.5918, lng: 52.5837, description: "이란의 역사와 문화가 공존하는 아름다운 도시로, 에람 정원, 하페시어 시장, 나스이롤 몰크 모스크 등 독특한 문화 명소를 경험할 수 있습니다." },
  { name: "뉴욕", lat: 40.7128, lng: -74.0060, description: "미국의 대표 도시로 세계적인 금융 중심지로, 스태튼 아일랜드 페리, 브루클린 다리, 메트로폴리탄 미술관 등 다양한 명소를 즐길 수 있습니다." },
  { name: "로스앤젤레스", lat: 34.0522, lng: -118.2437, description: "미국의 서부 도시로 할리우드와 엔터테인먼트 명소로, 유니버설 스튜디오, 할리우드 워크 오브 페이머스, 그리피스 천문대 등 관광 명소가 인기입니다." },
  { name: "시카고", lat: 41.8781, lng: -87.6298, description: "미국 중부의 대도시로 건축물과 시내가 인상적이며, 윌리스 타워, 밀레니엄 파크, 시카고 아트 인스티튜트 등 미술과 건축의 유명한 명소들이 있습니다." },
  { name: "휴스턴", lat: 29.7604, lng: -95.3698, description: "미국 텍사스 주에 위치한 석유 및 항공우주 산업 중심지로, 존슨 스페이스 센터, 휴스턴 박물관 지구, 휴스턴 동물원 등 다양한 명소가 있습니다." },
  { name: "피닉스", lat: 33.4484, lng: -112.0740, description: "미국 아리조나 주의 수도로 강렬한 태양과 사막이 특징인 도시로, 디저트 보타니컬 가든, 피닉스 동물원, 피닉스 아트 뮤지엄 등을 방문할 수 있습니다." },
  { name: "필라델피아", lat: 39.9526, lng: -75.1652, description: "미국의 역사와 문화가 어우러진 도시로, 자유의 종, 인디펜던스 홀, 필라델피아 박물관 등 많은 역사적 명소를 찾아볼 수 있습니다." },
  { name: "샌프란시스코", lat: 37.7749, lng: -122.4194, description: "미국 서부의 대표 도시로 골든 게이트 다리와 케이블카가 유명하며, 피셔맨스 워프, 알카트라즈 섬, 샌프란시스코 현대미술관 등 인기 명소가 있습니다." },
  { name: "멜버른", lat: -37.8136, lng: 144.9631, description: "호주의 문화 중심지로 다양한 예술 분야가 발전하며, 호주 국립 갤러리, 멜버른 크리켓 그라운드, 로얄 보타닉 가든 등의 명소가 있습니다." },
  { name: "시드니", lat: -33.8688, lng: 151.2093, description: "호주의 대표 도시로 시드니 오페라 하우스가 유명하며, 시드니 하버 브릿지, 본다이 비치, 로얄 보타닉 가든 등 다양한 명소를 방문할 수 있습니다." },
  { name: "토론토", lat: 43.6532, lng: -79.3832, description: "캐나다의 대도시로 다문화가 공존하는 글로벌 도시로, CN 타워, 로열 온타리오 박물관, 디스틸러리 지구 등 다양한 명소와 문화를 경험할 수 있습니다." },
  { name: "방콕", lat: 13.7563, lng: 100.5018, description: "태국의 수도로 동남아시아의 여행 명소로 알려져 있으며, 왕궁, 왓 포, 채트츄캉 플로팅 마켓 등 태국의 전통과 문화를 체험할 수 있는 명소가 많습니다." },
  { name: "리마", lat: -12.0464, lng: -77.0428, description: "페루의 수도로 남미 대륙의 문화와 역사가 풍부하며, 미라플로레스, 바라카스 해변, 골드 박물관 등 다양한 명소를 찾아볼 수 있습니다." },
  { name: "리스본", lat: 38.7223, lng: -9.1393, description: "포르투갈의 수도로 아름다운 도시와 해안선이 특징이며, 벨렘 타워, 예수회 수도원, 상호르헤 성 등 역사적인 명소들이 있습니다." },
  { name: "마드리드", lat: 40.4168, lng: -3.7038, description: "스페인의 수도로 역사와 문화가 어우러진 아름다운 도시로, 프라도 박물관, 레알 파라시오, 레티로 공원 등 다양한 명소를 감상할 수 있습니다." },
  { name: "로마", lat: 41.9028, lng: 12.4964, description: "이탈리아의 수도로 고대 로마의 유적이 유명하며, 콜로세움, 판테온, 바티칸 도시국 등 역사적 명소와 아름다운 도시 풍경을 감상할 수 있습니다." },
  { name: "아테네", lat: 37.9838, lng: 23.7275, description: "그리스의 수도로 역사적인 유적지와 아름다운 해안이 특징인 도시로, 파르테논 신전, 아크로폴리스, 고대 아테네 아고라 등 고대 그리스 문화와 역사를 간직한 명소들이 있습니다." },
  { name: "델리", lat: 28.6139, lng: 77.2090, description: "인도의 수도로 인도 문화와 역사가 어우러진 도시로, 인도 게이트, 로트 민아르, 퀴투브 미나르 등 역사적인 명소와 풍부한 전통을 자랑합니다. 또한, 디왈리와 같은 다양한 축제가 있어 인도의 다채로운 문화를 체험할 수 있습니다." }
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

    window.close();


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


