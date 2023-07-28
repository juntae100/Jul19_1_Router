// 첫 접속 때 html 없이 h1태그로 >> START!! << 나오게
const express= require('express');

const app = express();

const port=3000;


app.get('/',  (req, res) => {
    res.send('<h1>START!!</h1>')

});

// app.get('hwang/1', (req, res) => {
//     res.send('경로 :  /hwang/1');
// })

// app.get('hwang/2', (req, res) => {
//     res.send('경로 :  /hwang/2');
// })

// app.get('hwang/3', (req, res) => {
//     res.send('경로 :  /hwang/3');
// })

// app.get('lee/1', (req, res) => {
//     res.send('경로 :  /lee/1');
// })

// app.get('lee/2', (req, res) => {
//     res.send('경로 :  /lee/2');
// })

// app.get('lee/3', (req, res) => {
//     res.send('경로 :  /lee/3');
// })

// 처리해야 할 요청이 무수히 많아지는 경우
// 이 요청들을 파일 하나에 관리하기에는 무리가 있다~
// 이 요청들을 분리하는 방법 > Router
// routes라는 폴더 하나 생성

// /hwang <<
// /lee << 
// /park << 

const hwangRouter = require('./routes/hwang.js');
// router 파일들을 인식할 수 있음!

app.use('/hwang', hwangRouter); // localhost:3000/hwang

// ex) 'http://localhost:3000/hwang/3' 요청이 왔다고 가정
//      index.js의 app.use('/hwang', hwangRouter)에서 요청을 가로챔
//      './roues/hwang.js로 요청 이동
//      hwang.js의 router.get('/3', function(..))으로 요청 이동
//      웹페이지에 function안의 내용이 응답하도록


app.listen(port, () => {
    console.log(`${port}번에서 실행 중`);
});

// 에러 처리
app.all('$', (req, res) => {
    res.status(404).send('404!! Page Not Found!!')
});


// req, res 관련 자주 사용되는 method 정리!

// - req.app : req 객체를 통해 app 객체에 접근이 ㅏ능하도록
// - req.body : body-parser 미들웨어가 만드는 요청의 본론을 해석한 객체
// - req.cookies : cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
// - req-ip : 요청의 ip주소를 알수 있다

// - res.ookie(키, 값, 옵션) : 쿠키 설정을 위한 메소드
// - res.end() : 데이터 없이 응답을 보내는 메소드
// - res.json(data): JSON형식의 응답을 보내주는 메소드
// - res.redirect(주소) : redirect 할 주소와 함께 응답을 보내주는 주소
// - res.render(뷰, data) : 다음 코드에서 다룰 템플릿 엔진을 렌더링해서 응답할 때 사용하는 메소드
// - res.send(data) : 데이터와 함께 응답을 보내주는 메소드
// - res.status(code) : 응답 시 HTTP 상태코드를 지정하는 메소드
// - res.sendFile(경로) : 경로에 위치한 파일을 응답

