

        var SpilData = {
            id: '576742227280296759'
        };
        var Api = null;
        var LOGO;
        var MORE;
        var SCALE;
        var CENTERX;
        var CENTERY;
        var W;
        var H;
        var moreGX;
        var moreGY;
        var LOGOimg;
        var LOGOW;
        var LOGOH;
        var moreGamesimg;
        var actionLogo;
        var actionMoreGames;
        var noBrand = null;
        //if (window.console && window.console.log) {
        //console.log("bekho VERSION 2.2!!!!");
        //}
        // <script type="text/javascript" src="lib/impact/impact.js">/script>
        //<script type="text/javascript" src="lib/game/main.js">/script>

        /*window.addEventListener("keydown", function(e) {
            // space and arrow keys
            if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);*/
        window.addEventListener('resize', function() {
            if (game.device.iOS)
            {
                setTimeout(function() {
                    game.system._onWindowResize();
                }, 500);
                setTimeout(function() {
                    game.system._onWindowResize();
                }, 800);
                setTimeout(function() {
                    game.system.checkOrientation();
                }, 1000);

            }
        });

        window.onclick = function() {

            this.focus();

        };


            GameAPI.loadAPI (function (apiInstance) {
                // The API is ready for use.
                Api = apiInstance;
                //if (window.console && window.console.log) {
                    //console.log('GameAPI version ' + apiInstance.version + ' loaded!');
                //}
            }, SpilData);


    