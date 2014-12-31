var sangarSizeAndScale;

;(function($) {

    sangarSizeAndScale = function(base, opt) {
		
        /**
         * Function: setupScaleImage
         */
        base.setupScaleImage = function(imageDom)
        {
        	var origHeight = opt.fixedHeight ? opt.height : base.sangarHeight;

            if(opt.scaleImage)
            {
                imageDom.each(function(index){
                    var width = base.sangarWidth;
                    var height = base.getImgHeight(width,index);
                    var diff = origHeight - height;
					
					if(diff > 0) {
						$(this).css('margin-top', (diff / 2) + 'px');
					}
					else 
					{
						if(opt.imageVerticalAlign == 'top') {
							$(this).css('margin-top', '0px');
						}
						else if(opt.imageVerticalAlign == 'bottom') {
							$(this).css('margin-top', diff + 'px');
						}
						else {
							$(this).css('margin-top', (diff / 2) + 'px');
						}
					}

                    $(this).width(width);
                    $(this).parent().width(width);
                })
            }
            else
            {
                var padding = 10;
                var curImgHeight = origHeight - (padding * 2);
                var curParWidth = imageDom.parent().width();
                var curParHeight = imageDom.parent().height();

                // image
                imageDom.css({
                    'border-radius': '3px'
                });

                // parent
                imageDom.parent().css({
                    'padding': padding + 'px',
                    'width': (curParWidth - padding * 2) + 'px',
                    'height': (curParHeight - padding * 2) + 'px'
                });

                // container
                var contWidth = base.sangarWidth - (padding * 2);
                var contHeight = origHeight - (padding * 2);

                // $(this).width(width);
                // $(this).parent().width(width);

                // horizontal center align
                imageDom.each(function(index){
                    var width = base.getImgWidth(curImgHeight,index);
                    var diff = contWidth - width;

                    if(diff > 0)
                    {
                        $(this).css({
                            'margin-left': (diff / 2) + 'px',
                            'margin-top': '0px',
                            'height': curImgHeight + 'px'
                        });
                    }
                    else
                    {
                        var width = base.sangarWidth;
                        var height = base.getImgHeight(width,index);
                        var diff = contHeight - height;

                        $(this).css({
                            'margin-left': '0px',
                            'margin-top': (diff / 2) + 'px',
                            'height': height + 'px'
                        });
                    }
                })
            }
        }

	}

})(jQuery);