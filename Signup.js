import "./style.css"
import background from "../img/l1.jpg";

function Signup() {

    return (
   

 <>
    <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:800  }}>
        <div id="shead">
        <h2>!!! Get started with Your Account !!!</h2>
        </div>
 < div class="mx-auto w-50 p-25"> 
<form>
    <br/>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name" required/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name" required/>
    </div>
    </div>
<br/>
  <div class="form-group">

    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <div class="invalid-feedback">
        Please enter vaild Mail id.
      </div>
  </div>
  <br/>
  <div class="row">
    <div class="col">
      <input type="password" class="form-control" placeholder="Password" required/>
      
    </div>
    <div class="col">
      <input type="password" class="form-control" placeholder="Confirm Password" required/>
    </div>
    </div>
    <br/>
    <div class="row">
    <div class="col">
    <label for="DOB">Date of Bitrh</label>
      <input type="date" class="form-control" placeholder="date of Bitrh" required/>
      
    </div>
    <div class="col">
    <label for="DOB">Governmet ID</label>
      <input type="text" class="form-control" placeholder="Aadhar/PAN/VOTER ID"/>
    </div>
    </div>
    <br/>
    <div class="row">
    <div class="col">
      <input type="phonenumber" class="form-control" placeholder="Phone number" required/>
      
    </div>
    <div class="col">
      <input type="phone" class="form-control" placeholder="Landline"/>
    </div>
    </div>
    
    <br/>
<input type="text" class="form-control" placeholder="Address 1" required/>
<br/>
<input type="text" class="form-control" placeholder="Address 2" />
<br/>
    <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="City" required/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="State"required />
      </div>
  </div>
<br/>
<div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Pincode" required />
    </div>
    <div class="col">
      <input type="text" class="form-control " placeholder="Country" required/>
      </div>
  </div>  

  <br/>
  <div class="form-check ">
    <input type="checkbox" class="form-check-input" required id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1" ><a href="/TermsAndConditions">Terms and Conditions (T&C)</a></label>
  </div>

  <center>
  <button type="submit" class="btn btn-outline-secondary ">Signup</button>
  </center>
</form>
</div>
</div>
 </>
    
    );
}

export default Signup;