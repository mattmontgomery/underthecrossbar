requirejs.config({
    // ---------- REQUIRE SHIMS ----------
    shim: {
        jQuery: {
            exports: 'jQuery'
        },
    },
});

// --------------------------------------------------------------------------
//    MAIN FUNCTION
// --------------------------------------------------------------------------

requirejs([
    'jQuery'
], function($) {
        $drawer = $('<div></div>')
        $('tr')
            .on('mouseenter', function() { $(this).addClass('active'); })
            .on('mouseleave', function(){ $(this).removeClass('active')})
            .on('click',function() {
                var $this = $(this);
                $drawer.insertAfter($this);
            });
    }
);