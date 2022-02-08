<template>
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" @change="emit('toggle')" :checked="todo.completed" />
      <label>{{ todo.title }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

import type Todo from "@/model/todo";

const { todo } = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: "toggle"): void;
}>();
</script>
