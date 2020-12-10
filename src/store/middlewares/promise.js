const promise = (store) => (next) => (action) => {
  if (action.type === "PROMISE") {
    const { dispatch } = store;
    const [REQ_ACTION, RES_ACTION, ERR_ACTION] = action.actions;

    dispatch({ type: REQ_ACTION, middleware: true });
    return action.promise
      .then((res) => {
        if (res.status === 404) {
          dispatch({
            type: ERR_ACTION,
            middleware: true,
            payload: "a problem with API",
          });
        }
        return res.json();
      })
      .then((res) => {
        if (res.status && res.status !== 200) {
          dispatch({ type: ERR_ACTION, middleware: true, payload: res });
        } else {
          dispatch({ type: RES_ACTION, middleware: true, payload: res });
        }
      });
  }

  return next(action);
};

export default promise;
