import CourseContainer from './CourseContainer.js';
import InfoContainer from './InfoContainer.js';

let coursesData = [
    {
        id: 1,
        name: 'TC-CIJS-56',
        teacher: { name: 'Teacher 1', age: 22, address: 'HN' },
        students: [
            { name: 'Student 1', age: 18, address: 'HP' },
            { name: 'Student 2', age: 22, address: 'TB' },
            { name: 'Student 3', age: 20, address: 'HY' },
            { name: 'Student 4', age: 21, address: 'HN' },
            { name: 'Student 5', age: 23, address: 'BG' }
        ],
        status: 'pending'
    },
    {
        id: 2,
        name: 'TC-CIJS-53',
        teacher: { name: 'Teacher 2', age: 22, address: 'HN' },
        students: [
            { name: 'Student 1', age: 20, address: 'TB' },
            { name: 'Student 2', age: 22, address: 'HB' },
            { name: 'Student 3', age: 25, address: 'HY' },
            { name: 'Student 4', age: 21, address: 'HN' },
            { name: 'Student 5', age: 18, address: 'QN' }
        ],
        status: 'ended'
    }
]

let $app = document.getElementById('app');
for (let course of coursesData) {
    let $courseContainer = document.createElement('course-container');
    $courseContainer.setAttribute('course-name', course.name);
    // $courseContainer.setAttribute('teacher', JSON.stringify(course.teacher));
    // $courseContainer.setAttribute('students', JSON.stringify(course.students));
    $courseContainer.setAttribute('status', course.status);

    let $teacherInfo = document.createElement('info-container');
    $teacherInfo.setAttribute('name', course.teacher.name);

    $app.appendChild($courseContainer);
    $courseContainer.appendChild($teacherInfo);
}