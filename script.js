// Création de l'application Vue.js
new Vue({
  el: "#app",
  data: {
    tasks: [],
    newTask: {
      description: "",
      startDate: "",
      endDate: "",
      status: "à faire",
      priority: "basse",
      color: "blue"
    },
    selectedFilter: "all",
    showData: false
  },
  created() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  },
  methods: {
    addTask: function() {
      let color;
      if (this.newTask.priority === "haute") {
        color = "red";
      } else if (this.newTask.priority === "moyenne") {
        color = "orange";
      } else if (this.newTask.priority === "basse") {
        color = "blue";
      }

      const newTask = {
        description: this.newTask.description,
        startDate: this.newTask.startDate,
        endDate: this.newTask.endDate,
        status: this.newTask.status,
        priority: this.newTask.priority,
        color: color
      };
      this.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.newTask.description = "";
      this.newTask.startDate = "";
      this.newTask.endDate = "";
      this.newTask.status = "à faire";
      this.newTask.priority = "basse";
      this.newTask.color = "blue";
      const message = document.getElementById("message");
      message.style.display = "block";
      setTimeout(function() {
        message.style.display = "none";
      }, 3500);
    },
    removeTask: function(index) {
      // Suppression de la tâche correspondante
      this.tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    sortTasksByStartDate: function() {
      console.log(this.tasks)
      this.tasks.sort((a, b) => {
        return new Date(a.startDate) - new Date(b.startDate);
      });
      console.log(this.tasks);
    },
    sortTasksByEndDate: function() {
      console.log(this.tasks);
      this.tasks.sort((a, b) => {
        return new Date(a.endDate) - new Date(b.endDate);
      });
    },
    sortTasksByStatus: function() {
      console.log("sortTasksByStatus");
      this.tasks.sort((a, b) => {
        const statuses = ["à faire", "en cours", "terminé"];
        return statuses.indexOf(a.status) - statuses.indexOf(b.status);
      });
    },
    sortTasksByPriority: function() {
      console.log("sortTasksByPriority");
      this.tasks.sort((a, b) => {
        const priorities = ["haute", "moyenne", "basse"];
        return priorities.indexOf(a.priority) - priorities.indexOf(b.priority);
      });
    },
  },

});
