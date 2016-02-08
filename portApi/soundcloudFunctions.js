

function spelaMusik(genre) {
    SC.get('/tracks',
        {genres: genre},
        function(tracks){
          console.log(tracks);

        if (tracks.length === 0) {
            document.getElementById('soundResult').innerHTML = '<p>Inga träffar. Ange ett annan sökord!</p>';
        }
        else {
            var random = Math.floor(Math.random() * tracks.length);
            SC.oEmbed(tracks[random].uri, {auto_play: false}, document.getElementById('soundResult'));
        }
    });
}

function getUser(user_id){
    SC.get('/users', function(error){
        var user = 'https://soundcloud.com/'+ user_id + '/';
        console.log(user);
        if (!user){
            document.getElementById('userInfo').innerHTML = '<p>Inga träffar. Ange ett annat användarnamn!</p>';
        }
        else {

           SC.oEmbed(user, document.getElementById('userInfo'));




        }
    });
}

window.onload = function() {
    SC.initialize({
        client_id: '83e281252d9f659b551e69a6e435be9a'
    })
}

//KNAPPAR SOM KALLAR PÅ FUNKTIONERNA
var playButton = document.getElementById('playButton');
playButton.addEventListener('click', function(){
    var inputSong = document.getElementById('inputSong').value;
    spelaMusik(inputSong);
});

var userButton = document.getElementById('userButton');
userButton.addEventListener('click', function(){
    var inputUser = document.getElementById('inputUser').value;
    getUser(inputUser);
});


