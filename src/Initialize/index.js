import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import MyRoutes from '../routes';
import SignIn from '../views/SignIn';
import Navigation from '../Components/Navigation';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfo = {
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfo);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Navigation />
          <MyRoutes userId={user.uid} />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </div>
  );
}

export default Initialize;
