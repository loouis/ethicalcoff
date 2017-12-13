<?php /* Template Name: All Coffee */ get_header(); ?>

  <main role="main" class="product-scroll-container">
    <?php if(have_posts()): while(have_posts()): the_post(); ?>

    <section class="related-products related-products--machines related-products--all">
      <div class="wrapper">
        <h1>Coffee</h1>
        <?php the_content();?>
      </div>
      <div class="related-products__products product-list product-list--coffee">

        <?php $counter = 0; ?>
        <?php $coffee = new WP_Query(array(
            'post_type' => 'products',
            'cat' => 3,
            'posts_per_page' => -1,
            'order' => 'DESC',
          ));
          while ($coffee->have_posts() ): $coffee->the_post(); $counter++;
        ?>
          <a href="<?php the_permalink(); ?>" class="product-list__item first product-list__item--<?php echo $counter ?> product-list__item--<?php the_ID(); ?>">
            <div class="product-list__item__prd-detail">
              <div class="product-list__item__prd-detail__text">
                <?php $posttags = get_the_tags(); if ($posttags) {foreach($posttags as $tag) {echo '<h4>' .$tag->name. '</h4>';}}?>
                <h3><?php the_title(); ?></h3>
              </div>
              <img src="<?php the_post_thumbnail_url();?>" alt="<?php the_title(); ?> | Ethical Coffee Team">
            </div>
          </a>
        <?php endwhile; ?>
      </div>
    </section>

    <?php get_template_part( 'parts/testimonials', '' ); ?>

    <?php endwhile; endif; ?>
  </main>

<?php get_footer();?>
