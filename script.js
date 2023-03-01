// Initialisation de l'application Vue.js
new Vue({
	el: '#tasks-list',
	data: {
		tasks: []
	},
	methods: {
		addTask: function() {
			// Récupération des valeurs des champs du formulaire
			var description = document.getElementById('description').value;
			var startDate = document.getElementById('start-date').value;
			var endDate = document.getElementById('end-date').value;
			var status = document.getElementById('status').value;
			var priority = document.getElementById('priority').value;
			// Création de l'objet tâche
			var task = {
				description: description,
				startDate: startDate,
				endDate: endDate,
				status: status,
				priority: priority
			};
			// Ajout de la tâche à la liste des tâches
			this.tasks.push(task);
			// Sauvegarde des données dans le local storage
			localStorage.setItem('tasks', JSON.stringify(this.tasks));
			// Réinitialisation du formulaire
			document.getElementById('task-form').reset();
		},
		removeTask: function(index) {
			// Suppression de la tâche de la liste des tâches
			this.tasks.splice(index, 1);
			// Sauvegarde des données dans le local storage
			localStorage.setItem('tasks', JSON.stringify(this.tasks));
		},
		getTasksByStatus: function(status) {
			// Filtrage des tâches par état
			return this.tasks.filter(function(task) {
				return task.status === status;
			});
		},
		getTasksByPriority: function(priority) {
			// Filtrage des tâches par priorité
			return this.tasks.filter(function(task) {
				return task.priority === priority;
			});
		},
		getTasksByStartDate: function() {
			// Tri des tâches par date de début
			return this.tasks.sort(function(task1, task2) {
				return new Date(task1.startDate) - new Date(task2.startDate);
			});
		},
		getTasksByEndDate: function() {
			// Tri des tâches par date de fin
			return this.tasks.sort(function(task1, task2) {
				return new Date(task1.endDate) - new Date(task2.endDate);
			});
		}
	},
	mounted: function() {
		// Récupération des données depuis le local storage
		var tasksData = localStorage.getItem('tasks');
		if (tasksData) {
			this.tasks = JSON.parse(tasksData);
		}
	}
});
