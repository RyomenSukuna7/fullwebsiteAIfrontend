import './signlogin.css';
let Sign=()=>{
    return(
        
            <div class="main30">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true" style={{color:'black'}} className='label1'>Sign up</label>
					<input  className="input89"type="text" name="txt" placeholder="User name" required=""/>
					<input className="input89"type="email" name="email" placeholder="Email" required=""/>
					<input className="input89"type="password" name="pswd" placeholder="Password" required=""/>
					<button className='button90'>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true" className='label1' >Login</label>
					<input  className="input89" type="email" name="email" placeholder="Email" required=""/>
					<input  className="input89" type="password" name="pswd" placeholder="Password" required=""/>
					<button className='button90'>Login</button>
				</form>
			</div>
            </div>
	     
    );
}

export default Sign;