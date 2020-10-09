import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Link, useLocation } from 'react-router-dom';
import { SmallSpanLink } from '../home/style';
import { getTimeFromX } from '../../utils/getTimeFromX';
import { TitleDiv, SmallDiv, HeaderDiv } from './style';

const useQuery = () => new URLSearchParams(useLocation().search);

const Item = ({ content, getItemFromUrl, feedState, error, getCommentsFromItem }) => {
  const query = useQuery();
  const itemID = query.get('id');
  const location = useLocation();
  const { state } = location;

  React.useEffect(() => {
    if (!isEmpty(state)) feedState(state);
  }, []);

  React.useEffect(() => {
    if (isEmpty(content) && isEmpty(state)) {
      getItemFromUrl(itemID);
    }
    getCommentsFromItem(content.kids);
  }, [content]);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <HeaderDiv>
        <TitleDiv>{content.title}</TitleDiv>
        <SmallDiv>
          {content.score} points by <Link to={`/user?id=${content.by}`}>{content.by}</Link>{' '}
          <SmallSpanLink>{getTimeFromX(content.time)}</SmallSpanLink> |{' '}
          <Link to={{ pathname: '/item', search: `?id=${content.id}`, state: { content } }}>
            {content.descendants} {content.descendants === 0 ? 'comment' : 'comments'}
          </Link>
        </SmallDiv>
        <div>{JSON.stringify(content.kids)}</div>
      </HeaderDiv>
    </>
  );
};

Item.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  getItemFromUrl: PropTypes.func.isRequired,
  getCommentsFromItem: PropTypes.func.isRequired,
  feedState: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Item;
