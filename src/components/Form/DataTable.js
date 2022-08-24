import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const rows = [
  {id:'1',
  roleName: 'Admin',
  description: 'Admin',
  affiliationLevel: 'Dealer',
  permissions: 'Test',
  actions: <div><EditIcon /> <DeleteIcon/></div>
},
{
  id:'2',
  roleName: 'Admin',
  description: 'Admin',
  affiliationLevel: 'CAT',
  permissions: 'Test',
  actions: <div><EditIcon /> <DeleteIcon/></div>
},
{
  id:'3',
  roleName: 'Admin',
  description: 'Admin',
  affiliationLevel: 'CAT',
  permissions: 'Test',
  actions: <div><EditIcon /> <DeleteIcon/></div>
},
{
  id:'4',
  roleName: 'Admin',
  description: 'Admin',
  affiliationLevel: 'CAT',
  permissions: 'Test',
  actions: <div><EditIcon /> <DeleteIcon/></div>
}

];



export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            <TableCell >Description</TableCell>
            <TableCell>Affiliation level (Dealer/Cat)</TableCell>
            <TableCell >Permissions Currently Granted</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.roleName}
              </TableCell>
              <TableCell >{row.description}</TableCell>
              <TableCell >{row.affiliationLevel}</TableCell>
              <TableCell >{row.permissions}</TableCell>
              <TableCell >{row.actions}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
