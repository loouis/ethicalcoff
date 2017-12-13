<?php /* Template Name: Homepage */ get_header(); ?>

<main role="main">
  <nav class="full-screen-nav">
    <ul class='kwicks kwicks-horizontal'>

      <?php while( has_sub_field('site-nav-repeater', 'option') ): ?>

        <a href="<?php the_sub_field('site-nav-repeater_link') ?>">
          <li class="nav-split">
            <div class="nav-split__prd-detail">
              <div class="nav-split__prd-detail__text">
                <h2><?php the_sub_field('site-nav-repeater_title') ?></h2>
                <!-- <span class="mask">
                  <p class="nav-split__prd-detail__text__desc">
                    <?php the_sub_field('site-nav-repeater_text') ?>
                  </p>
                </span> -->
              </div>
              <div class="image">
                <img src="<?php the_sub_field('site-nav-repeater_image', 'option') ?>" alt="Jura, Giga X3 | Ethical Coffee Team">
              </div>
            </div>
          </li>
        </a>

      <?php endwhile; ?>

    </ul>
  </nav><!-- // full-screen-nav -->
</main>

<?php get_footer();?>
