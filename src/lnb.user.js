// ==UserScript==
// @name        lnb
// @version     1.0.0
// @description LNB helper
// @author      carpusher
// @match       https://www.lnb.com.tw/*
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @icon        https://www.lnb.com.tw/favicon.ico
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    const loanContentSelector = '.mkt';
    waitForKeyElements(loanContentSelector, () => {
        const cellsToHighLight = [
            '申貸目的',
            '年收入',
            '財產擁有狀況',
            '債務收入比 ',
            '信用卡延遲資訊 ',
            '逾期、催收或呆帳資訊 ',
        ];
        $('.table-title').filter((i, div) => cellsToHighLight.includes(div.innerText)).parent().css('background-color', '#ffa000');
    });

    const placeOrderSelector = '.place-order';
    waitForKeyElements(placeOrderSelector, () => {
        $('.checkbox-lnb:checkbox').prop('checked', false); // sometimes click will uncheck someboxes
        $('.checkbox-lnb:checkbox').click();
    });
})();
