import * as React from "react";
import { useState, useEffect } from "react";
import { API } from "../constants/Api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "../css/posts.css";

export default function BasicTable() {
  const [post, setPost] = useState([]);
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");

  const SortingHandler = () => {
    const duplicate = [...post];
    console.log("fffff", duplicate);
    setPost(duplicate.reverse());
    setSort(!sort);
  };
  console.log("dd", search);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="inputsearch"
          placeholder="Search here..."
        />

        <div className="sorting">
          <label style={{ color: "white" }}>Sort By :</label>

          <button className="asc" onClick={SortingHandler}>
            {sort === false ? "Ascending Order" : "Decending Order"}
          </button>
        </div>
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "x-large",
                }}
                align="center"
              >
                ID
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "x-large",
                }}
                align="center"
              >
                USERID
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "x-large",
                }}
                align="center"
              >
                TITLE{" "}
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "x-large",
                }}
                align="center"
              >
                Body{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post
              ?.filter((x) => {
                if (search === "") {
                  return x;
                } else if (
                  x.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return x;
                }
              })
              .map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{ color: "white", fontSize: "medium" }}
                    component="th"
                    scope="row"
                  >
                    {row.id}
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontSize: "medium" }}
                    align="center"
                  >
                    {row.userId}
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontSize: "medium" }}
                    align="center"
                  >
                    {row.body}
                  </TableCell>
                  <TableCell
                    style={{ color: "white", fontSize: "medium" }}
                    align="center"
                  >
                    {row.title}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
