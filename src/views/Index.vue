<script setup></script>

<template>
  <div class="flex justify-center">
    <button class="btn btn-primary" onclick="my_modal_2.showModal()">modal</button>
    <dialog id="my_modal_2" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style lang="scss" scoped></style>
