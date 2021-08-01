import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import  Navbar  from './Navbar';
import Modal from 'react-modal';
import AutoGrid from './Cards';
import Togglebar from './Outbound';
import Demo from './demo';
import InboundChecker from './Inbound-checker';
import PDFViewer from './PDFViewer';
function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <br></br>
      <InboundChecker/>
    </div>
  );
}

export default App;
