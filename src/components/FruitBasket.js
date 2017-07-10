import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange} />
      <FilteredFruitList
        filter={props.selectedFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: null,
  filters: null,
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
