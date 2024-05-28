$(function (e) {
    "use strict";
    $(".date-inputmask").inputmask("dd/mm/yyyy"),
        $(".phone-mask").inputmask("(99) 9999-9999"),
        $(".phone-inputmask").inputmask("(999) 999-9999"),
        $(".international-inputmask").inputmask("+9(999)999-9999"),
        $(".xphone-inputmask").inputmask("(999) 999-9999 / x999999"),
        $(".purchase-inputmask").inputmask("aaaa 9999-****"),
        $(".cc-inputmask").inputmask("9999 9999 9999 9999"),
        $(".ssn-inputmask").inputmask("999-99-9999"),
        $(".isbn-inputmask").inputmask("999-99-999-9999-9"),
        $(".numeric").inputmask('Regex', {regex: "^[0-9]{1,3}(\\.\\d{1,2})?$"}),
        $(".zip_code").inputmask('Regex', {regex: "^[0-9]{1,6}(\\.\\d{1,2})?$"}),
        $(".percentage-inputmask").inputmask("99%"),
        $(".decimal-inputmask").inputmask({
            alias: "decimal"
            , radixPoint: "."
        }),

        $(".mail-mask").inputmask({
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            onBeforePaste: function (e, t) {
                return (e = e.toLowerCase()).replace("mailto:", "")
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality: 1, casing: "lower"
                }, "-": {
                    validator: "[0-9A-Za-z-]",
                    cardinality: 1, casing: "lower"
                }
            },
            onUnMask: function (e, t, n) {
                return e
            },
            inputmode: "email"
        });

    $(".email-inputmask").inputmask({
        mask: "*{1,30}[.*{1,30}][.*{1,30}][.*{1,30}]@*{1,30}[*{2,6}][*{1,2}].*{1,}[.*{2,6}][.*{1,2}]"
        , greedy: !1
        , onBeforePaste: function (n, a) {
            return (e = e.toLowerCase()).replace("mailto:", "")
        }
        , definitions: {
            "*": {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~/-]"
                , cardinality: 1
                , casing: "lower"
            }
        }
    })
});