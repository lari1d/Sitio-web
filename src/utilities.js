import { differenceInDays } from 'date-fns';
import colors from './styles/colors';

const isNew = date => differenceInDays(new Date(), date) < 7;

const selectColorByType = (type) => {
  switch (type) {
    case 'NEW':
      return colors.fortnightlyPurple;
    case 'DISCOUNT':
      return colors.fortnightlyGray;
    default:
      return colors.fortnightlyWhite;
  }
};

export { selectColorByType, isNew };
