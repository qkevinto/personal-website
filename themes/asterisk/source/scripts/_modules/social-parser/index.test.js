import test from 'ava';
import socialParser from './index.js';

test('Should return a mapped social activities array of objects', t => {
  return socialParser([
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    }
  ],{
    username: (response) => { return `test-${response.username}`; },
    network: (response) => { return `test-${response.network}`; },
    content: (response) => { return `test-${response.content}`; },
    background: (response) => { return `test-${response.background}`; },
    link: (response) => { return `test-${response.link}`; },
    modifier: (response) => { return `test-${response.modifier}`; }
  },
    1
  )
  .then((activities) => {
    t.plan(6);
    t.is(activities[0].username, 'test-username');
    t.is(activities[0].network, 'test-network');
    t.is(activities[0].content, 'test-content');
    t.is(activities[0].background, 'test-background');
    t.is(activities[0].link, 'test-link');
    t.is(activities[0].modifier, 'test-modifier');
  });
});

test('Should return a limted array of 2 objects', t => {
  return socialParser([
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    },
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    }
    ,
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    }
  ],{
    username: (response) => { return response.username; },
    network: (response) => { return response.network; },
    content: (response) => { return response.content; },
    background: (response) => { return response.background; },
    link: (response) => { return response.link; },
    modifier: (response) => { return response.modifier; }
  },
    2
  )
  .then((activities) => {
    t.is(activities.length, 2);
  });
});

test('Should return a limited array of 1 object if no limit is provided', t => {
  return socialParser([
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    },
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    }
    ,
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    }
  ],{
    username: (response) => { return response.username; },
    network: (response) => { return response.network; },
    content: (response) => { return response.content; },
    background: (response) => { return response.background; },
    link: (response) => { return response.link; },
    modifier: (response) => { return response.modifier; }
  })
  .then((activities) => {
    t.is(activities.length, 1);
  });
});

test('Should return an reject promise of no map is provided', t => {
  return socialParser([
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    },
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    }
    ,
    {
      username: 'username',
      network: 'network',
      content: 'content',
      background: 'background',
      link: 'link',
      modifier: 'modifier'
    }
  ],
    ''
  ,
    2
  )
  .catch((error) => {
    t.pass(error);
  });
});