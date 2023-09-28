<script lang="ts">
  export let key: string;
  export let isActive: boolean;
</script>

<div class={isActive ? "keycap keycap-active" : "keycap"}>
  <span class="keycap-lining" />
  <span class={isActive ? "key key-active" : "key"}>
    {key.toUpperCase()}
  </span>
  <div class="angle-shadow left-top top-section" />
  <div class="angle-shadow right-top top-section" />
  <div class="angle-shadow left-bottom bottom-section" />
  <div class="angle-shadow right-bottom bottom-section" />
</div>

<style>
  .keycap-active {
    box-shadow: inset 0 -2.5rem 1.75rem #857e71;

    transform: translateY(4px);
  }

  .key-active {
    width: 3.25rem;
    height: 3.25rem;

    font-size: 2.25rem;

    box-shadow: 0 -2.5rem 2.5rem 0.75rem #f6e5d6,
      inset 0rem 0.25rem 0.5rem #baaf9e;

    transform: translateY(4px);
  }

  .keycap {
    display: flex;
    justify-content: center;

    position: relative;
    z-index: 50;

    width: 5rem;
    height: 5rem;

    overflow: hidden;

    background-color: #b7ad9b;

    border: 0.25rem solid #857e71;
    border-radius: 0.75rem;

    transition: 0.1s;
  }

  .key {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 0.5rem;
    z-index: 100;

    width: 3rem;
    height: 3rem;

    font-size: 2.5rem;
    color: #009bd1;

    background-color: #eee0ce;
    border: 0.25rem solid #f6e5d6;
    border-radius: 0.75rem;

    box-shadow: 0 -2.5rem 2.5rem 0.75rem #f6e5d6,
      inset 0rem -0.2rem 0.5rem #baaf9e;

    transition: 0.1s;

    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    user-select: none;

    -khtml-user-select: none;
    -o-user-select: none;
  }

  .keycap-lining {
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;

    width: 90%;
    height: 90%;

    border: 0.25rem solid #d9ccbc;
    border-radius: 0.5rem;
  }

  .angle-shadow {
    position: absolute;
  }

  .angle-shadow.top-section {
    top: 0.75rem;

    width: 1.75rem;
    height: 0.125rem;

    background-color: #f6e5d6;
    box-shadow: 0 0 0.25rem #f6e5d6;
  }

  .angle-shadow.bottom-section {
    bottom: 0rem;

    border-right: 0.25rem solid transparent;
    border-bottom: 2.25rem solid #dfd2bf;
    border-left: 0.25rem solid transparent;
  }

  .angle-shadow.left-top {
    left: 0.125rem;
    transform: rotate(36deg);
  }

  .angle-shadow.right-top {
    right: 0.125rem;
    transform: rotate(-36deg);
  }

  .angle-shadow.left-bottom {
    left: 0.625rem;
    transform: rotate(30deg);
  }

  .angle-shadow.right-bottom {
    right: 0.625rem;
    transform: rotate(-30deg);
  }
</style>
