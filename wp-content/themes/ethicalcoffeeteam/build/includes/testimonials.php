<section class="our-clients">
  <div class="wrapper">
    <h1>Happy Clients</h1>

    <?php
    if(have_rows('our_clients', 'option')): ?>
      <div class="our-clients__logos">
        <?php while(have_rows('our_clients', 'option')): the_row(); ?>
            <a href="<?php echo the_sub_field('our_clients-link');?>"class="our-clients__logos__logo">
              <img src="<?php the_sub_field('our_clients-logo');?>" alt="">
            </a>
        <?php endwhile; ?>
      </div>
    <?php endif; ?>

    <h4>What they say…</h4>

    <?php if( have_rows('testimonial_repeater', 'option') ): ?>
      <div class="our-clients__testimonials">
        <div id="testimonial-slider">
          <?php while( have_rows('testimonial_repeater', 'option') ): the_row(); ?>
            <blockquote class="our-clients__testimonials__testimonial">
              <p><?php the_sub_field('testimonial-quote');?></p>
              <footer>
                <cite><?php the_sub_field('testimonial-name');?></cite>
                <p><?php the_sub_field('testimonial-company');?></p>
              </footer>
            </blockquote>
          <?php endwhile; ?>
        </div>
      </div>
    <?php endif; ?>

  </div><!-- //Wrapper -->
</section>
