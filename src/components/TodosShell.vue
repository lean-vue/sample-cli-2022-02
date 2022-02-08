<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodosInput @create="handleCreate" />
    </header>
    <TodosMain :todos="todos" @toggle="handleToggle" />
    <TodosActionBar :todos="todos" />
  </section>
</template>
<script lang="ts" setup>
import TodosInput from "@/components/TodosInput.vue";
import TodosMain from "@/components/TodosMain.vue";
import TodosActionBar from "@/components/TodosActionBar.vue";
import { onMounted, reactive } from "vue";
import type Todo from "@/model/todo";
import { getAll, createTodo, updateTodo } from "@/api/local-persistence";

// Reactive State
const todos = reactive<Todo[]>([]);

const handleCreate = async (title: string) => {
  const todo = await createTodo(title);
  todos.push(todo);
};
const handleToggle = async (todo: Todo) => {
  const updated = await updateTodo(todo.id, { completed: !todo.completed });
  const ix = todos.findIndex((t) => t.id === todo.id);
  todos[ix] = updated;
};

onMounted(async () => {
  const data = await getAll();
  todos.push(...data);
});
</script>
