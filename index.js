$(document).ready(function () {
  generateQuote();
});

function changePrimaryColor() {
  var primaryColors = ["#FFD89C", "#C4D7B2", "#D7C0AE", "#FAB7B7", "#ACB1D6"];
  var secondaryColors = ["#F1C27B", "#A0C49D", "#967E76", "#E19999", "#8294C4"];
  var getColor = Math.floor(Math.random() * primaryColors.length);

  $("#quote-box").css("background-color", primaryColors[getColor]);
  $("#new-quote").css("color", primaryColors[getColor]);
  $("#new-quote").css("background-color", "#fff");
  $("#new-quote").hover(function () {
    $(this)
      .css("background-color", secondaryColors[getColor])
      .mouseout(function () {
        $(this).css({ "background-color": "#fff" });
      });
  });
}

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
    const quoteDetails = response[0];
    var quoteText = quoteDetails.text.trim();
    var quoteAuth = "- " + quoteDetails.author.trim() + "-";
   var content = '"' + quoteText + '" ' + quoteAuth;
    var tweetURL = "https://twitter.com/intent/tweet?text=" + content;
    var tumblrURL =
      "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,&content=" +
      encodeURIComponent(quoteText) +
      "&caption=" +
      encodeURIComponent(quoteAuth.split("-").join("")) +
      "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";


    // Change Primary Color
    changePrimaryColor();

    $("#text").text(quoteText);
    $("#author").text(quoteAuth);
    $("#tweet-quote").attr("href", tweetURL);
  });
}
