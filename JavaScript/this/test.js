document.getElementById("버튼").addEventListener("click", function (e) {
  var array = [1, 2, 3];
  array.forEach(function (a) {
    console.log(this); // 일반 함수이므로 window 객체를 가르킨다.
  });
});

var obj = {
  name: [1, 2, 3],
  fuc: function () {
    console.log(this); // 여기 this 는 obj 를 가르킨다.
    obj.name.forEach(() => {
      console.log(this);
      // 화살표 함수는 내부의 this 값을 변화시키지 않음 외부 this 값을 그대로 재사용
    });
  },
};

obj.fuc();


let person = {
  name : "chrys",
  age : 20,
  printThis : function() {
    console.log(this);
    console.log(this === person);
    console.log(this.name);
  }
}

// person.printThis()
// person에 의해서 호출되었기 때문에 현재의 this는 person 이다.

let printThis = person.printThis;
printThis();
// person.printThis를 변수에 담고 변수를 호출하면 this 는 window객체를 가르킨다.


function printThis2 () {
  console.log("호출한놈", this)
}
printThis2(); // 전역에서 호출했기때문에 this 는 window(defualt 값)


let person1 = {
  name : "ahn",
  printThis2 : printThis2,
};

person1.printThis2()
// 여기서 this는 호출한 person1의 this 를 가르킨다.


let btn = document.querySelector('#this');

btn.addEventListener('click', function() {
  console.log(this);
  console.log(this === btn);
})
// 여기서 this는 btn 을 가르킨다. btn = 버튼요소 <button id="this">this버튼</button>

// ES5 bind

function thisBind () {
  console.log("thisBind 의 this 값",this); // 현재 this 는 window
}

let personThis = {
  name: "chrys",
}
// this를 바인드 하고싶은 객체를 만든다

let printThis3 = thisBind.bind(personThis); 
// 새로운 변수에 this가 있는 함수에 뒤에 .bind 메서드로 바인드하고 싶은 객체를 넣어준다.

printThis3();
// this값은 personThis 를 가르킨다.
// 함수에 바인드 메서드는 한번만 가능하다.


let test = {
  name : "chrys",
  age : 20,
  hello : function () {
    setTimeout(()=> {
      console.log(this)
      console.log(this.name)
      console.log(this.age)
    },2000);
  }
}

test.hello();
//화살표 함수는 자신을 감싸고 있는 위부 스코프의 this 값을 계승 받는다.
// hello 함수의 this 는 test 이다.


// let test2 = {
//   name : "chrys",
//   testThis : () => {
//     console.log("testThis ===",this)
//   }
// }
// 
// test2.testThis();
// 여기서 this 는 window를 가르킨다. test2는 전역에 선언되었기 때문에 화살표함수는 window를 계승받는다.


// let test2 = {
//   name : "chrys",
//   testThis : function() {
//     console.log("testThis ===",this)
//   }
// }
// test2.testThis();
// 함수 선언문의 this는 test2에 의해 호출 되었기 때문에 test2 를 this로 가르킨다.
