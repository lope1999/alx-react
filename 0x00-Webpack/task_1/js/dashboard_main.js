// task_1/js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

const countElement = $('#count');
let count = 0;

function updateCounter() {
  count += 1;
  countElement.text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 300);

$(document).ready(() => {
  $('<p>Holberton Dashboard</p>').appendTo('body');
  $('<p>Dashboard data for the students</p>').appendTo('body');
  $('<button>Click here to get started</button>')
    .on('click', debouncedUpdateCounter)
    .appendTo('body');
  $('<p id="count"></p>').appendTo('body');
  $('<p>Copyright - Holberton School</p>').appendTo('body');
});

