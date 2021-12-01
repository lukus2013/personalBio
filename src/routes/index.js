import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';

export default function MyRoutes({ admin }) {
  return (
    <>
      {admin ? <AdminRoutes admin={admin} /> : console.warn('Not and Admin')}
      <UserRoutes />
    </>
  );
}

MyRoutes.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};

MyRoutes.defaultProps = {
  admin: null,
};
