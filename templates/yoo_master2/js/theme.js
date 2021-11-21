/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

jQuery(function($) {

    var config = $('html').data('config') || {};

    // Social buttons
    //$('article[data-permalink]').socialButtons(config);
    
    
    // frame hack
    function isFrame() {
        return !(self == top);
    }
    
    if (isFrame()) {
    
        $('.jsJBZooCart .jbform-actions input')
            .mouseenter(function(){
                var $btn = $(this);
                
                if ($btn.attr('name') == 'create') {
                    $('.jsJBZooCart').removeAttr('target');
                    
                } else if ($btn.attr('name') == 'create-pay') {
                    $('.jsJBZooCart').attr('target', '_blank');
                }
                
            });
    } else {
        $('.jsJBZooCart').removeAttr('target');
    }
    
});
