<!-- <h1>Snake.js</h1> -->
<main>
    <div class="container">
        <div class="row text-center">
            <div class="col-0 col-lg-1 col-xl-2 col-xxl-2"></div>
            <div class="col-12 col-lg-10 col-xl-8 col-xxl-8">
                <div class="card bg-green gameCard">
                    <div class="card-body">
                        <table id="game"></table>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-0 col-xxl-2">
                <div class="card bg-green">
                    <div class="card-body">
                        <p class="textGreenYellow">
                            Your Score : <span id="score">0</span>
                        <form action="addscore" method="post" id="addScoreForm">
                            <div class="row">
                                <div class="col-6"><input class="form-control" type="text" name="playerName" id="playerName"></div>
                                <input type="hidden" value='0' name="hiddenInput" id="hiddenInput">
                                <div class="col-4"><button class="btn btn-dark bg-green" type="submit">ADD YOUR SCORE</button></div>
                            </div>


                        </form>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>