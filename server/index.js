const express = require("express");
const app = express();
const port = 8000;
const feedparser = require("feedparser-promised");
const cors = require("cors");
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

const MAX_FEEDS = 8;

app.use(cors());

const feeds = [
  {
    id: "The Economist",
    selector: '.blog-post__text',
    url: "https://www.economist.com/finance-and-economics/rss.xml"
  },
  {
    id: "New York Times",
    selector: 'section[name="articleBody"]',
    url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
  },
  {
    id: "BBC News",
    selector: '[class="story-body__inner"]',
    url: "http://feeds.bbci.co.uk/news/world/rss.xml"
  }
];

app.get("/feed", (req, res) => {
  const promises = feeds.map(feed => feedparser.parse(feed.url));

  Promise.all(promises).then(result => {
    const feedsByCategory = result.map((items, index) => {
      const feedId = feeds[index].id;

      return {
        feedId: feedId,
        items: items.slice(0, MAX_FEEDS)
      };
    });

    res.json(feedsByCategory);
  });
});

app.get("/feed/article", (req, res) => {
  const url = unescape(req.query.url);
  const feedId = unescape(req.query.feedId);

  crawler.queue([
		{
			url: url,
			callback: (error, crawlerResponse, done) => {
        let content;

				if (error) {
					console.error(error);
				} else {
          const { $ } = crawlerResponse;

          const feedFound = feeds.find(feed => feed.id === feedId);

          if (feedFound) {
            content = $(feedFound.selector).text();
          }
				}

        res.json({ url: url, content: content });
        done();
			},
		}
  ]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
