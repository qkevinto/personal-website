import React from 'react';
import { Link } from 'react-router';

const PageLink = ({ to, children }) => {
  // add a trailing slash if there is not one (to support SPA)
  let linkTo = to;
  if (to.substr(to.length-1) !== '/') {
    linkTo = to + '/';
  }
  return (
    <Link to={linkTo}>
      {children}
    </Link>
  );
};

export default PageLink;
