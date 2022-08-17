var request = {}; // name-space용 빈객체  // 사용자 요청(request)을 담은 객체

request.getParameter = function(p_name) {  // name을 넘기면 value을 리턴
    if(location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_nvSSang = v_queryString.split("&");
    for (var i = 0; i < v_nvSSang.length; i++) {
        var nv = v_nvSSang[i].split("=");
        if (nv[0] == p_name) {
            return decodeURIComponent(nv[1]);   // return 값에다가 디코딩 함수 선언
        }
    }
    return null;  // 못찾았다면 null, 꼭 null일 필요는 없음
}

//같은 name으로 값이 여러개 넘어오는 것 처리 할 함수
request.getParameterValues=function(p_name){  // name을 넘기면 value를 리턴
    if(location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_values = []; // 값을 담을 배열
    var v_nvSSang = v_queryString.split("&");
    for(var i=0; i<v_nvSSang.length; i++){
        var nv = v_nvSSang[i].split("=");
        if(nv[0] == p_name){
            v_values.push(nv[1]); // 배열에 담기
        } 
    }
    if(!v_values.length){    // 배열의 length가 0이면
        return null;
    }
    return v_values; // 배열의 length가 0이 아니라면
}


/* 인코딩 함수           디코딩 함수
   escape               unescape            먼 옛날 버전
   encodeURI            decodeURI           옜날 버전
   encodeURIComponent   decodeURIComponent  최근버전(권장)
   짝맞춰 사용하는 것이 중요(일부 글자 인코딩이 서로 다름)
*/
// alert(getParameter("nm_title"));
// alert(getParameter("nm_writer"));
// alert(getParameter("nm_content"));
// alert(getParameter("nm_cat"))
// alert(getParameterValues("nm_cat"))
// alert(decodeURIComponent(getParameter("nm_title")));
// alert(decodeURIComponent(getParameter("nm_writer")));
// alert(decodeURIComponent(getParameter("nm_content")));