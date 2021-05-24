console.clear();

const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const scrape = require("./scrape");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));
app.use(cors());

app
  .get("/google/all", (req, res) => {
    scrape(`https://www.google.com/search?q=${req.query.q}`)
      .then((data) => {
        res.type('jpeg').send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .get("/google/images", (req, res) => {
    scrape(`https://www.google.com/search?q=${req.query.q}&tbm=isch`)
      .then((data) => {
        res.type('jpeg').send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .get("/duckduckgo/all", (req, res) => {
    scrape(`https://www.duckduckgo.com?q=${req.query.q}&tbm=isch`)
      .then((data) => {
        res.type('jpeg').send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .get("/duckduckgo/images", (req, res) => {
    scrape(`https://duckduckgo.com?q=${req.query.q}&iax=images&ia=images`)
      .then((data) => {
        res.type('jpeg').send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .get("/bing/all", (req, res) => {
    scrape(`https://www.bing.com/search?q=${req.query.q}&tbm=isch`)
      .then((data) => {
        res.type('jpeg').send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .get("/bing/images", (req, res) => {
    scrape(`https://bing.com/images/search?q=${req.query.q}`)
      .then((data) => {
        res.type('jpeg').send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  })
  .get("/yahoo/all", (req, res) => {
    scrape(`https://search.yahoo.com/search?p=${req.query.q}&tbm=isch`)
      .then((data) => {
        res.type('jpeg').send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  })

  .get("/yahoo/images", (req, res) => {
    scrape(`https://images.search.yahoo.com/search/images?p=${req.query.q}`)
      .then((data) => {
        res.type('jpeg').send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });

app.listen(PORT, () => {
  console.log("Server listening on http://localhost:" + PORT);
});
