var example;
example = "Create string with following value TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";
var split_array = example.split('.');
var org = "";
split_array.forEach(function (stat) {
    if (stat.length != 0) {
        stat = stat.trim();
        var first = stat.charAt(0).toLocaleUpperCase();
        org += first + stat.substr(1, stat.length - 1) + ". ";
    }
});
console.log(org.trim());
var hash_char = {};
var hash_string = {};
var capitize = "";
var split_chars = example.split(" ");
split_chars.forEach(function (ex_char) {
    for (var i = 0; i < ex_char.length; i++) {
        hash_char[ex_char[i]] = hash_char[ex_char[i]] ? hash_char[ex_char[i]] + 1 : 1;
    }
    hash_string[ex_char] = hash_string[ex_char] ? hash_string[ex_char] + 1 : 1;
    capitize += ex_char.charAt(0).toLocaleUpperCase() + ex_char.substr(1, ex_char.length - 1) + " ";
});
console.log(JSON.stringify(hash_char));
console.log(JSON.stringify(hash_string));
console.log(capitize.trim());
