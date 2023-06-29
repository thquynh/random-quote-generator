$(document).ready(function () {
  generateQuote();
});

function generateQuote() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5e85206491msh877c89cc2794408p11b53djsn397a147875f2",
      "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    // console.log(response[0].author);
    // var json = $.parseJSON(response);
    // console.log(json);
    // $("#text").html(response[0].text);
    // $("#author").html(response[0].author);

    const quoteDetails = response[0];
    var quoteText = quoteDetails.text.trim();
    var quoteAuth = "- " + quoteDetails.author.trim() + "-";
    var tweet = '"' + quoteText + '"  ' + quoteAuth;
    var tweetURL = "https://twitter.com/intent/tweet?text=" + tweet;

    // Change Primary Color
    var primaryColors = ["#BAABDA", "#6082b6", "#F1C27B", "E97777"];
    var getColor = Math.floor(Math.random() * primaryColors.length);
    $("#quote-box").css("background-color", primaryColors[getColor]);
    $("#new-quote").css("color", primaryColors[getColor]);

    $("#text").text(quoteText);
    $("#author").text(quoteAuth);
    $("#tweet-quote").attr("href", tweetURL);
  });
}
