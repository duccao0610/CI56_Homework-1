let router = new Navigo(null, true);
let $app = document.getElementById("app");

router.on('/homepage', function () {
    console.log("this is homepage");
}).resolve();

router.on('/about', function () {
    console.log("about page");
}).resolve();

router.on('/support', function () {
    console.log("support page");
}).resolve();

router.on('/auth', function () {
    $app.innerHTML = '<auth-screen></auth-screen>';
}).resolve();

router.on('/index', function () {
    $app.innerHTML = '<index-screen></index-screen>';
}).resolve();

router.on(function () {
    // router.navigate('/auth');
}).resolve();

window.router = router;