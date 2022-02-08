<template>
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"
      ><strong>{{ activeCount }}</strong> item left</span
    >
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button v-if="hasCompleted" class="clear-completed">Clear completed</button>
  </footer>
</template>
<script setup lang="ts">
import type Todo from "@/model/todo";
import { computed, defineProps } from "vue";

const props = defineProps<{
  todos: Todo[];
}>();

const activeCount = computed(() => {
  const { todos } = props;
  return todos.reduce((count, todo) => (todo.completed ? count : count + 1), 0);
});

const hasCompleted = computed(() => {
  const { todos } = props;
  return todos.some((t) => t.completed);
});
</script>
