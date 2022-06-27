const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 8000

const app = express();

const url = 'https://www.theguardian.com/us'

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const articles = []
        $('.fc-item__title', html).each(function() {
          const title =  $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(error => console.log(err))


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));