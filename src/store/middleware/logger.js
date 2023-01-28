export const logger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  next(action);
};
