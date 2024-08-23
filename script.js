  <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>
    <script src="./script.js"></script>
    <script>
        $(document).ready(function () {
            var gsearch = function () {
                var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
                window.open(url, 'google');
            };
            var glucky = function () {
                var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value + '&btnI';
                window.open(url, 'google');
            };

            $(".left").click(gsearch);
            $(".right").click(glucky);

            $("#searchme").keypress(function (e) {
                if (e.which == 13) {
                    gsearch();
                }
            });
        });
