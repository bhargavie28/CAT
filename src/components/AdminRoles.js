import React from "react";
import EnhancedTableHead from "./Form/DataTable.js";
import Button from "./Button/Button.js";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import ContentContainer from "../context/ContentContainer.js";
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Searchbar from "./Searbar.js";
import Pagination from "./Pagination.js";
import {useNavigate} from "react-router-dom";
function AdminRoles (){
  const navigate = useNavigate();
    const tableCols =  [
        {
          id: 'roleName',
          numeric: false,
          disablePadding: true,
          label: 'Role Name',
        },
        {
          id: 'roleDescription',
          numeric: true,
          disablePadding: false,
          label: 'Role Description',
        },
        {
          id: 'affiliationLevel',
          numeric: true,
          disablePadding: false,
          label: 'Affiliation Level (Dealer/Cat)',
        },
        {
          id: 'permissions',
          numeric: true,
          disablePadding: false,
          label: 'List of Permissions currently granted within this role',
        },
        {
          id: 'actions',
          numeric: true,
          disablePadding: false,
          label:'',
        },
      ];

      const rows = [
     {id: 'roleName', name: "Admin"}
      ];
return(
  <ContentContainer>
   <Box sx= {{marginLeft:'15rem'}}>

    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>

  <div>

   <Searchbar placeholder={"Search roles"} />
  </div>
  <div>

   <Box sx={{display:'flex'}}>
    <Pagination />
  <Button variant="outlined" label="Filter" color="black" />
  <Button variant="contained" label="Create New Role" bgColor="#FFCD11" color="black" onClick={()=> navigate('/createRole')}/>
   </Box>
  </div>
    </Box>
  {/* <Box sx={{display: "flex", justifyContent: "flex-end"}}>
    
  <SearchIcon />
  <FilterAltIcon />
   </Box> */}

<EnhancedTableHead headCells = {tableCols} rows={rows} />
    </Box>
  </ContentContainer>
)
    

}

export default AdminRoles;