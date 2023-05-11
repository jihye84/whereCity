

let cities = [
    { name: "베를린", lat: 52.5200, lng: 13.4050, description: "독일의 수도이자 가장 큰 도시로, 역사와 현대가 공존하는 도시입니다. 베를린 장벽의 유적, 브란덴부르크 문 등 다양한 역사적 명소가 있으며, 독일의 정치, 문화, 경제 중심지로서의 역할을 하고 있습니다." },
    { name: "뮌헨", lat: 48.1351, lng: 11.5820, description: "독일 남부의 주요 도시로 바이에른 주의 수도입니다. 뮌헨은 옥토버페스트로 유명하며, 바이에른 국립박물관, 뮌헨 공항 등 다양한 관광 명소와 기능을 갖추고 있습니다. 또한, 고요한 자연 환경과 전통 문화가 어우러진 도시로 알려져 있습니다." },
    { name: "프랑크푸르트", lat: 50.1109, lng: 8.6821, description: "독일의 금융 중심지로 유럽 중앙은행이 위치해 있습니다. 프랑크푸르트는 독일의 교통 허브 역할을 하며, 프랑크푸르트 국제공항이 세계 최대 규모의 공항 중 하나로 알려져 있습니다. 고층 건물이 빼곡한 도심은 독일의 발전을 상징하는 장소로 알려져 있습니다." },
    { name: "함부르크", lat: 53.5511, lng: 9.9937, description: "독일 북부에 위치한 항구 도시로, 엘베 강을 따라 세계적인 항구와 함께 번창한 도시입니다. 함부르크는 국제 무역의 중심지로 알려져 있으며, 함부르크 국제음악제, 미니아튀르 뮤지엄 등 다양한 문화 행사와 명소를 갖추고 있습니다." },
    { name: "쾰른", lat: 50.9375, lng: 6.9603, description: "라인 강을 끼고 있는 독일 서부의 주요 도시로 쾰른 대성당과 라인 강을 따라 가장 아름다운 도시 중 하나로 알려져 있습니다. 쾰른 대성당은 유네스코 세계문화유산에 등재되어 있으며, 쾰른 카니발, 쾰른 미술관 등 다양한 문화 행사와 명소를 경험할 수 있습니다. 또한, 쾰른은 세계 최대 규모의 쾰른 국제 가구 박람회 등 국제적인 박람회 도시로도 알려져 있습니다." },
    { name: "뒤셀도르프", lat: 51.2277, lng: 6.7735, description: "독일 북부 라인 지방의 중심 도시로, 현대적인 도시와 전통이 어우러진 아름다운 도시입니다. 뒤셀도르프는 패션, 예술, 문화의 중심지로 알려져 있으며, 코니그스알레 쇼핑 거리, 라인 강의 전망 좋은 산책로 등 다양한 볼거리와 즐길거리가 있습니다." },
    { name: "슈투트가르트", lat: 48.7758, lng: 9.1829, description: "독일 남서부의 주요 도시로, 자동차 산업의 발전과 함께 성장한 도시입니다. 슈투트가르트는 메르세데스 벤츠 박물관과 포르쉐 박물관 등 자동차 관련 명소로 유명하며, 독일의 과학, 기술 및 연구 중심지로도 알려져 있습니다." },
    { name: "라이프치히", lat: 51.3396, lng: 12.3731, description: "독일 동부에 위치한 역사와 문화의 도시로, 바흐, 멘델스존 등 유명한 음악가들의 발자취를 따라갈 수 있는 곳입니다. 라이프치히는 세계 최대 규모의 책 박람회인 라이프치히 책박람회가 열리는 도시로 알려져 있으며, 라이프치히 동물원, 라이프치히 대학 등 다양한 명소를 갖추고 있습니다." },
    { name: "드레스덴", lat: 51.0504, lng: 13.7373, description: "엘베 강을 따라 펼쳐진 독일 동부의 아름다운 도시로, '엘베의 피렌체'라 불리며 예술과 건축으로 유명합니다. 드레스덴은 드레스덴 제왕궁, 드레스덴 주커 부르크 박물관, 드레스덴 성당 등 다양한 역사적 명소가 있으며, 독일의 문화유산을 간직한 도시로 알려져 있습니다. 또한, 드레스덴은 연구와 기술의 중심지로, 많은 대학과 연구소가 위치해 있습니다." },
    { name: "노이레나", lat: 49.4521, lng: 11.0767, description: "독일 남부 바바리아 주에 위치한 도시로, 중세 건축물들이 잘 보존된 아름다운 도시입니다. 노이레나는 노이레나 성과 노이레나 시장 광장 등 다양한 역사적 명소를 갖추고 있으며, 독일의 전통 문화를 느낄 수 있는 곳으로 알려져 있습니다. 노이레나는 또한, 노이레나 관현악단과 관련하여 음악적으로도 유명한 도시입니다." }
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
        center: { lat: 51, lng: 10.25 },
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
        position: { lat: 51, lng: 10.25 },
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


