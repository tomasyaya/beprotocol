import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTutors } from '../../actions/actions';
import TutorsDisplay from '../../components/tutorsDisplay/TutorsDisplay';
import Navbar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import Options from '../../components/options/Options';

const Home = props => {

  const { getTutors } = props;

  useEffect(() => {
    ( async () => {
      await getTutors()
    })()
  }, [getTutors])

  return(
    <>
      <Navbar />
      <Header />
      <Options />
      <TutorsDisplay />
    </>
  )
}

export default connect(null, { getTutors })(Home)