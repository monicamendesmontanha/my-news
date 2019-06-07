const express = require("express");
const app = express();
const port = 8000;
const feedparser = require("feedparser-promised");
const cors = require("cors");

const MAX_FEEDS = 8;

app.use(cors());

// const url = "https://www.smh.com.au/rss/feed.xml";

// app.get("/", (req, res) => res.send("Hello World!"));

app.get("/feed", (req, res) => {
  const feeds = [
    {
      id: "The Sydney Morning Herald",
      url: "https://www.smh.com.au/rss/feed.xml"
    },
    {
      id: "The Economist",
      url: "https://www.economist.com/finance-and-economics/rss.xml"
    },
    {
      id: "BBC News - Technology",
      url: "http://feeds.bbci.co.uk/news/technology/rss.xml"
    },
    {
      id: "New York Times",
      url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
    }
  ];

  const promises = feeds.map(feed => feedparser.parse(feed.url));

  Promise.all(promises).then(result => {
    const feedsByCategory = result.map((items, index) => {
      const feedId = feeds[index].id;

      return {
        feedId,
        items: items.slice(0, MAX_FEEDS)
      };
    });

    res.json(feedsByCategory);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
