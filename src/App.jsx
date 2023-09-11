/* import SimpleSidebar from "./components/Sidebar"; */
import { Box } from "@chakra-ui/react";
import Router from "./routes/routes";
import Sidebar from './components/Sidebar';

export default function App(){
  return(
    <Box display='flex' flexDirection='row'>
      <Sidebar/>
      <Router/>
    </Box>
  )
}