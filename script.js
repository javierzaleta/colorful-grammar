const wordpos = new WordPOS({
  dictPath: 'https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict'
})

$(document).ready(function() {
  function updateBackground() {
    let sentence = $('#sentence').val()

    wordpos.getPOS(sentence).then(function(types) {
      var color =
        types.verbs.length +
        types.adverbs.length +
        types.nouns.length +
        types.adjectives.length +
        types.rest.length

      $('body').css('background-color', `hsl(${color}, 100%, 50%)`)
    })
  }
  updateBackground()
  $('#sentence').on('keydown', updateBackground)
})
