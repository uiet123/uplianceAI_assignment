import React, { useContext, useState } from 'react';
import JoditEditor from 'jodit-react';
import "./UserForm.css";
import AppContext from '../../ContextAPI/AppContext';

const UserForm = () => {
  const { formData, setFormData, content, setContent } = useContext(AppContext);
  const [localContent, setLocalContent] = useState(content || "");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContent = `
      <table style="width: 100%; border: 1px solid #ccc; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; font-weight: bold;">Name:</td>
          <td style="padding: 8px;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Address:</td>
          <td style="padding: 8px;">${formData.address}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Email:</td>
          <td style="padding: 8px;">${formData.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Phone:</td>
          <td style="padding: 8px;">${formData.phone}</td>
        </tr>
      </table>
    `;
    setContent(updatedContent);
    setLocalContent(updatedContent);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
          
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
          
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="editor-container">
        <h2>Text Editor</h2>
        <JoditEditor value={localContent} onChange={setLocalContent} />
      </div>
    </div>
  );
};

export default UserForm;
