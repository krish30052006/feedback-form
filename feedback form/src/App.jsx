import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setSubmittedFeedback({
      name,
      email,
      message,
    });

    // Clear form and error
    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          width: '400px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
          <textarea
            placeholder="Your Feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              resize: 'none',
            }}
          ></textarea>
          {error && (
            <p style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#4caf50',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Submit Feedback
          </button>
        </form>

        {submittedFeedback && (
          <div
            style={{
              marginTop: '30px',
              background: '#f9f9f9',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <h3>Submitted Feedback:</h3>
            <p>
              <strong>Name:</strong> {submittedFeedback.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedFeedback.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedFeedback.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
