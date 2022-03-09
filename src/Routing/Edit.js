import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { studentsInfo } from "./StudentContext";

const Edit = () => {
  const Navigate = useNavigate();
  const { selectedId } = useParams();
  let [students, setStudents] = useContext(studentsInfo);
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [course, setCourse] = useState("");
  let [batch, setBatch] = useState("");

  useEffect(() => {
    students.forEach((student) => {
      if (student.id === selectedId) {
        setName(student.name);
        setAge(student.age);
        setCourse(student.course);
        setBatch(student.batch);
      }
    });
  }, [students, selectedId]);

  const handleClick = () => {
    if (selectedId) {
      setStudents(() =>
        students.map((student) =>
          student.id === selectedId
            ? { id: selectedId, name: name, age: age, course: course, batch: batch } : student
        )
      );
    } else {
      let obj = {
        id: Math.floor(Math.random() * 100 + 1).toString(),
        name,
        age,
        course,
        batch
      };
      setStudents([...students, obj]);
    }
    Navigate("/students");
  };

  const backHandle = () => {
    Navigate("/students");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 6, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="f_design">
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            type="text"
            name="name"
            value={name}
            onChange={(text) => setName(text.target.value)}
            required
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Age"
            multiline
            type="number"
            name="age"
            value={age}
            onChange={(text) => setAge(text.target.value)}
            required
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            label="Course"
            multiline
            type="text"
            name="course"
            value={course}
            onChange={(text) => setCourse(text.target.value)}
            required
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Batch"
            multiline
            type="text"
            name="batch"
            value={batch}
            onChange={(text) => setBatch(text.target.value)}
            required
          />
        </div>
        <button className="cancel_btn" onClick={backHandle}>
          Cancel
        </button>
        &emsp;
        <button className="submit_btn" onClick={handleClick} type="submit">
          Submit
        </button>
      </Box>
    </>
  );
};
export default Edit;