<?php
include 'function/dbGet.php';
$easy = getTable('easy');
$normal = getTable('normal');
$hard = getTable('hard');
$hardcore = getTable('hardcore');
?>

<main>
    <h1 class="text-center">Leaderboard</h1>
    <div class="container">
        <div class="row text-center">
            <div class="col-12 col-lg-6">
                <h2>Easy</h2>
                <table class="leaderboard">
                    <tr>
                        <th>POS</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                    <?php
                    $i = 1;
                    if (isset($easy) && !empty($easy) && $easy !== false) :
                        foreach ($easy as $value) : ?>
                            <tr>
                                <td>#<?= $i ?></td>
                                <td>
                                    <pre> <?= strip_tags($value['name']) ?></pre>
                                </td>
                                <td><?= $value['score'] ?></td>
                                <td><?= $value['timeRecord'] ?></td>
                            </tr>
                    <?php $i++;
                        endforeach;
                    endif; ?>
                </table>
            </div>

            <div class="col-12 col-lg-6">
                <h2>Normal</h2>
                <table class="leaderboard">
                    <tr>
                        <th>POS</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                    <?php
                    $i = 1;
                    if (isset($normal) && !empty($normal) && $normal !== false) :
                        foreach ($normal as $value) : ?>
                            <tr>
                                <td>#<?= $i ?></td>
                                <td>
                                    <pre> <?= strip_tags($value['name']) ?></pre>
                                </td>
                                <td><?= $value['score'] ?></td>
                                <td><?= $value['timeRecord'] ?></td>
                            </tr>
                    <?php $i++;
                        endforeach;
                    endif; ?>
                </table>
            </div>
            <div class="col-12 col-lg-6">
                <h2>Hard</h2>
                <table class="leaderboard">
                    <tr>
                        <th>POS</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                    <?php
                    $i = 1;
                    if (isset($hard) && !empty($hard) && $hard !== false) :
                        foreach ($hard as $value) : ?>
                            <tr>
                                <td>#<?= $i ?></td>
                                <td>
                                    <pre> <?= strip_tags($value['name']) ?></pre>
                                </td>
                                <td><?= $value['score'] ?></td>
                                <td><?= $value['timeRecord'] ?></td>
                            </tr>
                    <?php $i++;
                        endforeach;
                    endif; ?>
                </table>
            </div>
            <div class="col-12 col-lg-6">
                <h2>Hardcore</h2>
                <table class="leaderboard">
                    <tr>
                        <th>POS</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                    <?php
                    $i = 1;
                    if (isset($hardcore) && !empty($hardcore) && $hardcore !== false) :
                        foreach ($hardcore as $value) : ?>
                            <tr>
                                <td>#<?= $i ?></td>
                                <td>
                                    <pre> <?= strip_tags($value['name']) ?></pre>
                                </td>
                                <td><?= $value['score'] ?></td>
                                <td><?= $value['timeRecord'] ?></td>
                            </tr>
                    <?php $i++;
                        endforeach;
                    endif; ?>
                </table>
            </div>
        </div>
    </div>

</main>