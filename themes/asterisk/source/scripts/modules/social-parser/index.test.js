import test from 'ava';
import socialParser from './index.js';

test('Returns a mapped social activities object', t => {
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
