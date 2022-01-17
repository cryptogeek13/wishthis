<?php

/**
 * home.php
 *
 * @author Jay Trees <github.jay@grandel.anonaddy.me>
 */

use wishthis\Page;

$page = new page(__FILE__, 'Home');
$page->header();
$page->navigation();
?>

<main>
    <div class="ui container">
        <h1 class="ui header"><?= $page->title ?></h1>

        <div class="ui segment">
            <h2 class="ui header">Welcome to wishthis</h2>
            <p>
                wishthis is a simple, intuitive and modern plattform to create,
                manage and view your wishes for any kind of occasion.
            </p>
            <p>
                Go ahead and get started now and <a href="/?page=wishlist-create">create a wishlist</a>!
            </p>
        </div>
    </div>
</main>

<?php
$page->footer();
?>
