<script lang="ts">
  export let key: string;
</script>

<div class="keycap">{key}</div>

<style>
  .keycap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 40px;
    height: 40px;

    border: solid 1px black;
  }
</style>
