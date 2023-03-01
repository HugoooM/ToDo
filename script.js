// Création de l'application Vue.js
new Vue({
    el: '#app',
    data: {
      tasks: [],
      description: '',
      startDate: '',
      endDate: '',
      status: 'À faire',
      priority: 'Basse',
    },
    methods: {
      addTask: function() {
        const newTask = {
          description: this.description,
          startDate: this.startDate,
          endDate: this.endDate,
          status: this.status,
          priority: this.priority,
        };

        this.tasks.push(newTask);
        this.description = '';
        this.startDate = '';
        this.endDate = '';
        this.status = 'À faire';
        this.priority = 'Basse';

        const message = document.getElementById('message');
        message.style.display = 'block';
        setTimeout(function() {
          message.style.display = 'none';
        }, 500);
      },
      removeTask: function(index) {
        // Suppression de la tâche correspondante
        this.tasks.splice(index, 1);
      },
    },
});
  