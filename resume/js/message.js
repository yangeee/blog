!function () {
  var view = document.querySelector('section.message')
  var model = Model({resourceName: 'Message'})
  var controller = new Controller(view,model)
  controller.init(view,model)
}.call()
