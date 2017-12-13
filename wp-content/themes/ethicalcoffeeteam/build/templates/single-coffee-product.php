<?php /* Template Name: Single Machine */ get_header(); ?>

<main role="main" class="coffee-prd">
  <?php if(have_posts()): while(have_posts()): the_post(); ?>

    <header class="coffee-prd__hero">
      <button class="back-button">
        <a href="<?php echo site_url();?>/coffee/">
          <span class="back-button__circle">
            <i>
              <span class="back-button__circle__line back-button__circle__line--1"></span>
              <span class="back-button__circle__line back-button__circle__line--2"></span>
            </i>
          </span>
          <!-- <p>All Coffee</p> -->
        </a>
      </button>
      <h1><?php the_title();?></h1>
      <div class="coffee-prd__hero__intro-content">
        <img src="<?php the_post_thumbnail_url();?>" alt="<?php bloginfo('name'); ?> | <?php the_title(); ?>">
      </div>
    </header>

    <section class="coffee-prd__info">
      <div class="wrapper">
        <div class="coffee-prd__info__points">
          <!-- <h3>The Bean</h3> -->
          <?php if(get_field('coffee_roast_type')): ?>
            <div class="coffee-prd__info__points__point coffee-prd__info__points__point--roast-type">
              <h4><?php the_field('coffee_roast_type') ?></h4>
              <p>Roast</p>
            </div>
          <?php endif; ?>
          <?php if(get_field('coffee_bean_type')): ?>
            <div class="coffee-prd__info__points__point coffee-prd__info__points__point--roast-type">
              <h4><?php the_field('coffee_bean_type') ?></h4>
              <p>Type</p>
            </div>
          <?php endif; ?>
          <?php if(get_field('coffee_bean_strength')): ?>
            <div class="coffee-prd__info__points__point coffee-prd__info__points__point--roast-type">
              <h4><?php the_field('coffee_bean_strength') ?></h4>
              <p>Strength</p>
            </div>
          <?php endif; ?>
          <?php /*
            <?php if(get_field('coffee_bean_origin')): ?>
              <div class="coffee-prd__info__points__point coffee-prd__info__points__point--roast-type">
                <h4><?php the_field('coffee_bean_origin') ?></h4>
                <p>Origin</p>
              </div>
            <?php endif; ?>
          */ ?>
          <?php if(get_field('coffee_bean_taste')): ?>
            <div class="coffee-prd__info__points__point coffee-prd__info__points__point--roast-type">
              <h4><?php the_field('coffee_bean_taste') ?></h4>
              <p>Taste</p>
            </div>
          <?php endif; ?>
        </div><!-- //coffee-prd__info__points -->
        <div class="coffee-prd__info__desc">
          <?php the_content();?>
        </div>
      </div>
    </section>

  <?php endwhile; endif ?>
</main>

<?php get_footer();?>
