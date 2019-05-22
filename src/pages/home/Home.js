import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTutors } from '../../actions/actions';
import TutorsDisplay from '../../components/tutorsDisplay/TutorsDisplay';
import SortButton from '../../components/buttons/SortButton';
import SearchBar from '../../components/searchBar/SearchBar';

const Home = props => {

  const { getTutors } = props;

  useEffect(() => {
    ( async () => {
      await getTutors()
    })()
  }, [getTutors])

  return(
    <>
    <SortButton status={ false } text="city" />
    <SortButton status={ true } text="name" />
    <SearchBar />
    <TutorsDisplay />
    </>
  )
}

export default connect(null, { getTutors })(Home)