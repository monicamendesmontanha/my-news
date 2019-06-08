const Crawler = require('crawler');

const crawler = new Crawler({
  maxConnections: 10,
  callback: (error, res, done) => {
    if (error) {
      console.error(error);
    }

    done();
  },
});

const fetchContent = async (url) => {
	let result;

	crawler.queue([
		{
			url:
				'https://www.nytimes.com/2019/06/04/world/europe/brexit-trump-theresa-may.html',
			callback: (error, crawlerResponse, done) => {
				if (error) {
					console.error(error);
				} else {
					const { $ } = crawlerResponse;
					result = $('section[name="articleBody"]').text()
				}

				done();
			},
		}
	]);

	return result;
};

module.exports = { fetchContent };