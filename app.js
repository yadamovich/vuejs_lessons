new Vue({
    el: "#app",
    data: {
        name: 'Yury',
        job: 'Back-end developer'
    },
    methods: {
        greet: function() {
            return 'Hello me name is ' + this.name;
        }
    }
})