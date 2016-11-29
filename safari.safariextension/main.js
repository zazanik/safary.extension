var template = `    <style>
                        .compare_price_row ul:before,
                        .alerts_text_block:before {
                            background: url(${safari.extension.baseURI + 'img/mod_caret.png'}) no-repeat !important;
                        }

                        .main_wrapper .search_form_row .search_ico{
                          background: url(${safari.extension.baseURI + 'img/loop_search.png'}) no-repeat !important;
                        }

                        .main_wrapper .close_bar_ico{
                          background: url(${safari.extension.baseURI + 'img/close_bar_ico.png'}) no-repeat !important;
                        }
                    </style>

                    <div class="main_wrapper">
                        <div class="main_row">

                            <div class="logo_row">
                                <a href="/"><img src="${safari.extension.baseURI + 'img/logo.png'}"></a>
                            </div>

                            <div class="deal_row">
                                <p>Lower prices found on <span class="deal_lower_compa">Amazon</span> - Saved <span class="deal_lower_pric">10 € !</span></p>
                                <div class="compare_price_row">
                                    <a class="compare_price_btn" id="toggle_prices">Compare prices <div class="caret"></div></a>
                                    <ul class="pricelist_ul">
                                        <li>
                                            <div class="comp_price"><span>120€</span></div>
                                            <div class="comp_logo"><img src="${safari.extension.baseURI + 'img/logos/amazonl_logo.png'}"></div>
                                            <a class="go_now">Go now >></a>
                                        </li>
                                        <li>
                                            <div class="comp_price"><span>150€</span></div>
                                            <div class="comp_logo"><img src="${safari.extension.baseURI + 'img/logos/LBC_logo.png'}"></div>
                                            <a class="go_now">Go now >></a>
                                        </li>
                                        <li>
                                            <div class="comp_price more_price"><span>160€</span></div>
                                            <div class="comp_logo"><img src="${safari.extension.baseURI + 'img/logos/priceminister_logo.png'}"></div>
                                            <a class="go_now">Go now >></a>
                                        </li>
                                        <li>
                                            <div class="comp_price more_price"><span>160€</span></div>
                                            <div class="comp_logo"><img src="${safari.extension.baseURI + 'img/logos/ebay_logo.png'}"></div>
                                            <a class="go_now">Go now >></a>
                                        </li>
                                    </ul>
                                </div>
                                <form class="search_form_row">
                                    <input>
                                    <div class="search_btns_row">
                                        <button type="submit" class="search_ico" style="background: url(${safari.extension.baseURI + 'img/loop_search.png'})"></button>
                                        <button class="clear_inp">x</button>
                                    </div>
                                </form>
                            </div>

                            <div class="alerts_row">
                                <a class="toggle_alerts" id="toggle_alerst">Alerts <div class="caret"></div></a>
                                <form class="alerts_text_block">
                                    <div class="alerts_text_top_r">
                                        <p>Do you want to receive notifications when a <span class="text_from_search">SEB AL801000 ACTYFRY ORIGINAL KG</span> is available at a price lower than <input class="alerts_inp" maxlength="4"> € ?</p>
                                        <input class="alerts_email"  onfocus="this.placeholder = ''" onblur="this.placeholder = 'E-mail adress'" placeholder="E-mail adress">
                                        <button class="alerts_go_btn">Go >></button>
                                    </div>
                                    <p class="alerts_footer">Manage your alerts and more by <a href="#">creating an account</a></p>
                                </form>
                            </div>

                            <div class="share_row">
                                <span>Share</span>
                                <ul>
                                    <li><a><img src="${safari.extension.baseURI + 'img/socials/mail_icon.png'}"></a></li>
                                    <li><a><img src="${safari.extension.baseURI + 'img/socials/twitter_icon.png'}"></a></li>
                                    <li><a><img src="${safari.extension.baseURI + 'img/socials/facebook_icon.png'}"></a></li>
                                </ul>
                            </div>

                            <div class="close_bar_ico" style="background: url(${safari.extension.baseURI + 'img/close_bar_ico.png'})"></div>

                        </div>
                    </div>`

        $(document).ready(function () {

            $('body').first().prepend(template);

            $('html').addClass('ext-active');

            $(window).click(function() {
                $('.open_prices').removeClass('open_prices');
                $('.alerts_text_block').removeClass('alerts_text_block_open');
            });
            $('#toggle_prices').click(function(event){
                event.stopPropagation();
            });
            $('.pricelist_ul').click(function(event){
                event.stopPropagation();
            });
            $('#toggle_alerst').click(function(event){
                event.stopPropagation();
            });
            $('.alerts_text_block').click(function(event){
                event.stopPropagation();
            });
            $("#toggle_prices").click(function() {
                $(".compare_price_row ul").toggleClass( "open_prices" );
                $('.alerts_text_block').removeClass('alerts_text_block_open');
            });
            $("#toggle_alerst").click(function() {
                $(".alerts_text_block").toggleClass( "alerts_text_block_open" );
                $('.open_prices').removeClass('open_prices');
            });
            $('.close_bar_ico').click(function() {
                $('.main_wrapper').hide();
                $('html').removeClass('ext-active');
            });
        });
