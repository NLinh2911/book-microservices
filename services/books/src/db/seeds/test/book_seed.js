exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('book')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('book').insert([
        {
          id: 'd83a15da-ba79-4215-b117-8176bb5ac694',
          title: 'Option B: Facing Adversity, Building Resilience, and Finding Joy',
          alias: 'option-b-facing-adversity-building-resilience-and-finding-joy',
          category_id: ['cat01'],
          author_id: ['author01'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'placeholder.jpg',
          created_at: '2016-12-16 12:21:13',
          published_at: '2016-12-22 15:21:13',
          modified_at: '2016-12-22 12:21:13',
          download_link: 'http-download-link',
          publish_status: true,
        }, {
          id: 'f1a28f22-2683-4e42-9fff-c790a7170396',
          title: 'A History of the World in 100 Objects',
          alias: 'a-history-of-the-world-in-objects',
          category_id: [
            'cat03', 'cat04',
          ],
          author_id: ['author02'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'placeholder.jpg',
          created_at: '2017-01-16 12:21:13',
          published_at: '2017-02-25 15:21:13',
          modified_at: '2017-02-25 12:21:13',
          download_link: 'http-download-link',
          publish_status: true,
        }, {
          id: '6837394d-2de2-4603-b09d-90f4bad1b8ac',
          title: 'The Sacred Willow: Four Generations in the Life of a Vietnamese Family',
          alias: 'the-sacred-willow-four-generations-in-the-life-of-a-vietnamese-family',
          category_id: [
            'cat03', 'cat06',
          ],
          author_id: [
            'author02', 'author03',
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'placeholder.jpg',
          created_at: '2017-01-16 12:21:13',
          published_at: '2017-02-22 15:21:13',
          modified_at: '2017-03-22 12:21:13',
          download_link: 'http-download-link',
          publish_status: true,
        }, {
          id: 'e84825a9-b14f-4453-9c89-6d8b7f91bc40',
          title: 'Skinnytaste Fast and Slow: Knockout Quick-Fix and Slow Cooker Recipes',
          alias: 'skinnytaste-fast-and-slow-knockout-quickfix-and-slow-cooker-recipes',
          category_id: ['cat05'],
          author_id: ['author04'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'placeholder.jpg',
          created_at: '2016-12-16 12:21:13',
          published_at: '2017-05-12 15:21:13',
          modified_at: '2017-05-12 12:21:13',
          download_link: 'http-download-link',
          publish_status: true,
        }, {
          id: '9d3cd895-002c-4efb-beff-77b70b57ab5c',
          title: 'Not Yet Published Book',
          alias: 'not-yet-published-book',
          category_id: null,
          author_id: ['author05'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'placeholder.jpg',
          created_at: '2016-12-16 12:21:13',
          published_at: null,
          modified_at: '2016-12-22 12:21:13',
          download_link: null,
          publish_status: false,
        },
      ]);
    });
};
