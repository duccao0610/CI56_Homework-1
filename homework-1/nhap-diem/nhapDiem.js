let students = [];
let numOfA = 0, numOfF = 0, numOfB = 0;

function learningCapacity(gpa) {
    if (gpa >= 0 && gpa < 4) {
        return "F";
    } else if (gpa < 6) {
        return "D";
    } else if (gpa < 7) {
        return "C";
    } else if (gpa < 8) {
        return "B";
    } else if (gpa <= 10) {
        return "A";
    }
}

$("#nutNhap").click(function () {

    //Nhập điểm
    let temp = {};
    temp.midterm = $("#midterm").val();
    temp.final = $("#final").val();
    if (temp.midterm < 0 || temp.midterm > 10 || temp.final < 0 || temp.final > 10) {
        return alert("Điểm không hợp lệ, hãy nhập lại.");
    }
    temp.gpa = temp.midterm * 0.4 + temp.final * 0.6;
    temp.grade = learningCapacity(temp.gpa);

    //Clear input
    $("#midterm").val("");
    $("#final").val("");

    //Thêm điểm vào danh sách
    students.push(temp);

    //Tính số sinh viên được A và số sinh viên trượt
    if (temp.grade == "A") {
        numOfA += 1;
    }
    if (temp.grade == "F") {
        numOfF += 1;
    }
    $("#numOfA").html(`Số sinh viên được A: ${numOfA} sinh viên`);
    $("#numOfF").html(`Số sinh viên trượt: ${numOfF} sinh viên`);

    //Tỷ lệ sinh viên đạt B
    if (temp.grade == "B") {
        numOfB += 1;
    }
    $("#bRate").html(`Xác suất để chọn được 1 sinh viên bất kỳ đạt B là: ${numOfB / students.length}`);

    //Thông báo đang nhập cho sv thứ bao nhiêu
    $("#stt").html(`Nhập điểm cho sinh viên thứ ${students.length + 1}`)

    console.log(students);
})

