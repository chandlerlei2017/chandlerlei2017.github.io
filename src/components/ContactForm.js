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
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Email:
          <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Subject:
          <input name="subject" type="text" value={this.state.subject} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Message:
          <textarea name="message" value={this.state.message} onChange={this.handleInputChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
