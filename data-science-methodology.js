const IBMdataScienceMethodology = {
  "Business understanding": "Defining the problem, project objectives, and solution requirements from a business perspective.",
  "Analytic approach": "Expressing the problem in the context of statistical and machine-learning techniques to determine the most suitable approach.",
  "Data requirements": "Determining the necessary data content, formats, and representations based on the chosen analytic approach.",
  "Data collection": "Identifying and gathering relevant data resources, including structured, unstructured, and semi-structured data.",
  "Data understanding": "Using descriptive statistics and visualization techniques to assess data quality and gain initial insights.",
  "Data preparation": "Constructing the data set by cleaning, combining, and transforming the data into a more useful format.",
  "Modeling": "Developing predictive or descriptive models based on the prepared data set and the defined analytic approach.",
  "Evaluation": "Evaluating the model's quality, interpreting diagnostic measures, and assessing its efficacy in solving the problem.",
  "Deployment": "Deploying the approved model into the production or test environment, integrating it into business processes.",
  "Feedback": "Collecting results from the implemented model, analyzing its performance, and refining the model for continuous improvement."
};
  
  // Outputting the steps and their descriptions
  for (const step in IBMdataScienceMethodology) {
    console.log(`${step}: ${steps[step]}`);
  }
  