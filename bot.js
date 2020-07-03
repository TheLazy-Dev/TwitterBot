require('dotenv').config()
const config = require('./config');
const twit = require('./Twit');
const T = new twit(config);

let params = {
    q: '#Denishs bot'
}

function retweet() {
    searchTweets(params)
}
setInterval(retweet, 2000);

function searchTweets(params) {
       T.get('search/tweets', params, (err, data, response) => {
        let tweets = data.statuses

        if (!err) {
            for (let dat of tweets) {
                let retweetId = dat.id_str;
                T.post('statuses/retweet/:id', { id: retweetId }, (err, response) => {
                    if (response)
                        console.log('Retweeted!!! ' + retweetId)
                    if (err)
                        console.log('Something went wrong while RETWEETING... Duplication maybe...')
                })
            }
        }
    })
}

function postTweet(retweetId) {
    T.post('statuses/retweet/:id',{
        id: retweetId
    },responded(ree,response))
}
setInterval(postTweet,20000)

function responded(err,response) {
    if(response)
        console.log('Retweeted!!!')
    if(err)
        console.log('Something came up!!!')
}
setInterval(responded,2000)