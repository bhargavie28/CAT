import { Box, Typography, TextField } from "@mui/material";
import ContentContainer from "../context/ContentContainer";
import Divider from '@mui/material/Divider';
import FormContainer from "./Form/FormContainer";
import {Formik, Form, getIn} from "formik";
import * as Yup from "yup";
import {useRef} from "react"
import Button from './Button/Button.js';

const validationSchema = Yup.object({
   
});

const handleSubmit = ()=> {
    console.log("Enter")
}
export default function CreateNewRoleForm(){
    const formikRef = useRef();

    return(
        <ContentContainer>
            <Box sx={{marginLeft:'15rem', width: '1200px', height: '680px'}}>

            <Typography>Create New Role</Typography>

           <Divider />
            
           <Formik initialValues={{
                        id:"1",
                        name:''
                    }}
                    validationSchema={validationSchema}
                    innerRef={formikRef}
                    onSubmit={handleSubmit}>
                        {/* <Typography>Role Details</Typography> */}
                        <Form>
                            <Box sx={{display: 'flex', padding: '10px'}}>
                        <div className="cmp-form-heading-number">1</div>
                        <Typography> Role Details</Typography>
                            </Box>
                            <Box sx={{padding: '10px'}}>

             <TextField sx={{marginRight: '66px'}} id="outlined-basic" label="Role Name" variant="outlined" />
             <TextField id="outlined-basic" label="Description" variant="outlined" />
                            </Box>
             <Box sx={{display: 'flex', padding: '10px'}}>

             <div className="cmp-form-heading-number">2</div>
             <Typography>Affiliation & Permissions</Typography>
             </Box>
             <Box sx={{padding:'10px'}}>

             <TextField id="outlined-basic" label="Role Name" variant="outlined" />
             </Box>
            </Form>
           </Formik>
            </Box>
           <Box sx={{display:'flex', flexDirection:'row', alignItems:'flex-start', marginLeft:`calc(50% - '158px'/2-'0.5px')`,position:'relative', top:'30%', bottom: '0.95%'}}>

           <Button label="Cancel" />
           <Button label = "Submit" />
           </Box>
        </ContentContainer>
    )
}