
// from ? to ? 랜덤 정수를 발생시키는 함수
function f_ranNum(p_start, p_end) {
    return Math.floor(Math.random() * (p_end - p_start + 1)) + p_start; 
}