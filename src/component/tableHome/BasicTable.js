import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: "Frozen yoghurt",
    product: 159,
    customer: 6.0,
    date: 24,
    amount: 4.0,
    method: 1.5,
    status: 10,
  },
  {
    id: "Ice cream sandwich",
    product: 237,
    customer: 9.0,
    date: 7,
    amount: 4.3,
    method: 10,
    status: 25,
  },
  {
    id: "Eclair",
    product: 262,
    customer: 16.0,
    date: 24,
    amount: 6.0,
    method: 10,
    status: 25,
  },
  {
    id: "Cupcake",
    product: 305,
    customer: 3.7,
    date: 67,
    amount: 4.3,
    method: 10,
    status: 25,
  },
  {
    id: "Gingerbread",
    product: 356,
    customer: 16.0,
    date: 49,
    amount: 3.9,
    method: 10,
    status: 25,
  },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tracking ID</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Payment method</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.customer}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.method}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
