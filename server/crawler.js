////////////////////////////////
// CRAWLER ////////////////////
const Crawler = require('crawler');

app.get("/article/:url", (req, res) => {
  const url = req.params.url;

  // chama o código do crawler aqui passando a url como parâmetro

  const crawler = new Crawler({
    maxConnections: 10,
    callback: (error, res, done) => {
      if (error) {
        console.log(error);
      }
      done();
    },
  });

  crawler.queue([
    {
      url:
        'https://www.nytimes.com/2019/06/04/world/europe/brexit-trump-theresa-may.html',
      callback: (error, crawlerResponse, done) => {
        let result; // result can be error or success

        if (error) {
          console.log(error);
        } else {
          const { $ } = crawlerResponse;
          result = $('section[name="articleBody"]').text()
          //console.log('>>>>>>> NYTIMES')
          //console.log($('section[name="articleBody"]').text());
        }
        // return JSON with content
        res.json({content: $('section[name="articleBody"]').text()),
        done();
      },
    }
  ]);

});