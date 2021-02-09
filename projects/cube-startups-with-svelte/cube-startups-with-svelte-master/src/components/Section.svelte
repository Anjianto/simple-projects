<script>
  export let className = "";
  export let classNames = [];
  export let isCenter = false;

  if (className) classNames.push(className);
  if (isCenter) classNames.push("center-content");
</script>

<section class={`section ${classNames.join(' ')}`}>
  <slot />
</section>
