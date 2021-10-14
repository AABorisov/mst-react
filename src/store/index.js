import {getSnapshot, types} from "mobx-state-tree"

const Todo = types.model('TodoModel', {
    id: types.identifierNumber,
    title: "",
    done: false
})
    .preProcessSnapshot(snapshot => ({
        id: snapshot.id,
        title: snapshot.title + ' _',
        done: snapshot.done === "true" ? true : snapshot.done === "false" ? false : snapshot.done,
    }))
    .actions(self => ({
        afterCreate() {
            console.log("Created a new todo!", getSnapshot(self))
        }
    }))
    .actions(self => ({
        setTitle(title) {
            self.title = title;
        },
        toggle() {
            self.done = !self.done;
        }
    }))

const Todos = types.model('TodosModel', {
    selectedTodo: types.maybe(types.reference(Todo)),
    todos: types.array(Todo)
})
    .actions(self => ({
        addTodo(title) {
            self.todos.unshift({
                id: Date.now(),
                title: title,
                done: false,
            })
        }
    }))

const defaultTodos = {
    todos: []
}

const RootStore = types.model({
    todos: types.optional(Todos, defaultTodos),
})

const appStore = RootStore.create();

export default appStore;