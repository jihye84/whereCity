

let cities = [
    { name: "런던", lat: 51.5074, lng: -0.1278, description: "영국의 수도이자 금융 및 문화 중심지로, 세계적인 명소인 런던 아이, 타워 브리지, 빅 벤 등이 위치해 있습니다. 런던은 다양한 민족과 문화가 공존하는 도시로 글로벌 트렌드가 시작되는 도시로 알려져 있습니다." },
    { name: "버밍엄", lat: 52.4862, lng: -1.8904, description: "영국의 두 번째로 큰 도시로, 산업혁명 시대에 중요한 역할을 했습니다. 현재 버밍엄은 쇼핑, 문화, 예술 등 다양한 분야에서 활발한 도시로 변모하였으며, 캐널 네트워크와 빅토리아 건물들이 인상적입니다." },
    { name: "맨체스터", lat: 53.4808, lng: -2.2426, description: "영국 북서부에 위치한 맨체스터는 산업혁명 시대에 중요한 역할을 한 도시로, 세계적인 축구 팀인 맨체스터 유나이티드와 맨체스터 시티를 거느린 축구 도시로 유명합니다. 또한 문화, 예술, 음악 등 다양한 분야에서 활발한 도시입니다." },
    { name: "리버풀", lat: 53.4084, lng: -2.9916, description: "영국 북서부 해안에 위치한 리버풀은 항구 도시로 유명하며, 산업혁명 시대에 중요한 역할을 했습니다. 또한 비틀즈의 고향으로 알려져 있어 음악 역사와 문화가 풍부하며, 리버풀의 도심은 유네스코 세계문화유산에 등재되어 있습니다." },
    { name: "리즈", lat: 53.8008, lng: -1.5491, description: "영국 북부의 대도시로, 의류 및 섬유 산업의 중심지였던 곳입니다. 현재는 대학 도시로 발전하며 금융, 법률, 의료 등 다양한 분야에서 성장하고 있습니다. 리즈는 또한 쇼핑, 음식, 문화와 예술 분야에서도 활발한 도시로 알려져 있습니다. 리즈의 도심은 빅토리아 건축물들이 많아 고풍스러운 분위기를 자아냅니다." },
    { name: "글래스고", lat: 55.8652, lng: -4.2576, description: "스코틀랜드의 가장 큰 도시이자 문화, 경제 중심지로, 세계적인 건축가 찰스 렌지 맥킨토시의 작품들이 도시 곳곳에 흩어져 있습니다. 글래스고는 또한 음악, 예술, 과학 등 다양한 분야에서 활발한 도시로 알려져 있으며, 세계적인 미술관과 박물관도 다수 위치해 있습니다." },
    { name: "에든버러", lat: 55.9533, lng: -3.1883, description: "스코틀랜드의 수도인 에든버러는 역사와 문화가 어우러진 아름다운 도시로, 중세와 빅토리아 시대의 건축물들이 곳곳에 남아있습니다. 에든버러 성과 로열 마일이 유명한 관광지로 알려져 있으며, 매년 열리는 에든버러 페스티벌이 세계적인 명성을 가지고 있습니다." },
    { name: "셰필드", lat: 53.3811, lng: -1.4701, description: "영국 북부에 위치한 셰필드는 강철 산업의 중심지로 유명했으며, 산업혁명 시대에 중요한 역할을 했습니다. 현재는 대학 도시로 발전하며 과학, 기술, 예술 등 다양한 분야에서 성장하고 있으며, 셰필드는 또한 다양한 공원과 녹지가 풍부한 도시로 알려져 있습니다." },
    { name: "브리스톨", lat: 51.4545, lng: -2.5879, description: "영국 남서부에 위치한 브리스톨은 항구 도시로 유명하며, 선박 및 항공기 제조 산업이 발달한 도시입니다. 브리스톨은 또한 거리 예술가 뱅크시의 고향으로 알려져 있으며, 문화, 예술, 음악 분야에서도 활발한 도시로 알려져 있습니다. 브리스톨의 도심은 유네스코 세계문화유산에 등재된 클리프턴 현수교와 같은 역사적인 명소들이 많아 관광객들에게 인기가 많습니다." },
    { name: "카디프", lat: 51.4816, lng: -3.1791, description: "웨일스의 수도이자 가장 큰 도시인 카디프는 항구 도시로 유명하며, 석탄 산업이 발달한 곳입니다. 카디프는 또한 웨일스 국립오페라단, 웨일스 밀레니엄 센터 등 문화와 예술 분야에서 활발한 도시로 알려져 있으며, 카디프 성과 노리 가르디프 등 역사적인 명소들이 관광객들에게 인기가 많습니다." }
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
    center: { lat: 54.655, lng: -2.905 },
    zoom: 4,
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
    position: { lat: 54.655, lng: -2.905 },
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


  map.setZoom(4);

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


