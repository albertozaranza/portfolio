import React from 'react';

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />
      </div>
    </>
  );
}
