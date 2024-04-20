// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
exports.showCourses = (req, res) => {
    /**
     * Listing 12.9 (p. 182)
     * 콘텐츠의 설정과 렌더링된 뷰에 전달
     * 
     * [노트] 뷰 안에서는 offeredCourses라는 변수명을 통해 배열에 접근할 수 있다.
     * 홈 컨트롤러 내에서 이 배열은 courses라는 이름으로 다룬다.
     */
    var courses = [
        {
            title: "Event Driven Cakes",
            cost: 50
        },
        {
            title: "Asynchronous Artichoke",
            cost: 25
        },
        {
            title: "Object Oriented",
            cost: 10
        },
    ];

    res.render("courses", {
        offeredCourses: courses
    });
};

exports.showSignUp = (req, res) => {
    res.render("Contact");
};

exports.postedContactForm = (req, res) => {
    res.render("thanks");
};
