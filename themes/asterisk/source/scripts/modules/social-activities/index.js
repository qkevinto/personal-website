import codepen from 'modules/codepen';
import twitter from 'modules/twitter';
import fivehundredpx from 'modules/fivehundredpx';
import github from 'modules/github';
import templater from 'lodash-es/template.js';
import socialTemplate from './social-template.html!text';

export default function socialActivities() {
  const socialPromises = [];

  socialPromises.push(twitter({
    username: 'qkevinto',
    count: 1,
    extras: {
      id: '300888125675278336'
    }
  })
  .then((activity) => {
    const container = document.querySelector('[data-social-activities="twitter"]');
    const template = templater(socialTemplate);
    container.innerHTML = template(activity[0]);

    return Promise.resolve();
  }));

  socialPromises.push(fivehundredpx({
    username: 'kevinto',
    count: 1,
    extras: {
      consumerKey: 'TCaLeU8cjcQEAf6oUybAG9bWR8SIfhascBmOBvMV'
    }
  })
  .then((activity) => {
    const container = document.querySelector('[data-social-activities="500px"]');
    const template = templater(socialTemplate);
    container.innerHTML = template(activity[0]);

    return Promise.resolve();
  }));

  socialPromises.push(codepen({
    username: 'qkevinto',
    count: 1
  })
  .then((activity) => {
    const container = document.querySelector('[data-social-activities="codepen"]');
    const template = templater(socialTemplate);
    container.innerHTML = template(activity[0]);

    return Promise.resolve();
  }));

  socialPromises.push(github({
    username: 'qkevinto',
    count: 1
  })
  .then((activity) => {
    const container = document.querySelector('[data-social-activities="github"]');
    const template = templater(socialTemplate);
    container.innerHTML = template(activity[0]);

    return Promise.resolve();
  }));

  Promise.all(socialPromises)
  .then(() => {
    const container = document.querySelector('[data-social-activities="container"]');
    container.classList.remove('SocialActivities-is-loading');
  });
}
