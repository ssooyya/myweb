//관광지 정보 조회 ajax + api
var api_key = 'C1kTT5SDomuASfikyoi68DoMygPZN35TX4oq5AsfuOvznPN2X3cciPhyU5HObfGBz7tyl83nmm%2Ba986uutA3yw%3D%3D'; //공공데이터 api

$(document).ready(function(){
    $("#btn_load").click(function(){
        var url;
        let keyword = encodeURIComponent(document.getElementById('keyword').value.trim());
        let itemPerPage = document.getElementById('itemPerPage').value;
        let curPage = document.getElementById('curPage').value;
        let contentTypeId = document.getElementById('contentTypeId')
        contentTypeId = contentTypeId.options[contentTypeId.selectedIndex].value;

        url = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${api_key}&numOfRows=${itemPerPage}&pageNo=${curPage}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${keyword}&contentTypeId=${contentTypeId}`;
        $.ajax({
			url: url,
			type: "GET",
			success: function(data, status){
				(status == "success") && parseJSON(data);
			},
		});
        const frm = document.forms['frm'];
        if(frm.keyword.value == ""){
            alert("키워드는 필수입니다.");
            document.getElementById('keyword').focus();
        }
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
    table.push("<tr><th>제목</th><th>주소</th><th>원본</th>");
    for(it of jsonObj.response.body.items.item){
        // originImg = document.createElement('img');
        // originImg.src = it.firstimage;

        // thumbnailImg = document.createElement('img');
        // thumbnailImg.src = it.firstimage2;
        
        originImg = `<img src="${it.firstimage}" alt="원본 이미지" style="max-width:300px; max-height:200px;">`;
        // thumbnailImg = `<img src="${it.firstimage2}" alt="썸네일 이미지" style="max-width:150px; max-height:150px;">`;
        table.push(`
        <tr>
            <td>${it.title}</td>
            <td>${it.addr1}</td>
        	<td id="origin">${originImg}</td>
        </tr>
        `);
    }
    $("#demoJSON").html(table.join('\n'));
}