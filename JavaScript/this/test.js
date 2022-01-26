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
      // 화살표 함수는 내부의  this 값을 변화시키지 않음 외부 this 값을 그대로 재사용
    });
  },
};

obj.fuc();
