import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import { ButtonStyled } from './style';

const Home = ({ home, getHome, getHomeWithoutSaga }) => {
  React.useEffect(() => {
    getHome();
  }, [getHome]);

  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <div>
        {home.map((el) => (
          <FormControlLabel
            key={`check${el}`}
            control={<Checkbox checked={checked} />}
            label={el}
          />
        ))}
      </div>
      <Button variant="contained" onClick={() => setChecked(!checked)}>
        {checked ? 'Uncheck it !' : 'Check it !'}
      </Button>
      <ButtonStyled onClick={() => getHomeWithoutSaga()}> Add a checkbox </ButtonStyled>
    </>
  );
};

Home.defaultProps = {
  home: [],
};

Home.propTypes = {
  getHome: PropTypes.func.isRequired,
  getHomeWithoutSaga: PropTypes.func.isRequired,
  home: PropTypes.arrayOf(PropTypes.shape),
};

export default Home;
