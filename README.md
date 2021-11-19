# front_end_like_lion_learning
<br>
<br>
<br>
 
<h3>수업 복습</h3><br>
<br>
<br>

<p align="center">
한국스타트업<br>
(Koreastartup)<br>
HTML - 마크업 구조 이해하고 시멘틱한 태그로 구성해보기 
<br>
<br>


 
[ 복습내용링크 ](https://chry8822.github.io/front_end_like_lion_learning/html%20%EA%B3%BC%EC%A0%9C%20-%20%EC%82%AC%EC%9D%B4%ED%8A%B8%20%EB%A7%88%ED%81%AC%EC%97%85/koreaStartup.html)

 
<br>
<br><br><br><br>
 
<hr>
 
# 반응형 유튜브 UI 클론 코딩
<br><br><br>

### 개인공부

<br>

 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a> 
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>

<br>
<br>
<br>

간단한 모양의 유튜브 동영상 페이지 UI 클론 코딩 연습하기
HTML 과 CSS 그리고 필요한 값을 미리 :root 의 변수의 지정하여 활용해보기 (처음해봤는데 익숙해지면 활용도가 높을꺼 같다.)
diplay:flex 와 position: sitky 를 메인으로 활용하여 만들어 봤는데 flex의 편리함을 다시 한번 느낄수 있었던 연습이였다.
중간중간 막히는 부분은 크롬 개발자 도구와 구글링 그리고 참고영상을 몇번씩 되돌려보며 작업했고 작업시 완전히 따라만 하는게 아니라
조금씩 다르게 스타일을 적용하면서 해당 속성의 개념과 사용법을 익히면서 하니 클론 코딩을 해보기 전보다 나아진거 같다. 
<br>

* 동영상은 구글링으로 free video 
* 아이콘은 font-awesome
* 폰트는 눈누에서 받은 IBM Plex Sans Regular

<br>
시간 날때마다 css 속성들에 대해서 복습해봐야 겠다.


<br>
<br>
아래는 완성된 이미지 와 링크
<br>

[ 링크 바로가기 ](https://chry8822.github.io/front_end_like_lion_learning/YoutubeClone/%EC%9C%A0%ED%8A%9C%EB%B8%8C%20%ED%8E%98%EC%9D%B4%EC%A7%80%20%ED%81%B4%EB%A1%A0%20%EC%BD%94%EB%94%A9/Youtube.html)
         
<br>
         
<img width="500px" src="https://user-images.githubusercontent.com/89508217/140650367-2077ba68-d2ea-484d-9a44-91faa4c790b5.jpg">

<br>
<br>

# 버튼 만들기.

<br>

### 개인공부

<br>
<br>
transform 과 transition 그리고 animation 복습을 목적으로 만든 버튼 1.2
<br>
아직 생각하는 거처럼 나오지는 않지만 틈틈히 만들어볼 생각.
<br>
시각적 느낌과 동적인 느낌을 주기 위해서 transform 과 transition 그리고 animation 을 사요함.
<br>

<img width="400px" src="https://user-images.githubusercontent.com/89508217/141352105-a1c9e1a5-487f-4d6d-9cff-920b900cb8a8.gif">

<img width="400px" src="https://user-images.githubusercontent.com/89508217/141352160-bd99c48b-73ec-4e6f-854e-912c68070988.gif">

<br>
<br>


# 정글 시네마 페이지 만들기.

<br>
<br>

### 과제

<br>

* 처음에 클론코딩 과제로 나왔지만 다른 작은 과제들이 많아서 이번 과제는 강사님과 함께 진행 되었고 100% 완성은 아니고 안에 세부적인 내용들은 따로 작업을 더 해줘야한다.
* 최대한 문서의 문맥과 구조에 맞는 태그들을 사용하고 알맞는 클래스 네이밍으로 간결하고 의미에 맞는 코드작성이 중요하다는걸 알게 되었다.

<br>

[정글시네마 링크](https://chry8822.github.io/front_end_like_lion_learning/%EC%A0%95%EA%B8%80%EC%8B%9C%EB%84%A4%EB%A7%88/%EA%B3%BC%EC%A0%9C1(%EB%9D%BC%EC%9D%B4%EC%BA%A3)/Cinema.html)

<br>

![정글시네마](https://user-images.githubusercontent.com/89508217/141681945-85347b39-5f2c-4f0c-b0b7-779fc77cad94.png)

<br>




<br>
<br>

# 애플 공식사이트 클론하기.

<br>
<br>
* html ,css 로 첫 메인페이지 진행중
* 최상단 메뉴를 fixed 했을때 다음 relative에서 사라져서 z-index 를 사용해서 위로 올려서 해결
* 매 섹션 마다 섹션 전체가 앵커로 클릭이 되어야 하고 쇼핑하기, 더알아보기, 구입하기 텍스트가 앵커로 작동해야되는데 화면 전체가 앵커로 작혀 있어야해서 
* position : abosolute , z-index(텍스트앵커보다 아래로) . 높이와 너비는 해당 섹션 이미지에 맞춤, background-color 는 transparent 로 주니까 전체 앵커로 잡히고 그위에 텍스트 앵커만 따로 잡힘.
* 전체로 잡힌 앵커에 접근성과 스크린리더기에 읽히도록 텍스트로 어디로 이동하는지 작성 해야될거 같다.
* 지금까지 배우고 내가 아는 내용으로 작업하느라 css가 정리가좀 안되고 중간중간 구글링으로 찾은 방법들이 섞여서 일단 완성후에 리뷰해봐야 될거 같음.
* 아직 섹션3 까지 진행중...

<br>
<br>

[애플 클론 코딩 진행중...](https://chry8822.github.io/front_end_like_lion_learning/WebCloneCoding/%EC%95%A0%ED%94%8C%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9/appleClone.html)
