function Contact()
{
    return(
        <div class="pt-2">
            <h1>Contact Us</h1>
            <div class="container">
                <form>
                    <div class="mb-3 text-start">
                        <label class="form-label">First Name</label>
                        <input class="form-control" placeholder="Enter your first name"></input>
                    </div>
                    <div class="mb-3 text-start">
                        <label class="form-label">Last Name</label>
                        <input class="form-control" placeholder="Enter your last name"></input>
                    </div>
                    <div class="mb-3 text-start">
                        <label class="form-label">Phone Number</label>
                        <input class="form-control" placeholder="Enter your phone number"></input>
                    </div>
                    <div class="mb-3 text-start">
                        <label class="form-label">Email Address</label>
                        <input class="form-control" placeholder="Enter your email address"></input>
                    </div>
                    <div class="mb-3 text-start">
                        <label class="form-label">Country</label>
                        <input class="form-control" placeholder="Enter your country"></input>
                    </div>
                    <div class="mb-3 text-start">
                        <label class="form-label">Message</label>
                        <input class="form-control" placeholder="Enter your message"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;