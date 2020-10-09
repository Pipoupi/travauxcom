import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { GreySpan, NormalSpan, SmallSpan, StoryDiv, SmallSpanLink } from './style';
import { go2url } from '../../utils/goUrl';
import { getTimeFromX } from '../../utils/getTimeFromX';

const Home = ({ stories, getHome, loading, error }) => {
  const location = useLocation();
  const { pathname } = location;

  // const { id } = useParams();

  React.useEffect(() => {
    if (pathname === '/front') {
      getHome();
    } else if (pathname === '/newest') {
      getHome('newest');
    } else if (pathname === '/ask') {
      getHome('ask');
    } else if (pathname === '/show') {
      getHome('show');
    }
  }, [getHome, pathname]);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {error}
      {loading ? (
        'loading....'
      ) : (
        <>
          {stories.map((el, i) => {
            return (
              <StoryDiv>
                <div onClick={() => go2url(el.url)}>
                  <GreySpan>{i}. </GreySpan>
                  <NormalSpan>{el.title}</NormalSpan>
                </div>
                <div>
                  <SmallSpan>
                    {el.score} points by <Link to={`/user?id=${el.by}`}>{el.by}</Link>{' '}
                    <SmallSpanLink>{getTimeFromX(el.time)}</SmallSpanLink> |{' '}
                    <Link
                      to={{ pathname: '/item', search: `?id=${el.id}`, state: { content: el } }}
                    >
                      {el.descendants} {el.descendants === 0 ? 'comment' : 'comments'}
                    </Link>
                  </SmallSpan>
                </div>
              </StoryDiv>
            );
          })}
        </>
      )}
    </>
  );
};

Home.defaultProps = {
  stories: [],
};

Home.propTypes = {
  getHome: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape),
};

export default Home;
