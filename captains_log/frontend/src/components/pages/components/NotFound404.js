import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFound404 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <h2 className="title">Oops!</h2>
      <button onClick={() => navigate(-1)}>Back</button>
      <section className="nope">
        <p>
          Oops, what's happened here? <br /> 
          We don't have a page called {location.pathname}!
        </p>
      </section>
    </>
  );
};

export default NotFound404;
