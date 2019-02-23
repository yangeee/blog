window.Controller = function () {
  return {
    view: null,
    messageList: null,
    model: null,
    init: function (view, model) {
      this.view = view
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model = model
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function () {
      this.model.fetch()
        .then(
          function (messages) {
            let array = messages.map((item) => item.attributes)
            array.forEach((item) => {
              let li = document.createElement('li')
              li.innerText = `${item.name}: ${item.content}`
              let messageList = document.querySelector('#messageList')
              messageList.appendChild(li); 
            })
          },
          function(error){
            console.log('失败'+error)
          }
        )
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function () {
      let myForm = this.form
      var content = myForm.querySelector('input[name=content]').value
      var name = myForm.querySelector('input[name=name]').value
      if(content === '' || name === '') {
        return alert('姓名和内容都不能为空哦') 
      }
      this.model.save({ 'name': name, 'content': content }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li);
        myForm.querySelector('input[name=content]').value = ''
      })
    }
  }
}

