//변수
let name="주동호 ";// let을 선언할 경우에는 바꿀수 있지만 let을 사용하지 않으면 바꾸지못함

const name1="동호";//보통 변하지 않는 값음 const를 사용한다
const name2='동호';
const name3="동호";
const name4=`내이름은 ${30+1}이고`;//파이썬 f프린트 같이 할려면 이렇게

console.log(name4)//콘솔 로그를 띄우는 명령어

const age=30;
const PI=3.14;
//연산자
console.log(1+1)//더하기
console.log(10-3);//뺴기
console.log(10*3);//곱하기
console.log(6/3);//나누기
console.log(10%3);//나머지  //Nan 숫자가 아니다 //infinity 무한대

console.log(name1=="동호");//비교
console.log(age<10)//비교
console.log(age>10)
//자료형
let a;
console.log(a)//undefined 변수 내용이 지정되지 않음

console.log(typeof 1);
console.log(typeof "문자열");
console.log(typeof 1==1);
console.log(typeof undefined);
//alert ,propt , confirm
alert("이건 일반적인 경고야!");//경고형 알리는데 사용 소통 X
const user=prompt("이름을 입력해주세요!","이 안에다가 작성해주세요")
alert(`안녕하세요${user}님 환영합니다`)
console.log(user)

const bool=confirm("참이냐 거짓이냐 참이면 확인 거짓이면 취소")
console.log(bool)

형 변환 ()String =>문자열로 변경 ()Number=>숫자형으로 변경 ()boolean=>불린형
//형 변환 ()String =>문자열로 변경 ()Number=>숫자형으로 변경 ()boolean=>불린형

const mathScore=prompt("수학 점수를 입력해주세요");
const enScore=prompt("수학 점수를 입력해주세요");
const m=(Number(mathScore));
const e=(Number(enScore));
const result=(m+e)/2;
console.log(result);
console.log((String(3)));//숫자형을 문자열로 변환
console.log((Number("3")));//숫자형을 문자열로 변환
console.log(Boolean(0));//숫자형을 불린형으로 변경 " ",null undefined Nan 빼고는 전부다 true

//연산자 보충
//홀수x%2=1;//짝수x%2=0;
//2**3거듭제곱
let num=10;
// num=num+10; 위에코드는 아래도 사용가능
num+=10;
console.log(num)
let num=10;
let plus=++num;
let minus=--num;
console.log(plus,minus)

//비교 연산자
a=3; //a는 3에 들어간다
a==3;//a는 3이랑 같다
b!=3;//b는 3이 아니다
const a=1;
const b="1";
console.log(a==b);
console.log(a===b);//타입까지 확인할경우


//if 문
age=19;
if (age>20){
  console.log('성인 입니다.');
}
else if (age === 19) {
  console.log("19살 입니다.");
}
else {
  console.log("청소년 입니다.");
}
console.log("==============")



