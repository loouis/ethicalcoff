<?php get_header(); ?>

  <main role="main" class="product-scroll-container">

    <?php if (have_posts()): while (have_posts()) : the_post(); ?>

      <?php
        $heroImageId = get_post_thumbnail_id();
        $M_heroImage = wp_get_attachment_image_src( $heroImageId, 'm_full' );
        $D_heroImage = wp_get_attachment_image_src( $heroImageId, 'd_full' );
      ?>

      <?php if( wp_is_mobile() ){ ?>
        <header class="product-full-screen cover" style="background-image:url('<?php echo $M_heroImage[0]; ?>')">
      <?php }else{ ?>
        <header class="product-full-screen cover" style="background-image:url('<?php echo $D_heroImage[0]; ?>')">
      <?php } ?>
          <div>
            <?php
              $posttags = get_the_tags();
              if ($posttags) {
                foreach($posttags as $tag) {
                  echo '<h2>' .$tag->name. '</h2>';
                }
              }
            ?>
            <h1><?php the_title(); ?></h1>
          </div>

          <a class="scroll-to-next-section scroll-down-btn scroll-header-button">
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

            <?php /*
            <?php $colors = get_field('suitable_for_select');

            if( $colors ): ?>
              <aside class="product-full-screen__suitable-for">

                <h4>Perfect for</h4>

                <ul>
                	<?php foreach( $colors as $color ): ?>

                    <?php if($color == 'cafes'):?>
                      <li class="product-full-screen__suitable-for__item">
                        <i>
                          <svg x="0px" y="0px" width="60px" height="40px" viewBox="0 0 60 40" enable-background="new 0 0 60 40" xml:space="preserve">

                          <g>
                          	<path fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M45.5,39c2.2-3.1,3.5-6.9,3.5-11c0-10.5-8.5-19-19-19s-19,8.5-19,19c0,4.1,1.3,7.9,3.5,11H45.5z"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M48.4,32.6c0.8,0.3,1.7,0.4,2.6,0.4c4.4,0,8-3.6,8-8s-3.6-8-8-8c-1.7,0-3.3,0.5-4.6,1.5"/>

                          		<circle fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="30" cy="5" r="4"/>

                          		<line fill="none" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" stroke-miterlimit="10" x1="14.5" y1="17" x2="45.5" y2="17"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M11,28c-4.2,0-8-3.8-8-8v-4c0-1.4-0.6-3-2-3"/>
                          </g>
                          </svg>
                        </i>
                        <p>Cafe</p>
                      </li>
                    <?php endif;?>
                    <?php if($color == 'hotels'):?>
                      <li class="product-full-screen__suitable-for__item">
                        <i>
                          <svg x="0px" y="0px" width="60px" height="40px" viewBox="0 0 60 40" enable-background="new 0 0 60 40" xml:space="preserve">

                          <g>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M45.5,39c2.2-3.1,3.5-6.9,3.5-11c0-10.5-8.5-19-19-19s-19,8.5-19,19c0,4.1,1.3,7.9,3.5,11H45.5z"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M48.4,32.6c0.8,0.3,1.7,0.4,2.6,0.4c4.4,0,8-3.6,8-8s-3.6-8-8-8c-1.7,0-3.3,0.5-4.6,1.5"/>

                          		<circle fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="30" cy="5" r="4"/>

                          		<line fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="14.5" y1="17" x2="45.5" y2="17"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M11,28c-4.2,0-8-3.8-8-8v-4c0-1.4-0.6-3-2-3"/>
                          </g>
                          </svg>
                        </i>
                        <p>Hotels</p>
                      </li>
                    <?php endif;?>
                    <?php if($color == 'restaurants'):?>
                      <li class="product-full-screen__suitable-for__item">
                        <i>
                          <svg x="0px" y="0px" width="60px" height="40px" viewBox="0 0 60 40" enable-background="new 0 0 60 40" xml:space="preserve">

                          <g>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M45.5,39c2.2-3.1,3.5-6.9,3.5-11c0-10.5-8.5-19-19-19s-19,8.5-19,19c0,4.1,1.3,7.9,3.5,11H45.5z"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M48.4,32.6c0.8,0.3,1.7,0.4,2.6,0.4c4.4,0,8-3.6,8-8s-3.6-8-8-8c-1.7,0-3.3,0.5-4.6,1.5"/>

                          		<circle fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="30" cy="5" r="4"/>

                          		<line fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="14.5" y1="17" x2="45.5" y2="17"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M11,28c-4.2,0-8-3.8-8-8v-4c0-1.4-0.6-3-2-3"/>
                          </g>
                          </svg>
                        </i>
                        <p>Restaurants</p>
                      </li>
                    <?php endif;?>
                    <?php if($color == 'small office'):?>
                      <li class="product-full-screen__suitable-for__item">
                        <i>
                          <svg x="0px" y="0px" width="60px" height="40px" viewBox="0 0 60 40" enable-background="new 0 0 60 40" xml:space="preserve">

                          <g>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M45.5,39c2.2-3.1,3.5-6.9,3.5-11c0-10.5-8.5-19-19-19s-19,8.5-19,19c0,4.1,1.3,7.9,3.5,11H45.5z"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M48.4,32.6c0.8,0.3,1.7,0.4,2.6,0.4c4.4,0,8-3.6,8-8s-3.6-8-8-8c-1.7,0-3.3,0.5-4.6,1.5"/>

                          		<circle fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="30" cy="5" r="4"/>

                          		<line fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="14.5" y1="17" x2="45.5" y2="17"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M11,28c-4.2,0-8-3.8-8-8v-4c0-1.4-0.6-3-2-3"/>
                          </g>
                          </svg>
                        </i>
                        <p>Small office</p>
                      </li>
                    <?php endif;?>
                    <?php if($color == 'medium office'):?>
                      <li class="product-full-screen__suitable-for__item">
                        <i>
                          <svg x="0px" y="0px" width="60px" height="40px" viewBox="0 0 60 40" enable-background="new 0 0 60 40" xml:space="preserve">

                          <g>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M45.5,39c2.2-3.1,3.5-6.9,3.5-11c0-10.5-8.5-19-19-19s-19,8.5-19,19c0,4.1,1.3,7.9,3.5,11H45.5z"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M48.4,32.6c0.8,0.3,1.7,0.4,2.6,0.4c4.4,0,8-3.6,8-8s-3.6-8-8-8c-1.7,0-3.3,0.5-4.6,1.5"/>

                          		<circle fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="30" cy="5" r="4"/>

                          		<line fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="14.5" y1="17" x2="45.5" y2="17"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M11,28c-4.2,0-8-3.8-8-8v-4c0-1.4-0.6-3-2-3"/>
                          </g>
                          </svg>
                        </i>
                        <p>Medium office</p>
                      </li>
                    <?php endif;?>
                    <?php if($color == 'large office'):?>
                      <li class="product-full-screen__suitable-for__item">
                        <i>
                          <svg x="0px" y="0px" width="60px" height="40px" viewBox="0 0 60 40" enable-background="new 0 0 60 40" xml:space="preserve">

                          <g>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M45.5,39c2.2-3.1,3.5-6.9,3.5-11c0-10.5-8.5-19-19-19s-19,8.5-19,19c0,4.1,1.3,7.9,3.5,11H45.5z"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M48.4,32.6c0.8,0.3,1.7,0.4,2.6,0.4c4.4,0,8-3.6,8-8s-3.6-8-8-8c-1.7,0-3.3,0.5-4.6,1.5"/>

                          		<circle fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="30" cy="5" r="4"/>

                          		<line fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="14.5" y1="17" x2="45.5" y2="17"/>
                          	<path fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
                          		M11,28c-4.2,0-8-3.8-8-8v-4c0-1.4-0.6-3-2-3"/>
                          </g>
                          </svg>
                        </i>
                        <p>Large office</p>
                      </li>
                    <?php endif;?>

                	<?php endforeach; ?>
                </ul>
              </aside>
            <?php endif; ?>
            */?>
        </header>

        <div class="product-container">

        <section class="split-screen project-info">
          <div class="wrapper">

            <?php
              $machineText = get_field('Machine_intro_text');
              $machineRepeater = get_field('Machine_intro_repeater');
            ?>
            <nav  class="product-text-slider-pager">
              <div id="product-text-slider-pager">
                <?php if( $machineText || $machineRepeater  ): ?>
                  <a data-slide-index="0" href="">Intro</a>
                <?php endif; ?>
                <?php if( $machineText || $machineRepeater && get_field('machine_overview') ){ ?>
                  <a data-slide-index="1" href="">Overview</a>
                <?php }else{ ?>
                  <a data-slide-index="0" href="">Overview</a>
                <?php } ?>
              </div>

              <?php if( get_field('download_brochure') ): ?>
                <a href="<?php the_field('download_brochure'); ?>" target="_blank">Brochure</a>
              <?php endif; ?>
            </nav>

            <div class="text-wrapper">
              <div class="project-info__desc">
                <div class="product-text-slider" id="product-text-slider">
                  <?php if( $machineText || $machineRepeater  ): ?>
                    <div class="product-text-slider__slide">
                      <?php if ($machineText): ?>
                        <div class="product-text-slider__slide__intro-text">
                          <?php the_field('Machine_intro_text');?>
                        </div>
                      <?php endif;?>
                      <?php if(have_rows('Machine_intro_repeater')): ?>
                        <ul>
                          <?php while (have_rows('Machine_intro_repeater')) : the_row();?>
                            <li>
                              <i>
                                <svg x="0px" y="0px" width="26px" height="26px" viewBox="0 0 26 26" enable-background="new 0 0 26 26" xml:space="preserve">
                                  <g>
                                  	<polyline fill="none" stroke="#E2C6B6" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="19,9 11,17 7,12
                                  		"/>
                                  	<circle fill="none" stroke="#E2C6B6" stroke-width="2" stroke-miterlimit="10" cx="13" cy="13" r="12"/>
                                  </g>
                                </svg>
                              </i>
                              <p><?php the_sub_field('Machine_intro_bullet'); ?></p>
                            </li>
                          <?php endwhile; ?>
                        </ul>
                      <?php endif; ?>
                    </div>
                  <?php endif;?>
                  <div class="product-text-slider__slide">
                    <?php the_field('machine_overview'); ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="project-images split-screen split-screen--right">

          <?php while( has_sub_field('m-prd_img-repeater') ): ?>

            <img src="<?php the_sub_field('m-prd_img-repeater_img') ?>" alt="">

					<?php endwhile; ?>

        </section>
      </div><!-- // Product-container -->


    <?php endwhile; endif; ?>

    <section>
      <button id="product-contact-btn" class="contact-for-quote">
        <a href="#0">
          <i></i>
          <p>Contact for quote</p>
        </a>
      </button>
    </section>



    <?php
      $posts = get_field('related_coffee_machines');
      if( $posts ): ?>

      <?php $counter = 0; ?>
        <!-- // Related coffee machines -->
        <section class="related-products related-products--machines">
          <div class="wrapper">
            <h1>Machines</h1>
            <a href="<?php echo site_url();?>/coffee-machines" class="related-products__see-all">
              <p>See all machines</p>
            </a>
          </div>
          <div class="related-products__products product-list product-list--machines">
            <?php foreach( $posts as $post): $counter++ ?>
              <?php setup_postdata($post); ?>

                <a href="<?php the_permalink();?>" class="product-list__item product-list__item--<?php echo $counter ?> product-list__item--<?php the_ID(); ?>">
                  <div class="product-list__item__prd-detail">
                    <div class="product-list__item__prd-detail__text">
                      <?php
                        $posttags = get_the_tags();
                        if ($posttags) {
                          foreach($posttags as $tag) {
                            echo '<h4>' .$tag->name. '</h4>';
                          }
                        }
                      ?>
                      <h3><?php the_title(); ?></h3>
                      <?php /*
                        <p class="product-list__item__prd-detail__text__desc">
                          <?php the_excerpt(); ?>
                        </p>
                      */ ?>
                    </div>
                    <img src="<?php the_field('m-prd_preview-img'); ?>" alt="<?php the_title(); ?> | <?php bloginfo('name'); ?>">
                  </div>
                </a>
              <?php endforeach; ?>
            <?php wp_reset_postdata();?>
          </div>
        </section><!--  // Related coffee machines -->
      <?php endif; ?>


      <?php
        $posts = get_field('related_coffee');
        if( $posts ): ?>

        <?php $counter = 0; ?>
          <!-- // Related coffee machines -->
          <section class="related-products related-products--machines">
            <div class="wrapper">
              <h1>Coffee</h1>
              <a href="<?php echo site_url();?>/coffee-machines" class="related-products__see-all">
                <p>See all coffee</p>
              </a>
            </div>
            <div class="related-products__products product-list product-list--coffee">
              <?php foreach( $posts as $post): $counter++ ?>
                <?php setup_postdata($post); ?>
                <a href="<?php the_permalink(); ?>" class="product-list__item first product-list__item--<?php echo $counter ?> product-list__item--<?php the_ID(); ?>">
                  <div class="product-list__item__prd-detail">
                    <div class="product-list__item__prd-detail__text">
                      <?php $posttags = get_the_tags(); if ($posttags) {foreach($posttags as $tag) {echo '<h4>' .$tag->name. '</h4>';}}?>
                      <h3><?php the_title(); ?></h3>
                    </div>
                    <img src="<?php the_post_thumbnail_url();?>" alt="Jura, Giga X3 | Ethical Coffee Team">
                  </div>
                </a>
                <?php endforeach; ?>
              <?php wp_reset_postdata();?>
            </div>
          </section><!--  // Related coffee machines -->
        <?php endif; ?>

        <?php get_template_part('parts/testimonials', '') ?>
  </main>

<?php get_footer(); ?>
