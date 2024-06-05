import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            className="textarea"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        @import "slick-carousel/slick/slick.css";
        @import "slick-carousel/slick/slick-theme.css";

        body {
          font-family: 'Poppins', sans-serif;
        }

        .flex {
          display: flex;
        }

        .justify-center {
          justify-content: center;
        }

        .items-center {
          align-items: center;
        }

        .h-screen {
          height: 100vh;
        }

        .contact-form {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 20px;
          width: 400px;
          background-color: #f1f1f1; /* Background color for the form section */
        }

        .form-group {
          margin-bottom: 16px;
        }

        .label {
          display: block;
          font-weight: bold;
          color: #000;
          margin-bottom: 8px;
        }

        .input,
        .textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
          outline: none;
        }

        .textarea {
          resize: vertical;
        }

        .submit-button {
          background-color: #3490dc;
          color: #fff;
          font-weight: bold;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .submit-button:hover {
          background-color: #2779bd;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
