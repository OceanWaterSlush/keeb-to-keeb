<script lang="ts">
  export let key: string;
</script>

<div class="keycap">
  <span class="key">{key.toUpperCase()}</span>
  <div class="angle-shadow left-top top-section" />
  <div class="angle-shadow right-top top-section" />
  <div class="angle-shadow left-bottom bottom-section" />
  <div class="angle-shadow right-bottom bottom-section" />
</div>

<style>
  .keycap {
    display: flex;
    justify-content: center;

    position: relative;
    z-index: 50;

    width: 10rem;
    height: 10rem;

    overflow: hidden;

    background-color: #b7ad9b;

    border: 0.5rem solid #857e71;
    border-radius: 1.5rem;

    transition: 0.1s;
  }

  .keycap::before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;

    width: 90%;
    height: 90%;

    border: 0.5rem solid #d9ccbc;
    border-radius: 1rem;
  }

  .keycap:active {
    box-shadow: inset 0 -5rem 3.5rem #857e71;
  }

  .keycap .key {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 1rem;
    z-index: 100;

    width: 6rem;
    height: 6rem;

    font-size: 5rem;
    color: #009bd1;

    background-color: #eee0ce;
    border: 0.5rem solid #f6e5d6;
    border-radius: 1.5rem;

    box-shadow: 0 -5rem 5rem 1.5rem #f6e5d6, inset 0rem -0.4rem 1rem #baaf9e;

    transition: 0.1s;

    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    user-select: none;

    -khtml-user-select: none;
    -o-user-select: none;
  }

  .keycap:active .key {
    width: 6.5rem;
    height: 6.5rem;

    font-size: 4.5rem;
  }

  .keycap:active .key {
    width: 6.5rem;
    height: 6.5rem;

    font-size: 4.5rem;

    box-shadow: 0 -5rem 5rem 1.5rem #f6e5d6, inset 0rem 0.5rem 1rem #baaf9e;
  }

  .angle-shadow {
    position: absolute;
  }

  .angle-shadow.top-section {
    top: 1.5rem;

    width: 3.5rem;
    height: 0.25rem;

    background-color: #f6e5d6;
    box-shadow: 0 0 0.5rem #f6e5d6;
  }

  .angle-shadow.bottom-section {
    bottom: 0rem;

    border-right: 0.5rem solid transparent;
    border-bottom: 4.5rem solid #dfd2bf;
    border-left: 0.5rem solid transparent;
  }

  .angle-shadow.left-top {
    left: 0.25rem;
    transform: rotate(36deg);
  }

  .angle-shadow.right-top {
    right: 0.25rem;
    transform: rotate(-36deg);
  }

  .angle-shadow.left-bottom {
    left: 1.25rem;
    transform: rotate(30deg);
  }

  .angle-shadow.right-bottom {
    right: 1.25rem;
    transform: rotate(-30deg);
  }
</style>
