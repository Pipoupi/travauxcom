import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { isEmpty } from 'lodash';

const useQuery = () => new URLSearchParams(useLocation().search);

const User = ({ user, loading, getUserFromId, error }) => {
  const query = useQuery();
  const userID = query.get('id');

  React.useEffect(() => {
    if (userID) {
      getUserFromId(userID);
    }
  }, [getUserFromId, userID]);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {!userID && <span>No such user</span>}
      {loading && <span>loading...</span>}
      {!loading && isEmpty(user) && <span>No such user</span>}
      {!loading && !isEmpty(user) && <span>{JSON.stringify(user)}</span>}
    </>
  );
};

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  getUserFromId: PropTypes.func.isRequired,
};

export default User;
