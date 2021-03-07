import ToDo from './ToDo.js';

let data = [
    { id: 1, name: 'Nhiệm vụ 1', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/06', isCompleted: true },
    { id: 2, name: 'Nhiệm vụ 2', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/07', isCompleted: false },
    { id: 3, name: 'Nhiệm vụ 3', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/08', isCompleted: true },
    { id: 4, name: 'Nhiệm vụ 4', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/09', isCompleted: false },
    { id: 5, name: 'Nhiệm vụ 5', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/10', isCompleted: true },
    { id: 6, name: 'Nhiệm vụ 6', description: 'Mô tả chi tiết cho nhiệm vụ', deadline: '2021/03/11', isCompleted: true }
];

let $toDoTag = document.getElementsByTagName('to-do');
for (let i = 0; i < data.length; i++) {
    $toDoTag[i].setAttribute('name', data[i].name);
    $toDoTag[i].setAttribute('description', data[i].description);
    $toDoTag[i].setAttribute('deadline', data[i].deadline);
    if (data[i].isCompleted == true) {
        $toDoTag[i].setAttribute('status', 'Hoàn thành');
    } else {
        $toDoTag[i].setAttribute('status', 'Chưa hoàn thành');
    }
}