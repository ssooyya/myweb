//숙박정보조회 ajax + api
var api_key = 'C1kTT5SDomuASfikyoi68DoMygPZN35TX4oq5AsfuOvznPN2X3cciPhyU5HObfGBz7tyl83nmm%2Ba986uutA3yw%3D%3D'; //공공데이터 api

$(document).ready(function(){
    var areaCode = document.getElementById("areaCode");
    var sigunguCode = document.getElementById("sigunguCode");
    areaCode.addEventListener("change", function() {
        var selectedAC = areaCode.value;
    
        sigunguCode.innerHTML = "";

        if(selectedAC === "%20"){   //전체
            var allList = [{"전체" : "%20"}];
            for(var i = 0; i < allList.length; i++){
                var option = document.createElement("option");
                option.text = Object.keys(allList[i])[0];
                option.value = Object.values(allList[i])[0];
                sigunguCode.appendChild(option);
            }
        }
        else if (selectedAC === "1") {   //서울
            var seoulSCList = [{"전체" : "%20"},{"강남구": 1},{"강동구" : 2},{"강북구": 3},{"강서구" : 4},{"관악구" : 5},{"광진구" : 6},{"구로구" : 7},{"금천구" : 8},{"노원구" : 9},{"도봉구" : 10},{"동대문구" : 11},{"동작구" : 12},{"마포구" : 13}
            ,{"서대문구" : 14},{"서초구" : 15},{"성동구" : 16},{"성북구" : 17},{"송파구" : 18},{"양천구" : 19},{"영등포구" : 20},{"용산구" : 21},{"은평구" : 22},{"종로구" : 23}, {"중구" : 24},{"중랑구" : 25}];
            for (var i = 0; i < seoulSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(seoulSCList[i])[0];
                option.value = Object.values(seoulSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "2") {    //인천
            var incheonSCList = [{"전체" : "%20"},{"강화군" :  1},{"계양구" : 2},{"미추홀구" : 3},{"남동구" : 4},{"동구" : 5}, {"부평구" : 6},{"서구" : 7},{"연수구" : 8},{"옹진군" : 9},{"중구" : 10}];
            for (var i = 0; i < incheonSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(incheonSCList[i])[0];
                option.value = Object.values(incheonSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "3") {    //대전
            var dajeonSCList = [{"전체" : "%20"},{"대덕구" : 1},{"동구" : 2},{"중구" : 5},{"서구" : 3},{"유성구" : 4}];
            for (var i = 0; i < dajeonSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(dajeonSCList[i])[0];
                option.value = Object.values(dajeonSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "4") {    //대구
            var daeguSCList = [{"전체" : "%20"},{"남구" : 1},{"달서구" : 2},{"달성군" : 3},{"동구" : 4},{"북구" : 5}, {"서구" : 6},{"수성구" : 7},{"중구" : 8},{"군위군" : 9}];
            for (var i = 0; i < daeguSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(daeguSCList[i])[0];
                option.value = Object.values(daeguSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "5") {    //광주
            var gwangjuSCList = [{"전체" : "%20"},{"광산구" : 1}, {"남구" : 2}, {"동구" : 3},{"북구" : 4}, {"서구" : 5}];
            for (var i = 0; i < gwangjuSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(gwangjuSCList[i])[0];
                option.value = Object.values(gwangjuSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "6") {    //부산
            var busanSCList = [{"전체" : "%20"},{"강서구" : 1},{"금정구" : 2},{"기장군" : 3},{"남구" : 4},{"동구" : 5},{"동래구" : 6},{"부산진구" : 7},{"북구" : 8}
            ,{"사상구" : 9},{"사하구" : 10},{"서구" : 11},{"수영구" : 12},{"연제구" : 13},{"영도구" : 14},{"중구"  : 15},{"해운대구" : 16}];
            for (var i = 0; i < busanSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(busanSCList[i])[0];
                option.value = Object.values(busanSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        }else if (selectedAC === "7") {     //울산
            var ulsanSCList = [{"전체" : "%20"},{"중구" : 1},{"남구" : 2},{"동구" : 3}, {"북구" : 4},{"울주군" : 5}];
            for (var i = 0; i < ulsanSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(ulsanSCList[i])[0];
                option.value = Object.values(ulsanSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        }else if (selectedAC === "8") {     //세종특별자치시
            var sejongSCList = [{"전체" : "%20"},{"세종특별자치시" : 1}];
            for (var i = 0; i < sejongSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(sejongSCList[i])[0];
                option.value = Object.values(sejongSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "31") {   //경기
            var gyeonggiSCList = [{"전체" : "%20"},{"가평군" : 1},{"고양시" : 2},{"과천시" : 3},{"광명시" : 4},{"광주시" : 5},{"구리시" : 6},{"군포시" : 7}
            ,{"김포시" : 8},{"남양주시" : 9},{"동두천시" : 10},{"부천시" : 11},{"성남시" : 12},{"수원시" : 13},{"시흥시" : 14},{"안산시" : 15},{"안성시" : 16},{"안양시" : 17},{"양주시" : 18},{"양평군" : 19},{"여주시" : 20},{"연천군" : 21},{"오산시" : 22},{"용인시" : 23},{"의왕시" : 24} ,{"의정부시" : 25},{"이천시" : 26},{"파주시" : 27},{"평택시" : 28},{"포천시" : 29},{"하남시" : 30},{"화성시" : 31}];
            for (var i = 0; i < gyeonggiSCList.length; i++) {
                var option = document.createElement("option");
                option.text = gyeonggiSCList[i];
                option.value = gyeonggiSCList[i];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "32") {   //강원특별자치도
            var gangwonSCList = [{"전체" : "%20"},{"강릉시" : 1},{"고성군" : 1}, {"동해시" : 2}, {"삼척시" : 4}, {"속초시" : 5}, {"양구군" : 6}, {"양양군" : 7}, {"영월군" : 8}, {"원주시" : 9}, {"인제군" : 10}, {"정선군" : 11}, {"철원군" : 12}, {"춘천시" : 13}, {"태백시" : 14},{"평챵군" : 15}, {"홍천군" : 16},{"화천군" : 17}, {"횡성군" : 18}];
            for (var i = 0; i < gangwonSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(gangwonSCList[i])[0];
                option.value = Object.values(gangwonSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "33") {   //충청북도
            var ccNSCList = [{"전체" : "%20"},{"괴산군" : 1},{"단양군" : 2},{"보은군" : 3},{"영동군" : 4},{"옥천군": 5},{"음성군" : 6},{"제천시" : 7},{"진천군" : 8},{"청원군" : 9}, {"청주시" : 10}, {"충주시" : 11}, {"증평군" : 12}];
            for (var i = 0; i < ccNSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(ccNSCList[i])[0];
                option.value = Object.values(ccNSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "34") {   //충청남도
            var ccSSCList = [{"전체" : "%20"},{"공주시" : 1},{"금산군" : 2}, {"논산시" : 3}, {"당진시" : 4}, {"보령시": 5}, {"부여군" : 6}, {"서산시" : 7}, {"서천군" : 8}, {"아산시" : 9},{"예산군" : 10}, {"천안시" : 12}, {"청양군" : 13},{"태안군" : 14}, {"홍성군" : 15}, {"계룡시" : 16}];
            for (var i = 0; i < ccSSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys( ccSSCList[i])[0];
                option.value = Object.values( ccSSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "35") {   //경상북도
            var gsNSCList = [{"전체" : "%20"}, {"경산시" : 1}, {"경주시" : 2}, {"고령군" : 3}, {"구미시" : 4}, {"김천시" : 6}, {"문경시" : 7}, {"봉화군" : 8}, {"상주시" : 9}, {"성주군" : 10}, {"안동시" : 11}, {"영덕군" : 12}, {"영양군" : 13}, {"영주시" : 14}, {"영천시" : 15}, {"예천군" : 16}, {"울릉군" : 17},{"울진군" : 18}, {"의성군" : 19}, {"청도군" : 20}, {"청송군" : 21}, {"칠곡군" : 22}, {"포항시" : 23}];
            for (var i = 0; i < gsNSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(gsNSCList[i])[0];
                option.value = Object.values(gsNSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "36") {   //경상남도
            var gsSSCList = [{"전체" : "%20"}, {"거제시" : 1}, {"거창군" : 2}, {"고성군" : 3},{"김해시" : 4},{"남해군" : 5},{"마산시" : 6},{"밀양시" : 7},{"사천시" : 8},  {"산청군" : 9}, {"양산시" : 10},{"의령군" : 12}, {"진주시" : 13}, {"진해시" : 14},{"창녕군" : 15},{"창원시" : 16},{"통영시" :17}, {"하동군" : 18}, {"함안군" : 19},{"함양군":20}, {"합천군" : 21}];
            for (var i = 0; i < gsSSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(gsSSCList[i])[0];
                option.value = Object.values(gsSSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "37") {   //전라북도
            var jlNSCList = [{"전체" : "%20"}, {"고창군" : 1}, {"군산시" : 2},{"김제시" : 3},{"남원시" : 4},{"무주군" : 5}, {"부안군" : 6},{"순창군" : 7}, {"완주군":8},{"익산시" : 9},{"임실군" : 10}, {"장수군" : 11}, {"전주시" : 12}, {"정읍시" : 13}, {"진안군" : 14}];
            for (var i = 0; i < jlNSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(jlNSCList[i])[0];
                option.value = Object.values(jlNSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "38") {   //전라남도
            var jlSSCList = [{"전체" : "%20"}, {"강진군" : 1}, {"고흥군" : 2}, {"곡성군" : 3}, {"광양시" : 4}, {"구례군" : 5}, {"나주시" : 6}, {"담양군" : 7}, {"목포시" : 8}, {"무안군" : 9}, {"보성군" : 10}, {"순천시" : 11}, {"신안군" : 12}, {"여수시" : 13}, {"영광군" : 16}, {"영암군" : 17}, {"완도군" : 18}, {"장성군" : 19}, {"장흥군" : 20}, {"진도군" : 21}, {"함평군" : 22}, {"해남군" : 23}, {"화순군" : 24}];
            for (var i = 0; i < jlSSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(jlSSCList[i])[0];
                option.value = Object.values(jlSSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        } else if (selectedAC === "39") {   //제주도
            var jejuSCList = [{"전체" : "%20"}, {"남제주군" : 1}, {"북제주군" : 2}, {"서귀포시" : 3}, {"제주시": 4}];
            for (var i = 0; i < jejuSCList.length; i++) {
                var option = document.createElement("option");
                option.text = Object.keys(jejuSCList[i])[0];
                option.value = Object.values(jejuSCList[i])[0];
                sigunguCode.appendChild(option);
            }
        }
    });
    $("#btn_load").click(function(){
        var url;
        let itemPerPage = document.getElementById('itemPerPage').value;
        let curPage = document.getElementById('curPage').value;
        let areaCode = document.getElementById('areaCode')
        areaCode = areaCode.options[areaCode.selectedIndex].value;
        let sigunguCode = document.getElementById('sigunguCode')
        sigunguCode = sigunguCode.options[sigunguCode.selectedIndex].value;
        
        url = `http://apis.data.go.kr/B551011/KorService1/searchStay1?serviceKey=${api_key}&numOfRows=${itemPerPage}&pageNo=${curPage}&MobileOS=ETC&MobileApp=AppTest&areaCode=${areaCode}&sigunguCode=${sigunguCode}&_type=json`;
        // url =  `http://apis.data.go.kr/B551011/KorService1/searchStay1?serviceKey=C1kTT5SDomuASfikyoi68DoMygPZN35TX4oq5AsfuOvznPN2X3cciPhyU5HObfGBz7tyl83nmm%2Ba986uutA3yw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&areaCode=1&_type=json`;     
        $.ajax({
			url: url,
			type: "GET",
			success: function(data, status){
				(status == "success") && parseJSON(data);
			},
		});
        const frm = document.forms['frm'];
        if(frm.itemPerPage.value > 10 || frm.itemPerPage.value < 1){
            alert("출력ROW는 1 ~ 10 사이의 정수이어야 합니다");
        }
    });
    $("#btn_remove").click(function(){
		$("#demoJSON").empty();
	});
});

function parseJSON(jsonObj) {
    const table = [];
    table.push("<tr><th>제목</th><th>주소</th><th>전화번호</th><th>원본</th>");
    
    for(it of jsonObj.response.body.items.item){
        // originImg = document.createElement('img');
        // originImg.src = it.firstimage;
        // thumbnailImg = document.createElement('img');
        // thumbnailImg.src = it.firstimage2;
        //img 태그 추가 -> 링크
        originImg = `<img src="${it.firstimage}" alt="원본 이미지" style="max-width:300px; max-height:200px;">`;
        // thumbnailImg = `<img src="${it.firstimage2}" alt="썸네일 이미지" style="max-width:150px; max-height:150px;">`;
        table.push(`
        <tr>
            <td>${it.title}</td>
            <td>${it.addr1}</td>
            <td>${it.tel}</td>
        	<td>${originImg}</td>
        </tr>
        `);
    }
    $("#demoJSON").html(table.join('\n'));
}
