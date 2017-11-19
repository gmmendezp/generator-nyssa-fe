const actionToSend = payload => ({ type: '', payload });

export default action$ =>
  action$
    .ofType('')
    // Make an ajax call and send the fulfilled action
    .mergeMap(action => actionToSend(''));
