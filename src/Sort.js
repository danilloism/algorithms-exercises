import React from 'react';
import { shuffle, range } from 'lodash';
import { App, snapshot, done, clear } from './sort-visualizer';

import './sort.css';

function sort(array) {
  // do cool stuff here
  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
  // snapshot(array);
  // copy the body of the sort function and paste it above
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  // sort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);
  done();
  return <App />;
}
