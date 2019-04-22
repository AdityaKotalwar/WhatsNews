$(document).ready(function(){
    $("#searchbtn").on("click",function(e){
        e.preventDefault //makes sure button is not clickable if nothing is pressed 
        let query = $("#searchquery").val();
        let url = "https://newsapi.org/v2/top-headlines?q="+query+"&country=us&category=business&apiKey=9ed6fe87d43649958f8fd87d2135c331";
      //  document.getElementById("demo").innerHTML = query;
      console.log(url);

        if(query !== ""){
            $.ajax({
                url: url,
                method: "GET",
                dataType: "json",
            success: function(news){
             //   console.log(news);
             let output = "";
             let latestNews = news.articles;

             for(var i in latestNews){
                 output += `
                 <div class="col l6 m6 s12">
                 <h4>${latestNews[i].title}</h4>
                 <img src="${latestNews[i].urlToImage}" class="responsive-img">
                 <p>${latestNews[i].description}</p>
                 <p>${latestNews[i].content}</p>
                 <p>Published on: ${latestNews[i].publishedAt}</p>
                 <a href="${latestNews[i].url}" class="btn">Read more</a>
                 </div>
                 `;
             }
                if(output !== ""){
                    $("#newsResults").html(output);
                }else{
                    $("#newsResults").html("There is no news");
                }
            },
            error: function(){
                console.log("error, cannot make api call");
            }
            });
        }else{
            console.log("Enter something");
        }
    });
});