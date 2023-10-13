const express = require('express');
const cors = require('cors');
const app = express();
const port = 7042; // 사용하려는 포트


app.use(cors({
    origin: '*'
    }));
app.get('/hi', hi);
// hi API
function hi(req, res) {
    res.json({ message: '파일명의 중요성ㅋddddzㅋ' });
}

app.listen(port, () => {
    console.log(`서버 시작 (http://localhost:${port}/hi)`);
});
