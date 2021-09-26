import _ from 'lodash';
import React from 'react';

const ACTIVE_SESSION_TOKEN = 'IS_ACTIVE_SESSION';
const IS_BROWSER = typeof window !== 'undefined';
const ACTIVE_SESSION_TOKEN_EXISTS =
  IS_BROWSER && window.sessionStorage.getItem(ACTIVE_SESSION_TOKEN);

export function useIsActiveSession() {
  const [isActiveSession, setIsActiveSession] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (IS_BROWSER && !ACTIVE_SESSION_TOKEN_EXISTS) {
      window.sessionStorage.setItem(ACTIVE_SESSION_TOKEN, 'true');
      setIsActiveSession(true);
    } else {
      return _.noop();
    }
  }, []);

  return isActiveSession;
}

export default useIsActiveSession;
