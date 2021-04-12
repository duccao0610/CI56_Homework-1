let router = new Navigo(null, true);
let $app = document.getElementById("app");

router.on('/login', function () {
    $app.innerHTML = '<login-screen></login-screen>';
}).resolve();

router.on('/main', function () {
    $app.innerHTML = '<main-screen></main-screen>';
}).resolve();

router.on(function () {
    router.navigate('/login');
}).resolve();

window.router = router;