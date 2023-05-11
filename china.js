

let cities = [
    { name: "베이징", lat: 39.9042, lng: 116.4074, description: "중국의 수도로 긴 역사와 문화를 자랑하는 도시입니다. 대성전, 국립중화문, 국립박물관 등 역사적인 명소와 만리장성, 선양광장 등 현대적인 건축물이 있는 도시입니다." },
    { name: "상하이", lat: 31.2304, lng: 121.4737, description: "중국의 경제와 금융 중심지로 알려진 도시로, 잠자코, 웨이탄, 상하이 타워 등 현대적인 건축물과 하이라이프를 즐길 수 있는 도시입니다." },
    { name: "청도", lat: 36.0671, lng: 103.8343, description: "중국의 서북부에 위치한 도시로, 마오리강, 청도사원, 무장사 등 자연과 역사적인 명소가 있는 도시입니다." },
    { name: "칭다오", lat: 36.0671, lng: 120.3826, description: "중국의 동북부에 위치한 도시로, 유니버시아드 경기장, 바다공원, 타이산 등 아름다운 해변과 경치를 자랑하는 도시입니다." },
    { name: "쑤저우", lat: 30.2741, lng: 120.1551, description: "중국 동남부에 위치한 도시로, 서호, 동호, 현동 등 아름다운 호수와 다리가 있는 도시입니다." },
    { name: "성도", lat: 29.6075, lng: 106.5536, description: "중국 중부에 위치한 도시로, 대각산, 린양관, 삼기관 등 역사적인 명소와 경치를 자랑하는 도시입니다." },
    { name: "구이양", lat: 28.6350, lng: 118.6759, description: "중국의 동남부에 위치한 도시로, 푸데시, 푸데산, 황산 등 자연과 역사적인 명소가 있는 도시입니다." },
    { name: "산하이", lat: 31.1667, lng: 121.4667, description: "중국의 동북부에 위치한 도시로, 도쿄 디즈니 랜드, 푸데산, 황산 등 자연과 역사적인 명소가 있는 도시입니다." },
    { name: "난징", lat: 32.0603, lng: 118.7969, description: "중국의 동부에 위치한 도시로, 한국공원, 단위국제박물관, 중국문화궁 등 다양한 문화와 역사적인 명소가 있는 도시입니다." },
    { name: "칭차오", lat: 29.5630, lng: 106.5516, description: "중국의 중서부에 위치한 도시로, 산시절공원, 산시화폐관, 화춘소 등 역사적인 명소와 아름다운 경치를 자랑하는 도시입니다." },
    { name: "하이난", lat: 20.0442, lng: 110.1967, description: "중국의 남부에 위치한 섬 도시로, 소동강, 해전박물관, 동해 등 아름다운 해변과 자연 경치가 있는 도시입니다." },
    { name: "서놈", lat: 21.6789, lng: 110.9311, description: "중국의 남부에 위치한 도시로, 리우 캉푸, 동안문, 서푸헤국립공원 등 다양한 명소와 아름다운 자연 경치를 자랑하는 도시입니다." },
    { name: "타이위안", lat: 26.0789, lng: 119.2965, description: "중국의 동부에 위치한 도시로, 삼국지 유적지, 타이위안궁, 푸호산 등 다양한 문화와 역사적인 명소가 있는 도시입니다." },
    { name: "쉐산도", lat: 30.1164, lng: 122.1403, description: "중국의 동부에 위치한 도시로, 오로베이길, 쉐산도해상공원, 산문화관 등 아름다운 해변과 자연 경치를 자랑하는 도시입니다." },
    { name: "심양", lat: 22.5370, lng: 114.1115, description: "중국의 남동부에 위치한 도시로, 심양새공원, 오오타이산, 심양광장 등 아름다운 도시 경치와 명소가 있는 도시입니다." },
    { name: "북경", lat: 39.9042, lng: 116.4074, description: "중국의 수도로서 중국의 정치, 문화, 경제의 중심지로 알려진 도시입니다. 대성전, 국립중화문, 국립박물관 등 역사적인 명소와 만리장성 등이 있습니다." },
    { name: "항저우", lat: 30.2741, lng: 120.1551, description: "중국 동부에 위치한 도시로, 서호, 동호, 현동 등 아름다운 호수와 다리가 있는 도시입니다." },
    { name: "충칭", lat: 29.5630, lng: 106.5516, description: "중국의 중서부에 위치한 도시로, 산시절공원, 산시화폐관, 화춘소 등 역사적인 명소와 아름다운 경치를 자랑하는 도시입니다." },
    { name: "하이난", lat: 20.0442, lng: 110.1967, description: "중국의 남부에 위치한 섬 도시로, 소동강, 해전박물관, 동해 등 아름다운 해변과 자연 경치가 있는 도시입니다." },
    { name: "쉐산도", lat: 30.1164, lng: 122.1403, description: "중국의 동부에 위치한 도시로, 오로베이길, 쉐산도해상공원, 산문화관 등 아름다운 해변과 자연 경치를 자랑하는 도시입니다." },
    { name: "심양", lat: 22.5370, lng: 114.1115, description: "중국의 남동부에 위치한 도시로, 심양새공원, 오오타이산, 심양광장 등 아름다운 도시 경치와 명소가 있는 도시입니다." },
    { name: "서두안저우", lat: 30.5763, lng: 104.0734, description: "중국의 서남부에 위치한 도시로, 청순사, 이화문, 레춘씨 공원 등 다양한 명소와 아름다운 자연 경치를 자랑하는 도시입니다." },
    { name: "성도", lat: 31.1667, lng: 121.4667, description: "중국의 동북부에 위치한 도시로, 도쿄 디즈니 랜드, 푸데산, 황산 등 자연과 역사적인 명소가 있는 도시입니다." },
    { name: "진주", lat: 36.8145, lng: 118.0476, description: "중국 동북부에 위치한 도시로, 청도산, 분룡동, 원불산 등 아름다운 자연 경치와 역사적인 명소를 갖고 있는 도시입니다." }
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
        center: { lat: 36, lng: 104 },
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
        position: { lat: 36, lng: 104 },
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


