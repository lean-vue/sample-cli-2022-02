<template>
  <input
    v-model.trim="title"
    @keyup.enter="handleEnter"
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus
  />
</template>
<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits<{ (e: "create", title: string): void }>();
const title = ref("");

const handleEnter = () => {
  if (title.value.length > 0) {
    emit("create", title.value);
  }
  title.value = "";
};
</script>
