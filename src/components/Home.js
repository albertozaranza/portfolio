import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
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
