const steps = {
    "Business Understanding": "Outlining the project's intentions and goals.",
    "Data Understanding": "Collecting and understanding the data required for the project.",
    "Data Preparation": "Transforming the collected data into a usable form.",
    "Modeling": "Expressing the data through appropriate models to gain insights and knowledge.",
    "Evaluation": "Testing the selected model to assess its effectiveness.",
    "Deployment": "Applying the model to new data and using it in real-world scenarios."
  };
  
  // Outputting the steps and their descriptions
  for (const step in steps) {
    console.log(`${step}: ${steps[step]}`);
  }
  