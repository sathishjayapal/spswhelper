import { Fragment } from 'react';

import MealsSummary from './DeveloperSummary';
import AvailableDevelopmentServices from './AvailableDevelopmentServices';

const DevelopmentDetails = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableDevelopmentServices />
    </Fragment>
  );
};

export default DevelopmentDetails;
