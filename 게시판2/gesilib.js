// var v_queryString = location.href.split("?")[1];
// alert(v_queryString.split("&")[1].split("=")[1]); // 글쓴이 확인가능
// 개발자는 귀차니즘에 반복될 거 같은 예감에 일을 시작합니다
var v_tblName = "gesiTB";
var request = {};   // name-space용 빈객체
// 사용자 요청(request)을 담은 객체
request.getParameter = function (p_name) { // name을 넘기면 value를 리턴해주는
    if (location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_nvSSang = v_queryString.split("&");
    for (var i = 0; i < v_nvSSang.length; i++) {
        var nv = v_nvSSang[i].split("=");
        if (nv[0] == p_name) {
            return decodeURIComponent(nv[1]);
        }
    }
    return null;  // 못찾았다면 null, 꼭 null일 필요는 없음
}

// 같은 name으로 값이 여러개 넘어오는 것 처리 할 함수
request.getParameterValues = function (p_name) { // name을 넘기면 value를 리턴해주는
    if (location.href.indexOf("?") == -1) return null;
    var v_queryString = location.href.split("?")[1];
    var v_values = []; // 값을 담을 배열
    var v_nvSSang = v_queryString.split("&");
    for (var i = 0; i < v_nvSSang.length; i++) {
        var nv = v_nvSSang[i].split("=");
        if (nv[0] == p_name) {
            v_values.push(nv[1]); // 배열에 담깅
        }
    }
    if (!v_values.length) return null;  //배열의 length가 0이면
    return v_values;  // 배열의 length가 0이 아니라면
}

/*  인코딩 함수          디코딩 함수
    escape              unescape                아주 옛날꺼
    encodeURI           decodeURI               조금 옛날꺼
    encodeURIComponent  decodeURIComponent      최근꺼(권장)
    짝 맞춰 사용하는 것이 중요(일부 글자 인코딩이 서로 다름)
*/

    // alert(getParameter("nm_title"));
    // alert(getParameter("nm_writer"));
    // alert(getParameter("nm_content"));
    // alert(getParameterValues("nm_cat"));