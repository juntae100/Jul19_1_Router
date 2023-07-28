// 라우터(Router)
//      client로부터 요청받은 url과 view를 매칭시키는 것!
//      어떤 요청 경로로 들어왔을 때 어떤 응답을 해줘야하는지 지정해주는 것!
// Spring의 Controller랑 비슷하지않나..

const express = require('express');
const router = express.Router();

// localhost:3000/hwang
router.get('/', (req, res) => {
    res.send('hwang에 접근!');
});

router.get('/1',(req, res) =>{ // hwang1
    res.send('경로 : /hwang/1');
});

router.get('/2',(req, res) =>{ // hwang2
    res.send('경로 : /hwang/2');
});


router.get('/3',(req, res) =>{ // hwang3
    res.send('경로 : /hwang/3');
});


module.exports = router;    // router라는 변수자체를 보내기
