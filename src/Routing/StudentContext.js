import React, { createContext, useState } from "react";
export const studentsInfo = createContext();

export const StudentContext = (props) => {
  let [students, setStudents] = useState([
    {
      name: "John",
      age: 26,
      course: "MERN",
      batch: "October",
      id: "1",
    },
    {
      name: "Doe",
      age: 25,
      course: "MERN",
      batch: "November",
      id: "2",
    },
    {
      name: "Biden",
      age: 26,
      course: "MERN",
      batch: "September",
      id: "3",
    },
    {
      name: "Barar",
      age: 22,
      course: "MEAN",
      batch: "September",
      id: "4",
    },
    {
      name: "Christ",
      age: 23,
      course: "MERN",
      batch: "October",
      id: "5",
    },
    {
      name: "Elent",
      age: 24,
      course: "MERN",
      batch: "November",
      id: "6",
    },
  ]);
  return (
    <>
      <studentsInfo.Provider value={[students, setStudents]}>
        {props.children}
      </studentsInfo.Provider>
    </>
  );
};