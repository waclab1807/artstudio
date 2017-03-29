'use strict';

angular.module('artstudio.gallery', ['ngRoute'])

.controller('galleryCtrl', ['$scope', function($scope) {
    $scope.photos = [
      'http://lorempixel.com/g/280/344/?4489', 'http://lorempixel.com/g/280/518/?1061', 'http://lorempixel.com/g/280/344/?4487',
      'http://lorempixel.com/g/280/157/?3894', 'http://lorempixel.com/g/280/518/?1062', 'http://lorempixel.com/g/280/157/?3894',
      'http://lorempixel.com/g/280/344/?4487', 'http://lorempixel.com/g/280/344/?4485', 'http://lorempixel.com/g/280/157/?3894',
      'http://lorempixel.com/g/280/518/?1061', 'http://lorempixel.com/g/280/157/?3894', 'http://lorempixel.com/g/280/518/?1062',
      'http://lorempixel.com/g/280/344/?4489', 'http://lorempixel.com/g/280/518/?1061', 'http://lorempixel.com/g/280/344/?4487',
      'http://lorempixel.com/g/280/157/?3894', 'http://lorempixel.com/g/280/518/?1062'
    ];

    $(function(){

        var $container = $('#container'),
            $photos = $container.find('.photo'),
            $loadingIndicator = $('<div class="loading"><span><img src="http://i.imgur.com/IE7iw.gif" /></span></div>');

        // trigger Isotope after images have loaded
        $container.imagesLoaded( function(){
            $container.isotope({
                itemSelector : '.photo',
                masonry: {
                    columnWidth: 200
                }
            });
        });

        // shows the large version of the image
        // shows small version of previously large image
        function enlargeImage( $photo ) {
            $photos.filter('.large').removeClass('large');
            $photo.addClass('large');
            $container.isotope('reLayout');
        }

        $photos.find('a').click( function() {
            var $this = $(this),
                $photo = $this.parents('.photo');

            if ( $photo.hasClass('large') ) {
                // already large, just remove
                $photo.removeClass('large');
                $container.isotope('reLayout');
            } else {
                if ( $photo.hasClass('has-big-image') ) {
                    enlargeImage( $photo );
                } else {
                    // add a loading indicator
                    $this.append( $loadingIndicator );

                    // create big image
                    var $bigImage = $('<img>', { src: this.href });

                    // give it a wrapper and appended it to element
                    $('<div>', { 'class': 'big-image' })
                        .append( $bigImage )
                        .appendTo( $this )
                        .imagesLoaded( function() {
                            $loadingIndicator.remove()
                            enlargeImage( $photo );
                        });

                    // add a class, so we'll know not to do this next time
                    $photo.addClass('has-big-image');

                }
            }

            return false;
        });

    });
}]);