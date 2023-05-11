

let cities = [
    { name: "로마", lat: 41.9028, lng: 12.4964, description: "이탈리아의 수도이자 가장 큰 도시로, 고대 로마 시대의 중심지였습니다. 로마는 콜로세움, 트레비 분수, 바티칸 시국 등 세계적으로 유명한 관광 명소들이 많이 위치해 있습니다. 로마는 또한 기원전 753년에 건국된 고대 도시로, 인류 역사상 가장 중요한 도시 중 하나로 꼽힙니다." },
    { name: "밀라노", lat: 45.4642, lng: 9.1900, description: "이탈리아의 북부에 위치한 대도시로, 패션과 디자인의 세계 중심지로 알려져 있습니다. 밀라노는 밀라노 대성당, 스칼라 극장, 마지막 만찬 등 다양한 문화와 예술적 명소가 있으며, 이탈리아의 경제와 금융의 중심지로서의 역할을 하고 있습니다." },
    { name: "나폴리", lat: 40.8518, lng: 14.2681, description: "이탈리아의 남부에 위치한 도시로, 풍부한 역사와 문화유산을 간직하고 있습니다. 나폴리는 산테오도로 성당, 나폴리 궁전, 우펜 치트라들텔라 등 많은 역사적 명소와 관광지가 있으며, 이탈리아의 전통 음식인 피자의 발원지로 알려져 있습니다." },
    { name: "피렌체", lat: 43.7696, lng: 11.2558, description: "이탈리아 중부 토스카나 지역에 위치한 아름다운 도시로, 르네상스 문화의 발상지로 알려져 있습니다. 피렌체는 피렌체 대성당, 우피치 미술관, 포르타 델 파라디조 등 예술과 건축의 명소들이 많이 위치해 있습니다." },
    { name: "베네치아", lat: 45.4408, lng: 12.3155, description: "이탈리아 북부에 위치한 수로로 둘러싸인 도시로 베네치아는 인공 수로와 다리들로 유명하며, 그로 인해 수상 도시로 불립니다. 베네치아는 상징적인 건축물인 성 마르코 대성당과 도저의 궁전, 그리고 고딕과 르네상스 양식의 건축물들이 곳곳에 흩어져 있습니다. 또한 매년 열리는 베네치아 카니발로 유명하며, 로맨틱한 분위기와 아름다운 경치로 사랑받는 도시입니다." },
    { name: "볼로냐", lat: 44.4949, lng: 11.3426, description: "이탈리아 북부 에밀리아로마냐 지역에 위치한 볼로냐는 중세의 건축물과 교회들로 유명한 도시입니다. 볼로냐 대학교는 세계에서 가장 오래된 대학 중 하나로 꼽히며, 산 페트로니오 대성당, 타워 가디스 광장 등 다양한 관광 명소들이 있습니다." },
    { name: "토리노", lat: 45.0703, lng: 7.6869, description: "이탈리아의 북서부에 위치한 토리노는 알프스 산맥이 보이는 경치가 아름다운 도시입니다. 2006년 동계 올림픽 개최지로 알려진 토리노에는 왕립 궁전, 모노포리 미술관, 산 로렌초 성당 등 다양한 문화유산과 관광지가 있습니다." },
    { name: "제노바", lat: 44.4057, lng: 8.9463, description: "이탈리아 북부 리구리아 지역에 위치한 제노바는 중세와 르네상스 시대의 다양한 건축물들로 유명합니다. 제노바는 크리스토퍼 콜럼버스의 출생지로 알려져 있으며, 성 로렌초 대성당, 팔라초 로쏘, 바이아 델 시렌 들텔라 등 다양한 관광 명소들이 있습니다." },
    { name: "카타니아", lat: 37.5079, lng: 15.0830, description: "이탈리아 시칠리아 섬 동쪽에 위치한 카타니아는 에트나 화산의 기슭에 자리해 있습니다. 카타니아는 고대 그리스 시대부터 이어져 온 역사와 문화를 지니고 있으며, 로마 시대의 투기장, 카타니아 대성당, 우르시노 성 등 많은 관광 명소들이 있습니다. 또한, 지중해 연안의 특색을 간직한 아름다운 해변들이 인기를 끌고 있습니다." },
    { name: "팔레르모", lat: 38.1157, lng: 13.3615, description: "이탈리아 시칠리아 섬의 수도인 팔레르모는 고대 그리스 시대의 유적과 아라비아-노르망디양식의 건축물들로 유명합니다. 팔레르모는 팔라초 노르망디, 마르티오라마 궁전, 산 카탈도 대성당 등 다양한 문화와 역사적 명소들이 있으며, 시칠리아의 전통음식과 해산물 요리로도 유명합니다." }
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
        center: { lat: 41, lng: 12.5 },
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
        position: { lat: 41, lng: 12.5 },
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



    // InfoWindow 스타일 클래스 추가
    infoWindow.setOptions({

        className: 'custom-infowindow' // 스타일 클래스 추가
    });














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


