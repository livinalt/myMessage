import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers';
import contractABI from './abi.json';


function App() {

  const contractAddress = '0x4e7186d702af6425a0bbdb70fdb1867f8f127580';

    async function requestAccount(){
      await window.ethereum.request({method:'eth_requestAccounts'});
    }

    async function setMessage() {
      if (typeof window.ethereum !== 'undefined') {    
        await requestAccount(); 
          
        const provider = new ethers.BrowserProvider(window.ethereum);    
        const signer = await provider.getSigner();    
        const contract = new ethers.Contract(contractAddress, contractABI, signer);    
    
        try {    
          const transaction = await contract.setMessage();    
          await transaction.wait();    
          console.log('Message Set');
    
        } catch (err) {    
          console.error('Error:', err);    
        }
    
      }
    
    }
    async function getMessage() {
      if (typeof window.ethereum !== 'undefined') {    
        await requestAccount(); 
          
        const provider = new ethers.BrowserProvider(window.ethereum);    
        const signer = await provider.getSigner();    
        const contract = new ethers.Contract(contractAddress, contractABI, signer);    
    
        try {    
          const transaction = await contract.getMessage();    
          await transaction.wait();    
          console.log('Message Retrieved');
    
        } catch (err) {    
          console.error('Error:', err);    
        }
    
      }
    
    }




  return (
    <div className="App">

      <button onClick = {setMessage} >Set Message</button>
      <button onClick = {getMessage} >Get Message</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;