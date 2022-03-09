import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";
import { studentsInfo } from "./StudentContext";

function Students() {
  let navigate = useNavigate();
  let [students] = useContext(studentsInfo);
  //console.log(students);
  const addStudentHandler = () => {
    navigate(`/students-desc`);
  };
  return (
    <>
      <div id="heading">
        Students Details
        <button id="btn" onClick={addStudentHandler}>
          Add New Student
        </button>
      </div>

      <div id="table">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Batch</TableCell>
                <TableCell align="right">Change</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => {
                return (
                  <>
                    <TableRow key={student.id}>
                      <TableCell component="th" scope="row">
                        {student.name}
                      </TableCell>
                      <TableCell align="right">{student.age}</TableCell>
                      <TableCell align="right">{student.course}</TableCell>
                      <TableCell align="right">{student.batch}</TableCell>
                      <TableCell align="right">
                        <Link to={`/students-desc/${student.id}`}>Edit</Link>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default Students;