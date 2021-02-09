<script>
  export let className = "";
  export let classNames = [];
  export let isCenter = false;


  if (className) classNames=[...classNames,className];
  if (isCenter) classNames=[...classNames,"center-content"]
</script>

<section class={["section" ,...classNames].join(' ')}>
  <slot />
</section>
