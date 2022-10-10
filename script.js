const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM with Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function () {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false

            });
            this.nuevaTarea = '';
            this.enviarBD();
        },
        editarTarea: function (index) {
            this.tareas[index].estado = true;
            this.enviarBD();
        },
        eliminar: function (index) {
            this.tareas.splice(index, 1);
            this.enviarBD();
        },
        enviarBD: function () {
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }

    },
    created: function () {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosDB === null) {
            
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    },
});