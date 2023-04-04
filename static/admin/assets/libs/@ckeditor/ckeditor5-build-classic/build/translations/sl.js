!(function (e) {
  const i = (e.sl = e.sl || {});
  (i.dictionary = Object.assign(i.dictionary || {}, {
    "%0 of %1": "",
    Aquamarine: "Akvamarin",
    Black: "Črna",
    "Block quote": "Blokiraj citat",
    Blue: "Modra",
    Bold: "Krepko",
    Cancel: "Prekliči",
    "Cannot upload file:": "Ni možno naložiti datoteke:",
    "Choose heading": "Izberi naslov",
    "Could not insert image at the current position.":
      "Slike ni mogoče vstaviti na trenutni položaj.",
    "Could not obtain resized image URL.":
      "Ne morem pridobiti spremenjenega URL-ja slike.",
    "Dim grey": "Temno siva",
    "Dropdown toolbar": "",
    "Edit block": "",
    "Editor toolbar": "",
    Green: "Zelena",
    Grey: "Siva",
    Heading: "Naslov",
    "Heading 1": "Naslov 1",
    "Heading 2": "Naslov 2",
    "Heading 3": "Naslov 3",
    "Heading 4": "Naslov 4",
    "Heading 5": "Naslov 5",
    "Heading 6": "Naslov 6",
    "Insert image or file": "Vstavi sliko ali datoteko",
    "Inserting image failed": "Vstavljanje slike ni uspelo",
    Italic: "Poševno",
    "Light blue": "Svetlo modra",
    "Light green": "Svetlo zelena",
    "Light grey": "Svetlo siva",
    Next: "",
    Orange: "Oranžna",
    Paragraph: "Odstavek",
    Previous: "",
    Purple: "Vijolična",
    Red: "Rdeča",
    "Rich Text Editor": "",
    "Rich Text Editor, %0": "",
    Save: "Shrani",
    "Selecting resized image failed": "Izbira spremenjene slike ni uspela",
    "Show more items": "",
    Turquoise: "Turkizna",
    White: "Bela",
    Yellow: "Rumena",
  })),
    (i.getPluralForm = function (e) {
      return e % 100 == 1
        ? 0
        : e % 100 == 2
        ? 1
        : e % 100 == 3 || e % 100 == 4
        ? 2
        : 3;
    });
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
