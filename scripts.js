



const todosApp = {  // initialising vue.js//
    data() {
        return {
            todos: [],
            newTodo: {
                done: false
            }
            
        }
    },
    methods: {
        addTodo: function() {
            if (this.newTodo.text) {
            this.todos.push(this.newTodo); // push is used to add to the related field
            this.newTodo = {
                done: false
            };
            localStorage.setItem("todos",JSON.stringify(this.todos)); // to save data in local storage
        } else {
            alert("To-do text is required");
        }
        },
        storeTodos() {
            localStorage.setItem("todos",JSON.stringify(this.todos)); // to update the list after clearing
            console.log("Updated"); // we update only when clicking on "Add" button
        }
    },
    
    
    created() {
        this.todos =localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
     },

     updated() {
     
     }



}

Vue.createApp(todosApp).mount('#app'); // app is the main id of the html file
