<!-- <h1>Snake.js</h1> -->
<div class="selector">
    <div class="container">
        <div class="row">
            <div class="col-1 col-lg-2 col-xl-3 col-xxl-3"></div>
            <div class="col-10 col-lg-8 col-xl-6 col-xxl-6">
                <div class="card bg-green textGreenYellow">
                    <div class="card-header text-center">SELECT YOUR GAME MODE</div>
                    <div class="card-body">
                        <div class="text-center">
                            <input class=" form-check-input" type="radio" name="gameMode" id="easy" value="easy">
                            <label for="gameMode">EASY</label>
                            <input class="form-check-input" type="radio" name="gameMode" id="normal" value="normal" checked>
                            <label for="gameMode">NORMAL</label>
                            <input class="form-check-input" type="radio" name="gameMode" id="hard" value="hard">
                            <label for="gameMode">HARD</label>
                            <input class="form-check-input" type="radio" name="gameMode" id="hardcore" value="hardcore">
                            <label for="gameMode">HARDCORE</label>
                        </div>
                        <div class="text-center">
                            <button id="start" class="btn btn-greenyellow mt-2">START</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<main>
    <div class="container">
        <div class="row text-center">
            <div class="col-0 col-lg-1 col-xl-2 col-xxl-1"></div>
            <div class="col-12 col-lg-10 col-xl-8 col-xxl-8">
                <div class="card bg-green gameCard">
                    <div class="card-body">
                        <table id="game"></table>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xl-0 col-xxl-3">
                <div class="card bg-green mt-2">
                    <div class="card-body">
                        <p class="textGreenYellow">
                            Your Score : <span id="score">0</span>
                        <form action="addscore" method="post" id="addScoreForm">
                            <div class="row">
                                <div class="col-6 col-xxl-12"><input class="form-control" type="text" name="playerName" id="playerName" required maxlength="49" minlength="2" placeholder="Your Name">
                                    <span class="error">Must contain word between 2 and 50 characters</span>
                                </div>
                                <input type="hidden" value='0' name="hiddenInput1" id="hiddenInput1">
                                <input type="hidden" value='0' name="hiddenInput2" id="hiddenInput2">
                                <input type="hidden" value='0' name="hiddenInput3" id="hiddenInput3">
                                <div class="col-4 col-xxl-12 text-center"><button class="btn btn-greenyellow text-center mt-2" type="submit" id='addScore'>ADD YOUR SCORE</button></div>
                            </div>
                        </form>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<script src="scripts/script.min.js"></script>