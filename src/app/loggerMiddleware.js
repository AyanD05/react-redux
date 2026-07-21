const loggerMiddleware = (store) => (next) => (action) => {
  console.log("========== Redux Logger ==========");
  console.log("Previous State:", store.getState());
  console.log("Action:", action);

  // Pass the action to the next middleware (or reducer)
  const result = next(action);

  console.log("Next State:", store.getState());
  console.log("==================================");

  return result;
};

export default loggerMiddleware;