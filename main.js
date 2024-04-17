// main.js
// Capstone 2: Express
"use strict";
const port = 3001,
    express = require('express'),
    layouts = require('express-ejs-layouts'),

    app = express();
// 앱 설정

/**
 * Listing 12.7 (p. 179)
 * ejs 레이아웃 렌더링
 */
app.set("port", process.env.PORT || port);
app.set("view engine", "ejs");

/**
 * Listing 12.4 (p. 177)
 * body-parser의 추가
 */


/**
 * Listing 12.6 (p. 178)
 * 각 페이지 및 요청 타입을 위한 라우트 추가
 */




/**
 * Listing 12.12 (p. 184)
 * 에러 처리 라우트 
 */


// 3000번 포트로 리스닝 설정
