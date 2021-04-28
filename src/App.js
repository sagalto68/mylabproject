import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setUser, clearUser } from './redux/user/userActions';
import Routes from './routes';
import { registerAuthObserver } from './services/auth';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    registerAuthObserver((user) => {
      if (user) {
        console.log('IMTCHLG ~ El usuario ha hecho login: ', user);
        setUserData({ uid: user.uid });
        dispatch(setUser({ uid: user.uid }));
      } else {
        console.log('IMTCHLG ~ El usuario ha hecho logout: ');
        setUserData(null);
        dispatch(clearUser());
      }
      setIsLoading(false)
    })
  }, []);

  if (isLoading) return <>Cargando...</>;

  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;