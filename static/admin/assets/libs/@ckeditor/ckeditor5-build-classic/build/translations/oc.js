!(function (n) {
  const a = (n.oc = n.oc || {});
  (a.dictionary = Object.assign(a.dictionary || {}, {
    Bold: "Gras",
    Cancel: "Anullar",
    Italic: "Italica",
    Save: "Enregistrar",
  })),
    (a.getPluralForm = function (n) {
      return n > 1;
    });
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
