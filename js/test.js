// // jsを記述する際はここに記載していく

  
// //   その日の予定の試合
$(function() {
  $.ajaxSetup({
    headers : {"X-Auth-Token" : "e4dbcd5f0efe4c208643615c09719230"}
  });


  $.getJSON(
    "https://api.football-data.org//v2/matches/", 
      function(data){
        console.dir(data);

        // 繰り返し前の形を変数に入れる
        let leages = data.matches;


        // リーグ名
        leages.forEach(function(leages){
          console.log(leages.competition.name);
          $("#leages").append(leages.competition.name);

        })

        // ホームチーム
        leages.forEach(function(leages){
          console.log(leages.homeTeam.name);
          $("#hometeam").append(leages.homeTeam.name);

        })

        // 対戦日時
        leages.forEach(function(leages){
          console.log(leages.utcDate);
          $("#date").append(leages.utcDate);
        })

        // アウェーチーム
        leages.forEach(function(leages){
          console.log(leages.awayTeam.name);
          $("#awayteam").append(leages.awayTeam.name);

        })



  }
  )});


  
// // ▼▼▼▼▼▼▼▼▼ 元コード▼▼▼▼▼▼▼▼▼
// $(function() {
//   $.ajaxSetup({
//     headers : {"X-Auth-Token" : "e4dbcd5f0efe4c208643615c09719230"}
//   });


//   $.getJSON('https://api.football-data.org/v2/competitions/PD/standings?standingType=TOTAL', function (data_PL) {
//     //JSON取得後の処理
//     standings = data_PL.standings[0].table;
//     // 順位表にデータを挿入
//     standings.forEach(function(standing) {
//       $("#league-tbl").append(
//         '<tr align="center">'
//         + '<td>' + standing.position + '</td>'
//         + '<td>' + '<div style = "text-align: left"><div style="display: table-cell; vertical-align: middle;"><img src="' + standing.team.crestUrl + '" height="24"></div><div style="display: table-cell; vertical-align: middle;">' 
//         + standing.team.name + '</div></div></td>' 
//         + '<td>' + standing.playedGames + '</td>'
//         + '<td>' + standing.won + '</td>' 
//         + '<td>' + standing.draw + '</td>' 
//         + '<td>' + standing.lost + '</td>' 
//         + '<td>' + standing.points + '</td>' 
//         + '</tr>'
//       )
//     });
//   });
// });

//standingsのオブジェクト取得

// $(function() {
//   $.ajaxSetup({
//     headers : {"X-Auth-Token" : "e4dbcd5f0efe4c208643615c09719230"}
//   });


//   $.getJSON(
//     "https://api.football-data.org/v2/competitions/PL/standings?standingType=TOTAL", 
//       function(data){
//         console.dir(data);
//   }
//   )});

// // competitionでやってみる
// $(function() {
//   $.ajaxSetup({
//     headers : {"X-Auth-Token" : "e4dbcd5f0efe4c208643615c09719230"}
//   });


//   $.getJSON(
//     "https://api.football-data.org//v2/competitions/", 
//       function(data){
//         console.dir(data);
//   }
//   )});


