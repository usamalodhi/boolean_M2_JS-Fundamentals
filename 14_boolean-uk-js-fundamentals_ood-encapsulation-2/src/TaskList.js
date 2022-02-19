class TaskList {

  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  getOverdueTasks() {
    const today = new Date()
    const overdueTasks = []
    for (const task of this.tasks) {
      //it's not been completed
      if (task.status === "incomplete") {
        //if it has a due date
        if (task.dateDue !== null) {
          //if the due date has passed then the task is overdue
          if (today > task.dateDue) {
            overdueTasks.push(task)
          }
        }
      }
    }

    return overdueTasks
  }
}

module.exports = TaskList