const Todo = new Vue({
    el: "#Todo",
    data() {
        return {
            userPlan: '',
            userStart: '',
            userEnd: '',
            editePlan: '',
            editeStart: '',
            editeEnd: '',
            error: [],
            isError: '',
            allTodo: [{ plan: "", start: "", end: "", isComplete: false, isEdite: false, }],
        }
    },
    methods: {
        addPlan() {
            this.isError = false;
            this.error = [];
            if (this.userPlan == "") {
                this.isError = true;
                this.error.push("You have not Plan")
            }

            if (this.userStart == "") {
                this.isError = true;
                this.error.push("You have not Start time")

            }

            if (this.userEnd == "") {
                this.isError = true;
                this.error.push("You have not End time")
            }

            if (this.userPlan != "" && this.userEnd != "" && this.userStart != "") {
                Swal.fire({
                    title: 'Good!',
                    text: 'Youre Plan is ready...',
                    icon: 'success',
                    timer: 3000,
                    button: false,
                })
                this.isError = false;
                this.allTodo.push({ plan: this.userPlan, start: this.userStart, end: this.userEnd, isComplete: false, isEdite: false })
            }

        },
        deltePlan(index) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.allTodo.splice(index, 1);
                        swal("Poof! Your Plan file has been deleted!", {
                            icon: "success",
                        });
                    } else {
                        swal("Your Plan is safe!");
                    }
                });
        },
        compelte(index) {
            this.allTodo[index].isComplete = !this.allTodo[index].isComplete
        },
        editePlans(index) {
            this.allTodo[index].isEdite = !this.allTodo[index].isEdite;
        },
        completeEdite(index) {
            this.allTodo[index].plan = this.editePlan;
            this.allTodo[index].start = this.editeStart;
            this.allTodo[index].end = this.editeEnd
            this.allTodo[index].isEdite = !this.allTodo[index].isEdite;
        }
    },
})