<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <TodosItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle="emit('toggle', todo)" />
    </ul>
  </section>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import TodosItem from "@/components/TodosItem.vue";
import type Todo from "@/model/todo";

defineProps<{ todos: Todo[] }>();
const emit = defineEmits<{
  (e: "toggle", todo: Todo): void;
}>();
</script>
