import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BiCheckboxChecked } from 'react-icons/bi';
import { BiCheckboxMinus } from 'react-icons/bi';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('리액트', '리액트 강의 3강 듣기', <BiCheckboxChecked/>, '2023-01-20',),
  createData('알고리즘', '백준 1234번 풀기', <BiCheckboxChecked/>, '2023-01-21',),
  createData('프론트엔드', '어려워ㅠ', <BiCheckboxMinus/>, '2023-01-22',),
  createData('백엔드', '백엔드 바보', <BiCheckboxChecked/>, '2023-01-23',),
  createData('테트리스', '조현동 이기기', <BiCheckboxMinus/>, '2023-01-24',),
];
// 카테고리 내용 완료 날짜
// 체크박스 조건문으로 바꾸기
export default function TodoTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>카테고리</TableCell>
            <TableCell align="right">내용</TableCell>
            <TableCell align="right">완료</TableCell>
            <TableCell align="right">날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}