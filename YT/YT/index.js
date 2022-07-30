//const API ="AIzaSyAtlAwUjCIr9wNk_UOMfYJpwiJ-P2fM7Ao";

const trendingVideos = async () => {
    try {
      let name = "most popular videos in India"
      let res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${name}&key=AIzaSyAtlAwUjCIr9wNk_UOMfYJpwiJ-P2fM7Ao`
      );
      let data = await res.json();
      console.log(data.items);
      appendData(data.items);
    } catch (err) {
      console.log(err);
    }
  };
  trendingVideos();
  const searchVideo = async () => {
      try {
        let name = document.getElementById("search").value;
        let res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${name}&key=AIzaSyAtlAwUjCIr9wNk_UOMfYJpwiJ-P2fM7Ao`
        );
        let data = await res.json();
        console.log(data.items);
        appendData(data.items);
      } catch (err) {
        console.log(err);
      }
    };
    const showResult = document.getElementById("showResult");
    const appendData = (data) => {
      showResult.innerHTML = null;
      data.forEach(({snippet:{title,thumbnails:{high:{url}}},id:{videoId}},index) => {
        let div = document.createElement("div");
        div.setAttribute("id","video")
        let name = document.createElement("p");
        name.innerText = title;
        let thumbnail = document.createElement("img");
        thumbnail.src = url;
        div.append(thumbnail, name);
        showResult.append(div);
        div.addEventListener("click",(event) => {
            localStorage.setItem("videoId",JSON.stringify(videoId))
            window.location.href = "Video.html"
        })
    });
  };