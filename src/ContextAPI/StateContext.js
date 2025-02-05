import { useState } from "react";
import AppContext from "./AppContext";

const StateContext = (props) => {
    const [counter, setCounter] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: ''
      });
      const [content, setContent] = useState('');
    return (
        <AppContext.Provider 
            value={{counter, setCounter, formData, setFormData, content, setContent}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default StateContext;