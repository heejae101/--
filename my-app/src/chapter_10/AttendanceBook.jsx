import React from "react";

const students = [
    {
        id: 1,
        name:"Inje",
    },
    {
        id: 2,
        name:"Steve",
    },
    {
        id: 3,
        name:"Bill",
    },
    {
        id: 4,
        name:"Jeff",
    },
];

// key값을 안주면 에러 발생
//  포멧팅 key={`student-id-${student.id}`}
// index
// function AttendanceBook(props){
//     return (
//         <ul>
//             {students.map((student, index) => {
//                 return <li key={index}>{student.name}</li>;
//             })}
//         </ul>
//     );
// }

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;