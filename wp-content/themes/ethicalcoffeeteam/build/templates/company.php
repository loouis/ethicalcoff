<?php /* Template Name: Company */ get_header(); ?>

<main role="main" class="scroll-container">

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

  <nav class="about-nav">
    <div class="about-nav__links">
      <?php $counter = -1; ?>
      <?php while(have_rows('about-repeater')): the_row(); $counter++;?>
        <a href="" data-scroll-nav="<?php echo $counter;?>" class="about-nav__links__link"><?php the_sub_field('about-repeater_title_1');?> <?php the_sub_field('about-repeater_title_2');?></a>
      <?php endwhile; ?>
    </div>
  </nav>

  <div class="container">

    <?php
      $heroImageId = get_post_thumbnail_id();
      $M_heroImage = wp_get_attachment_image_src( $heroImageId, 'm_full' );
      $D_heroImage = wp_get_attachment_image_src( $heroImageId, 'd_full' );
    ?>

    <?php if( wp_is_mobile() ){ ?>
      <header class="hero" style="background-image:url('<?php echo $M_heroImage[0]; ?>')">
    <?php }else{ ?>
      <header class="hero" style="background-image:url('<?php echo $D_heroImage[0]; ?>')">
    <?php } ?>
    <div class="about-logo about-logo--not-scrolled">
      <div class="logo-bits">
        <i class="logo-text logo-text--ethical">
          <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
             x="0px" y="0px" width="218.5px" height="52.7px" viewBox="0 0 218.5 52.7" enable-background="new 0 0 218.5 52.7"
             xml:space="preserve">
            <g>
              <path d="M25.3,39.1l8.9,2.5c-0.9,3.2-2.7,5.9-5.5,7.9c-2.8,2.1-6.3,3.1-10.5,3.1c-5,0-9.3-1.7-12.8-5C1.8,44.3,0,39.8,0,34.2
                c0-5.4,1.7-9.8,5.1-13.2c3.4-3.4,7.5-5.1,12.2-5.1c5.4,0,9.7,1.6,12.8,4.7c3.1,3.2,4.7,7.5,4.7,13.1c0,1.8-0.1,2.9-0.2,3.3H10.4
                c0.1,1.9,0.9,3.5,2.5,4.8c1.5,1.3,3.4,1.9,5.5,1.9C21.9,43.7,24.2,42.2,25.3,39.1z M10.6,30.1h13.9c-0.1-1.6-0.7-3-1.9-4.1
                c-1.1-1.2-2.9-1.8-5.1-1.8c-2.1,0-3.7,0.6-4.9,1.8C11.4,27.3,10.7,28.6,10.6,30.1z"/>
              <path d="M55.2,6.7v10.2h6.8v9.3h-6.8v13c0,2.4,1.3,3.6,3.9,3.6c0.8,0,1.7-0.1,2.8-0.3v8.8c-1.3,0.7-3.1,1-5.5,1c-3.6,0-6.4-1-8.5-3
                c-2.1-2-3.1-4.7-3.1-8.2V26.2h-6.2v-9.3h1.8c1.8,0,3.1-0.5,4-1.6c0.9-1,1.4-2.4,1.4-4.1V6.7H55.2z"/>
              <path d="M79.8,31.2v20.4H69.2V1h10.6v18.1c2.1-2.1,5.1-3.2,8.9-3.2c4.3,0,7.6,1.3,9.8,3.9c2.2,2.6,3.3,5.9,3.3,10v21.8H91.2v-20
                c0-1.8-0.5-3.3-1.4-4.4c-1-1.1-2.4-1.6-4.2-1.6c-1.6,0-3,0.5-4,1.6S79.9,29.6,79.8,31.2z"/>
              <path d="M111.4,10.6c-1.2-1.2-1.8-2.7-1.8-4.4s0.6-3.2,1.8-4.4c1.2-1.2,2.7-1.8,4.3-1.8c1.7,0,3.2,0.6,4.4,1.8
                c1.2,1.2,1.9,2.7,1.9,4.4s-0.6,3.2-1.9,4.4c-1.2,1.2-2.7,1.8-4.4,1.8C114,12.5,112.6,11.9,111.4,10.6z M121.1,51.7h-10.6V16.9h10.6
                V51.7z"/>
              <path d="M146.6,25.6c-2.3,0-4.2,0.8-5.7,2.3c-1.5,1.5-2.3,3.7-2.3,6.4c0,2.7,0.8,4.8,2.3,6.3c1.6,1.5,3.5,2.3,5.8,2.3
                c1.9,0,3.5-0.5,4.7-1.5c1.2-1,2.1-2.2,2.5-3.7l9.4,2.9c-0.8,3.3-2.7,6.2-5.6,8.5c-2.9,2.4-6.6,3.6-11,3.6c-5.2,0-9.6-1.7-13.3-5.2
                c-3.6-3.5-5.4-7.9-5.4-13.2c0-5.4,1.8-9.8,5.3-13.3c3.5-3.5,7.9-5.2,13.1-5.2c4.5,0,8.2,1.2,11.1,3.5c2.9,2.3,4.8,5.2,5.6,8.6
                l-9.5,2.9c-0.4-1.5-1.2-2.7-2.4-3.7C150.1,26.1,148.6,25.6,146.6,25.6z"/>
              <path d="M167.9,42.1c0-2.9,1-5.3,2.9-7.1c1.9-1.8,4.4-2.9,7.4-3.4l8.2-1.3c1.7-0.2,2.5-1,2.5-2.4c0-1.1-0.5-2-1.4-2.7
                c-0.9-0.7-2.2-1.1-3.7-1.1c-1.8,0-3.2,0.5-4.2,1.5c-1.1,1-1.6,2.2-1.7,3.6l-9.2-1.9c0.2-2.9,1.7-5.5,4.3-7.9
                c2.6-2.4,6.3-3.6,11-3.6c5.3,0,9.2,1.3,11.7,3.8c2.5,2.5,3.7,5.7,3.7,9.7v17c0,2.2,0.1,4,0.4,5.4H190c-0.2-0.9-0.3-2.2-0.3-3.9
                c-2,3.3-5.3,4.9-9.8,4.9c-3.7,0-6.6-1-8.8-3.1C168.9,47.4,167.9,45,167.9,42.1z M182.5,44.9c1.8,0,3.3-0.5,4.5-1.6
                c1.2-1.1,1.8-2.8,1.8-5.3v-1.5l-6.6,1.1c-2.6,0.4-3.9,1.7-3.9,3.8c0,1,0.3,1.8,1,2.5C180,44.6,181.1,44.9,182.5,44.9z"/>
              <path d="M218.5,51.7h-10.6V1h10.6V51.7z"/>
            </g>
          </svg>
        </i>
        <i class="logo-symbol">

          <span class="circle"></span>

          <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
             x="0px" y="0px" width="472.6px" height="729.6px" viewBox="0 0 472.6 729.6" enable-background="new 0 0 472.6 729.6"
             xml:space="preserve">
            <g>
              <path d="M452,289.5c0,0-6-45-147-96S233,21,248,0c0,0-7.5,66,130.5,129S452,289.5,452,289.5z"/>
              <path d="M404.1,314.5c-44.7-46.4-104.3-72-167.8-72s-123.1,25.6-167.8,72C24.3,360.4,0,421.4,0,486.1s24.3,125.6,68.5,171.5
                c44.7,46.4,104.3,72,167.8,72c66.5,0,130.3-29.1,175-79.8l-75-66.1c-22.1,25-50.8,40.6-82.4,44.8c10.3,48.1-29.6,75.6-29.6,75.6
                s7.8-30.3-63.8-98.8C124,579.5,100,535.7,100,486.1c0-79.2,61.2-143.6,136.3-143.6c62.2,0,114.8,44.1,131.1,104.1H159.5
                c-2.6,15-1.4,48.8,40,100h270.3l2.5-47.4c0.2-4.3,0.3-8.8,0.3-13.1C472.6,421.4,448.3,360.4,404.1,314.5z"/>
            </g>
          </svg>
        </i>
        <i class="logo-text logo-text--coffee">
          <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
             x="0px" y="0px" width="205.2px" height="52.3px" viewBox="0 0 205.2 52.3" enable-background="new 0 0 205.2 52.3"
             xml:space="preserve">
            <g>
              <path d="M18.5,25.2c-2.3,0-4.2,0.8-5.7,2.3c-1.5,1.5-2.3,3.7-2.3,6.4c0,2.7,0.8,4.8,2.3,6.3c1.6,1.5,3.5,2.3,5.8,2.3
                c1.9,0,3.5-0.5,4.7-1.5c1.2-1,2.1-2.2,2.5-3.7l9.4,2.9c-0.8,3.3-2.7,6.2-5.6,8.5c-2.9,2.4-6.6,3.6-11,3.6c-5.2,0-9.6-1.7-13.3-5.2
                C1.8,43.6,0,39.2,0,33.9c0-5.4,1.8-9.8,5.3-13.3c3.5-3.5,7.9-5.2,13.1-5.2c4.5,0,8.2,1.2,11.1,3.5c2.9,2.3,4.8,5.2,5.6,8.6
                l-9.5,2.9c-0.4-1.5-1.2-2.7-2.4-3.7C22,25.7,20.5,25.2,18.5,25.2z"/>
              <path d="M58.2,15.4c5.3,0,9.7,1.7,13.2,5.2c3.5,3.5,5.3,7.9,5.3,13.2c0,5.4-1.8,9.8-5.3,13.3c-3.5,3.5-7.9,5.2-13.2,5.2
                c-5.2,0-9.6-1.8-13.2-5.2c-3.5-3.5-5.3-7.9-5.3-13.2c0-5.3,1.8-9.7,5.3-13.2C48.6,17.1,52.9,15.4,58.2,15.4z M58.2,42.5
                c2.2,0,4-0.7,5.6-2.2c1.5-1.5,2.3-3.6,2.3-6.4c0-2.8-0.8-4.9-2.3-6.4c-1.5-1.5-3.4-2.2-5.6-2.2c-2.1,0-4,0.7-5.5,2.2
                c-1.5,1.5-2.3,3.6-2.3,6.4c0,2.8,0.8,4.9,2.3,6.4C54.2,41.7,56,42.5,58.2,42.5z"/>
              <path d="M127.2,25.4h-7.6v25.8H109V25.4H96.7v25.8H86.1V25.4h-5.5v-9h5.5v-3c0-4.1,1.2-7.3,3.5-9.8C92,1.2,95.2,0,99.4,0
                c2.3,0,4,0.3,5,0.8v8.7c-0.9-0.2-2-0.3-3.1-0.3c-1.2,0-2.2,0.3-3.1,1c-0.9,0.7-1.4,1.8-1.4,3.4v3H109v-3c0-4.1,1.2-7.3,3.5-9.8
                c2.3-2.4,5.6-3.7,9.7-3.7c2.5,0,4.2,0.2,5.1,0.7v8.8c-0.9-0.2-2-0.3-3.2-0.3c-1.2,0-2.3,0.3-3.2,1c-0.9,0.7-1.4,1.8-1.4,3.4v3h7.6
                V25.4z"/>
              <path d="M155.8,38.7l8.9,2.5c-0.9,3.2-2.7,5.9-5.5,7.9c-2.8,2.1-6.3,3.1-10.5,3.1c-5,0-9.3-1.7-12.8-5c-3.5-3.4-5.3-7.9-5.3-13.5
                c0-5.4,1.7-9.8,5.1-13.2c3.4-3.4,7.5-5.1,12.2-5.1c5.4,0,9.7,1.6,12.8,4.7c3.1,3.2,4.7,7.5,4.7,13.1c0,1.8-0.1,2.9-0.2,3.3h-24.2
                c0.1,1.9,0.9,3.5,2.5,4.8c1.5,1.3,3.4,1.9,5.5,1.9C152.3,43.3,154.7,41.7,155.8,38.7z M141,29.7H155c-0.1-1.6-0.7-3-1.9-4.1
                c-1.1-1.2-2.9-1.8-5.1-1.8c-2.1,0-3.7,0.6-4.9,1.8C141.9,26.8,141.2,28.2,141,29.7z"/>
              <path d="M195.6,38.7l8.9,2.5c-0.9,3.2-2.7,5.9-5.5,7.9c-2.8,2.1-6.3,3.1-10.5,3.1c-5,0-9.3-1.7-12.8-5c-3.5-3.4-5.3-7.9-5.3-13.5
                c0-5.4,1.7-9.8,5.1-13.2c3.4-3.4,7.5-5.1,12.2-5.1c5.4,0,9.7,1.6,12.8,4.7c3.1,3.2,4.7,7.5,4.7,13.1c0,1.8-0.1,2.9-0.2,3.3h-24.2
                c0.1,1.9,0.9,3.5,2.5,4.8c1.5,1.3,3.4,1.9,5.5,1.9C192.2,43.3,194.6,41.7,195.6,38.7z M180.9,29.7h13.9c-0.1-1.6-0.7-3-1.9-4.1
                c-1.1-1.2-2.9-1.8-5.1-1.8c-2.1,0-3.7,0.6-4.9,1.8C181.8,26.8,181.1,28.2,180.9,29.7z"/>
            </g>
          </svg>
        </i>

      </div>
    </div>

      <a class="scroll-to-next-section scroll-down-btn" data-scroll-goto="0">
        <i>
          <svg width="41px" height="40px" viewBox="0 0 41 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-7.000000, -8.000000)" stroke-width="2" stroke="#FFFFFF">
                      <g class="scroll-down-arrow" transform="translate(27.000000, 27.500000) rotate(-270.000000) translate(-27.000000, -27.500000) translate(8.000000, 8.000000)">
                          <g class="scroll-down-arrow--second" transform="translate(16.000000, -0.000000)">
                              <polyline points="-1.77635684e-15 38.5 22 19.25 -1.77635684e-15 -4.26325641e-14"></polyline>
                          </g>
                          <g class="scroll-down-arrow--first" transform="translate(0.000000, 8.000000)">
                              <polyline points="11 21.5 24 11.125 11 0.75"></polyline>
                              <path d="M22.3585883,11 L-7.10542736e-15,11"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
        </i>
      </a>
    </header>

    <?php
      $counter = -1;
      while( have_rows('about-repeater') ): the_row(); $counter++
    ?>

    <?php if( get_sub_field('about-repeater_image') ) { ?>
      <section class="about-page-section about-page-section--about about-page-section about-page-section--image cover" style="background-image:url('<?php echo the_sub_field('about-repeater_image') ?>')" data-scroll-index="<?php echo $counter; ?>">
    <?php } else { ?>
      <section class="about-page-section about-page-section--about about-page-section" data-scroll-index="<?php echo $counter; ?>">
    <?php } ?>
        <div class="wrapper">
          <div class="split-screen">
            <div class="mask">
              <h2 class="wow revealText" data-wow-duration="0.5s" data-wow-offset="100"><?php the_sub_field('about-repeater_title_1'); ?></h2>
            </div>
            <div class="mask">
              <h2 class="wow revealText" data-wow-duration="0.5s" data-wow-offset="100"><?php the_sub_field('about-repeater_title_2'); ?></h2>
            </div>
          </div>
          <div class="split-screen about-page-section__r-content">
            <div class="mask">
              <div class="wow revealText" data-wow-duration="0.5s" data-wow-offset="100">
                <?php the_sub_field('about-repeater_text');?>
              </div>
            </div>
          </div>
        </div>
      </section>

    <?php endwhile; ?>

    <?php get_template_part( 'parts/testimonials', '' ); ?>

  </div>

  <?php endwhile; endif;?>
</main>

<?php get_footer();?>
