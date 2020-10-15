const taskManager = new TaskManager()
const renderer = new Renderer()

const initialize = async function () {
    console.log('initialize')
    await taskManager.getCompleteTask()
    await taskManager.getIncompleteTask()

    renderer.renderTasks(taskManager.completeTasks, '.comp')
    renderer.renderTasks(taskManager.incompleteTasks, '.not-comp')
    console.log('finish initialize')
}

const handleNewTask = async function (e) {
    let title = $('.title').val()
    let description = $('.description').val()

    if (title.length && description.length) {
        $('.description').val('')
        $('.title').val('')

        await taskManager.saveTask(title, description)
        renderer.renderTasks(taskManager.incompleteTasks, '.not-comp')
    }
}

const getId = function (element) {
    let p = element.closest( ".row" )
    let id = p.attr('id')
    console.log(id)
    p.fadeOut(function () { p.remove() })
    return id
}

const removeTask = async function () {
    const id = getId($(this))

    await taskManager.deleteTask(id)
}

const checkTask = async function () {
    const id = getId($(this))

    await taskManager.completeTask(id)
    renderer.renderTasks(taskManager.completeTasks, '.comp')
}

$('.btn').on('click', handleNewTask)
$('#container').on('click', '.fa-trash-alt', removeTask)
$('#container').on('click', '.fa-check', checkTask)

initialize()