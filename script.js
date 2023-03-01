// Création de l'application Vue.js
new Vue({
    el: '#app',
    data: {
      tasks: [],
      newTask: {
        description: '',
        startDate: '',
        endDate: '',
        status: 'à faire',
        priority: 'basse',
      },
    },
    
    methods: {
      addTask: function() {
        const newTask = {
          description: this.newTask.description,
          startDate: this.newTask.startDate,
          endDate: this.newTask.endDate,
          status: this.newTask.status,
          priority: this.newTask.priority,
        };
        this.tasks.push(newTask);

        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        this.newTask.description = '';
        this.newTask.startDate = '';
        this.newTask.endDate = '';
        this.newTask.status = 'à faire';
        this.newTask.priority = 'basse';      

        const message = document.getElementById('message');
        message.style.display = 'block';
        setTimeout(function() {
          message.style.display = 'none';
        }, 3500);
      },
      removeTask: function(index) {
        // Suppression de la tâche correspondante
        this.tasks.splice(index, 1);
      },
    },
});
  