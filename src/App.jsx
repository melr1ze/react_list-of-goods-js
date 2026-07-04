import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [visible, setVisible] = useState(goodsFromServer);

  const isAlphabetical =
    [...visible].join(',') ===
    [...visible].sort((a, b) => a.localeCompare(b)).join(',');
  const isByLength =
    [...visible].join(',') ===
    [...visible].sort((a, b) => a.length - b.length).join(',');
  const isInitial = visible.join(',') === goodsFromServer.join(',');

  const sortAlphabetically = () => {
    setVisible([...visible].sort((a, b) => a.localeCompare(b)));
  };

  const sortByLength = () => {
    setVisible([...visible].sort((a, b) => a.length - b.length));
  };

  const reverseGoods = () => {
    setVisible([...visible].reverse());
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${isAlphabetical && !isInitial ? '' : 'is-light'}`}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${isByLength && !isInitial ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={reverseGoods}
        >
          Reverse
        </button>

        {!isInitial && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => setVisible(goodsFromServer)}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visible.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
