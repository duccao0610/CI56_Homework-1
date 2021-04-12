const $template = document.createElement("template");
$template.innerHTML = /*html*/`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <p id="name">Họ tên</p>
    <p id="money">Số tiền vay</p>
    <p id="purpose">Mục đích vay</p>
    <p id="return-date">Ngày hẹn trả</p>
    <p id="real-return-date">Ngày trả</p>
`;

export default class LoanWrapper extends HTMLElement {

}
