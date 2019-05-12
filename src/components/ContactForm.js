import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state= {value: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const receiverEmail = process.env.REACT_APP_EMAILJS_RECEIVER;

    this.sendEmail(serviceId, templateId, receiverEmail, this.state.email, this.state.name, this.state.subject, this.state.message);
    alert('Thank you, your message was sent successfully!');
    window.location.reload();
  }

  sendEmail(serviceId, templateId, receiverEmail, senderEmail, senderName, subject, message) {
    window.emailjs
      .send(serviceId, templateId, {
        "senderSubject": subject,
        "senderEmail": senderEmail,
        "senderName": senderName,
        "senderMessage": message,
        "myEmail": receiverEmail
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="form-group col-sm-6">
            <label>Name</label>
            <input name="name" id="name" className="form-control" placeholder="John Doe" type="text" value={this.state.name} onChange={this.handleInputChange} required={true}/>
          </div>
          <div className="form-group col-sm-6">
            <label>Email</label>
            <input name="email" id="email" className="form-control" placeholder="john.doe@gmail.com" type="email" value={this.state.email} onChange={this.handleInputChange} required={true}/>
          </div>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input name="subject" id = "subject" className="form-control" placeholder="What are you contacting me about?" type="text" value={this.state.subject} onChange={this.handleInputChange} required={true}/>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" id="message" className="form-control" placeholder="Whatever you like..." value={this.state.message} onChange={this.handleInputChange} required={true}/>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary-blue mt-3"/>
      </form>
    );
  }
}

export default ContactForm;
