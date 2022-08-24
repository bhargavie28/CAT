import Drawer from "../components/Drawer/Drawer.js";
import { useNavigate } from "react-router-dom";
export default function LandingPage(){
    const navigate = useNavigate();
    const menuItems = [{
      id: '1',
      label: 'User Management',
      onclick: ()=> {navigate('/adminRoles')},
      innerMenu: [{
        label: 'Role Management'
      },{
        label: 'User List'
      }
    ]
    }]
    return(
<Drawer menuItems={menuItems} />
    )
}

