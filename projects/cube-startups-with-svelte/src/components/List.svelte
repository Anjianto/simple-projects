<script>
  export let item = null;
  export let className = "";
</script>

<li
  class={`${item?.is_checked && 'is-checked'}${className && ' '}${className}`}>
  {item?.title ?? 'Name'}
</li>
