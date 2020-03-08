// JavaScript offers Module Loader Library (AMD, Commons JS,..) in itself.
// 호출되기 전까지는 코드가 실행되지 않는다.
export { sum };
export const pi = 3.141593;
function sum(x, y) {
	return x + y;
}
