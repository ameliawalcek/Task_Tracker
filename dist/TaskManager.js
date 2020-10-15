class TaskManager {
    constructor() {
        this.completeTasks = []
        this.incompleteTasks = []
    }

    async getCompleteTask() {
        console.log('fetching')
        const data = await $.get('/tasks/complete')
        this.completeTasks = data
        console.log('fetched initial data')
    }

    async getIncompleteTask() {
        console.log('fetching')
        const data = await $.get('/tasks/incomplete')
        this.incompleteTasks = data
        console.log('fetched initial data')
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