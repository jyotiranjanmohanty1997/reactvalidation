import React,{useState} from 'react';

function Validation() {
    let [fname,pickName] = useState("");
    let [nameError,updateNameError] = useState("");

    let [mobile, pickMobile] = useState("");
    let [mobileError, updateMobileError] = useState("");

    let [email, pickEmail] = useState("");
    let [emailError, updateEmailError] = useState("");

    let [city, pickCity] = useState("");
    let [cityError, updateCityError] = useState("");

    let [address, pickAddress] = useState("");
    let [addressError, updateAddressError] = useState("");

    let [tnc, pickTnc]= useState(false);
    let [tncError, updateTncError] = useState("");
    const Save=()=>{
       // alert(fname);
       let formstatus=true;
       if (fname===""){
        updateNameError("Fill in the blank !");
        formstatus=false;
       }else{
        updateNameError(" ");
       }

       var mpattern= /^[0]?[6789]\d{9}$/;
       if(!mpattern.test(mobile)){
        updateMobileError("Input Error !");
        formstatus=false;
       }else{
        updateMobileError("");
       }

       var epattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
       if(!epattern.test(email)){
        updateEmailError("Email Error");
        formstatus=false;
       }else{
        updateEmailError(" ");
       }

       if(city===""){
        updateCityError("Error");
        formstatus=false;
       }else{
        updateCityError(" ");
       }

       if(address===""){
        updateAddressError("Error");
        formstatus=false;
       }else{
        updateAddressError("");
       }
       if(tnc===false){
        updateTncError("Please Select T&C");
        formstatus=false;
       }else{
        updateTncError("");
       }

       if(formstatus===true){
        alert("Please Wait Processing....");
       }
       
    }
  return (
    <section>
        <h1>Validation Example </h1>
        <table align="center" cellPadding="10" >
            <tbody>
                <tr>
                    <td> Full Name </td>
                    <td> 
                        <input type="text" placeholder='Enter Name' 
                        onChange={obj=>pickName(obj.target.value)}/> 
                        <i>{nameError}</i>
                    </td>
                    
                </tr>
                <tr>
                    <td> Mobile No. </td>
                    <td> 
                        <input type="number" placeholder='Enter Number'
                            onChange={obj=>pickMobile(obj.target.value)}/> 
                    <i>{mobileError}</i>
                    </td>
                    
                </tr>
                <tr>
                    <td> E-mail Id </td>
                    <td> <input type="email" placeholder='Enter Email'
                        onChange={obj=>pickEmail(obj.target.value)}
                    />
                    <i>{emailError}</i> 
                    </td>
                    
                </tr>
                <tr>
                    <td>City</td>
                    <td>
                        <select onChange={obj=>pickCity(obj.target.value)}>
                            <option value="">Choose City</option>
                            <option>Bangalore</option>
                            <option>Mumbai</option>
                            <option>Pune</option>
                            <option>Cuttack</option>
                            <option>Bhubaneswar</option>
                        </select>
                        <i>{cityError}</i>
                    </td>
                </tr>
                <tr>
                    <td>Message</td>
                    <textarea cols='40' rows="5" onChange={obj=>pickAddress(obj.target.value)}></textarea>
                    <p><i>{addressError}</i></p>
                </tr>
                <tr>
                    <td> File </td>
                    <td> <input type='file'/> </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type='checkbox' onChange={obj=>pickTnc(obj.target.checked)}/>
                         I am agree on Terms & Condition.
                        <p><i>{tncError}</i></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button onClick={Save}>Submit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}

export default Validation
