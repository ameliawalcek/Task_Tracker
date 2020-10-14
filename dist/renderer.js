class Renderer {
    renderTasks = function (text, div) {
        $(div).empty()

        text.forEach(t => {
            let container = $(`<div id='${t._id}' class='row'></div>`)

            let textBox = $(`<div class="col s10 m10 l10"></div>`)
            let title = $(`<div class='title-div'></div>`).text(t.title)
            let description = $(`<div class='description-div'></div>`).text(t.description)
            textBox.append(title, description)

            let iconBox = $(`<div class="col2 s2 m2 l2 icon-container"></div>`)
            let check = $(`<i class='fas fa-check'></i>`)
            let gap = $(`<span>&nbsp&nbsp&nbsp&nbsp</span>`)
            let remove = $(`<i class='fas fa-trash-alt'></i>`)
            if (t.complete) check = $('')
            iconBox.append(check, gap, remove)

            container.append(textBox, iconBox)
            $(div).prepend(container)
        })
    }
}