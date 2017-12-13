<section class="our-clients">
  <div class="wrapper">

    <div class="title">
      <h3>Happy Clients</h3>
      <h2>What they say…</h2>
    </div>

    <?php if( have_rows('testimonial_repeater', 'option') ): ?>
      <div class="our-clients__testimonials">
        <div id="testimonial-slider">
          <?php while( have_rows('testimonial_repeater', 'option') ): the_row(); ?>
            <blockquote class="our-clients__testimonials__testimonial">
              <p>&ldquo;<?php the_sub_field('testimonial-quote');?>&rdquo;</p>
              <footer>
                <cite><?php the_sub_field('testimonial-name');?></cite>
                <?php if(get_sub_field('testimonial-company')): ?>
                  <p>-&nbsp;<?php the_sub_field('testimonial-company');?></p>
                <?php endif; ?>
              </footer>
            </blockquote>
          <?php endwhile; ?>
        </div>
      </div>
    <?php endif; ?>

    <div class="">
      <?php /*
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
      */ ?>
    </div>

  </div><!-- //Wrapper -->
</section>
