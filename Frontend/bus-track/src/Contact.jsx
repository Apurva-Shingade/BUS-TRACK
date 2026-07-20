function Contact(){
    return(
        <>
            <h1>Contact Form</h1>
            <form id='form'>
                <p style={{textStyle:'bold'}}>Enter your details</p>
                <label className = 'labels'>First Name : </label >
                <input type="text" name="fname" /><br />
                <label className = 'labels'>Last Name : </label >
                <input type="text" name="lname" /><br />
                <label className = 'labels'>Email : </label >
                <input type="email" name="email" /><br />
                <label className = 'labels'>Password : </label >
                <input type="password" name="password" /><br />
                <label className = 'labels'>Ph. No. : </label >
                <input type="tel" name="contact" /><br />
                <label className = 'labels'>Gender : </label >
                Male
                <input type="radio" name="gender" />
                Female
                <input type="radio" name="gender" /><br />
                <label className = 'labels'>Ph. No : </label >
                <input type="tel" name="contact" /><br />
                <label className = 'labels'>Date : </label >
                <input type="date" name="date" /><br />

                <label className = 'labels'>Address</label >
                <input type="textarea" name="address" /><br />
            </form>
        </>
    );
}
export default Contact;