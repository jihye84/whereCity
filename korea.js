

let cities = [
    { name: "서울", lat: 37.5665, lng: 126.9780, description: "대한민국의 수도이자 가장 큰 도시로, 전통과 현대가 공존하는 도시입니다. 경복궁, 창덕궁, 종묘 등 역사적인 명소와 남산, 동대문, 명동 등 현대적인 명소가 있습니다. 또한, 강남, 홍대, 이태원 등 다양한 문화와 쇼핑, 먹거리를 즐길 수 있는 지역이 있습니다." },
    { name: "부산", lat: 35.1796, lng: 129.0756, description: "대한민국의 제2의 도시이자 최대 항구 도시로, 해운대, 광안리, 송정해수욕장 등 아름다운 해변과 경치를 자랑합니다. 또한, 해동 용궁사, 범어사, 감천문화마을 등 역사적이고 문화적인 명소도 많이 있습니다." },
    { name: "인천", lat: 37.4563, lng: 126.7052, description: "대한민국의 주요 항구 도시 중 하나로, 국제공항이 위치한 곳입니다. 중구와 용유도, 송도 등 다양한 관광 명소가 있으며, 차이나타운, 월미도 등 먹거리와 문화를 즐길 수 있는 도시입니다." },
    { name: "대구", lat: 35.8714, lng: 128.6014, description: "한국의 동쪽에 위치한 대구는 팔공산, 서문시장, 근대골목 등 관광 명소가 있습니다. 또한, 대구는 예술, 문화, 과학 기술 등의 중심지로 알려져 있어 다양한 체험과 학습을 할 수 있는 도시입니다." },
    { name: "대전", lat: 36.3504, lng: 127.3845, description: "한국의 중앙에 위치한 대전은 한밭수목원, 계족산, 엑스포 과학 공원 등 다양한 관광 명소를 가지고 있습니다. 대전은 또한 과학기술, 교육 등의 중심지로 알려져 있어 다양한 체험과 학습을 할 수 있는 도시입니다." },
    { name: "광주", lat: 35.1595, lng: 126.8526, description: "광주는 대한민국의 대표적인 문화도시로 유명합니다. 광주광역시는 고유의 역사와 문화를 지니고 있으며, 대한민국의 민주화 운동과 관련하여 중요한 역할을 담당하였습니다." },
    { name: "울산", lat: 35.5384, lng: 129.3114, description: "울산은 대한민국의 남동부에 위치한 도시로, 현대자동차와 같은 기업들이 집결해 있는 산업 중심 도시입니다. 그러나 동구 해양도립공원, 대왕암공원, 간월도 등 자연 경관이 아름다운 관광지도 많이 있습니다." },
    { name: "수원", lat: 37.2636, lng: 127.0286, description: "수원은 경기도의 중심 도시로, 성곽이 아름다운 수원화성과 전통시장인 팔달시장 등 다양한 관광 명소가 있습니다. 또한, 광교테크노밸리와 같은 고성능 산업단지가 위치해 있는 곳으로 기술과 혁신의 중심지입니다." },
    { name: "창원", lat: 35.2271, lng: 128.6818, description: "창원은 대한민국의 남서부에 위치한 도시로, 많은 공원과 문화시설이 있는 녹색 도시입니다. 진해, 마산, 마산합성, 의창, 성산 등 다양한 구를 가진 도시로, 창원시립미술관, 창원종합운동장 등 다양한 문화와 스포츠 시설을 갖추고 있습니다." },
    { name: "청주", lat: 36.6415, lng: 127.4887, description: "청주는 충청북도의 중심 도시로, 청주 성안길, 상당산성, 수암골, 청남대 등 관광 명소와 역사적인 가치를 가지고 있습니다. 또한, 청주는 전통공예품으로 유명한 금동이 있는 도시로, 청주 한지와 금동공예 등 다양한 전통공예품을 만나볼 수 있습니다." },
    { name: "안양", lat: 37.3943, lng: 126.9568, description: "안양은 경기도의 도시로, 중심지로부터 가까운 위치에 있어 접근성이 좋습니다. 안양예술공원, 안양천 생태공원 등 다양한 자연과 문화 시설을 가지고 있으며, 안양역 주변에는 다양한 음식점과 쇼핑 명소가 있습니다." },
    { name: "평택", lat: 36.9923, lng: 127.1129, description: "평택은 경기도 남부에 위치한 도시로, 미군기지와 대한민국의 군사 시설이 많이 위치해 있는 곳입니다. 알려진 관광 명소로는 평택호와 송산그린시티 골프장, 신리유원지 등이 있으며, 다양한 먹거리와 쇼핑 명소를 즐길 수 있는 도시입니다." },
    { name: "시흥", lat: 37.3799, lng: 126.8030, description: "시흥은 경기도의 서남부에 위치한 도시로, 경제적 발전과 함께 자연과 문화도 동시에 즐길 수 있는 도시입니다. 안산시립중앙도서관, 시흥호수공원, 영남알프스 등 다양한 문화 시설과 자연 명소가 있어 관광객들에게 인기가 있습니다." },
    { name: "김포", lat: 37.6152, lng: 126.7156, description: "김포는 경기도에 위치한 도시로, 김포국제공항이 위치한 곳입니다. 가까운 거리에 인천, 서울 등의 대도시가 있어 교통이 편리하며, 김포마리나, 장림포구, 감일염전 등 다양한 관광 명소와 역사적인 명소를 가지고 있습니다." },
    { name: "안산", lat: 37.3219, lng: 126.8309, description: "안산은 경기도에 위치한 도시로, 산업과 교육, 문화 등 다양한 분야에서 발전하고 있는 도시입니다. 안산자연생태공원, 안산 하늘공원, 원곡호수공원 등 다양한 자연 명소와 문화 시설이 있어 관광객들에게 인기가 있습니다." }
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
        center: { lat: 38, lng: 128 },
        zoom: 5,
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
        position: { lat: 38, lng: 128 },
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
        if (document.getElementById("info-Container").style.display == "none") {
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


    map.setZoom(5);

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


