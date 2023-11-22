import './feedback.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios';
let Feedback=()=>{
	let [name,setName]=useState(" ");
	let [email,setEmail]=useState(" ");
	let [text,setText]=useState(" ");
	let [data,setData]=useState([]);

	console.log(data);
	
	const userDetails= async(e)=>{

		 data.map(async(check)=>{
		 	if(email===check.email){
				 alert("This email already exits");
				// let user={name,email,text};
		        // await axios.post('http://localhost:8000/send',user);
		}
			else{
			   let user={name,email,text};
		        await axios.post('http://localhost:8000/send',user);
			// alert("This email already exits");
			}
		})

		
	}

	const apitake=()=>{
		 fetch('http://localhost:7000').then((resp)=>{
		 	return resp.json();
		 }).then((datas)=>{
		 	setData(datas);
		})
	}


	useEffect(()=>{
		apitake();
	},[])

    return(
		<>
	 <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span style={{color:"blue"}}>CONTACT</span>
            <span style={{color:"blue"}}>US</span>
          </div>
          {/* <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div> */}
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" type='text' placeholder="NAME"  onChange={(e)=>setName(e.target.value)} required/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" type='email' placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" type='text' placeholder="MESSAGE" onChange={(e)=>setText(e.target.value)} required/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button" onClick={userDetails}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="credits">
      {/* <a class="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
        <svg class="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg>
        Gururaj
      </a> */}
    </div>
  </div>
</div>


</>


    );
}

export default Feedback;