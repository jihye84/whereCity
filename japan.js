

let cities = [
    { name: "도쿄", lat: 35.6895, lng: 139.6917, description: "일본의 수도이자 가장 큰 도시인 도쿄는 현대적인 초고층 건물과 고즈넉한 고찰이 공존하는 도시입니다. 도쿄타워, 아사쿠사 신사, 메이지 신사 등 다양한 관광 명소와 더불어 일본 전통 문화와 현대 문화가 어우러진 도시입니다." },
    { name: "요코하마", lat: 35.4437, lng: 139.6380, description: "도쿄 인근 항구도시로 일본의 두 번째로 큰 도시인 요코하마는 중국의 영향을 받은 중국 거리, 미나토미라이21, 요코하마 코스모월드 등 다양한 명소와 함께 현대적인 도시 경관을 감상할 수 있습니다." },
    { name: "오사카", lat: 34.6937, lng: 135.5022, description: "일본의 서쪽에 위치한 오사카는 오사카성, 도톤보리, 유니버설 스튜디오 재팬 등 다양한 명소와 함께 오사카만의 특색있는 음식문화를 즐길 수 있는 도시입니다. 특히, 타코야키, 오코노미야키 등 오사카의 대표적인 음식을 맛볼 수 있습니다." },
    { name: "나고야", lat: 35.1815, lng: 136.9066, description: "일본의 중부 지방에 위치한 나고야는 나고야성, 오수 미술관, 오가와 도자기 등 다양한 명소와 함께 고유한 역사와 문화를 간직한 도시입니다. 또한, 나고야 코엔, 히가시야마 동물원 등 즐길 거리가 다양한 도시로 알려져 있습니다." },
    { name: "삿포로", lat: 43.0629, lng: 141.3544, description: "일본 홋카이도에 위치한 삿포로는 오타루 운하, 시로이 코이비토, 수이카요 등 다양한 명소와 함께 자연 경관이 아름다운 도시입니다. 특히 겨울에는 삿포로 눈 축제가 열리며, 도시 전체가 화려한 눈 조각들로 뒤덮이게 됩니다. 여름에는 꽃과 녹색이 가득한 도시로 변신하여 방문객들에게 다양한 매력을 선사합니다." },
    { name: "후쿠오카", lat: 33.5903, lng: 130.4017, description: "일본 규슈 지방에 위치한 후쿠오카는 후쿠오카타워, 치나타운, 모모치 해변 등 다양한 명소와 함께 바다를 끼고 있는 아름다운 도시입니다. 또한, 후쿠오카는 일본의 남쪽에 위치해 있어 날씨가 포근하며, 가볍게 즐길 수 있는 음식인 하카타 라멘이 유명합니다." },
    { name: "고베", lat: 34.6900, lng: 135.1955, description: "일본 혼슈의 남쪽에 위치한 항구 도시 고베는 고베 항구, 고베 성, 아카시 해협 대교 등 다양한 명소와 함께 한적한 분위기를 자랑합니다. 고베는 특히 고베 소고기로 유명하며, 다양한 요리 방식으로 즐길 수 있는 도시입니다." },
    { name: "교토", lat: 35.0116, lng: 135.7681, description: "일본의 옛 수도인 교토는 고즈넉한 문화와 역사가 공존하는 도시로, 금각사, 은각사, 교토국립박물관 등 다양한 명소와 함께 전통적인 일본 가옥들이 산뜻한 도시를 이룹니다. 교토는 차도와 사찰이 유명하며, 전통 음식인 교토 요리를 즐길 수 있습니다." },
    { name: "히로시마", lat: 34.3961, lng: 132.4596, description: "히로시마는 1945년 원자폭탄으로 인한 피해로 유명한 도시입니다. 그러나 현재는 평화를 기리며, 히로시마 평화 기념공원, 평화의 소녀상, 원폭 돔 등 평화를 상징하는 명소들로 뒤덮인 도시입니다. 또한, 이와토야마 섬의 신사와 미야지마의 대토리문 등 주변 명소들도 인기가 많습니다. 히로시마는 또한 오이스터와 오코노미야키로 유명한 음식 도시로 알려져 있습니다." },
    { name: "나라", lat: 34.6851, lng: 135.8048, description: "일본의 오래된 역사와 문화를 가진 도시로, 나라 공원, 토다이지, 코후쿠지 등 세계 문화 유산에 등재된 명소들이 많이 위치해 있습니다. 특히 나라 공원에서는 사슴들이 마음껏 뛰어노는 모습을 볼 수 있으며, 일본 전통의 건축물과 정원을 감상할 수 있는 도시입니다." }
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
        center: { lat: 35, lng: 138.5 },
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
        position: { lat: 35, lng: 138.5 },
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


