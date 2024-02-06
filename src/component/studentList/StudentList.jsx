import React from 'react'

const studentList = [
    {
        id : 1,
        name : "Shi",
        grade : "A",
    },
    {
        id : 2,
        name : "Yaa",
        grade : "A",
    },
    {
        id : 3,
        name : "Thu",
        grade : "B",
    },
    {
        id : 4,
        name : "Hay",
        grade : "C",
    }
]

const StudentList = () => {
  return (
    <div>
       <h2> StudentList</h2>
       <div className='students'>
         {studentList.map((student) => (
            <div className="student" key={student.id}>
            <h3>Student Name :{student.name} </h3>
            <p>Student Grade :{student.grade}</p>
          </div>
         ))}
       </div>
    </div>
  )
}

export default StudentList