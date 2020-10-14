class TaskManager {
    constructor() {
        this.completeTasks = []
        this.incompleteTasks = []
    }

    async getCompleteTask() {
        const data = await $.get('/tasks/complete')
        this.completeTasks = data
    }

    async getIncompleteTask() {
        const data = await $.get('/tasks/incomplete')
        this.incompleteTasks = data
    }

    async saveTask(title, description) {
        let newTask = await $.post('/task', { title, description })
        this.incompleteTasks.push(newTask)
    }

    async completeTask(id) {
        const updatedTask =
            await $.ajax({
                url: '/task',
                type: 'PUT',
                data: { id }
            })
        updatedTask.complete = true
        this.completeTasks.push(updatedTask)
    }

    async deleteTask(id) {
        await $.ajax({
            url: `/task/${id}`,
            method: 'DELETE'
        })
        return
    }
}