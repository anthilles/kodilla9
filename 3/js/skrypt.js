/* 
Data to lista marek samochodów sprzedawanych w latach 40 w USA.
*/
var data = {"Makes":[{"make_id":"aston-martin","make_display":"Aston Martin","make_is_common":"1","make_country":"UK"},{"make_id":"bentley","make_display":"Bentley","make_is_common":"1","make_country":"UK"},{"make_id":"bugatti","make_display":"Bugatti","make_is_common":"1","make_country":"Italy"},{"make_id":"buick","make_display":"Buick","make_is_common":"1","make_country":"USA"},{"make_id":"cadillac","make_display":"Cadillac","make_is_common":"1","make_country":"USA"},{"make_id":"chrysler","make_display":"Chrysler","make_is_common":"1","make_country":"USA"},{"make_id":"ford","make_display":"Ford","make_is_common":"1","make_country":"USA"},{"make_id":"jaguar","make_display":"Jaguar","make_is_common":"1","make_country":"UK"},{"make_id":"lincoln","make_display":"Lincoln","make_is_common":"1","make_country":"USA"},{"make_id":"maserati","make_display":"Maserati","make_is_common":"1","make_country":"Italy"},{"make_id":"maybach","make_display":"Maybach","make_is_common":"1","make_country":"Germany"},{"make_id":"mercedes-benz","make_display":"Mercedes-Benz","make_is_common":"1","make_country":"Germany"},{"make_id":"oldsmobile","make_display":"Oldsmobile","make_is_common":"1","make_country":"USA"},{"make_id":"packard","make_display":"Packard","make_is_common":"1","make_country":"USA"},{"make_id":"volvo","make_display":"Volvo","make_is_common":"1","make_country":"Sweden"},{"make_id":"willys-overland","make_display":"Willys-Overland","make_is_common":"1","make_country":"USA"}]};

// Nie wiem ja odszedłem od map i filter na rzecz własnego kombinowanego sposobu - tak się zakopałem, że już później nie było odwrotu...
// Przynajmniej .reduce użyłem... 
// W każdym razie wynik jest ... chociaż wiem już, że tam byłoby odrobinę mniej kodu
// Chciałem jeszcze przeprowadzić refaktoryzację ale już nie dam rady

var dane = data.Makes[0].make_id;
var range = data.Makes.length;

for (var i = 0; i < range; i++) {
    if (data.Makes[i].make_country == "USA"){
        var carname =new Array(data.Makes[i].make_id);
        var total = carname.reduce(function(sum, word) {
            return word.length;
        }, 0);
        console.log(carname,total);
        }
}

//zad 1 Za pomocą console.log wyświetl sobie obiekt data. Sprawdź, w którym atrybucie ukryte są samochody (widać to też po powyższym JSONIE) i przypisz go do zmiennej makes  
//zad 2 poszukaj w google infromacji o funkcjach .map, .filter i .reduce. Za pomocą map wypisz atrybut make_display kazdeggo samochodu
//zad 3 Za pomocą .filter wypisz tylko te samochody, które pochodzą z USA
//zad 4 Za pomocą funkcji reduce oblicz sumę znaków nazwy każdego z modelu i przypisz sumę do zmiennej all
