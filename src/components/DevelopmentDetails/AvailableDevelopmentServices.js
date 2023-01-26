import classes from './AvailableMeals.module.css';

const DUMMY_DATA = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableDevelopmentServices = () => {
  const developmentList = DUMMY_DATA.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.DevelopmentDetails}>
      <ul>{developmentList}</ul>
    </section>
  );
};

export default AvailableDevelopmentServices;
