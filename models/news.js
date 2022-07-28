const mongoose = require('./connection')
const { Schema, model } = mongoose

const newSchema = new Schema(
    {
        author: String,
        description: String,
        title: String,
        published: String,
        url: String,
        image: String
        }
)

// _id: ObjectId("62d6004787ca520b92fa8e91") use this to find our data
// TitleName = data.news.title
// news: [
//       {
//          author: "Nokia Oyj",
//          category: [
//             "exchange",
//             "stock"
//          ],
//          description: "London Stock Exchange plc is not responsible for and does not check content on this Website. Website users are responsible for checking content. Any news item (including any prospectus) which is addre...",
//          id: "e5f652fc-2292-4753-9829-ec661f54c66e",
//          image: "https://www.londonstockexchange.com/favicon.ico",
//          language: "it",
//          published: "2022-07-18 19:00:00 +0000",
//          title: "Nokia Oyj: Omien osakkeiden takaisinosto 18.07.2022, price: 4.54 + -0.06%",
//          url: "https://www.londonstockexchange.com/news-article/0HAF/nokia-oyj-omien-osakkeiden-takaisinosto-18-07-2022/15545626"
//       },

const News = model('news', newSchema)


module.exports = News