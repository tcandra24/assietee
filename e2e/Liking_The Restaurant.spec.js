Feature('Liking The Restaurant');

// Before(({ I }) => {
//   I.amOnPage('/#/favorite');
// });

Scenario('liking a restaurant', ({ I }) => {
  // I.see('Tidak ada resto favorite untuk ditampilkan', '.restaurant-not-found');

  I.amOnPage('/');

  I.wait(2);

  I.seeElement('single-item a');
  I.click(locate('single-item a').first());

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.wait(3);

  I.seeElement('list-items');
});

Scenario('unliking a restaurant', ({ I }) => {
  I.amOnPage('/');

  I.wait(2);

  I.seeElement('single-item a');
  I.click(locate('single-item a').first());

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.wait(3);

  I.seeElement('single-item a');
  I.click(locate('single-item a').first());

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-not-found');
});
