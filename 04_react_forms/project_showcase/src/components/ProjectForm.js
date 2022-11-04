import { useState } from "react";

const ProjectForm = () => {
  
  // Two Approaches 

    // Separate State to Manage Each Input
    
      // const [ name, nameSetter ] = useState("");
      // const [ about, aboutSetter ] = useState("");
      // ...

      // const nameInputHandler = (e) => {
      //   nameSetter(e.target.value);
      // }
  
      // const aboutInputHandler = (e) => {
      //   aboutSetter(e.target.value);
      // }
      // ...

    // One State to Manage All Inputs (Object)
    
      const [ formData, setFormData ] = useState({
        name: "",
        about: "",
        phase: "",
        link: "",
        image: ""
      });

      const formInputHandler = (e) => {
        // setFormData(e.target.value);

        // Recommended As Best Practice To Keep Syntax Readable
        const { name, value } = e.target;

        console.log(`Name of Input: ${name}`);
        console.log(`Value of Input: ${value}`);

        // 1. Preserve the Unchanged Key / Value Pairs in formData
        // 2. Update the Approriate Key / Value Pair
        setFormData({...formData, [name]: value});

          // setFormData({...formData, name: "T"});
          // setFormData({...formData, about: "T"});
      }
  
  return (
    <section>
      <form className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          onChange={formInputHandler}
          value={formData.name}
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="about" 
          onChange={formInputHandler}
          value={formData.about}
        />

        <label htmlFor="phase">Phase</label>
        <select 
          name="phase" 
          id="phase"
          onChange={formInputHandler} 
          value={formData.phase}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link"
          onChange={formInputHandler}  
          value={formData.link}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          onChange={formInputHandler} 
          value={formData.image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
