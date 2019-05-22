import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/actions';
import TutorsDisplay from '../../components/tutorsDisplay/TutorsDisplay';

const Home = props => {

  const { getUsers } = props;

  useEffect(() => {
    ( async () => {
      await getUsers()
    })()
  }, [getUsers])

  return(
    <TutorsDisplay />
  )
}

export default connect(null, { getUsers })(Home)